package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.service.ProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URISyntaxException;

/**
 * The type Profile controller.
 */
@RestController
public class ProfileController {
    private static final Logger logger = LoggerFactory.getLogger(ProfileController.class);
    private final ProfileService profileService;

    @Autowired
    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    /**
     * Profile byte [ ].
     *
     * @return the byte [ ]
     * @throws IOException the io exception
     */
    @RequestMapping(value="/api/profile", method= RequestMethod.GET, produces = MediaType.APPLICATION_PDF_VALUE)
    public @ResponseBody
    byte[] profile() throws IOException, URISyntaxException {
        logger.info(">> profile()");
        byte[] result = profileService.getProfile();
        logger.info("<< profile() returns");

        return result;
    }
}
