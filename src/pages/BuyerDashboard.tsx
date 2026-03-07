import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import StatsCard from "@/components/marketplace/StatsCard";
import EmptyState from "@/components/marketplace/EmptyState";
import { FileText, Users, BarChart3, TrendingUp, DollarSign } from "lucide-react";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const BuyerDashboard = () => {
  const { t } = useLanguage();

  const [rfqCount, setRfqCount] = useState(0);

  useEffect(() => {
    loadRFQs();
  }, []);

  const loadRFQs = async () => {
    const { data, error } = await supabase
      .from("rfqs")
      .select("id");

    if (!error && data) {
      setRfqCount(data.length);
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">
          Buyer {t("nav_dashboard")}
        </h1>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            label="My RFQs"
            value={rfqCount}
            icon={<FileText className="h-5 w-5" />}
          />

          <StatsCard
            label="Offers Received"
            value={0}
            icon={<TrendingUp className="h-5 w-5" />}
          />

          <StatsCard
            label="Active Suppliers"
            value={0}
            icon={<Users className="h-5 w-5" />}
          />

          <StatsCard
            label="Total Spend"
            value="$0"
            icon={<DollarSign className="h-5 w-5" />}
          />
        </div>

        {rfqCount === 0 && (
          <EmptyState
            icon={<BarChart3 className="h-7 w-7 text-muted-foreground" />}
            title="No activity yet"
            description="Create your first RFQ to start receiving offers from suppliers."
            actionLabel={t("create_rfq")}
            actionLink="/rfqs/create"
          />
        )}
      </div>
    </Layout>
  );
};

export default BuyerDashboard;