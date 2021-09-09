/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */

package de.maximilianwollnik.homepage.web;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultErrorController implements ErrorController {
    @RequestMapping
    public String handleError() {
        return "error";
    }
}
