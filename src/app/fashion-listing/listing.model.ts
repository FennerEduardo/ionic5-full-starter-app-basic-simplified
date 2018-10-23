export class ListingItemModel {
  title: string;
  description: string;
  image: string;
}

export class ListingModel {
  title: string;
  items: Array<ListingItemModel> = [
    new ListingItemModel(),
    new ListingItemModel(),
    new ListingItemModel(),
    new ListingItemModel()
  ];
}
