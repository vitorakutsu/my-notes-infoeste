import {Text, View} from 'react-native';
import styled from 'styled-components';
import {
  TextInput as BaseTextInput,
  Button as BaseButton,
} from 'react-native-paper';
import {colors} from '~/styles/colors';

export const Centralized = styled(Text)`
  text-align: center;
`;

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px auto;
  gap: 4px;
`;

export const TitleRegular = styled(Text)`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${colors.neutral.darkest};
  text-align: center;
`;

export const TitleStylized = styled(Text)`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${colors.primary};
`;

export const Subtitle = styled(Text)`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.neutral.medium};
  margin-top: 8px;
  text-align: center;
`;

export const TextInput = styled(BaseTextInput).attrs({
  mode: 'outlined',
  outlineColor: colors.primary,
  activeOutlineColor: colors.primary,
})`
  margin-top: 16px;
`;

export const ButtonContained = styled(BaseButton).attrs({
  mode: 'contained',
  buttonColor: colors.primary,
  contentStyle: {
    padding: 8,
  },
})`
  margin: 24px 0;
  border-radius: 4px;
`;

export const ButtonContainedLabel = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #fff;
`;

export const OtherAccount = styled(Text)`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.neutral.medium};
`;

export const CreateAccount = styled(Text)`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.primary};
`;
