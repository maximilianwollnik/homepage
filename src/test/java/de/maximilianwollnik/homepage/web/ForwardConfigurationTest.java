package de.maximilianwollnik.homepage.web;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import de.maximilianwollnik.homepage.Application;

@SpringApplicationConfiguration(classes = Application.class)
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@IntegrationTest("server.port=0")
public class ForwardConfigurationTest {
  
  @Value("${local.server.port}")
  private int port = 0;
  
  @Test
  public void testNotFound() throws Exception {
      ResponseEntity<String> entity = new TestRestTemplate()
              .getForEntity("http://localhost:" + this.port + "/a/b/c", String.class);
      assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
      assertThat(entity.getBody()).contains("meta http-equiv=\"refresh\"");
  }
}
