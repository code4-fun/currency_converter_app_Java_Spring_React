import {action, makeObservable, observable, runInAction} from "mobx";

class Store {
  charCodesFrom = []
  charCodesTo = []
  isFetchingHistory = false
  charCodeFrom = 'У меня есть'
  sumToConvert = ''
  charCodeTo = 'Хочу приобрести'
  sumConverted = ''
  dateTime = ''
  timer = null
  displayHistory = false
  displayStat = false
  history = []
  stat = []
  selectedListPresentation = 'Пагинация'
  historyTotalPages = 0
  historyTotalElements = 0
  selectedNumberOfElements = 20
  historyCurrentPage = 0
  selectedSort = 'Сортировка'
  selectedSortIsDisabled = false;
  sortParam = ''

  constructor(){
    makeObservable(this, {
      isFetchingHistory: observable,
      charCodeFrom: observable,
      sumToConvert: observable,
      charCodeTo: observable,
      sumConverted: observable,
      dateTime: observable,
      timer: observable,
      displayHistory: observable,
      displayStat: observable,
      history: observable,
      stat: observable,
      selectedListPresentation: observable,
      historyTotalPages: observable,
      historyTotalElements: observable,
      selectedNumberOfElements: observable,
      historyCurrentPage: observable,
      selectedSort: observable,
      selectedSortIsDisabled: observable,
      sortParam: observable,

      setCharCodesFrom: action,
      setCharCodesTo: action,
      setCharCodeFrom: action,
      setSumToConvert: action,
      setCharCodeTo: action,
      setSumConverted: action,
      setDateTime: action,
      setTimer: action,
      resetTimer: action,
      setDisplayHistory: action,
      setDisplayStat: action,
      setHistory: action,
      setHistoryTotalElements: action,
      setHistoryTotalPages: action,
      setStat: action,
      reset: action,
      setSelectedListPresentation: action,
      setSelectedNumberOfElements: action,
      setHistoryCurrentPage: action,
      setSelectedSort: action,
      setSelectedSortIsDisabled: action
    })
  }

  setCharCodesFrom(param){
    runInAction(() => {
      this.charCodesFrom = param
    })
  }

  setCharCodesTo(param){
    runInAction(() => {
      this.charCodesTo = param
    })
  }

  setCharCodeFrom(param){
    this.charCodeFrom = param
  }

  setSumToConvert(param){
    this.sumToConvert = param
  }

  setCharCodeTo(param){
    this.charCodeTo = param
  }

  setSumConverted(param){
    this.sumConverted = param
  }

  setDateTime(param){
    this.dateTime = param
  }

  setTimer(param){
    this.timer = param
  }

  resetTimer(){
    clearTimeout(this.timer)
  }

  setDisplayHistory(param){
    this.displayHistory = param
  }

  setDisplayStat(param){
    this.displayStat = param
  }

  setHistory(param){
    this.history = param
  }

  setStat(param){
    this.stat = param
  }

  reset() {
    this.sumToConvert = 0
    this.sumConverted = ''
  }

  setHistoryTotalElements(param){
    this.historyTotalElements = param
  }

  setHistoryTotalPages(param){
    this.historyTotalPages = param
  }

  setSelectedListPresentation(param){
    this.selectedListPresentation = param
  }

  setSelectedNumberOfElements(param){
    this.selectedNumberOfElements = param
  }

  setHistoryCurrentPage(param){
    this.historyCurrentPage = param
  }

  setSelectedSort(param) {
    this.selectedSort = param
  }

  setSelectedSortIsDisabled(param) {
    this.selectedSortIsDisabled = param
  }
}

export default new Store()