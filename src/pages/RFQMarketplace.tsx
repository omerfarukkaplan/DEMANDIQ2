import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import SearchFilters from "@/components/marketplace/SearchFilters";
import EmptyState from "@/components/marketplace/EmptyState";
import { FileText } from "lucide-react";

const RFQMarketplace = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("rfq_marketplace")}</h1>
        <SearchFilters />
        <div className="mt-8">
          <EmptyState
            icon={<FileText className="h-7 w-7 text-muted-foreground" />}
            title={t("rfq_empty")}
            description={t("rfq_empty_desc")}
            actionLabel={t("create_rfq")}
            actionLink="/rfqs/create"
          />
        </div>
      </div>
    </Layout>
  );
};

export default RFQMarketplace;
