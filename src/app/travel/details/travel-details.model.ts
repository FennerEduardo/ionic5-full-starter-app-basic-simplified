export class TravelDetailsModel {
  image: string;
  icon: string;
  name: string;
  category: string;
  shortDescription: string;
  rating: number;
  reviewsCount: number;
  tags: Array<string> = new Array(3).fill('');
  fullDescription: string;
  openHours: Array<{day: string, hourFrom: string, hourTo: string}> = [
    {
      day: '',
      hourFrom: '',
      hourTo: ''
    },
    {
      day: '',
      hourFrom: '',
      hourTo: ''
    }
  ];
  location: {
    address: string,
    city: string,
    latlng: string
  };
  whereToStay: Array<{picture: string, name: string, rating: number}> = [
    {
      picture: '',
      name: '',
      rating: null
    },
    {
      picture: '',
      name: '',
      rating: null
    },
    {
      picture: '',
      name: '',
      rating: null
    }
  ];
  whereToEat: Array<{picture: string, name: string, rating: number}> = [
    {
      picture: '',
      name: '',
      rating: null
    },
    {
      picture: '',
      name: '',
      rating: null
    },
    {
      picture: '',
      name: '',
      rating: null
    }
  ];
  relatedActivities: Array<{picture: string, name: string, category: string, rating: number}> = [
    {
      picture: '',
      name: '',
      category: '',
      rating: null
    },
    {
      picture: '',
      name: '',
      category: '',
      rating: null
    }
  ];

  constructor(readonly isShell: boolean) { }
}
