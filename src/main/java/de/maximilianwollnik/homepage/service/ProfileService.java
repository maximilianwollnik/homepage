package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.BiographyState;
import de.maximilianwollnik.homepage.model.Education;
import org.apache.commons.io.FileUtils;
import org.asciidoctor.Asciidoctor;
import org.asciidoctor.Attributes;
import org.asciidoctor.Options;
import org.asciidoctor.SafeMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.asciidoctor.Asciidoctor.Factory.create;

/**
 * The type Profile service.
 */
@Service
public class ProfileService {
    private static final Logger logger = LoggerFactory.getLogger(ProfileService.class);
    private static final String FILE_NAME_PDF = "profile.pdf";
    private final DateFormat dateFormat;
    private final TranslationService translationService;
    private final EducationService educationService;
    private final BiographyService biographyService;
    private final Asciidoctor asciidoctor;
    private Attributes attributes;
    private Map<String, Object> translations;
    private String input;
    private String docDir;
    private List<Education> educations;
    private List<Biography> biographies;

    /**
     * Instantiates a new Profile service.
     *
     * @param translationService the translation service
     */
    @Autowired
    public ProfileService(TranslationService translationService, EducationService educationService, BiographyService biographyService) {
        asciidoctor = create();
        this.translationService = translationService;
        this.educationService = educationService;
        this.biographyService = biographyService;
        dateFormat = new SimpleDateFormat("MM/yyyy");
    }

    private <T> T getNestedValue(Map map, String... keys) {
        Object value = map;

        for (String key : keys) {
            value = ((Map) value).get(key);
        }

        return (T) value;
    }

    private void prepareRootPage() throws IOException {
        logger.debug(">> prepareRootPage()");

        input = """
                = Curriculum Vitae
                $name $surname
                :doctype: book
                :pdf-theme: profile
                :pdf-themesdir: {docdir}/themes
                                      
                """;
        input = input.replace("$name", translations.get("NAME").toString())
                .replace("$surname", translations.get("SURNAME").toString());
        logger.debug("<< prepareRootPage({}) returns");
    }

    private void fillIntroductionData(String section, String key) {
        logger.debug(">> fillIntroductionData('{}','{}')", section, key);

        String stringKey = String.format("%sKey", key.toLowerCase());
        String stringValue = translations.get(String.format("PROFILE_%s_%s", section.toUpperCase(),
                key.toUpperCase())).toString();
        logger.debug("* fillIntroductionData() - '{}' = '{}'", stringKey, stringValue);
        attributes.setAttribute(stringKey, stringValue);

        stringKey = String.format("%sValue", key.toLowerCase());
        //TODO need to add a '+' for new line
        stringValue = translations.get(String.format("%s", key.toUpperCase())).toString();
        logger.debug("* fillIntroductionData() - '{}' = '{}'", stringKey, stringValue);
        attributes.setAttribute(stringKey, stringValue);

        logger.debug("<< fillIntroductionData() returns");
    }

    private void prepareIntroductionAttributes() {
        logger.debug(">> prepareIntroductionAttributes()");

        attributes.setAttribute("introductionTitle", translations.get("PROFILE_INTRODUCTION_TITLE"));
        fillIntroductionData("INTRODUCTION", "SURNAME");
        fillIntroductionData("INTRODUCTION", "NAME");
        fillIntroductionData("INTRODUCTION", "NATIONALITY");
        fillIntroductionData("INTRODUCTION", "ADDRESS");
        fillIntroductionData("INTRODUCTION", "PHONE");
        fillIntroductionData("INTRODUCTION", "MOBILE");
        fillIntroductionData("INTRODUCTION", "MAIL");
        fillIntroductionData("INTRODUCTION", "BIRTHDAY");
        fillIntroductionData("INTRODUCTION", "POB");
        fillIntroductionData("INTRODUCTION", "MARITAL");
        fillIntroductionData("INTRODUCTION", "INTERESTS");
        fillIntroductionData("INTRODUCTION", "LANGUAGES");

        logger.debug("<< prepareIntroductionAttributes() returns");
    }

    private void prepareEducationAttributes() {
        logger.debug(">> prepareEducationAttributes()");

        attributes.setAttribute("educationTitle", translations.get("PROFILE_EDUCATION_TITLE"));

        logger.debug("<< prepareEducationAttributes() returns");
    }

    private void prepareWorkAttributes() {
        logger.debug(">> prepareWorkAttributes()");

        attributes.setAttribute("workTitle", translations.get("PROFILE_WORK_TITLE"));
        attributes.setAttribute("projectTitle", translations.get("PROFILE_WORK_TITLE_PROJECTS"));
        attributes.setAttribute("companyTitle", translations.get("PROFILE_WORK_TITLE_COMPANY"));

        logger.debug("<< prepareWorkAttributes() returns");
    }

    private byte[] createPdf(String input) throws IOException {
        logger.debug(">> createPdf({})", input);
        File destination = new File(FILE_NAME_PDF);
        if (destination.exists() && !destination.delete()) {
            logger.info("* getProfile() - can't delete '{}'", destination.getAbsolutePath());
        }

        asciidoctor.convert(
                input,
                Options.builder()
                        .safe(SafeMode.UNSAFE)
                        .backend("pdf")
                        .attributes(attributes)
                        .toFile(destination)
                        .build());

        logger.debug("<< createPdf() returns");
        return FileUtils.readFileToByteArray(destination);
    }

    private void fillContentFromFile(String file, boolean... newSection) throws IOException {
        if (newSection.length <= 0 || newSection[0]) {
            input += "<<<" + System.lineSeparator();
        }
        try (BufferedReader br =
                     new BufferedReader(new FileReader(String.format("%s/%s", docDir, file)))) {
            String line;
            while ((line = br.readLine()) != null) {
                input += line + System.lineSeparator();
            }
        }
        input += System.lineSeparator();
    }

    private void init() throws URISyntaxException {
        logger.debug(">> init()");
        educations = educationService.getEducations();
        biographies = biographyService.getBiographies();

        translations = translationService.getTranslations("de");
        attributes = Attributes.builder().build();
        docDir = new File(getClass().getResource("/profile").toURI()).getAbsolutePath();
        attributes.setAttribute("docdir", docDir);
        logger.debug("<< init() returns");
    }

    private void createEducationContent() throws IOException {
        logger.debug(">> createEducationContent()");

        fillContentFromFile("02_education_title.adoc");
        for (Education education : educations) {
            fillContentFromFile("02_education_template.adoc", false);

            HashMap<String, Object> educationTranslation = getNestedValue(translations, "EDUCATION",
                    education.getElement());
            String title = educationTranslation.get("TITLE").toString();
            String startDate = dateFormat.format(education.getStart());
            String endDate = dateFormat.format(education.getEnd());
            String content = educationTranslation.get("CONTENT").toString();
            String pic = education.getElement().toLowerCase();
            logger.debug("* createEducationContent() - title = '{}'", title);
            logger.debug("* createEducationContent() - startDate = '{}'", startDate);
            logger.debug("* createEducationContent() - endDate = '{}'", endDate);
            logger.debug("* createEducationContent() - content = '{}'", content);
            logger.debug("* createEducationContent() - pic = '{}'", pic);

            attributes.setAttribute(String.format("educationTitle%s", education.getElement()), title);
            attributes.setAttribute(String.format("educationStartDate%s", education.getElement()), startDate);
            attributes.setAttribute(String.format("educationEndDate%s", education.getElement()), endDate);
            attributes.setAttribute(String.format("educationContent%s", education.getElement()), content);
            attributes.setAttribute(String.format("educationPic%s", education.getElement()), pic);
            input = input.replace("REPLACE_ME", education.getElement());
        }

        logger.debug("<< createEducationContent() returns");
    }

    private void createWorkContentSingle(List<Biography> biographies) throws IOException {
        logger.debug(">> createWorkContentSingle({})", biographies);

        for (Biography biography : biographies) {
            fillContentFromFile("03_work_template.adoc", false);

            HashMap<String, Object> eventsTranslation = getNestedValue(translations, "CV", "EVENTS");
            HashMap<String, Object> biographyTranslation = getNestedValue(eventsTranslation, biography.getElement());
            String title = biographyTranslation.get("TITLE").toString();
            String startDate = dateFormat.format(biography.getStart());
            String endDate = dateFormat.format(biography.getEnd());
            if (biography.getStart().equals(biography.getEnd())) {
                endDate = translations.get("PRESENT").toString();
            }
            String contentRoleKey = getNestedValue(eventsTranslation, "ROLE").toString().replace(":", "");
            String contentRoleValue = getNestedValue(biographyTranslation, "CONTENT", "ROLE");
            String contentActivityKey = getNestedValue(eventsTranslation, "ACTIVITY").toString().replace(":", "");
            String contentActivityValue = getNestedValue(biographyTranslation, "CONTENT", "ACTIVITY");
            String contentTaskValue = getNestedValue(biographyTranslation, "CONTENT", "TASK");
            String contentDevEnvKey = getNestedValue(eventsTranslation, "DEV_ENV").toString().replace(":", "");
            String contentDevEnvValue = getNestedValue(biographyTranslation, "CONTENT", "DEV_ENV");
            String contentComponentKey = getNestedValue(eventsTranslation, "COMPONENT").toString().replace(":", "");
            String contentComponentValue = getNestedValue(biographyTranslation, "CONTENT", "COMPONENT");
            String contentTechnologyKey = getNestedValue(eventsTranslation, "TECHNOLOGY").toString().replace(":", "");
            String contentTechnologyValue = getNestedValue(biographyTranslation, "CONTENT", "TECHNOLOGY");
            logger.debug("* createWorkContentSingle() - title = '{}'", title);
            logger.debug("* createWorkContentSingle() - startDate = '{}'", startDate);
            logger.debug("* createWorkContentSingle() - endDate = '{}'", endDate);
            logger.debug("* createWorkContentSingle() - contentRoleKey = '{}'", contentRoleKey);
            logger.debug("* createWorkContentSingle() - contentRoleValue = '{}'", contentRoleValue);
            logger.debug("* createWorkContentSingle() - contentActivityKey = '{}'", contentActivityKey);
            logger.debug("* createWorkContentSingle() - contentActivityValue = '{}'", contentActivityValue);
            logger.debug("* createWorkContentSingle() - contentTaskValue = '{}'", contentTaskValue);
            logger.debug("* createWorkContentSingle() - contentDevEnvKey = '{}'", contentDevEnvKey);
            logger.debug("* createWorkContentSingle() - contentDevEnvValue = '{}'", contentDevEnvValue);
            logger.debug("* createWorkContentSingle() - contentComponentKey = '{}'", contentComponentKey);
            logger.debug("* createWorkContentSingle() - contentComponentValue = '{}'", contentComponentValue);
            logger.debug("* createWorkContentSingle() - contentTechnologyKey = '{}'", contentTechnologyKey);
            logger.debug("* createWorkContentSingle() - contentTechnologyValue = '{}'", contentTechnologyValue);

            attributes.setAttribute(String.format("workTitle%s", biography.getElement()), title);
            attributes.setAttribute(String.format("workStartDate%s", biography.getElement()), startDate);
            attributes.setAttribute(String.format("workEndDate%s", biography.getElement()), endDate);
            attributes.setAttribute(String.format("workRoleKey%s", biography.getElement()), contentRoleKey);
            attributes.setAttribute(String.format("workRoleValue%s", biography.getElement()), contentRoleValue);
            attributes.setAttribute(String.format("workActivityKey%s", biography.getElement()), contentActivityKey);
            attributes.setAttribute(String.format("workActivityValue%s", biography.getElement()), contentActivityValue);
            attributes.setAttribute(String.format("workTaskValue%s", biography.getElement()), contentTaskValue);
            attributes.setAttribute(String.format("workDevEnvKey%s", biography.getElement()), contentDevEnvKey);
            attributes.setAttribute(String.format("workDevEnvValue%s", biography.getElement()), contentDevEnvValue);
            attributes.setAttribute(String.format("workComponentKey%s", biography.getElement()), contentComponentKey);
            attributes.setAttribute(String.format("workComponentValue%s", biography.getElement()), contentComponentValue);
            attributes.setAttribute(String.format("workTechnologyKey%s", biography.getElement()), contentTechnologyKey);
            attributes.setAttribute(String.format("workTechnologyValue%s", biography.getElement()), contentTechnologyValue);
            input = input.replace("REPLACE_ME", biography.getElement());
        }

        logger.debug("<< createWorkContentSingle() returns");
    }

    private void createWorkContent() throws IOException {
        logger.debug(">> createWorkContent()");
        List<Biography> projectFinished =
                biographies.stream().filter(biography -> BiographyState.PROJECT_FINISHED.equals(biography.getBiographyState())).collect(Collectors.toList());
        List<Biography> projectCurrent =
                biographies.stream().filter(biography -> BiographyState.PROJECT_CURRENT.equals(biography.getBiographyState())).collect(Collectors.toList());
        List<Biography> jobFinished =
                biographies.stream().filter(biography -> BiographyState.JOB_FINISHED.equals(biography.getBiographyState())).collect(Collectors.toList());
        List<Biography> jobCurrent =
                biographies.stream().filter(biography -> BiographyState.JOB_CURRENT.equals(biography.getBiographyState())).collect(Collectors.toList());

        fillContentFromFile("03_work_title.adoc", false);
        fillContentFromFile("03_work_title_project.adoc");
        createWorkContentSingle(projectFinished);
        createWorkContentSingle(projectCurrent);
        fillContentFromFile("03_work_title_company.adoc");
        createWorkContentSingle(jobFinished);
        createWorkContentSingle(jobCurrent);

        logger.debug("<< createWorkContent() returns");
    }

    /**
     * Get profile byte [ ].
     *
     * @return the byte [ ]
     * @throws IOException        the io exception
     * @throws URISyntaxException the uri syntax exception
     */
    public byte[] getProfile() throws IOException, URISyntaxException {
        logger.info(">> getProfile()");

        init();
        prepareIntroductionAttributes();
        prepareEducationAttributes();
        prepareWorkAttributes();
        prepareRootPage();

        fillContentFromFile("01_introduction.adoc");
        createEducationContent();
        createWorkContent();

        byte[] result = createPdf(input);

        logger.info("<< getProfile() returns");

        return result;
    }
}
