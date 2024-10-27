import {Document} from '~/screens/document/document.container';
import {NewLogin} from '~/screens/new-login/new-login.container';
import {NewName} from '~/screens/new-name/new-name.container';
import {SCREEN_DEFINITIONS} from './screen-definitions';
import NewPassword from '~/screens/new-password/new-password.container';
import {Notes} from '~/screens/notes/notes.container';

export interface IRoutes {
  route: any;
}

export const routes = [
  {
    name: SCREEN_DEFINITIONS.document,
    component: Document,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN_DEFINITIONS.newLogin,
    component: NewLogin,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN_DEFINITIONS.newName,
    component: NewName,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN_DEFINITIONS.newPassword,
    component: NewPassword,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREEN_DEFINITIONS.notes,
    component: Notes,
    options: {
      headerShown: false,
    },
  },
];
