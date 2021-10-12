package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Education;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Education repository.
 */
public interface EducationRepository extends MongoRepository<Education, String> {

    /**
     * Find by key biography.
     *
     * @param element the element
     * @return the biography
     */
    Education findByElement(String element);
}

