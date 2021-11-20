package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.Education;
import de.maximilianwollnik.homepage.service.EducationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The type Education controller.
 */
@RestController
public class EducationController {
    private static final Logger logger = LoggerFactory.getLogger(EducationController.class);
    private final EducationService educationService;

    /**
     * Instantiates a new Education controller.
     *
     * @param educationService the education service
     */
    @Autowired
    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    /**
     * Educations list.
     *
     * @return the list
     */
    @RequestMapping(value="/api/education", method= RequestMethod.GET)
    public List<Education> educations() {
        logger.info(">> educations()");
        List<Education> result = educationService.getEducations();
        logger.debug("* educations() - result='{}'", result);
        logger.info("<< educations() returns");
        return result;
    }
}
