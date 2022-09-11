import {useQuery} from "@apollo/client";
import {selectCharCodes} from "../graphql_";
import store from '../store'

export const useCharCodes = () => {
  const {data, loading} = useQuery(selectCharCodes)

  if(!loading) {
    const modifiedCharCodeFrom = [{value: store.charCodeFrom, disabled: true}, ...[...data.charCodes].map(item => {
      return {
        value: item
      }
    })]
    store.setCharCodesFrom(modifiedCharCodeFrom)

    const modifiedCharCodeTo = [{value: store.charCodeTo, disabled: true}, ...[...data.charCodes].map(item => {
      return {
        value: item
      }
    })]
    store.setCharCodesTo(modifiedCharCodeTo)
  }

  return [loading]
}
