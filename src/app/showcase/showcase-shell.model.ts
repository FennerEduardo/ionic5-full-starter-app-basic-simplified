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

export class ShowcaseShellUserModel extends ShellModel {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  constructor() {
    super();
  }
}

export class ShowcaseCommentModel extends ShellModel {
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor() {
    super();
  }
}

export class ShowcasePostModel extends ShellModel {
  id: number;
  title: string;
  body: string;

  constructor() {
    super();
  }
}
