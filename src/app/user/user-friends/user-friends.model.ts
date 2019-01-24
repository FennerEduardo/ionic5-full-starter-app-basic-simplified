export class UserFriendsModel {
  friends: Array<{image: string, name: string, job: string,  followers: string,  following: string}> = [
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    }
  ];
  followers: Array<{image: string, name: string, job: string,  followers: string,  following: string}> = [
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    }
  ];
  following: Array<{image: string, name: string, job: string,  followers: string,  following: string}> = [
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    },
    {
      image: '',
      name: '',
      job: '',
      followers: '',
      following: ''
    }
  ];

  constructor(readonly isShell: boolean) { }
}
