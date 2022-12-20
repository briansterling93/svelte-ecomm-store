export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  test: string;
}

export interface Rating {
  count: number;
  rate: number;
}
