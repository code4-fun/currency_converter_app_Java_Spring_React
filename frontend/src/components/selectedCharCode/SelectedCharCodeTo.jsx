import React from 'react';
import Select from "../ui/Select";
import store from "../../store";
import {observer} from "mobx-react-lite";
import {useConvert} from "../../hooks/useConvert";

const SelectedCharCodeTo = observer(({loading}) => {
  const [convert] = useConvert()

  return (
    <div>
      {
        loading
          ?
          <Select/>
          :
          <Select
            options={store.charCodesTo}
            selectedOption={store.charCodeTo}
            onChange={i => {
              store.setCharCodeTo(i)
              convert()
            }}
          />
      }
    </div>
  );
});

export default SelectedCharCodeTo;