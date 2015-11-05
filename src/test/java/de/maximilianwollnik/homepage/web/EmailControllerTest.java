package de.maximilianwollnik.homepage.web;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.doThrow;

import javax.mail.MessagingException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import de.maximilianwollnik.homepage.Application;
import de.maximilianwollnik.homepage.email.SmtpMailSender;
import de.maximilianwollnik.homepage.model.Mail;

@SpringApplicationConfiguration(classes = Application.class)
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@IntegrationTest("server.port=0")
public class EmailControllerTest {
  @Mock
  private SmtpMailSender smtpMailSender;

  @InjectMocks
  private EmailController emailController;
  private Mail mail;
  private String email;
  private String subject;
  private String body;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
    mail = new Mail("John", "name@domain.de", "test");
    email = mail.getName() + " <" + mail.getEmail() + ">";
    subject = "Homepage: Mail von " + mail.getName();
    body = mail.getBody() + " <br><br>Sent from " + mail.getEmail();
  }

  @Test
  public void sendMailOk() {
    HttpStatus status = emailController.sendMail(mail);
    assertEquals(HttpStatus.OK, status);
  }

  @Test
  public void sendMailAuthFailed() throws MailAuthenticationException,
      MailSendException, MailException, MessagingException {
    doThrow(new MailAuthenticationException("")).when(smtpMailSender).send(
        email, subject, body);
    HttpStatus status = emailController.sendMail(mail);
    assertEquals(HttpStatus.UNAUTHORIZED, status);
  }
  
  @Test
  public void sendMailMessagingException() throws MailAuthenticationException,
      MailSendException, MailException, MessagingException {
    doThrow(new MessagingException("")).when(smtpMailSender).send(
        email, subject, body);
    HttpStatus status = emailController.sendMail(mail);
    assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, status);
  }
}
