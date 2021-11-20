package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Biography;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Biography repository.
 */
public interface BiographyRepository extends MongoRepository<Biography, String> {

    /**
     * Find by key biography.
     *
     * @param element the element
     * @return the biography
     */
    Biography findByElement(String element);
}
