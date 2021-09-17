package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Translation;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * The type Translation service.
 */
@Service
public class TranslationService {
    private final String DEFAULT_RESULT = "";
    private final TranslationRepository translationRepository;

    /**
     * Instantiates a new Translation service.
     *
     * @param translationRepository the translation repository
     */
    @Autowired
    public TranslationService(TranslationRepository translationRepository) {
        this.translationRepository = translationRepository;
    }

    /**
     * Gets translation.
     *
     * @param language the language
     * @param key      the key
     * @return the translation
     */
    public String getTranslation(String language, String key) {
        String result = DEFAULT_RESULT;

        if (language != null && !language.isEmpty() && key != null && !key.isEmpty()) {
            Translation translation = translationRepository.findByKey(key);
            result = returnFinalValue(language, translation);
        }

        return result;
    }

    private String returnFinalValue(String language, Translation translation) {
        String result = DEFAULT_RESULT;
        if (translation != null) {
            switch (language) {
                case "de" : result = translation.getGerman(); break;
                case "en" : result = translation.getEnglish(); break;
            }
        }
        if (result == null) {
            result = DEFAULT_RESULT;
        }
        return result;
    }

    /**
     * Gets translations.
     *
     * @param language the language
     * @return the translations
     */
    public Map<String, String> getTranslations(String language) {
        Map<String, String> result = new HashMap<>();

        for (Translation translation : translationRepository.findAll()) {
            String key = translation.getKey();
            String value = returnFinalValue(language, translation);
            result.put(key, value);
        }

        return result;
    }
}
