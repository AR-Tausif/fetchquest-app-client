export interface IGame {
  _id: string;
  name: string;
  image: string;
  status: true;
  description: string;
  createdAt: string;
  updatedAt: string;
  link: string;
  __v: 0;
}
export interface IGameResponse {
  data: IGame[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}
