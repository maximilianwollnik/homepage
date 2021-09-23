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
        */
        // General
        translationRepository.save(new Translation("AUTHOR", "Maximilian Wollnik", "Maximilian Wollnik"));
        translationRepository.save(new Translation("EMAIL", "maximilian@maximilianwollnik.de", "maximilian@maximilianwollnik.de"));
        translationRepository.save(new Translation("TITLE", "{{ AUTHOR }}", "{{ AUTHOR }}"));
        translationRepository.save(new Translation("COMPANY_LINK", "http://www.dieboldnixdorf.com", "http://www.dieboldnixdorf.com"));
        translationRepository.save(new Translation("COMPANY_NAME", "Diebold Nixdorf", "Diebold Nixdorf"));


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


        // Home
        translationRepository.save(new Translation("HOME.HEADLINE", "Hallo, mein Name ist {{ AUTHOR }}!", "Hi, my name is {{ AUTHOR }}!"));
        translationRepository.save(new Translation("HOME.BODY", "Ich bin ein IT Berater und Software Entwickler aus Deutschland mit über neun Jahren Berufserfahrung. Derzeit arbeite ich für <a href='{{ COMPANY_LINK }}' target='_blank'>{{ COMPANY_NAME }}</a>.<br><br>Hier bin ich verantwortlich für die Software auf Geldautomaten und liefere projektspezifisiche Erweiterungen für Kunden weltweit. Je nach Anforderungen entwickele ich Java und Web-Komponenten, um eine herstellerunabhängige Anwendung zu erweitern. Die Kunden legen dabei einen großen Wert auf eine neue Generation von grafischen Obeflächen, Multikanalstrategie (mobil, Internet) und Konzepten für eine Filiale der Zukunft, wobei ich ihnen unterstützend zur Seite stehe.<br><br>Momentan lege ich meinen Fokus auf den Softwarelieferprozess rund um das Thema <b>kontinuierliche Integration</b>.Mein aktuelles Profil kann man auch <a href='../assets/doc/profile.pdf' target='_blank'>hier</a> herunterladen.", "I am an IT consultant and software developer from Germany with over nine years of professional experience. Currently I am working for <a href='{{ COMPANY_LINK }}' target='_blank'>{{ COMPANY_NAME }}</a>.<br><br>I am responsible for ATM application globally and I deliver project specific extensions for customers worldwide. Depending on the requirements I develop Java and web components to enhance a multi-vendor platform. The customers are very interested to create a next generation user interface, branch of the future and multi-channel (Mobile, Internet) capabilities.<br><br>Currently my main focus is to improve the delivery process based on the software engineering approach <b>Continious Delivery</b>.My latest profile can be downloaded from <a href='../assets/doc/profile.pdf' target='_blank'>here</a>."));

    }
}
