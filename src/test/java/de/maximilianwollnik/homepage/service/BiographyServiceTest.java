package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.model.BiographyState;
import de.maximilianwollnik.homepage.repository.BiographyRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class BiographyServiceTest {
    @MockBean
    private BiographyRepository biographyRepository;

    @Autowired
    private BiographyService biographyService;

    @BeforeEach
    public void setUp() throws ParseException {
        List<Biography> result = new ArrayList<>();
        DateFormat dateFormat = new SimpleDateFormat("MM/yyyy");

        result.add(new Biography(dateFormat.parse("01/2009"), dateFormat.parse("02/2011"), "BANKDATA", BiographyState.PROJECT_FINISHED));
        result.add(new Biography(dateFormat.parse("05/2008"), dateFormat.parse("12/2008"), "HSBC_1", BiographyState.PROJECT_FINISHED));
        result.add(new Biography(dateFormat.parse("04/2007"), dateFormat.parse("04/2008"), "WELLS_FARGO", BiographyState.PROJECT_FINISHED));

        Mockito.when(biographyRepository.findAll()).thenReturn(result);
    }

    @Test
    public void returnOrderedBiography() {
        List<Biography> result = biographyService.getBiographies();
        for (int i = 0; i < result.size(); i++) {
            if (i != result.size() - 1) {
                Assertions.assertTrue(result.get(i).getStart().before(result.get(i + 1).getStart()), String.format("'%s' is not before '%s'", result.get(i).getStart().toString(), result.get(i + 1).getStart().toString()));
            }
        }
    }
}
