import React, {ReactElement} from 'react';
import {Screen} from '~/components/screen/screen';
import {autoSingleStyle} from '~/utils/auto-single-style';
import {
  ButtonContained,
  ButtonContainedLabel,
  Centralized,
  Subtitle,
  TextInput,
  TitleRegular,
  TitleStylized,
} from './document.styles';

interface IDocumentLayout {
  email: string;
  handleData: (value: string) => void;
  onSubmit: () => void;
}

export const DocumentLayout = ({
  email,
  handleData,
  onSubmit,
}: IDocumentLayout): ReactElement => {
  const renderTitle = () => (
    <Centralized>
      {autoSingleStyle(
        'O jeito mais *fácil* de organizar sua rotina maluca ',
        '*',
        TitleRegular,
        TitleStylized,
      )}
    </Centralized>
  );

  const renderSubtitle = () => (
    <Centralized>
      <Subtitle>
        Organize suas tarefas e ideias de forma simples e rápida. Tudo o que
        você precisa, em um só lugar!
      </Subtitle>
    </Centralized>
  );

  const renderMainContent = () => (
    <>
      <TextInput
        value={email}
        placeholder="Digite seu email"
        onChange={e => handleData(e.nativeEvent.text)}
      />
      <ButtonContained onPress={onSubmit}>
        <ButtonContainedLabel>Continuar</ButtonContainedLabel>
      </ButtonContained>
    </>
  );

  return (
    <Screen>
      {renderTitle()}
      {renderSubtitle()}
      {renderMainContent()}
    </Screen>
  );
};
