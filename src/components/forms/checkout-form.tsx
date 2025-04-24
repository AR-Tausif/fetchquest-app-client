"use client";

interface ICheckOUtFormProps {
  onSubmit: any;
  register: any;
  handleSubmit: any;
  formFields: any;
  errors: any;
}
export const CheckOutForm = ({
  register,
  errors,
  formFields,
}: ICheckOUtFormProps) => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="font-medium text-lg mt-6 my-2">Add Information</h2>

        <div className="space-y-6">
          {formFields.map((field: any) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label} <span className="text-red-500">*</span>
              </label>

              {field.type === "tel" ? (
                <div className="flex">
                  {/* <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <span className="text-sm">🇺🇸</span>
                  </div> */}
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    {...register(field.id)}
                    className={`flex-1 p-3 border rounded-md ${
                      errors[field.id] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id)}
                  className={`w-full p-3 border rounded-md ${
                    errors[field.id] ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}

              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.id]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
