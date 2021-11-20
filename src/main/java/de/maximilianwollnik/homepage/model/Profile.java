package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * The type Profile.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Profile extends Item {
    private List<Technology> technologies;

    /**
     * Instantiates a new Profile.
     *
     * @param element      the element
     * @param technologies the technologies
     */
    public Profile(String element, List<Technology> technologies) {
        super(element);
        this.technologies = technologies;
    }
}
