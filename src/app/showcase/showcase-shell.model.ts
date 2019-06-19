import { ShellModel } from '../shell/data-store';

export class ShowcaseShellModel extends ShellModel {
  cover: string;
  image: string;
  title: string;
  description: string;

  constructor() {
    super();
  }
}

export class ShowcaseShellUsersListModel extends ShellModel {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  constructor() {
    super();
  }
}
