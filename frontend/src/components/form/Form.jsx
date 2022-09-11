import React from 'react';
import SelectedCharCodeFrom from "../selectedCharCode/SelectedCharCodeFrom";
import SumConverted from "../sumConverted/SumConverted";
import SumToConvert from "../sumToConvert/SumToConvert";
import store from "../../store";
import Button from "../ui/button/Button";
import {useCharCodes} from "../../hooks/useCharCodes";
import SelectedCharCodeTo from "../selectedCharCode/SelectedCharCodeTo";
import {useShowHistory} from "../../hooks/useShowHistory";
import {useShowStat} from "../../hooks/useShowStat";

const Form = () => {
  const [loading] = useCharCodes()
  const [displayHistory] = useShowHistory()
  const [displayStat] = useShowStat()

  return (
    <div className='card'>
      <SelectedCharCodeFrom
        loading = {loading} />
      <SumToConvert />
      <SelectedCharCodeTo
        loading = {loading} />
      <SumConverted />

      <Button onClick={() => {
        displayHistory()
        store.setHistoryCurrentPage(1)}}>
        Показать историю
      </Button>
      <Button onClick={() => displayStat()}>Показать статистику за неделю</Button>
      <Button onClick={() => store.reset()}>Reset</Button>
    </div>
  );
};

export default Form;