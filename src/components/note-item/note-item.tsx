import * as React from 'react';
import {Checkbox} from 'react-native-paper';
import {Container, Priority, Row, Title} from './note-item.styles';
import {RequestUpdateNote, ResponseNotes} from '~/api/notes';

interface INoteItem {
  note: ResponseNotes;
  onUpdateNote: (note: RequestUpdateNote) => Promise<void>;
  onDeleteNote: (id: string) => Promise<void>;
}

export enum NoteItemPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export const NoteItem = ({note, onUpdateNote, onDeleteNote}: INoteItem) => {
  const status = note.completed ? 'checked' : 'unchecked';

  return (
    <Container onLongPress={async () => onDeleteNote(note.id)}>
      <Row>
        <Checkbox
          status={status}
          onPress={async () =>
            onUpdateNote({id: note.id, completed: !note.completed})
          }
        />
        <Title isCompleted={note.completed}>{note.title}</Title>
      </Row>
      <Priority status={note.priority as NoteItemPriority} />
    </Container>
  );
};
