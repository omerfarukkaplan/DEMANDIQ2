import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe2 } from "lucide-react";

const DemandMap = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("nav_demand_map")}</h1>
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-16">
          <Globe2 className="mb-4 h-16 w-16 text-muted-foreground/30" />
          <h3 className="mb-2 text-lg font-semibold text-foreground">Global Demand Map</h3>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Interactive world map showing procurement demand by country will be displayed here once RFQ data is available.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DemandMap;
