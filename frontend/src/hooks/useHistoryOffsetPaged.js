import {useLazyQuery} from "@apollo/client";
import store from "../store";
import {getHistoryOffsetPaged} from "../graphql_";

export const useHistoryOffsetPaged = () => {
  const [getHistory] = useLazyQuery(getHistoryOffsetPaged)

  const fetchHistoryOffsetPaged = (offset, limit) => {
    getHistory({
      variables: {
        offset: offset,
        limit: limit
      }
    }).then(result => {
      if(store.selectedListPresentation === 'Пагинация'){
        store.setHistory(result.data.getHistoryOffsetPaged.currencyDtos)
      } else if (store.selectedListPresentation === 'Бесконечная прокрутка'){
        store.setHistory([...store.history, ...result.data.getHistoryOffsetPaged.currencyDtos])
      }
      store.setHistoryTotalElements(result.data.getHistoryOffsetPaged.totalElements)
      store.setHistoryTotalPages(Math.ceil(
        result.data.getHistoryOffsetPaged.totalElements / store.selectedNumberOfElements))
    })
  }

  return [fetchHistoryOffsetPaged]
}