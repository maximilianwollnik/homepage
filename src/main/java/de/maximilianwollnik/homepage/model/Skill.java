package de.maximilianwollnik.homepage.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * The type Skill.
 */
@Data
public class Skill {
    @Id
    private String id;

    private String element;

    /**
     * Instantiates a new Skill.
     *
     * @param element the element
     */
    public Skill(String element) {
        this.element = element;
    }
}
