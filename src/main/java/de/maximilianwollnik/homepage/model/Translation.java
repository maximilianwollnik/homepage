/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */

package de.maximilianwollnik.homepage.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * The type Translation.
 */
@Data
public class Translation {
    /**
     * The Id.
     */
    @Id
    private String id;
    /**
     * The Key.
     */
    private String key;
    /**
     * The German.
     */
    private String german;
    /**
     * The English.
     */
    private String english;

    /**
     * Instantiates a new Translation.
     *
     * @param key     the key
     * @param german  the german
     * @param english the english
     */
    public Translation(String key, String german, String english) {
        this.key = key;
        this.german = german;
        this.english = english;
    }
}
