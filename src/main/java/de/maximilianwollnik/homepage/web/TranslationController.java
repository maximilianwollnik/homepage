package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.service.TranslationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * The type Translation controller.
 */
@RestController
public class TranslationController {
    private static final Logger logger = LoggerFactory.getLogger(TranslationController.class);
    private final TranslationService translationService;

    /**
     * Instantiates a new Translation controller.
     *
     * @param translationService the translation service
     */
    @Autowired
    public TranslationController(TranslationService translationService) {
        this.translationService = translationService;
    }

    /**
     * Translations map.
     *
     * @param language the language
     * @return the map
     */
    @RequestMapping(value="/api/translation/{language}", method= RequestMethod.GET)
    public Map<String, Object> translations(@PathVariable String language) {
        logger.info(">> translations({})", language);
        Map<String, Object> result = translationService.getTranslations(language);
        logger.debug("* translations() - result='{}'", result);
        logger.info("<< translations() returns");
        return result;
    }
}
