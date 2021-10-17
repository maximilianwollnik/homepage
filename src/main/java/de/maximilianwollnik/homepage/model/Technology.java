package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * The type Technology.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Technology extends Item {

    /**
     * The Start.
     */
    protected Date start;
    /**
     * The Name.
     */
    protected String name;
    /**
     * The Ranking.
     */
    protected Ranking ranking;

    /**
     * Instantiates a new Technology.
     *
     * @param start   the start
     * @param element the element
     * @param name    the name
     * @param ranking the ranking
     */
    public Technology(Date start, String element, String name, Ranking ranking) {
        super(element);
        this.start = start;
        this.name = name;
        this.ranking = ranking;
    }
}
