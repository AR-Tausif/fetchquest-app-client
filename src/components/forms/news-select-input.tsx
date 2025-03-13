export const NewsSelectInput = ({
  className,
  ...rest
}: {
  className?: string;
}) => {
  return (
    <form className={`max-w-sm mx-auto ${className}`} {...rest}>
      <select
        id="countries"
        className="bg-gray-50 border border-[#D188FF] text-gray-900 text-sm rounded-lg focus:ring-[#D188FF] focus:border-[#D188FF] block w-full p-2.5 dark:bg-gray-700 dark:border-[#D188FF] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#D188FF] dark:focus:border-[#D188FF]"
      >
        <option selected>All</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  );
};
