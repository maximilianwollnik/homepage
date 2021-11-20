package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Item;
import de.maximilianwollnik.homepage.repository.SkillRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The type Skill service.
 */
@Service
public class SkillService {
    private static final Logger logger = LoggerFactory.getLogger(SkillService.class);
    private final SkillRepository skillRepository;

    /**
     * Instantiates a new Skill service.
     *
     * @param skillRepository the skill repository
     */
    @Autowired
    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    /**
     * Gets skills.
     *
     * @return the skills
     */
    public List<Item> getSkills() {
        logger.info(">> getSkills()");
        List<Item> result = skillRepository.findAll();
        logger.debug("* getSkills() - result='{}'", result);
        logger.info("<< getSkills() returns");
        return result;
    }
}
