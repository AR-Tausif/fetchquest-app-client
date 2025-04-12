export const InputWithLabel = ({
  defaultValue,
  label,
}: {
  label: string;
  defaultValue: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        className="border border-gray-900 p-2 px-4 rounded-xl text-md"
        defaultValue={defaultValue}
        placeholder={label}
      />
    </div>
  );
};
