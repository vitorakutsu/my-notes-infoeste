import {Text} from 'react-native';
import {
  Button as BaseButton,
  TextInput as BaseTextInput,
} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '~/styles/colors';

export const TitleRegular = styled(Text)`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${colors.neutral.darkest};
  text-align: center;
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
  margin-top: 36px;
`;

export const ErrorText = styled(Text)`
  color: #ff0000;
  margin-top: 4px;
`;

export const ButtonContained = styled(BaseButton).attrs({
  mode: 'contained',
  buttonColor: colors.primary,
  contentStyle: {
    padding: 8,
  },
})`
  margin-top: 48px;
  border-radius: 4px;
`;

export const ButtonContainedLabel = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #fff;
`;
