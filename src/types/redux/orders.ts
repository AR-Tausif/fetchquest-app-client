interface IOrderResponse {
  id: number;
  userId: number;
  gameId: number;
}

interface IOrderReqBody {
  id: string;
  quantity: number;
}
interface IOrderRequest {
  products: IOrderReqBody[];
  address: string;
  contact: string;
}
