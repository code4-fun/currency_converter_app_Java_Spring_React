import React from 'react';
import {observer} from "mobx-react-lite";
import store from "../../store";
import classes from "./Statistics.module.scss";

const Stat = observer(() => {
  return (
    <div>
      {
        <div>
          <hr />
          <div className='card'>
            <div className={classes.statContainer}>
              <div className={classes.statChild}>
                Продажа
              </div>
              <div className={classes.statChild}>
                Покупка
              </div>
              <div className={classes.statChild}>
                <div className={classes.thirdStatChild}>
                  Сумма
                </div>
              </div>
              <div className={classes.statChild}>
                Средний курс
              </div>
            </div>
          </div>
          {store.stat.map(i =>
            <div className='card' key={i.id}>
              <div className={classes.statContainer}>
                <div className={classes.statChild}>
                  {i.curFrom}
                </div>
                <div className={classes.statChild}>
                  {i.curTo}
                </div>
                <div className={classes.statChild}>
                  <div className={classes.thirdStatChild}>
                    {i.sumBeforeConversion}
                  </div>
                </div>
                <div className={classes.statChild}>
                  {i.averageExRate}
                </div>
              </div>
            </div>)}
        </div>
      }
    </div>
  );
});

export default Stat;