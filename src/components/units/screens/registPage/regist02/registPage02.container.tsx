import React, {useState} from 'react';
import Regist02UI from './registPage02.presenter';
const Regist02 = () => {
  const [selectedValue, setSelectedValue] = useState('리트리버');
  return (
    <Regist02UI
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};
export default Regist02;
