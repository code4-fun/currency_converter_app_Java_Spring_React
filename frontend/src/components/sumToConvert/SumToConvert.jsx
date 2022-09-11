import React from 'react';
import Input from "../ui/Input";
import store from '../../store'
import {observer} from "mobx-react-lite";
import {useConvertWithDelay} from "../../hooks/useConvertWithDelay";

const SumToConvert = observer(() => {
  const [convert] = useConvertWithDelay()

  return (
      <div>
        <Input
            value={store.sumToConvert}
            onInput={event => convert(event)}
            type='number'
            placeholder='Сумма'/>
      </div>
  );
});

export default SumToConvert;