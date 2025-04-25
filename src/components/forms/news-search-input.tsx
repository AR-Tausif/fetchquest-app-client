import { useForm } from "react-hook-form";

interface SearchFormData {
  search: string;
}

export const NewsSearchInput = ({ handleOnblur }: { handleOnblur: (value: string) => void }) => {
  const { register, handleSubmit } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    handleOnblur(data.search);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center max-w-sm">
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          {...register('search')}
          type="text"
          className="bg-gray-50 border border-[#D188FF] text-gray-900 text-sm rounded-lg focus:ring-[#D188FF] focus:border-[#D188FF] block w-full p-2.5 dark:bg-gray-700 dark:border-[#D188FF] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D188FF] dark:focus:border-[#D188FF]"
          placeholder="Search blogs..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
};