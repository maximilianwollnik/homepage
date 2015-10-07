/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.model;

/**
 * Pojo of the mail content.
 * @author maximilian
 * @version 1.0
 * @since 0.4.0
 */
public class Mail {
  private String name;
  private String email;
  private String body;

  /**
   * Gets the name.
   * @return the name
   * @since 0.4.0
   */
  public String getName() {
    return name;
  }

  /**
   * Sets the name.
   * @param name the new name
   * @since 0.4.0
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Gets the email.
   * @return the email
   * @since 0.4.0
   */
  public String getEmail() {
    return email;
  }

  /**
   * Sets the email.
   * @param email the new email
   * @since 0.4.0
   */
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   * Gets the body.
   * @return the body
   * @since 0.4.0
   */
  public String getBody() {
    return body;
  }

  /**
   * Sets the body.
   * @param body the new body
   * @since 0.4.0
   */
  public void setBody(String body) {
    this.body = body;
  }

  /*
   * (non-Javadoc)
   * @see java.lang.Object#hashCode()
   */
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((body == null) ? 0 : body.hashCode());
    result = prime * result + ((email == null) ? 0 : email.hashCode());
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    return result;
  }

  /*
   * (non-Javadoc)
   * @see java.lang.Object#equals(java.lang.Object)
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Mail other = (Mail) obj;
    if (body == null) {
      if (other.body != null)
        return false;
    } else if (!body.equals(other.body))
      return false;
    if (email == null) {
      if (other.email != null)
        return false;
    } else if (!email.equals(other.email))
      return false;
    if (name == null) {
      if (other.name != null)
        return false;
    } else if (!name.equals(other.name))
      return false;
    return true;
  }

  /*
   * (non-Javadoc)
   * @see java.lang.Object#toString()
   */
  @Override
  public String toString() {
    return "Mail [name=" + name + ", email=" + email + ", body=" + body + "]";
  }

  /**
   * Instantiates a new mail.
   * @param name the name
   * @param email the email
   * @param body the body
   * @since 0.4.0
   */
  public Mail(String name, String email, String body) {
    super();
    this.name = name;
    this.email = email;
    this.body = body;
  }

  /**
   * Instantiates a new mail.
   * @since 0.4.0
   */
  public Mail() {
    super();
  }

}
