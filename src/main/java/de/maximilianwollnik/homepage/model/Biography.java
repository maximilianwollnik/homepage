package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

/**
 * The type Biography.
 */
@Data
@EqualsAndHashCode(callSuper=false)
public class Biography extends Education {
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
        super(start, end, element);
        this.biographyState = biographyState;
    }
}
