/*
 * Copyright (c) 2021, Maximilian Wollnik, All rights reserved.
 */

package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * The type Translation.
 */
@Data
@EqualsAndHashCode(callSuper=false)
public class Translation extends Item {
    private String key;

    private String german;

    private String english;

    /**
     * Instantiates a new Translation.
     *
     * @param key     the key
     * @param german  the german
     * @param english the english
     */
    public Translation(String key, String german, String english) {
        super(null);
        this.key = key;
        this.german = german;
        this.english = english;
    }
}
