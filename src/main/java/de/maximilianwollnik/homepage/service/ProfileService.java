package de.maximilianwollnik.homepage.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

/**
 * The type Profile service.
 */
@Service
public class ProfileService {
    private static final Logger logger = LoggerFactory.getLogger(ProfileService.class);

    /**
     * Get profile byte [ ].
     *
     * @return the byte [ ]
     * @throws IOException the io exception
     */
    public byte[] getProfile() throws IOException {
        logger.info(">> getProfile()");
        InputStream in = getClass()
                .getResourceAsStream("/profile.pdf");
        logger.info("<< getProfile() returns");

        return in.readAllBytes();
    }
}
