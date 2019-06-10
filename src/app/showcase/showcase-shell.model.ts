export class ShowcaseShellModel {
  cover: string;
  image: string;
  title: string;
  description: string;

  constructor(readonly isShell: boolean) { }
}

export class ShowcaseShellRemoteApiModel {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  constructor(readonly isShell: boolean) { }
}
