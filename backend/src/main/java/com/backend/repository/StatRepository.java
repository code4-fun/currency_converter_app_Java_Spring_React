package com.backend.repository;

import com.backend.domain.Stat;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface StatRepository extends CrudRepository<Stat, Long> {
  List<Stat> findAll();

  @Query(value = "select * from stat offset :offset limit :limit", nativeQuery = true)
  List<Stat> findAllAndOffsetAndLimit(@Param("offset") Long offset, @Param("limit") Long limit);

  List<Stat> findByDateTimeBetween(LocalDateTime startDateTime, LocalDateTime endDateTime);
}