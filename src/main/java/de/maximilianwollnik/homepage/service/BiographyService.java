package de.maximilianwollnik.homepage.service;

import de.maximilianwollnik.homepage.model.Biography;
import de.maximilianwollnik.homepage.repository.BiographyRepository;
import de.maximilianwollnik.homepage.repository.TranslationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The type Biography service.
 */
@Service
public class BiographyService {
    private static final Logger logger = LoggerFactory.getLogger(BiographyService.class);
    private final BiographyRepository biographyRepository;

    /**
     * Instantiates a new Biography service.
     *
     * @param biographyRepository the biography repository
     */
    @Autowired
    public BiographyService(BiographyRepository biographyRepository) {
        this.biographyRepository = biographyRepository;
    }

    /**
     * Gets biographies.
     *
     * @return the biographies
     */
    public List<Biography> getBiographies() {
        return biographyRepository.findAll();
    }
}
