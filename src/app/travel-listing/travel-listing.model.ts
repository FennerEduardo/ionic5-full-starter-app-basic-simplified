export class TravelItemModel {
  image: string;
  icon: string;
  name: string;
  description: string;
  category: string;
  address: string;
  rating: number;
  reviewsCount: number;

  // "picture": "./img/sample-images/travel/Travel1-64.47.png",
  // "icon": "./img/sample-images/travel/TravelIcon1.png",
  // "name": "Tristán Narvaja ",
  // "category": "Flea Market",
  // "description": "Every Sunday from early morning until three in the afternoon enjoy the biggest market in Montevideo.",
  // "rating": 4.8,
  // "address": "Cordón, Montevideo, Uruguay.",
}

export class TravelListingModel {
  title: string;
  items: Array<TravelItemModel> = [
    new TravelItemModel(),
    new TravelItemModel(),
    new TravelItemModel(),
    new TravelItemModel()
  ];
}
