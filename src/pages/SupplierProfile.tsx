import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import EmptyState from "@/components/marketplace/EmptyState";
import { useParams } from "react-router-dom";
import { Users } from "lucide-react";

const SupplierProfile = () => {
  const { t } = useLanguage();
  const { slug } = useParams();

  return (
    <Layout>
      <div className="container py-8">
        <EmptyState
          icon={<Users className="h-7 w-7 text-muted-foreground" />}
          title={t("supplier_profile")}
          description="This supplier does not exist or has been removed."
          actionLabel={t("supplier_directory")}
          actionLink="/suppliers"
        />
      </div>
    </Layout>
  );
};

export default SupplierProfile;
