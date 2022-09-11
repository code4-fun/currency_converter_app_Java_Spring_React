package com.backend.facade.service;

import com.backend.dto.CurrencyDto;

public interface ConversionServiceFacade {
  CurrencyDto convertCurrency(String curFrom, String curTo, Double amount);
}
