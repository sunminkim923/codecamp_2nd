import {useMutation} from '@apollo/client';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import MarketWriteUI from './marketWrite.presenter';
import {CREATE_USED_ITEM} from './marketWrite.queries';

const MarketWrite = () => {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { handleSubmit, control} = useForm({});
  const onPressSubmit = async () => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: name,
            price: price,
            useditemAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
            contents: contents,
          },
        },
      });
    } catch (error) {
      Alert(error.message);
    }
  };
  return (
    <MarketWriteUI
      onPressSubmit={onPressSubmit}
      handleSubmit={handleSubmit}
      control={control}
    />
  );
};
export default MarketWrite;
