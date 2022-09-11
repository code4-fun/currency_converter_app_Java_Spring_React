import store from '../store'
import {useStat} from "./useStat";

export const useShowStat = () => {
  const [fetchStat] =  useStat()

  const displayStat = () => {
    store.setDisplayStat(!store.displayStat)
    if(store.displayHistory){
      store.setDisplayHistory(!store.displayHistory)
    }
    fetchStat()
  }

  return [displayStat]
}
