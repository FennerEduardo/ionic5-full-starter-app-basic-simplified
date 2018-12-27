export class DealsDetailsModel {
  showcaseImages: Array<string> = [
    '',
    '',
    ''
  ];
  previewImage: string;
  logo: string;
  name: string;
  code: string;
  description: string;
  expirationDate: string;
  relatedDeals: Array<{logo: string, name: string, description: string}> = [
    {
      logo: '',
      name: '',
      description: ''
    },
    {
      logo: '',
      name: '',
      description: ''
    },
    {
      logo: '',
      name: '',
      description: ''
    }
  ];

  constructor(readonly isShell: boolean) { }
}
