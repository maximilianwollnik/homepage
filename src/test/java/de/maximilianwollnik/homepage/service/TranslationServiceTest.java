package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Translation;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@SpringBootTest
public class TranslationServiceTest {
    @MockBean
    private TranslationRepository translationRepository;

    @Autowired
    private TranslationService translationService;

    @BeforeEach
    public void setUp() {
        List<Translation> result = new ArrayList<>();
        result.add(new Translation("AUTHOR", "Maximilian Wollnik", "Maximilian Wollnik"));
        result.add(new Translation("TITLE", "{{ AUTHOR }}", "{{ AUTHOR }}"));
        result.add(new Translation("COMPANY_LINK", "http://www.wincor-nixdorf.com", "http://www.wincor-nixdorf.com"));
        result.add(new Translation("COMPANY_NAME", "Wincor Nixdorf International GmbH", "Wincor Nixdorf International GmbH"));
        result.add(new Translation("HOME.HEADLINE", "Hallo, mein Name ist {{ AUTHOR }}!", "Hi, my name is {{ AUTHOR }}!"));

        Mockito.when(translationRepository.findAll()).thenReturn(result);
    }

    @Test
    public void resolveLinks() {
        Map<String, Object> result = translationService.getTranslations("de");
        result.forEach((k,v) -> Assertions.assertFalse(v.toString().contains("{{"), String.format("'%s' has not been transformed properly: '%s'", k, v.toString())));
    }
}
