import {useLazyQuery} from "@apollo/client";
import store from "../store";
import {getStatistics} from "../graphql_";

export const useStat = () => {
  const [getStat] = useLazyQuery(getStatistics)

  const fetchStat = () => {
    getStat().then(result => {
      store.setStat(result.data.getStatistics)
    })
  }

  return [fetchStat]
}