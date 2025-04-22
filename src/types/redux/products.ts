export interface IProduct {
  _id: string;
  title: string;
  description: string;
}
export interface IProductResponse {
  data: IProduct[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
