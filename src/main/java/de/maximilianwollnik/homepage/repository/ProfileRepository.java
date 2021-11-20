package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Profile repository.
 */
public interface ProfileRepository extends MongoRepository<Profile, String> {

    /**
     * Find by element profile.
     *
     * @param element the element
     * @return the profile
     */
    Profile findByElement(String element);
}
