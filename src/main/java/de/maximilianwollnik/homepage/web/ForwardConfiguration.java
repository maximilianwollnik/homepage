/*
 * Copyright (c) 2016, wolof, All rights reserved.
 */
package de.maximilianwollnik.homepage.web;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

/**
 * Any weird http status should be forwarded to the main home page.
 * @author MrPupswindel
 * @version 1.0
 * @since 0.1.0
 */
@Configuration
public class ForwardConfiguration {

  /**
   * Container customizer.
   * @return the embedded servlet container customizer
   */
  @Bean
  public EmbeddedServletContainerCustomizer containerCustomizer() {

    return new EmbeddedServletContainerCustomizer() {
      @Override
      public void customize(ConfigurableEmbeddedServletContainer container) {
        container
            .addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/404.html"));
      }
    };
  }
}
