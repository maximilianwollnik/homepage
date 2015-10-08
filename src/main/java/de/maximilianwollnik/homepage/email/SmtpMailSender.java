/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

/**
 * Spring boot handler to send a mail
 * @author maximilian
 * @version 1.0
 * @since 0.4.0
 */
@Component
public class SmtpMailSender {

  @Autowired
  private JavaMailSender javaMailSender;
  private final Logger log = LoggerFactory.getLogger(this.getClass());

  /**
   * Send.
   * @param from the from
   * @param subject the subject
   * @param text the text
   * @throws MessagingException the messaging exception
   * @since 0.4.0
   */
  public void send(String from, String subject, String text)
      throws MessagingException, MailAuthenticationException, MailSendException {

    log.info(">> send({}, {}, {})", from, subject, text);

    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
    helper.setTo("maximilian@maximilianwollnik.de");
    helper.setFrom(from);
    helper.setReplyTo(from);
    helper.setSubject(subject);
    helper.setText(text, true);

    javaMailSender.send(message);

    log.info("<< send() returns");
  }
}
