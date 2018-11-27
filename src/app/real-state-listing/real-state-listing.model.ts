export class RealStateItemModel {
  picture: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
}

export class RealStateListingModel {
  items: Array<RealStateItemModel> = [
    new RealStateItemModel(),
    new RealStateItemModel(),
    new RealStateItemModel(),
    new RealStateItemModel()
  ];
}
