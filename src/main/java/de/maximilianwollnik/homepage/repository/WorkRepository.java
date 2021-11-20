package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Work;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Work repository.
 */
public interface WorkRepository extends MongoRepository<Work, String> {

    /**
     * Find by element work.
     *
     * @param element the element
     * @return the work
     */
    Work findByElement(String element);
}
