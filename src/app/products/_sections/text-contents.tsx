import { AppButton } from "@/components/buttons/app-button";
import { ChooseQuantity } from "./choose-quantity";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { IProduct } from "@/types/redux/products";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, selectCartItemById } from "@/redux/features/cart.slice";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Add this import

export const TextContents = ({ product }: { product: IProduct }) => {
  const { isAuthenticated, setIsAuthenticated, isToken } = useIsAuthenticated();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const router = useRouter(); // Add this

  const targetedProductQuantity = useAppSelector(
    (state) => selectCartItemById(state, product._id)?.quantity
  );

  const handleAddToCart = async ({ quantity = 1 }: { quantity: number }) => {
    setLoading(true);
    console.log(loading);
    // simulate delay or wait for server update if syncing with DB
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (product.stock <= 0) {
      toast.error("This product is out of stock");
      return;
    }

    const d = dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        imageUrl: product.images[0],
      })
    );

    console.log(d);

    toast.success("Added to cart successfully");
    setLoading(false);
    console.log(loading);
  };

  const handleBuyNow = async () => {
    if (product.stock <= 0) {
      toast.error("This product is out of stock");
      return;
    }

    try {
      // Add to cart with quantity 1
      dispatch(
        addToCart({
          id: product._id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          imageUrl: product.images[0],
        })
      );

      // Redirect to checkout
      router.push("/checkout");
    } catch (error) {
      toast.error("Failed to process purchase");
    }
  };

  return (
    <div className="mt-6 sm:mt-8 lg:mt-0">
      <div className="space-y-6">
        <div className="flex items-center gap-x-3">
          <p className="uppercase"> Gaming consoles </p>
          <div className="w-[30%] h-[3px] bg-gradient-to-r to-[#DA5DA3] from-[#7D3C98]" />
          <div className="flex gap-x-1">
            <div className="w-3 h-3 rounded-sm bg-[#DA5DA3]"></div>
            <div className="w-3 h-3 rounded-sm border border-[#DA5DA3]"></div>
          </div>
        </div>
        <p className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {product.name}
        </p>
      </div>
      <div className="mt-4 space-y-6">
        {/* Product reviews */}
        {/* <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          </div>
          <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
            (5.0)
          </p>
          <a
            href="#"
            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white roboto-fonts"
          >
            345 Reviews
          </a>
        </div> */}
        <p className="text-2xl font-extrabold text-[#DA5DA3] sm:text-3xl dark:text-white">
          $1,249.99
        </p>
        {/* <p className="text-sm">Tax Included</p> */}

        <div className="flex gap-x-2 items-center">
          <div className="w-3 h-3 rounded-sm bg-[#DA5DA3]"></div>
          <p className="">
            {product.stock <= 0
              ? "Out of stock"
              : "In stock, ready to be shipped"}
            {/* In stock, ready to be shipped */}
          </p>
        </div>
        <div className="">
          <label htmlFor="counter-input" className="sr-only">
            Choose quantity:
          </label>
          <ChooseQuantity
            handleAddToCart={handleAddToCart}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        {isToken ? (
          <AppButton
            onClick={handleBuyNow}
            className="w-full py-3 text-xl roboto-fonts"
          >
            Buy it now
          </AppButton>
        ) : (
          <Dialog open={isAuthenticated} onOpenChange={setIsAuthenticated}>
            <DialogTrigger asChild>
              <AppButton className="w-full py-3 text-xl roboto-fonts">
                Buy it now
              </AppButton>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] px-10 py-14">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center text-gray-500">
                  To buy a product, please log in to your account.
                </DialogTitle>
              </DialogHeader>

              <AppButton>
                <p className="flex justify-center items-center">
                  <p>LOG INTO YOUR ACCOUNT</p>
                  <p>
                    {" "}
                    <ChevronRight />{" "}
                  </p>
                </p>
              </AppButton>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};
