package com.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.math3.util.Precision;

/**
 *                         __________endpoints__________
 *                        | /convert | /history | /stat |
 *   dateTime             |    +     |    +     |       |
 *   curFrom              |          |    +     |   +   |
 *   curTo                |          |    +     |   +   |
 *   exRate               |          |    +     |       |
 *   sumBeforeConversion  |          |    +     |   +   |
 *   sumAfterConversion   |    +     |    +     |       |
 *   averageExRate        |          |          |   +   |
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CurrencyDto {
  private String id;
  private String dateTime;
  private String curFrom;
  private String curTo;
  private Double exRate;
  private Double sumBeforeConversion;
  private Double sumAfterConversion;
  private Double averageExRate;
  private Double exRateSum;
  private Integer counter;

  public void addValueToSumBeforeConversion(Double value){
    this.sumBeforeConversion = sumBeforeConversion + value;
  }

  public void addValueToExRateSum(Double value){
    this.exRateSum = exRateSum + value;
  }

  public void incrementCounter(){
    this.counter++;
  }

  public void calculateAverageExRate(){
    averageExRate = Precision.round(exRateSum / counter, 4);
  }
}