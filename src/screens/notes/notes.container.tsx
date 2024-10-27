import * as React from 'react';
import {NotesLayout} from './notes.layout';
import {
  createNote,
  deleteNote,
  getNotes,
  RequestCreateNote,
  RequestUpdateNote,
  ResponseNotes,
  updateNote,
} from '~/api/notes';
import Toast from 'react-native-toast-message';
import {NoteItemPriority} from '~/components/note-item/note-item';

const INITIAL_DATA_STATE: RequestCreateNote = {
  title: '',
  content: '',
  priority: NoteItemPriority.LOW,
};

export const Notes = () => {
  const [notes, setNotes] = React.useState<ResponseNotes[]>([]);
  const [data, setData] = React.useState<RequestCreateNote>(INITIAL_DATA_STATE);

  React.useEffect(() => {
    onRequestNotes();
  }, []);

  const onUpdateNote = async ({id, completed}: RequestUpdateNote) => {
    try {
      await updateNote({id, completed}).then(async data => {
        if (data === 200) {
          await onRequestNotes();
          Toast.show({
            type: 'success',
            text1: 'Anotação atualizada',
          });
        }
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: 'Tente novamente mais tarde',
        visibilityTime: 3000,
      });
    }
  };

  const onDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
      await onRequestNotes();
      Toast.show({
        type: 'success',
        text1: 'Anotação deletada',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: 'Tente novamente mais tarde',
        visibilityTime: 3000,
      });
    }
  };

  const onRequestNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response as ResponseNotes[]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleData = (name: string, value: string) => {
    setData({...data, [name]: value});
  };

  const onAddNote = async () => {
    try {
      await createNote(data).then(async data => {
        if (data === 201) {
          await onRequestNotes();
          Toast.show({
            type: 'success',
            text1: 'Anotação criada',
          });
          setData(INITIAL_DATA_STATE);
        }
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: 'Tente novamente mais tarde',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <NotesLayout
      notes={notes}
      data={data}
      onUpdateNote={onUpdateNote}
      onDeleteNote={onDeleteNote}
      onAddNote={onAddNote}
      handleData={handleData}
    />
  );
};
