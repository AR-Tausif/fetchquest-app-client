import Image from "next/image";
import { InputWithLabel } from "./_widgets/input-with-label";
import { CEditPenIcon } from "@/components/icons";
import { AppButton } from "@/components/buttons/app-button";

interface IInputItem {
  label: string;
  defaultValue: string;
}
export default function ProfilePage() {
  const inputListItems: IInputItem[] = [
    {
      label: "Name",
      defaultValue: "tausif",
    },
    {
      label: "Display Name",
      defaultValue: "Tausif Ahmed",
    },
    {
      label: "Phone number",
      defaultValue: "(201) 830-8210",
    },
    {
      label: "Email",
      defaultValue: "tausif.ritu1@gamil.com",
    },
    {
      label: "Flat, House No, Building, Company, Apartment",
      defaultValue: "2972 Westheimer Rd. Santa Ana, Illionois 85486",
    },
    {
      label: "Area, Colony, Street, Sector, Village",
      defaultValue: "2972 Westheimer Rd. Santa Ana, Illionois 85486",
    },
  ];

  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="w-full h-44 md:h-56 rounded-md overflow-hidden mb-6">
        <Image
          src="/images/banners/profile-banner-img.png"
          alt="Banner"
          width={800}
          height={224}
          className="w-full h-full object-cover bg-purple-600"
        />
      </div>
      <div className="relative">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-4">
          <div className="relative">
            <Image
              src="https://m.gettywallpapers.com/wp-content/uploads/2023/09/Itachi-Uchiha-Pfp-for-Profile-Picture.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200">
              <CEditPenIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8">
          {/* Details Contents */}
          {inputListItems.map((item) => (
            <InputWithLabel
              key={item.label}
              label={item.label}
              defaultValue={item.defaultValue}
            />
          ))}

          <AppButton className="normal-case">Save Changes</AppButton>
        </div>
      </div>
    </div>
  );
}
