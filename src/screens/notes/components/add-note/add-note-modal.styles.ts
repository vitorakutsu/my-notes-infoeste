import {Picker} from '@react-native-picker/picker';
import {Text} from 'react-native';
import {
  Button as BaseButton,
  TextInput as BaseTextInput,
} from 'react-native-paper';
import styled from 'styled-components/native';
import {colors} from '~/styles/colors';

export const Title = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: ${colors.neutral.darkest};
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const TextInput = styled(BaseTextInput).attrs({
  mode: 'outlined',
  outlineColor: colors.primary,
  activeOutlineColor: colors.primary,
})`
  margin-top: 8px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-width: 1px;
  padding: 16px;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 5px;
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

export const PickerContainer = styled.View`
  margin-top: 12px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledPicker = styled(Picker)`
  height: 56px;
  color: ${colors.neutral.darkest};
  padding-left: 16px;
`;
