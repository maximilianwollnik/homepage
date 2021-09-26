package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.Social;
import de.maximilianwollnik.homepage.repository.BiographyRepository;
import de.maximilianwollnik.homepage.repository.SocialRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

/**
 * The type Social service.
 */
@Service
public class SocialService {
    private static final Logger logger = LoggerFactory.getLogger(SocialService.class);
    private final SocialRepository socialRepository;

    /**
     * Instantiates a new Social service.
     *
     * @param socialRepository the social repository
     */
    @Autowired
    public SocialService(SocialRepository socialRepository) {
        this.socialRepository = socialRepository;
    }

    /**
     * Gets socials.
     *
     * @return the socials
     */
    public List<Social> getSocials() {
        logger.info(">> getSocials()");

        List<Social> result = socialRepository.findAll();

        logger.debug("* getSocials() - result='{}'", result);
        logger.info("<< getSocials() returns");
        return result;
    }
}
