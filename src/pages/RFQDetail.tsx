import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import EmptyState from "@/components/marketplace/EmptyState";
import { useParams } from "react-router-dom";
import { FileText } from "lucide-react";

const RFQDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams();

  return (
    <Layout>
      <div className="container py-8">
        <EmptyState
          icon={<FileText className="h-7 w-7 text-muted-foreground" />}
          title={t("rfq_detail")}
          description="This RFQ does not exist or has been removed."
          actionLabel={t("rfq_marketplace")}
          actionLink="/rfqs"
        />
      </div>
    </Layout>
  );
};

export default RFQDetail;
