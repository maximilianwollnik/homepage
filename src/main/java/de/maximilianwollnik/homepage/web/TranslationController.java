package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.service.TranslationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * The type Translation controller.
 */
@RestController
public class TranslationController {
    @Autowired
    private TranslationService translationService;

    /**
     * Translations map.
     *
     * @param language the language
     * @return the map
     */
    @RequestMapping(value="/translation/{language}", method= RequestMethod.GET)
    public Map<String, String> translations(@PathVariable String language) {
        return translationService.getTranslations(language);
    }
}
