import { gql } from "@apollo/client"

export const selectCharCodes = gql`
    query {
        charCodes
    }
`

export const convertCurrency = gql`
    query(
        $curfrom: String,
        $curto: String,
        $amount: String){
        convert(
            curfrom: $curfrom,
            curto: $curto,
            amount: $amount,
        ){
            dateTime
            sumAfterConversion
        }
    }
`

export const getHistoryCursorPaged = gql`
    query(
        $first: Int,
        $after: String) {
        getHistoryCursorPaged(
            first: $first,
            after: $after) {
            edges {
                cursor
                node {
                    id
                    dateTime
                    curFrom
                    curTo
                    exRate
                    sumBeforeConversion
                    sumAfterConversion
                    averageExRate
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
`

export const getHistoryOffsetPaged = gql`
    query(
        $offset: Int,
        $limit: Int) {
        getHistoryOffsetPaged(
            offset: $offset,
            limit: $limit) {
            currencyDtos{
                id
                dateTime
                curFrom
                curTo
                exRate
                sumBeforeConversion
                sumAfterConversion
                averageExRate
            }
            totalElements
        }
    }
`

export const getStatistics = gql`
    query {
        getStatistics {
            curFrom
            curTo
            sumBeforeConversion
            averageExRate
        }
    }
`