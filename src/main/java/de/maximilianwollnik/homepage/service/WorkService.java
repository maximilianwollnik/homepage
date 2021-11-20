package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.Work;
import de.maximilianwollnik.homepage.repository.WorkRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

/**
 * The type Work service.
 */
@Service
public class WorkService {
    private static final Logger logger = LoggerFactory.getLogger(WorkService.class);
    private WorkRepository workRepository;

    /**
     * Instantiates a new Work service.
     *
     * @param workRepository the work repository
     */
    @Autowired
    public WorkService(WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    /**
     * Gets work.
     *
     * @return the work
     */
    public List<Work> getWork() {
        logger.info(">> getWork()");
        List<Work> result = workRepository.findAll();
        logger.debug("* getWork() - result='{}'", result);
        logger.info("<< getWork() returns");
        return result;
    }
}
