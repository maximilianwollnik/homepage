/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.scheduling.annotation.EnableScheduling;


/**
 * Main class for spring boot
 * <p>
 * Sinc version 1.1 schedule has been enabled
 * 
 * @author maximilian
 * @version 1.1
 * @since 0.1.0
 */
@SpringBootApplication
@EnableScheduling
@RefreshScope
public class Application {

  /**
   * The main method.
   * @param args the arguments
   * @since 0.1.0
   */
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
