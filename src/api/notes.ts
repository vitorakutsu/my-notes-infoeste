import {NoteItemPriority} from '~/components/note-item/note-item';
import {client} from '~/services/axios-client';

export interface ResponseNotes {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  priority: string;
  authorId: string;
}

export interface RequestUpdateNote {
  id: string;
  completed: boolean;
}

export interface RequestCreateNote {
  title: string;
  content: string;
  priority: NoteItemPriority;
}

export const getNotes = async () => {
  try {
    const response = await client.get('/notes');
    return response.data as ResponseNotes[];
  } catch (error) {
    throw error;
  }
};

export const createNote = async ({
  title,
  content,
  priority,
}: RequestCreateNote) => {
  try {
    const response = await client.post('/notes', {title, content, priority});
    return response.status;
  } catch (error) {
    throw error;
  }
};

export const updateNote = async ({id, completed}: RequestUpdateNote) => {
  try {
    const response = await client.patch(`/notes/${id}`, {completed});

    return response.status;
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (id: string) => {
  try {
    const response = await client.delete(`/notes/${id}`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
