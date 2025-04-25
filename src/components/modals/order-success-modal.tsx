import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderSuccessModal({ open, onOpenChange }: OrderSuccessModalProps) {
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <DialogTitle className="text-2xl font-semibold">Order Successful!</DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Your order has been placed successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-[#d14d8b] to-[#a64dbd]"
              onClick={() => router.push("/order-history")}
            >
              View Orders
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}