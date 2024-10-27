import * as React from 'react';
import {Modal, Text} from 'react-native';
import {RequestCreateNote} from '~/api/notes';
import {
  ButtonContained,
  ButtonContainedLabel,
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  PickerContainer,
  StyledPicker,
  TextInput,
  Title,
} from './add-note-modal.styles';
import {Picker} from '@react-native-picker/picker';

interface IModal {
  show: boolean;
  data: RequestCreateNote;
  onClose: () => void;
  onSave: () => Promise<void>;
  handleData: (name: string, value: string) => void;
}

export const AddNoteModal = ({
  show,
  data,
  onClose,
  onSave,
  handleData,
}: IModal) => {
  const isDisabled = !data.title || !data.content;

  if (!show) {
    return null;
  }

  return (
    <Modal transparent visible={show} animationType="slide">
      <ModalContainer>
        <ModalHeader>
          <Title>Adicionar anotação</Title>
          <CloseButton onPress={onClose}>
            <Text>✕</Text>
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <TextInput
            label="Digite o título da anotação"
            value={data.title}
            onChangeText={value => handleData('title', value)}
          />
          <TextInput
            label="Digite uma descrição"
            value={data.content}
            onChangeText={value => handleData('content', value)}
            multiline
          />

          <PickerContainer>
            <StyledPicker
              selectedValue={data.priority}
              onValueChange={value => handleData('priority', value as string)}>
              <Picker.Item label="Alta" value="HIGH" />
              <Picker.Item label="Média" value="MEDIUM" />
              <Picker.Item label="Baixa" value="LOW" />
            </StyledPicker>
          </PickerContainer>
          <ButtonContained onPress={onSave} disabled={isDisabled}>
            <ButtonContainedLabel>Adicionar</ButtonContainedLabel>
          </ButtonContained>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
