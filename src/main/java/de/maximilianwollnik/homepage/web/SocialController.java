package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.model.Social;
import de.maximilianwollnik.homepage.service.SocialService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The type Social controller.
 */
@RestController
public class SocialController {
    private static final Logger logger = LoggerFactory.getLogger(BiographyController.class);
    private final SocialService socialService;

    /**
     * Instantiates a new Social controller.
     *
     * @param socialService the social service
     */
    @Autowired
    public SocialController(SocialService socialService) {
        this.socialService = socialService;
    }

    /**
     * Socials list.
     *
     * @return the list
     */
    @RequestMapping(value = "/api/social", method = RequestMethod.GET)
    public List<Social> socials() {
        logger.info(">> socials()");
        List<Social> result = socialService.getSocials();
        logger.debug("* socials() - result='{}'", result);
        logger.info("<< socials() returns");
        return result;
    }
}
