export class FashionDetailsModel {
  showcaseImages: Array<{type: string, source: string}> = [
    {
      type: '',
      source: ''
    },
    {
      type: '',
      source: ''
    },
    {
      type: '',
      source: ''
    }
  ];
  name: string;
  brand: string;
  price: number;
  salePrice: number;
  colorVariants: Array<{name: string, value: string}> = [
    {
      name: '',
      value: ''
    },
    {
      name: '',
      value: ''
    },
    {
      name: '',
      value: ''
    }
  ];
  sizeVariants: Array<{name: string, value: string}> = [
    {
      name: '',
      value: ''
    },
    {
      name: '',
      value: ''
    },
    {
      name: '',
      value: ''
    }
  ];
  description: string;
  careInstructions: string;
  upc: string;
  relatedProducts: Array<{id: number}> = [
    {
      id: null
    },
    {
      id: null
    }
  ];

  constructor(readonly isShell: boolean) { }
}
