import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import styled from 'styled-components';
import {Screen as BaseScreen, ScreenTypes} from '~/components/screen/screen';
import {colors} from '~/styles/colors';

export const Screen = styled(BaseScreen).attrs({
  type: ScreenTypes.HOME,
})``;

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: ${colors.neutral.darkest};
`;

export const ActionButton = styled(FAB)`
  width: 48px;
  height: 48px;
  background-color: ${colors.primary};
`;
