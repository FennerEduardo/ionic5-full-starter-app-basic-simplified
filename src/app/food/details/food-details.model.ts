export class FoodDetailsModel {
  icon: string;
  showcaseImage: string;
  name: string;
  shortName: string;
  style: string;
  priceRange: number;
  avgRating: number;
  ratings: Array<{concept: string, rate: number}> = [
    {
      concept: '',
      rate: null
    },
    {
      concept: '',
      rate: null
    },
    {
      concept: '',
      rate: null
    }
  ];
  reviewsCount: number;
  openHours: Array<{day: string, open: boolean, hourFrom: string, hourTo: string}> = [
    {
      day: '',
      open: true,
      hourFrom: '',
      hourTo: ''
    },
    {
      day: '',
      open: true,
      hourFrom: '',
      hourTo: ''
    },
    {
      day: '',
      open: false,
      hourFrom: '',
      hourTo: ''
    }
  ];
  location: {
    address: string,
    city: string,
    latlng: string
  };
  tags: Array<string> = [
    '',
    '',
    ''
  ];
  usersPictures: Array<string> = [
    '',
    '',
    '',
    '',
    '',
    ''
  ];
  popularDishes: Array<{name: string, rate: number, votesCount: number}> = [
    {
      name: '',
      rate: null,
      votesCount: null
    },
    {
      name: '',
      rate: null,
      votesCount: null
    }
  ];
  reviews: Array<{
    user: {image: string, name: string, reviewsCount: number, points: number},
    avgRating: number,
    ratings: Array<{concept: string, rate: number}>,
    publishedAt: string,
    message: string
  }> = [
    {
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        }
      ],
      publishedAt: null,
      message: ''
    },
    {
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        }
      ],
      publishedAt: null,
      message: ''
    },
    {
      user: {
        image: '',
        name: '',
        reviewsCount: null,
        points: null
      },
      avgRating: null,
      ratings: [
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        },
        {
          concept: '',
          rate: null
        }
      ],
      publishedAt: null,
      message: ''
    }
  ];
  popularRecipes: Array<{name: string, chef: string, dificulty: string, time: string, calories: string, chefExtract: string}> = [
    {
      name: '',
      chef: '',
      dificulty: '',
      time: '',
      calories: '',
      chefExtract: ''
    }
  ];

  constructor(readonly isShell: boolean) { }
}
