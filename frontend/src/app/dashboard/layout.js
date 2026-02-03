import DashboardAuthWrapper from "@/components/Dashboard/DashboardWrapper";


export default function DashboardLayout({ children }) {
  return <DashboardAuthWrapper>{children}</DashboardAuthWrapper>;
}
