package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * The type Social.
 */
@Data
@EqualsAndHashCode(callSuper=false)
public class Social extends Item {
    private String icon;

    private String url;

    /**
     * Instantiates a new Social.
     *
     * @param icon the icon
     * @param url  the url
     */
    public Social(String icon, String url) {
        super(null);
        this.icon = icon;
        this.url = url;
    }
}
