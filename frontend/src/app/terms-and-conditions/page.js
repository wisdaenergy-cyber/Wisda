

import TermsConditions from "@/components/TermsConditions/TermsConditions";

export const metadata = {
  title: "Terms and Conditions | Wisda Energy Solar Services",
  description: "Read Wisda Energy’s terms and conditions covering solar services, pricing, usage policies, warranties, responsibilities, and customer agreements.",
  alternates: {
    canonical: "www.wisda.in/terms-and-conditions",
  },
};


export default function PrivacyPolicyPage() {
  return (
    <main>
      <TermsConditions/>
    </main>
  );
}
