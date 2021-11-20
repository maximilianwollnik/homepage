package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.model.Item;
import de.maximilianwollnik.homepage.service.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The type Skill controller.
 */
@RestController
public class SkillController {
    private static final Logger logger = LoggerFactory.getLogger(BiographyController.class);
    private final SkillService skillService;

    /**
     * Instantiates a new Skill controller.
     *
     * @param skillService the skill service
     */
    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    /**
     * Skills list.
     *
     * @return the list
     */
    @RequestMapping(value="/api/skill", method= RequestMethod.GET)
    public List<Item> skills() {
        logger.info(">> skills()");
        List<Item> result = skillService.getSkills();
        logger.debug("* skills() - result='{}'", result);
        logger.info("<< skills() returns");
        return result;
    }
}
