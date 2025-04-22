"use client";
import Image from "next/image";
import { InputWithLabel } from "./_widgets/input-with-label";
import { CEditPenIcon } from "@/components/icons";
import { AppButton } from "@/components/buttons/app-button";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  useEditProfileMutation,
  useGetProfileQuery,
} from "@/redux/api/users.api";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Validation schema
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().min(10, "Contact number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  profileImage: z.any().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface IInputItem {
  label: string;
  name: keyof ProfileFormData;
}

export default function ProfilePage() {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  // Fetch profile data
  const { data: profileData, isLoading: isProfileLoading } =
    useGetProfileQuery(undefined);

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      profileImage: undefined,
    },
  });

  // RTK Query: Edit Profile
  const [editProfile, { isLoading: isEditProfileLoading }] =
    useEditProfileMutation();

  // nextjs router
  const router = useRouter();
  // Set default values when profile data is loaded
  useEffect(() => {
    if (profileData) {
      setValue("name", profileData.data.name);
      setValue("contact", profileData.data.contact);
      setValue("email", profileData.data.email);
      setPreviewUrl(
        profileData.data.image ||
          "https://m.gettywallpapers.com/wp-content/uploads/2023/09/Itachi-Uchiha-Pfp-for-Profile-Picture.jpg"
      );
    }
  }, [profileData, setValue]);

  // Watch for profile image changes
  const profileImage = watch("profileImage");
  useEffect(() => {
    if (profileImage?.[0]) {
      const url = URL.createObjectURL(profileImage[0]);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileImage]);

  const inputListItems: IInputItem[] = [
    {
      label: "Name",
      name: "name",
    },
    {
      label: "Phone number",
      name: "contact",
    },
    // {
    //   label: "Email",
    //   name: "email",
    // },
  ];

  const onSubmit = async (data: ProfileFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("contact", data.contact);
    formData.append("email", data.email);
    if (data.profileImage?.[0]) {
      formData.append("profileImage", data.profileImage[0]);
    }

    try {
      const response = await editProfile(formData).unwrap();
      toast.success(response?.message || "Profile updated successfully");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  };

  if (isProfileLoading) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

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
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Picture */}
        <div className="absolute -top-16 left-4">
          <div className="border relative w-30 h-20 rounded-full overflow-hidden">
            <Image
              src={previewUrl}
              alt="Profile"
              width={80}
              height={80}
              className="h-auto rounded-full border-4 border-white object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200">
              <label className="w-5 h-5 flex justify-center cursor-pointer">
                <CEditPenIcon />
                <input
                  type="file"
                  accept="image/*"
                  {...register("profileImage")}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8">
          {inputListItems.map((item) => (
            <div key={item.name}>
              <InputWithLabel
                label={item.label}
                {...register(item.name)}
                error={errors[item.name]?.message?.toString()}
              />
              {errors[item.name] && (
                <span className="text-sm text-red-500">
                  {errors[item.name]?.message?.toString()}
                </span>
              )}
            </div>
          ))}

          <AppButton
            type="submit"
            className="normal-case"
            disabled={isEditProfileLoading}
          >
            {isEditProfileLoading ? (
              <span className="text-center flex justify-center items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p>Saving...</p>
              </span>
            ) : (
              "Save Changes"
            )}
          </AppButton>
        </div>
      </form>
    </div>
  );
}
