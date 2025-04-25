export interface IBlog {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlogResponse {
  data: IBlog[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}
