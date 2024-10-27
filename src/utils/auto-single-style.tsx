import React, {ComponentType, ReactElement} from 'react';
import {Text} from 'react-native';

export const autoSingleStyle = (
  text: string,
  separator = '*',
  Regular: ComponentType<any>,
  Stylized: ComponentType<any>,
): ReactElement => {
  const pieces = text.split(separator).map((piece, index) => {
    if (index % 2 === 0) {
      return <Regular key={index}>{piece}</Regular>;
    }

    return <Stylized key={index}>{piece}</Stylized>;
  });

  return <Text>{pieces}</Text>;
};
