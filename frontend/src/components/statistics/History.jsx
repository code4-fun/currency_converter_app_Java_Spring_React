import React, {useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {useObserver} from "../../hooks/useObserver";
import {useSelectedListPresentation} from "../../hooks/useSelectedListPresentation";
import store from "../../store";
import ListDisplaySelectorsFrame from "../listDisplaySelectors/ListDisplaySelectorsFrame";
import classes from "./Statistics.module.scss";
import PageButtons from "../pageButtons/PageButtons";
import {useHistoryOffsetPaged} from "../../hooks/useHistoryOffsetPaged";

const History = observer(() => {
  const lastElement = useRef()
  useObserver(lastElement)
  useSelectedListPresentation()
  const [fetchHistoryFirstPage] =  useHistoryOffsetPaged()
  const [fetchHistoryNotFirstPage] =  useHistoryOffsetPaged()

  useEffect(() => {
    if(store.selectedNumberOfElements === 'Показать все'){
      fetchHistoryFirstPage(0, store.historyTotalElements)
    } else {
      fetchHistoryNotFirstPage(
        (store.historyCurrentPage - 1) * store.selectedNumberOfElements,
        store.selectedNumberOfElements)
    }
  }, [store.historyCurrentPage, store.selectedNumberOfElements, store.selectedSort])

  return (
    <div>
      {
        <div>
          <hr />
          <div>
            <ListDisplaySelectorsFrame />
          </div>
          <div className={['card', classes.historyTitle].join(' ')}>
            <div className={classes.historyContainer}>
              <div className={classes.historyChild}>
                Дата
              </div>
              <div className={classes.historyChild}>
                Продажа
              </div>
              <div className={classes.historyChild}>
                Покупка
              </div>
              <div className={classes.historyChild}>
                Сумма продажи
              </div>
              <div className={classes.historyChild}>
                Курс
              </div>
              <div className={classes.historyChild}>
                Сумма покупки
              </div>
            </div>
          </div>
          {store.history.map(i =>
            <div className='card' key={i.id}>
              <div className={classes.historyContainer}>
                <div className={classes.historyChild}>
                  {i.dateTime}
                </div>
                <div className={classes.historyChild}>
                  {i.curFrom}
                </div>
                <div className={classes.historyChild}>
                  {i.curTo}
                </div>
                <div className={classes.historyChild}>
                  {i.sumBeforeConversion}
                </div>
                <div className={classes.historyChild}>
                  {i.exRate}
                </div>
                <div className={classes.historyChild}>
                  {i.sumAfterConversion}
                </div>
              </div>
            </div>)
          }
          <div ref={lastElement}></div>
          {
            store.selectedListPresentation === 'Пагинация'
            && store.selectedNumberOfElements !== 'Показать все' &&
            <div>
              <PageButtons
                totalPages={store.historyTotalPages}
                currentPage={store.historyCurrentPage}
                changePage={page => store.setHistoryCurrentPage(page)}
              />
            </div>
          }
        </div>
      }
    </div>
  );
});

export default History;