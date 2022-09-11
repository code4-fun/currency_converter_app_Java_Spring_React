import React from 'react';
import Select from "../ui/Select";
import store from "../../store";
import {observer} from "mobx-react-lite";
import {useConvert} from "../../hooks/useConvert";

const SelectedCharCodeFrom = observer(({loading}) => {
  const [convert] = useConvert()

  return (
    <div>
      {
        loading
          ?
          <Select />
          :
          <Select
            options={store.charCodesFrom}
            selectedOption={store.charCodeFrom}
            onChange={i => {
              store.setCharCodeFrom(i)
              convert()
            }}
          />
      }
    </div>
  );
});

export default SelectedCharCodeFrom;