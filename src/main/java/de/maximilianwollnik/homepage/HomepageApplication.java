/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage;

import de.maximilianwollnik.homepage.model.Translation;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The type Homepage application.
 */
@SpringBootApplication
public class HomepageApplication implements CommandLineRunner {
    /**
     * The Translation repository.
     */
    @Autowired
    private TranslationRepository translationRepository;

    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(HomepageApplication.class, args);
    }

    /**
     * Run.
     *
     * @param args the args
     * @throws Exception the exception
     */
    @Override
    public void run(String... args) throws Exception {
        /*
        translationRepository.deleteAll();
        translationRepository.save(new Translation("AUTHOR", "Maximilian Wollnik", "Maximilian Wollnik"));
        translationRepository.save(new Translation("EMAIL", "maximilian@maximilianwollnik.de", "maximilian@maximilianwollnik.de"));
        translationRepository.save(new Translation("TITLE", "@:AUTHOR", "@:AUTHOR"));
*/
        // fetch all customers
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Translation translation : translationRepository.findAll()) {
            System.out.println(translation);
        }
        System.out.println();
    }
}
