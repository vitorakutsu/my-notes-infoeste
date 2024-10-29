import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {colors} from '~/styles/colors';
import {NoteItemPriority} from './note-item';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${colors.neutral.medium};
  margin-top: 12px;
`;

export const Row = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Column = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled(Text)<{isCompleted?: boolean}>`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: ${colors.neutral.darkest};
  text-decoration: ${({isCompleted}) =>
    isCompleted ? 'line-through' : 'none'};
`;

export const Content = styled(Text)<{isCompleted?: boolean}>`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  color: ${colors.neutral.medium};
  text-decoration: ${({isCompleted}) =>
    isCompleted ? 'line-through' : 'none'};
`;

export const Priority = styled(View)<{status?: NoteItemPriority}>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({status}) =>
    status === NoteItemPriority.LOW
      ? colors.priority.low
      : status === NoteItemPriority.MEDIUM
      ? colors.priority.medium
      : colors.priority.high};
`;
