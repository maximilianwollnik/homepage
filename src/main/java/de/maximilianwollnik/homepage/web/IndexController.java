package de.maximilianwollnik.homepage.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * The type Index controller.
 */
@Controller
public class IndexController {
    /**
     * Gets index.
     *
     * @return the index
     */
    @RequestMapping(value={ "/", ""})
    public String getIndex() {
        return "index.html";
    }
}
