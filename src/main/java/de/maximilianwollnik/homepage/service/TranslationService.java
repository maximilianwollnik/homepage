package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Translation;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * The type Translation service.
 */
@Service
public class TranslationService {
    private static final Logger logger = LoggerFactory.getLogger(TranslationService.class);
    private final String DEFAULT_RESULT = "";
    private final TranslationRepository translationRepository;
    private final String LINK_PRE = "{{ ";
    private final String LINK_POST = " }}";
    Map<String, Object> allTranslations;

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
        logger.info(">> getTranslation({}, {})", language, key);
        String result = DEFAULT_RESULT;

        if (language != null && !language.isEmpty() && key != null && !key.isEmpty()) {
            Translation translation = translationRepository.findByKey(key);
            result = returnFinalValue(language, translation);
        }

        return result;
    }

    private String returnFinalValue(String language, Translation translation) {
        logger.debug(">> returnFinalValue({}, {})", language, translation);
        String result = DEFAULT_RESULT;
        if (translation != null) {
            if ("de".equals(language)) {
                result = translation.getGerman();
            } else if ("en".equals(language)) {
                result = translation.getEnglish();
            }
        }
        if (result == null) {
            result = DEFAULT_RESULT;
        }
        logger.debug("<< returnFinalValue() returns '{}'", result);
        return result;
    }

    /**
     * Gets translations.
     *
     * @param language the language
     * @return the translations
     */
    public Map<String, Object> getTranslations(String language) {
        logger.info(">> getTranslations({})", language);

        allTranslations = new HashMap<>();

        for (Translation translation : translationRepository.findAll()) {
            String key = translation.getKey();
            String value = returnFinalValue(language, translation);
            generateNestedMap(allTranslations, key, value);
        }

        resolveLinks(allTranslations);

        logger.debug("* getTranslations() - result='{}'", allTranslations);
        logger.info("<< getTranslations() returns");
        return allTranslations;
    }

    @SuppressWarnings("unchecked")
    private void resolveLinks(Map<String, Object> map) {
        logger.info(">> resolveLinks({})", map);

        map.replaceAll((k,v) -> {
            if (v instanceof String) {
                String value = v.toString();
                while (value.contains(LINK_PRE)) {
                    String result = value.substring(0, value.indexOf(LINK_PRE));
                    String key = value.substring(value.indexOf(LINK_PRE) + LINK_PRE.length(), value.indexOf(LINK_POST));
                    result += allTranslations.get(key).toString();
                    result += value.substring(value.indexOf(LINK_POST) + LINK_POST.length());
                    value = result;
                }
                return value;
            } else {
                resolveLinks((Map<String, Object>)v);
                return v;
            }
        });

        logger.debug("<< resolveLinks() - returns '{}'", map);
    }

    @SuppressWarnings("unchecked")
    private void generateNestedMap(Map<String, Object> map, String path, String value) {
        int start = 0;
        for (int end; (end = path.indexOf('.', start)) != -1; start = end + 1) {
            map = (Map<String, Object>) map.computeIfAbsent(path.substring(start, end), k -> new HashMap<String, Object>() );
        }
        map.put(path.substring(start), value);
    }
}
