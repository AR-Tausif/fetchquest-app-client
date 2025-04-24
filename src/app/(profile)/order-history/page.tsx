"use client";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderHistoryTableBody } from "@/components/tables/order-history-table-body";
import { useGetMyOrderHistory } from "@/hooks/rtk-queries/useGetMyOrders";

export default function OrderHistory() {
  const { orders, myOrderPending } = useGetMyOrderHistory();

  if (myOrderPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <OrderHistoryTableBody orders={orders} />
      </Table>
    </div>
  );
}
