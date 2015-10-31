/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.Metric;
import org.springframework.boot.actuate.metrics.repository.MetricRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import static net.logstash.logback.marker.Markers.append;

/**
 * This service exports the current metrics, so that it can be grabbed by elk
 * @author maximilain
 * @version 1.0
 * @since 1.1.0
 */
@Service
public class MetricExporterService {
  private static final Logger LOGGER = LoggerFactory
      .getLogger(MetricExporterService.class);
  private final MetricRepository repository;

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
    LOGGER.info(append("metric", m), "Reporting metric {}={}", m.getName(),
        m.getValue());
    repository.reset(m.getName());
  }
}