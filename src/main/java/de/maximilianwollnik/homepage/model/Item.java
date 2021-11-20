package de.maximilianwollnik.homepage.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

/**
 * The type Item.
 */
@Data
@NoArgsConstructor
public class Item {
    @Id
    protected String id;

    protected String element;

    /**
     * Instantiates a new Item.
     *
     * @param element the element
     */
    public Item(String element) {
        this.element = element;
    }
}
