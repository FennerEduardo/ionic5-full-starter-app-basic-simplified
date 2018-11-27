export class DealsItemModel {
  logo: string;
  name: string;
  code: string;
  description: string;
  expirationDate: string;
}

export class DealsListingModel {
  items: Array<DealsItemModel> = [
    new DealsItemModel(),
    new DealsItemModel(),
    new DealsItemModel(),
    new DealsItemModel()
  ];
}
