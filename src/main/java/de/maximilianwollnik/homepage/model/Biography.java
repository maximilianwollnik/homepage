package de.maximilianwollnik.homepage.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * The type Biography.
 */
@Data
public class Biography {
    @Id
    private String id;

    private Date start;

    private Date end;

    private String element;

    private BiographyState biographyState;

    /**
     * Instantiates a new Biography.
     *
     * @param start   the start
     * @param end     the end
     * @param element the element
     * @param biographyState the biographyState
     */
    public Biography(Date start, Date end, String element, BiographyState biographyState) {
        this.start = start;
        this.end = end;
        this.element = element;
        this.biographyState = biographyState;
    }
}
