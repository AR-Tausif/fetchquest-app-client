export interface IGame {
  _id: "67f68a6a0eec87ef5a39ad77";
  name: "xyz";
  image: "http://192.168.10.147:3000/images/1744210538396-image_2025_02_06T13_57_43_935Z.png";
  status: true;
  description: "dfgdfgdf gdf dfgdf g";
  createdAt: "2025-04-09T14:55:38.405Z";
  updatedAt: "2025-04-09T14:55:48.136Z";
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
