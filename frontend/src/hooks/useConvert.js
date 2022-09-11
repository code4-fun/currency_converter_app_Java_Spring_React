import store from "../store";
import {useLazyQuery} from "@apollo/client";
import {convertCurrency} from "../graphql_";

export const useConvert = () => {
  const [getConverted] = useLazyQuery(convertCurrency)

  const convert = async () => {
    if(store.charCodeFrom !== 'У меня есть'
        && store.charCodeTo !== 'Хочу приобрести'
        && parseInt(store.sumToConvert) > 0
        && store.sumToConvert !== ''
        && store.sumToConvert !== undefined){
      const res = await getConverted({
        variables: {
          curfrom: store.charCodeFrom,
          curto: store.charCodeTo,
          amount: store.sumToConvert
        }
      })

      store.setSumConverted(res.data.convert.sumAfterConversion)
      store.setDateTime(res.data.convert.dateTime)
    }
  }

  return [convert]
}