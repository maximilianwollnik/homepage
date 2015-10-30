/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.repository;

import org.springframework.boot.actuate.trace.TraceRepository;

/**
 * Extends the default Trace Repository
 * @author maximilian
 * @version 1.0
 * @since 1.1.0
 */
public interface ExtendedTraceRepository extends TraceRepository {

  /**
   * Clear.
   */
  public void clear();
}
