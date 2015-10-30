/*
 * Copyright (c) 2015, Maximilian Wollnik, All rights reserved.
 */
package de.maximilianwollnik.homepage.repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.boot.actuate.trace.Trace;
import org.springframework.stereotype.Repository;

/**
 * Implements my extended version of the trace repository
 * @author maximilian
 * @version 1.0
 * @since 1.1.0
 */
@Repository
public class InMemoryExtendedTraceRepository implements ExtendedTraceRepository {

  private int capacity = 100;

  private final List<Trace> traces = new LinkedList<Trace>();

  /* (non-Javadoc)
   * @see org.springframework.boot.actuate.trace.TraceRepository#findAll()
   */
  @Override
  public List<Trace> findAll() {
    synchronized (this.traces) {
      return Collections.unmodifiableList(new ArrayList<Trace>(this.traces));
    }
  }

  /* (non-Javadoc)
   * @see org.springframework.boot.actuate.trace.TraceRepository#add(java.util.Map)
   */
  @Override
  public void add(Map<String, Object> map) {
    Trace trace = new Trace(new Date(), map);
    synchronized (this.traces) {
      while (this.traces.size() >= this.capacity) {
        this.traces.remove(0);
      }
      this.traces.add(trace);
    }
  }

  /* (non-Javadoc)
   * @see de.maximilianwollnik.homepage.repository.ExtendedTraceRepository#clear()
   */
  @Override
  public void clear() {
    this.traces.clear();
  }

}
