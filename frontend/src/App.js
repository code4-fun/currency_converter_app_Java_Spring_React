import React from "react";
import Form from "./components/form/Form";
import store from './store'
import {observer} from "mobx-react-lite";
import History from "./components/statistics/History";
import Stat from "./components/statistics/Stat";

function App() {
  return (
    <div className="container">
      <h1>Конвертер валют</h1>
      <Form />
      {
        store.displayHistory &&
        <History />
      }
      {
        store.displayStat &&
        <Stat />
      }
    </div>
  );
}

export default observer(App);