package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * The type Work.
 */
@Data
@EqualsAndHashCode(callSuper=false)
public class Work extends Item {
    private String url;

    /**
     * Instantiates a new Work.
     *
     * @param element the element
     * @param url     the url
     */
    public Work(String element, String url) {
        super(element);
        this.url = url;
    }
}
