/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.BiographyState;
import de.maximilianwollnik.homepage.model.Translation;
import de.maximilianwollnik.homepage.repository.BiographyRepository;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.*;

/**
 * The type Homepage application.
 */
@SpringBootApplication
public class HomepageApplication implements CommandLineRunner {
    private final TranslationRepository translationRepository;
    private final BiographyRepository biographyRepository;

    /**
     * Instantiates a new Homepage application.
     *
     * @param translationRepository the translation repository
     */
    @Autowired
    public HomepageApplication(TranslationRepository translationRepository, BiographyRepository biographyRepository) {
        this.translationRepository = translationRepository;
        this.biographyRepository = biographyRepository;
    }

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
        translations();
        biography();
    }

    private void biography() throws ParseException {
        biographyRepository.deleteAll();

        DateFormat dateFormat = new SimpleDateFormat("MM/yyyy");
        biographyRepository.save(new Biography(dateFormat.parse("04/2007"), dateFormat.parse("04/2008"), "WELLS_FARGO", BiographyState.PROJECT_FINISHED));
        biographyRepository.save(new Biography(dateFormat.parse("05/2008"), dateFormat.parse("12/2008"), "HSBC_1", BiographyState.PROJECT_FINISHED));
        biographyRepository.save(new Biography(dateFormat.parse("01/2009"), dateFormat.parse("02/2011"), "BANKDATA", BiographyState.PROJECT_FINISHED));
    }

    private void translations() {
        translationRepository.deleteAll();
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
        translationRepository.save(new Translation("FOOTER.TIMESTAMP", "Copyright &copy; ", "Copyright &copy; "));


        // Home
        translationRepository.save(new Translation("HOME.HEADLINE", "Hallo, mein Name ist {{ AUTHOR }}!", "Hi, my name is {{ AUTHOR }}!"));
        translationRepository.save(new Translation("HOME.BODY", "Ich bin ein IT Berater und Software Entwickler aus Deutschland mit über neun Jahren Berufserfahrung. Derzeit arbeite ich für <a href='{{ COMPANY_LINK }}' target='_blank'>{{ COMPANY_NAME }}</a>.<br><br>Hier bin ich verantwortlich für die Software auf Geldautomaten und liefere projektspezifische Erweiterungen für Kunden weltweit. Je nach Anforderungen entwickele ich Java und Web-Komponenten, um eine herstellerunabhängige Anwendung zu erweitern. Die Kunden legen dabei einen großen Wert auf eine neue Generation von grafischen Oberflächen, Multikanalstrategie (mobil, Internet) und Konzepten für eine Filiale der Zukunft, wobei ich ihnen unterstützend zur Seite stehe.<br><br>Momentan lege ich meinen Fokus auf den Softwarelieferprozess rund um das Thema <b>kontinuierliche Integration</b>.Mein aktuelles Profil kann man auch <a href='../assets/doc/profile.pdf' target='_blank'>hier</a> herunterladen.", "I am an IT consultant and software developer from Germany with over nine years of professional experience. Currently I am working for <a href='{{ COMPANY_LINK }}' target='_blank'>{{ COMPANY_NAME }}</a>.<br><br>I am responsible for ATM application globally and I deliver project specific extensions for customers worldwide. Depending on the requirements I develop Java and web components to enhance a multi-vendor platform. The customers are very interested to create a next generation user interface, branch of the future and multi-channel (Mobile, Internet) capabilities.<br><br>Currently my main focus is to improve the delivery process based on the software engineering approach <b>Continious Delivery</b>.My latest profile can be downloaded from <a href='../assets/doc/profile.pdf' target='_blank'>here</a>."));

        // CV
        translationRepository.save(new Translation("CV.HEADLINE", "Das habe ich bisher gemacht", "That is what I've done so far"));
        translationRepository.save(new Translation("CV.EXPLANATIONS.HEADLINE", "Legende", "Explanations"));
        translationRepository.save(new Translation("CV.EXPLANATIONS.JOB_FINISHED", "Job beendet", "Job finished"));
        translationRepository.save(new Translation("CV.EXPLANATIONS.JOB_CURRENT", "Aktueller Job", "Current Job"));
        translationRepository.save(new Translation("CV.EXPLANATIONS.PROJECT_FINISHED", "Projekt beendet", "Project finished"));
        translationRepository.save(new Translation("CV.EXPLANATIONS.PROJECT_CURRENT", "Aktuelles Projekt", "Current project"));

        translationRepository.save(new Translation("CV.EVENTS.ROLE", "Rolle:", "Role:"));
        translationRepository.save(new Translation("CV.EVENTS.ACTIVITY", "Tätigkeiten:", "Activities:"));
        translationRepository.save(new Translation("CV.EVENTS.DEV_ENV", "Entwicklungsumgebung:", "Development Environment:"));
        translationRepository.save(new Translation("CV.EVENTS.COMPONENT", "Systemkomponenten:", "Components:"));
        translationRepository.save(new Translation("CV.EVENTS.TECHNOLOGY", "Technologien:", "Technologies:"));


        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.TITLE", "<a href=\"https://wellsfargo.com\" target=\"_blank\">Wells Fargo</a>", "<a href=\"https://wellsfargo.com\" target=\"_blank\">Wells Fargo</a>"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.ROLE", "Softwareentwickler", "Developer"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.ACTIVITY", "Softwareentwicklung", "Software development"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.TASK", "Entwicklung neuer und Anpassung bestehender Komponenten für eine existierende Selbstbedienungsanwendung auf Geldautomaten:<br>- Neue grafische Oberfläche<br>- Ablaufanpassungen von Transaktionen<br>- Performanceoptimierungen", "Development of new components and customizing of an existing self service application:<br>- Development of a new UI<br>- Businessflows extended with the concept of assisted selfservice<br>- Performance improvement"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.DEV_ENV", "Visual Studio 6", "Visual Studio 6"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.COMPONENT", "MKS", "MKS"));
        translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.CONTENT.TECHNOLOGY", "C++, HTML, CSS, JQuery", "C++, HTML, CSS, JQuery"));

        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.TITLE", "<a href=\"https://www.hsbc.com.mx\" target=\"_blank\">HSBC Mexiko</a>", "<a href=\"https://www.hsbc.com.mx\" target=\"_blank\">HSBC Mexiko</a>"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.ROLE", "Softwareentwickler", "Developer"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.ACTIVITY", "Softwareentwicklung", "Software development"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.TASK", "Entwicklung einer neuen Komponente für eine existierende Selbstbedienungsanwendung auf Geldautomaten:<br>- Kartenlose Einzahlungen für Münzen", "Development of new components for an existing self service application:<br>- Cardless deposit for high amount of coins"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.DEV_ENV", "Visual Studio 2005", "Visual Studio 2005"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.COMPONENT", "MKS", "MKS"));
        translationRepository.save(new Translation("CV.EVENTS.HSBC_1.CONTENT.TECHNOLOGY", "C++, HTML, CSS, JQuery", "C++, HTML, CSS, JQuery"));

        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.TITLE", "<a href=\"https://bankdata.dk/da\" target=\"_blank\">Bankdata</a>", "<a href=\"https://bankdata.dk/da\" target=\"_blank\">Bankdata</a>"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.ROLE", "Softwareentwickler", "Developer"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.ACTIVITY", "Softwareentwicklung", "Software development"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.TASK", "Entwicklung neuer und Anpassung bestehender Komponenten für eine existierende Selbstbedienungsanwendung auf Geldautomaten:<br>- Neue Hostkommunikation<br>- Ablaufanpassungen von Transaktionen", "Development of new components and customzing of an existing self service application:<br>- ATM connection to a specific bank host<br>- Customizing of existing transactions"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.DEV_ENV", "Eclipse 3.5, Visual Studio 2008", "Eclipse 3.5, Visual Studio 2008"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.COMPONENT", "MKS, ANT", "MKS, ANT"));
        translationRepository.save(new Translation("CV.EVENTS.BANKDATA.CONTENT.TECHNOLOGY", "JSE, C++, HTML, CSS, Axis", "JSE, C++, HTML, CSS, Axis"));

        //translationRepository.save(new Translation("CV.EVENTS.WELLS_FARGO.TITLE", "", ""));

    }
}
