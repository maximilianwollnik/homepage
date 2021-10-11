package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Skill;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Skill repository.
 */
public interface SkillRepository extends MongoRepository<Skill, String> {

    /**
     * Find by element skill.
     *
     * @param element the element
     * @return the skill
     */
    Skill findByElement(String element);
}
