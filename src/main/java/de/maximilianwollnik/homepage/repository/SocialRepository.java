package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Social;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Social repository.
 */
public interface SocialRepository extends MongoRepository<Social, String> {

    /**
     * Find by icon social.
     *
     * @param icon the icon
     * @return the social
     */
    Social findByIcon(String icon);
}
