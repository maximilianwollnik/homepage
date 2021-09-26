package de.maximilianwollnik.homepage.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * The type Social.
 */
@Data
public class Social {
    @Id
    private String id;

    private String icon;

    private String url;

    /**
     * Instantiates a new Social.
     *
     * @param icon the icon
     * @param url  the url
     */
    public Social(String icon, String url) {
        this.icon = icon;
        this.url = url;
    }
}
