import store from '../store'

export const useShowHistory = () => {

  const displayHistory = () => {
    store.setDisplayHistory(!store.displayHistory)
    if(store.displayStat){
      store.setDisplayStat(!store.displayStat)
    }
  }

  return [displayHistory]
}
