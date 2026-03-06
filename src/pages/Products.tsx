import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import EmptyState from "@/components/marketplace/EmptyState";
import { Package } from "lucide-react";

const Products = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("nav_products")}</h1>
        <EmptyState
          icon={<Package className="h-7 w-7 text-muted-foreground" />}
          title={t("no_results")}
          description="Products will appear here once suppliers add them."
        />
      </div>
    </Layout>
  );
};

export default Products;
