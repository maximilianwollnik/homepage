/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;


/**
 * Main class for spring boot
 * @author maximilian
 * @version 1.0
 * @since 0.1.0
 */
@SpringBootApplication
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
