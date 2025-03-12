import { SectionHeading } from "@/components/top-headings/SectionHeading";
import CustomerSupportForm from "./input-filed";


const CustomerSupport = () => {
  return (
    <div>
      <div className="py-10">
        <SectionHeading title="Customer Support" className="text-center" />
      </div>
      <CustomerSupportForm />
    </div>
  );
};
export default CustomerSupport;
