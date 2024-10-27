import * as React from 'react';
import {FlatList} from 'react-native';
import {RequestCreateNote, RequestUpdateNote, ResponseNotes} from '~/api/notes';
import {NoteItem} from '~/components/note-item/note-item';
import {ActionButton, Row, Screen, Title} from './notes.styles';
import {AddNoteModal} from '~/screens/notes/components/add-note/add-note-modal';

interface INotesLayout {
  notes: ResponseNotes[];
  data: RequestCreateNote;
  onUpdateNote: (note: RequestUpdateNote) => Promise<void>;
  onDeleteNote: (id: string) => Promise<void>;
  onAddNote: () => Promise<void>;
  handleData: (name: string, value: string) => void;
}

export const NotesLayout = ({
  notes,
  data,
  handleData,
  onUpdateNote,
  onDeleteNote,
  onAddNote,
}: INotesLayout): React.ReactElement => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Screen>
      <Row>
        <Title>Checklist</Title>
        <ActionButton icon="plus" onPress={() => setShowModal(true)} />
      </Row>
      <FlatList
        data={notes}
        renderItem={({item}) => (
          <NoteItem
            note={item}
            onUpdateNote={onUpdateNote}
            onDeleteNote={onDeleteNote}
          />
        )}
      />
      <AddNoteModal
        data={data}
        show={showModal}
        handleData={handleData}
        onClose={() => setShowModal(false)}
        onSave={async () => {
          onAddNote();
          setShowModal(false);
        }}
      />
    </Screen>
  );
};
