package de.maximilianwollnik.homepage.web;

import de.maximilianwollnik.homepage.model.Work;
import de.maximilianwollnik.homepage.service.WorkService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The type Work controller.
 */
@RestController
public class WorkController {
    private static final Logger logger = LoggerFactory.getLogger(WorkController.class);
    private WorkService workService;

    /**
     * Instantiates a new Work controller.
     *
     * @param workService the work service
     */
    @Autowired
    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    /**
     * Work list.
     *
     * @return the list
     */
    @RequestMapping(value="/api/work", method= RequestMethod.GET)
    public List<Work> work() {
        logger.info(">> work()");
        List<Work> result = workService.getWork();
        logger.debug("* work() - result='{}'", result);
        logger.info("<< work() returns");
        return result;
    }
}
