import { TableBody, TableCell, TableRow } from "../ui/table";
import Image from "next/image";

import { format } from "date-fns";
import { IOrderResponse } from "@/types/redux/orders";

interface IOrderHistoryTableBodyProps {
  orders: IOrderResponse[];
}

export const OrderHistoryTableBody = ({
  orders,
}: IOrderHistoryTableBodyProps) => {
  return (
    <TableBody>
      {orders?.map((order) =>
        order.products.map((product) => (
          <TableRow key={`${order._id}-${product._id}`}>
            <TableCell>
              <div className="relative w-20 h-20">
                <Image
                  src={product.id.images[0]}
                  alt={product.id.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </TableCell>
            <TableCell>
              <div>
                <h3 className="font-medium">{product.id.name}</h3>
                <p className="text-sm text-gray-500">{product.id.details}</p>
              </div>
            </TableCell>
            <TableCell>${product.id.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>${product.id.price * product.quantity}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  order.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : order.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>
              {format(new Date(order.createdAt), "MMM dd, yyyy")}
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
};
