/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.service;

import static net.logstash.logback.marker.Markers.append;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.Metric;
import org.springframework.boot.actuate.metrics.repository.MetricRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * This service exports the current metrics, so that it can be grabbed by elk.
 * <p>
 * Since version 1.1 every metric from the package "gauge.servo" is not logged anymore.
 * <p>
 * Since version 1.2 every metric from the package "gauge.counter" is not logged anymore.
 * @author maximilain
 * @version 1.2
 * @since 1.1.0
 */
@Service
public class MetricExporterService {
  private static final Logger LOGGER = LoggerFactory
      .getLogger(MetricExporterService.class);
  private final MetricRepository repository;
  private static final List<String> EXCLUDE_METRIC = new ArrayList<String>() {
    private static final long serialVersionUID = -454555003005940908L;

    {
      add("gauge.servo");
      add("gauge.counter");
    }
  };

  /**
   * Instantiates a new metric exporter service.
   * @param repository the repository
   * @since 1.1.0
   */
  @Autowired
  public MetricExporterService(MetricRepository repository) {
    this.repository = repository;
  }

  /**
   * Export metrics.
   * @since 1.1.0
   */
  @Scheduled(initialDelay = 60000, fixedDelay = 60000)
  void exportMetrics() {
    repository.findAll().forEach(this::log);
  }

  private void log(Metric<?> m) {
    boolean proceed = true;
    for (Iterator<String> iterator = EXCLUDE_METRIC.iterator(); iterator.hasNext();) {
      String string = (String) iterator.next();
      if (m.getName().indexOf(string) > -1) {
        proceed = false;
        break;
      }
    }
    if (proceed) {
      LOGGER.info(append("metric", m), "Reporting metric {}={}", m.getName(),
          m.getValue());
    }
    repository.reset(m.getName());
  }
}
