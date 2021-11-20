package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * The type Education.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Education extends Item {
    /**
     * The Start.
     */
    protected Date start;

    /**
     * The End.
     */
    protected Date end;

    /**
     * Instantiates a new Education.
     *
     * @param start   the start
     * @param end     the end
     * @param element the element
     */
    public Education(Date start, Date end, String element) {
        super(element);
        this.start = start;
        this.end = end;
    }
}
