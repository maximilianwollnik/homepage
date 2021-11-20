package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.Education;
import de.maximilianwollnik.homepage.repository.BiographyRepository;
import de.maximilianwollnik.homepage.repository.EducationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

/**
 * The type Education service.
 */
@Service
public class EducationService {
    private static final Logger logger = LoggerFactory.getLogger(EducationService.class);
    private final EducationRepository educationRepository;

    /**
     * Instantiates a new Education service.
     *
     * @param educationRepository the education repository
     */
    @Autowired
    public EducationService(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    /**
     * Gets educations.
     *
     * @return the educations
     */
    public List<Education> getEducations() {
        logger.info(">> getEducations()");
        List<Education> result = educationRepository.findAll();
        result.sort(new Comparator<Education>() {
            @Override
            public int compare(Education o1, Education o2) {
                return Long.valueOf(o1.getStart().getTime()).compareTo(Long.valueOf(o2.getStart().getTime()));
            }
        });
        logger.debug("* getEducations() - result='{}'", result);
        logger.info("<< getEducations() returns");
        return result;
    }
}
