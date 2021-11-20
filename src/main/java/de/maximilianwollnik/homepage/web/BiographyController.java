package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.service.BiographyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The type Biography controller.
 */
@RestController
public class BiographyController {
    private static final Logger logger = LoggerFactory.getLogger(BiographyController.class);
    private final BiographyService biographyService;

    /**
     * Instantiates a new Biography controller.
     *
     * @param biographyService the biography service
     */
    @Autowired
    public BiographyController(BiographyService biographyService) {
        this.biographyService = biographyService;
    }

    /**
     * Biographies list.
     *
     * @return the list
     */
    @RequestMapping(value="/api/biography", method= RequestMethod.GET)
    public List<Biography> biographies() {
        logger.info(">> biographies()");
        List<Biography> result = biographyService.getBiographies();
        logger.debug("* biographies() - result='{}'", result);
        logger.info("<< biographies() returns");
        return result;
    }
}
