import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import SearchFilters from "@/components/marketplace/SearchFilters";
import EmptyState from "@/components/marketplace/EmptyState";
import { Users } from "lucide-react";

const SupplierDirectory = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("supplier_directory")}</h1>
        <SearchFilters />
        <div className="mt-8">
          <EmptyState
            icon={<Users className="h-7 w-7 text-muted-foreground" />}
            title={t("supplier_empty")}
            description={t("supplier_empty_desc")}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SupplierDirectory;
