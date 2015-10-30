/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.service;

import static net.logstash.logback.marker.Markers.append;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.trace.Trace;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import de.maximilianwollnik.homepage.repository.ExtendedTraceRepository;

/**
 * This service exports the current traces, so that it can be grabbed by elk
 * @author maximilian
 * @version 1.0
 * @since 1.1.0
 */
@Service
public class TraceExporterService {
  private static final Logger LOGGER = LoggerFactory
      .getLogger(TraceExporterService.class);
  private final ExtendedTraceRepository repository;

  /**
   * Instantiates a new trace exporter service.
   * @param repository the repository
   * @since 1.1.0
   */
  @Autowired
  public TraceExporterService(ExtendedTraceRepository repository) {
    this.repository = repository;
  }

  /**
   * Export traces.
   * @since 1.1.0
   */
  @Scheduled(initialDelay = 60000, fixedDelay = 60000)
  void exporttraces() {
    repository.findAll().forEach(this::log);
  }

  private void log(Trace t) {
    LOGGER.info(append("trace", t), "Reporting trace {}", t.getInfo());
    repository.clear();
  }
}
