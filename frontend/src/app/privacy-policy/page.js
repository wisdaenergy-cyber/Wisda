

import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Wisda Energy Solar Solutions",
  description: "Learn how Wisda Energy collects, uses, and protects your personal data while providing secure solar services and clean energy solutions.",
  alternates: {
    canonical: "https://www.wisda.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
