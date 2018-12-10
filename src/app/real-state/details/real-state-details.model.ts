export class RealStateDetailsModel {
  picture: string;
  address: string;
  price: string;
  accommodations: {
    guests: number,
    bedrooms: number,
    beds: number,
    bathrooms: number
  };
  amenities: Array<{name: string, icon: string}> = [
    {
      name: '',
      icon: ''
    },
    {
      name: '',
      icon: ''
    }
  ];

  constructor(readonly isShell: boolean) { }
}
