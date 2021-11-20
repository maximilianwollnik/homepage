package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Skill repository.
 */
public interface SkillRepository extends MongoRepository<Item, String> {

    /**
     * Find by element skill.
     *
     * @param element the element
     * @return the skill
     */
    Item findByElement(String element);
}
