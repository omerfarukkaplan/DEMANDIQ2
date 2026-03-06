import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import StatsCard from "@/components/marketplace/StatsCard";
import EmptyState from "@/components/marketplace/EmptyState";
import { FileText, DollarSign, Eye, Star } from "lucide-react";

const SupplierDashboard = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">Supplier {t("nav_dashboard")}</h1>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label="Active RFQs" value={0} icon={<FileText className="h-5 w-5" />} />
          <StatsCard label="Offers Sent" value={0} icon={<DollarSign className="h-5 w-5" />} />
          <StatsCard label="Profile Views" value={0} icon={<Eye className="h-5 w-5" />} />
          <StatsCard label="Average Rating" value="N/A" icon={<Star className="h-5 w-5" />} />
        </div>

        <EmptyState
          title="No activity yet"
          description="Browse the RFQ marketplace to find procurement requests and submit offers."
          actionLabel={t("rfq_marketplace")}
          actionLink="/rfqs"
        />
      </div>
    </Layout>
  );
};

export default SupplierDashboard;
