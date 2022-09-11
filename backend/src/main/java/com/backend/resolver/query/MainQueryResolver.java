package com.backend.resolver.query;

import com.backend.dto.CurrencyDto;
import com.backend.dto.HistoryWithMeta;
import com.backend.facade.service.ConversionServiceFacade;
import com.backend.facade.service.CurrencyServiceFacade;
import com.backend.facade.service.StatServiceFacade;
import com.backend.service.DataProcessingService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.relay.Connection;
import graphql.relay.SimpleListConnection;
import graphql.schema.DataFetchingEnvironment;

import java.io.IOException;
import java.util.List;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MainQueryResolver implements GraphQLQueryResolver {
  @NonNull private final DataProcessingService dataProcessingService;
  @NonNull private final CurrencyServiceFacade currencyService;
  @NonNull private final ConversionServiceFacade conversionService;
  @NonNull private final StatServiceFacade statService;

  public List<String> charCodes() throws IOException {
    dataProcessingService.parse();
    return currencyService.getAllCurrenciesCharCodes();
  }

  public CurrencyDto convert(String curFrom, String curTo, String amount){
    return conversionService.convertCurrency(curFrom, curTo, Double.parseDouble(amount));
  }

  public HistoryWithMeta getHistoryOffsetPaged(Long offset, Long limit){
    List<CurrencyDto> historyPageFeed = statService.getHistoryPageFeed(offset, limit);
    Long totalNumberOfStat = statService.totalNumberOfStat();
    return HistoryWithMeta
      .builder()
      .currencyDtos(historyPageFeed)
      .totalElements(totalNumberOfStat)
      .build();
  }

  public Connection<CurrencyDto> getHistoryCursorPaged(int first, String after,
                                            DataFetchingEnvironment environment) {
    List<CurrencyDto> history = statService.getHistory();
    return new SimpleListConnection<>(history).get(environment);
  }


  public List<CurrencyDto> getStatistics(){

    List<CurrencyDto> statistics = statService.getStatistics();
    return statService.getStatistics();
  }
}