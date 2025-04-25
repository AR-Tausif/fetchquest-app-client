export interface IProduct {
  _id: string;
  name: string;
  images: string[];

  price: number;
  details: string;
  stock: number;
  category: string;
  isDeleted: false;
  createdAt: string;
  updatedAt: string;
}
export interface IProductResponse {
  data: IProduct[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
