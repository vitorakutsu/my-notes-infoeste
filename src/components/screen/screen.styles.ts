import {Image, Text, View} from 'react-native';
import {ScrollView as BaseScrollView} from 'react-native';
import styled from 'styled-components';
import {colors} from '~/styles/colors';

export const Container = styled(View)`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Regular = styled(Text)`
  font-family: 'Poppins-SemiBold';
  color: ${colors.neutral.lightest};
  font-size: 16px;
`;

export const Stylized = styled(Text)`
  font-family: 'Poppins-SemiBold';
  color: ${colors.primary};
  font-size: 16px;
`;

export const Logo = styled(Image)`
  width: 48px;
  height: 48px;
`;

export const TopImage = styled(Image)`
  width: 400px;
  height: 350px;
`;

export const Children = styled(View)`
  flex: 1;
  background-color: ${colors.neutral.lightest};
  padding: 24px 16px;
  border-radius: 24px;
`;

export const ScrollView = styled(BaseScrollView)`
  flex: 1;
`;

export const LoginWrapper = styled(View)`
  flex: 1;
  padding: 12px;
`;

export const HomeChildren = styled(View)`
  flex: 1;
  background-color: ${colors.neutral.lightest};
  border-radius: 24px 24px 0 0;
  padding: 32px 16px;
`;
