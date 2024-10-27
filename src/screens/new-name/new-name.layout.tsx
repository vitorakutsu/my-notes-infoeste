import React, {ReactElement} from 'react';
import {Screen} from '~/components/screen/screen';
import {
  ButtonContained,
  ButtonContainedLabel,
  Subtitle,
  TextInput,
  TitleRegular,
} from './new-name.styles';

interface INewNameLayout {
  name: string;
  handleData: (value: string) => void;
  onSubmit: () => void;
}

export const NewNameLayout = ({
  name,
  handleData,
  onSubmit,
}: INewNameLayout): ReactElement => {
  const renderTitle = () => (
    <TitleRegular>
      Parece que você ainda não faz parte da comunidade!
    </TitleRegular>
  );

  const renderSubtitle = () => (
    <Subtitle>
      Digite seu nome completo para que possamos continuar o seu cadastro dentro
      da plataforma
    </Subtitle>
  );

  const renderMainContent = () => (
    <>
      <TextInput
        value={name}
        placeholder="Digite seu nome completo"
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
