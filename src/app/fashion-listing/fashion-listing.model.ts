export class FashionItemModel {
  title: string;
  description: string;
  image: string;
}

export class FashionListingModel {
  title: string;
  items: Array<FashionItemModel> = [
    new FashionItemModel(),
    new FashionItemModel(),
    new FashionItemModel(),
    new FashionItemModel()
  ];
}
