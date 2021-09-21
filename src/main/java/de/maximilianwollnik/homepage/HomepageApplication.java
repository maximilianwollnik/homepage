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
        // General
        translationRepository.deleteAll();
        translationRepository.save(new Translation("AUTHOR", "Maximilian Wollnik", "Maximilian Wollnik"));
        translationRepository.save(new Translation("EMAIL", "maximilian@maximilianwollnik.de", "maximilian@maximilianwollnik.de"));
        translationRepository.save(new Translation("TITLE", "{{ AUTHOR }}", "{{ AUTHOR }}"));
        */

        // Button
        translationRepository.save(new Translation("BUTTON.TEXT_EN", "English", "English"));
        translationRepository.save(new Translation("BUTTON.TEXT_DE", "Deutsch", "Deutsch"));
        translationRepository.save(new Translation("BUTTON.MENU_HOME", "Home", "Home"));
        translationRepository.save(new Translation("BUTTON.MENU_DISCLAIMER", "Impressum", "Disclaimer"));
        translationRepository.save(new Translation("BUTTON.MENU_WORK", "Berufliche Praxis", "Work"));
        translationRepository.save(new Translation("BUTTON.MENU_CV", "Lebenslauf", "Experience"));
        translationRepository.save(new Translation("BUTTON.MENU_SKILL", "Fähigkeiten", "Skills"));
        translationRepository.save(new Translation("BUTTON.MENU_EDUCATION", "Ausbildung", "Education"));

        // Footer
        translationRepository.save(new Translation("FOOTER.JOB_TITLE", "IT Berater & Software Entwickler", "IT Consultant & Software Developer"));
        translationRepository.save(new Translation("FOOTER.LOCATION", "Lebe in Paderborn", "Living in Paderborn"));
        translationRepository.save(new Translation("FOOTER.CHALLENGE", "Bereit für die nächste Herausforderung", "Ready for the next challenge"));
        translationRepository.save(new Translation("FOOTER.VERSION", "Version: ", "Version: "));
        translationRepository.save(new Translation("FOOTER.TIMESTAMP", "Copyright &copy;", "Copyright &copy;"));



    }
}
