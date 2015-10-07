/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.web;

import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.maximilianwollnik.homepage.email.SmtpMailSender;
import de.maximilianwollnik.homepage.model.Mail;

/**
 * Controller to send a mail
 * @author maximilian
 * @version 1.0
 * @since 0.4.0
 */
@RestController
public class EmailController {

  @Autowired
  private SmtpMailSender smtpMailSender;
  private final Logger log = LoggerFactory.getLogger(this.getClass());

  /**
   * Send mail.
   * @param mail the mail
   * @return the http status
   * @since 0.4.0
   */
  @RequestMapping(value = "/send-mail", method = RequestMethod.POST)
  public HttpStatus sendMail(@RequestBody Mail mail) {
    log.info(">> sendMail({})", mail);

    HttpStatus result = HttpStatus.OK;
    try {
      String email = mail.getName() + " <" + mail.getEmail() + ">";
      String subject = "Homepage: Mail von " + mail.getName();
      String body = mail.getBody() + " <br><br>Sent from " + mail.getEmail();
      smtpMailSender.send(email, subject, body);
    } catch (MessagingException me) {
      result = HttpStatus.INTERNAL_SERVER_ERROR;
    } catch (MailAuthenticationException mae) {
      result = HttpStatus.UNAUTHORIZED;
    } catch (MailSendException mse) {
      result = HttpStatus.REQUEST_TIMEOUT;
    } catch (MailException me2) {
      result = HttpStatus.CONFLICT;
    }

    log.info("<< sendMail() returns {}", result);

    return result;
  }
}
