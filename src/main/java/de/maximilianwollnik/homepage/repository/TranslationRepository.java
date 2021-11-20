/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */

package de.maximilianwollnik.homepage.repository;

import de.maximilianwollnik.homepage.model.Translation;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * The interface Translation repository.
 */
public interface TranslationRepository extends MongoRepository<Translation, String> {
    /**
     * Find by key translation.
     *
     * @param key the key
     * @return the translation
     */
    Translation findByKey(String key);
}
