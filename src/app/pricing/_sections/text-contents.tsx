import { AppButton } from "@/components/buttons/app-button";
import { ChooseQuantity } from "./choose-quantity";

export const TextContents = () => {
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
          PLAW STATION 08
        </p>
      </div>
      <div className="mt-4 space-y-6">
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
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
        </div>
        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          $1,249.99
        </p>
        <p className="text-sm">Tax Included</p>

        <div className="flex gap-x-2 items-center">
          <div className="w-3 h-3 rounded-sm bg-[#DA5DA3]"></div>
          <p className="">STOCK, In stock, ready to be shipped</p>
        </div>
        <div className="">
          <label htmlFor="counter-input" className="sr-only">
            Choose quantity:
          </label>
          <ChooseQuantity />
        </div>
        <AppButton className="w-full py-3 text-xl roboto-fonts">
          Buty it now
        </AppButton>
      </div>
    </div>
  );
};
