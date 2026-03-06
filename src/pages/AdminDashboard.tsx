import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/marketplace/StatsCard";
import { FileText, Users, Globe2, BarChart3, Shield, AlertTriangle } from "lucide-react";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">Admin Dashboard</h1>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard label="Total Users" value={0} icon={<Users className="h-5 w-5" />} />
          <StatsCard label="Total RFQs" value={0} icon={<FileText className="h-5 w-5" />} />
          <StatsCard label="Total Suppliers" value={0} icon={<Globe2 className="h-5 w-5" />} />
          <StatsCard label="Pending Verifications" value={0} icon={<Shield className="h-5 w-5" />} />
          <StatsCard label="Reports" value={0} icon={<AlertTriangle className="h-5 w-5" />} />
          <StatsCard label="Platform Activity" value={0} icon={<BarChart3 className="h-5 w-5" />} />
        </div>

        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">Admin management tools will be available here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
