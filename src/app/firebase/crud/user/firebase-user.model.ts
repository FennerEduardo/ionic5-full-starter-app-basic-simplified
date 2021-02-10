export class FirebaseUserModel {
  id: string;
  avatar: string;
  name: string;
  lastname: string;
  email: string;
  phone: number;
  age?: number;
  birthdate: number; // timestamp
  skills: Array<any> = [
    '',
    '',
    ''
  ];
  languages: {
    spanish: number,
    english: number,
    french: number
  } = {
    spanish: 0,
    english: 0,
    french: 0
  };
}
