import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '~/styles/colors';

export const Row = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TextWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Welcome = styled(Text)`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  color: ${colors.neutral.lightest};
`;

export const Name = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: ${colors.neutral.lightest};
`;

export const Container = styled(View)`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled(View)`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${colors.neutral.lightest};
`;
