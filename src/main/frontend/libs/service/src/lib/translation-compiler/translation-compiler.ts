import { TranslateCompiler } from "@ngx-translate/core";

export class TranslationCompiler implements TranslateCompiler {
    /**
     * This function is needed to implement the interface, but doesn't
     * actually seem to be used anywhere
     *
     * @param value The translation value
     * @param lang The current language
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    public compile(value: string, lang: string): string | Function {
      return value;
    }
  
    /**
     * Look at every translation and pre-translate any nested translation keys within them
     *
     * @param translations All of the translations for the app to be compiled
     * @param lang The current language
     */
    public compileTranslations(translations: any, lang: string): any {
      for (const key in translations) {
        // eslint-disable-next-line no-prototype-builtins
        if (translations.hasOwnProperty(key)) {
          translations[key] = this.translateNestedTranslation(translations[key], translations);
        }
      }
  
      return translations;
    }
  
    /**
     * Use a regex to search for and replace translations inside translations
     * with their translated value
     *
     * @param value The translation value
     * @param translations All of the translations for the app
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    private translateNestedTranslation(value: string, translations: Object): string {
      const searchRegex  = /{{\s([A-Z_:]*)\s?}}/g;
      const replaceRegex = /({{\s?[A-Z_:]*\s?}})/g;
  
      const matches = searchRegex.exec(value);
      if (matches && matches.length > 0) {
        const searchKey = matches[1];
  
        // eslint-disable-next-line no-prototype-builtins
        if (translations.hasOwnProperty(searchKey)) {
          // Replace the full translate syntax with the translated value
          value = value.replace(replaceRegex, (translations as any)[searchKey]);
        } else {
          // If we can't find the value, display only the missing key instead of the full translate syntax
          value = value.replace(replaceRegex, searchKey);
          console.error(`Error: Unable to find translation '${searchKey}'!`)
        }
      }
  
      return value;
    }
  }