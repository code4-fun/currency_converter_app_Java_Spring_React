import store from "../store";
import {useConvert} from "./useConvert";

export const useConvertWithDelay = () => {
  const [convert] = useConvert()

  const convertWithDelay = (event) => {
    store.setSumToConvert(event.target.value)
    store.resetTimer()
    if (event.target.value !== ''
        && event.target.value !== 0
        && store.charCodeFrom !== 'У меня есть'
        && store.charCodeTo !== 'Хочу приобрести') {
      store.setTimer(setTimeout(() => {
        convert()
      }, 2000))
    }
  }

  return [convertWithDelay]
}