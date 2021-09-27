package de.maximilianwollnik.homepage.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * The type Work.
 */
@Data
public class Work {
    @Id
    private String id;

    private String element;

    private String url;

    /**
     * Instantiates a new Work.
     *
     * @param element the element
     * @param url     the url
     */
    public Work(String element, String url) {
        this.element = element;
        this.url = url;
    }
}
