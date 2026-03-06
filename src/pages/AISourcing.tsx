import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles } from "lucide-react";

const AISourcing = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("nav_ai_sourcing")}</h1>
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-16">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary animate-pulse-glow">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">AI Supplier Matching</h3>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Our AI engine will automatically match your RFQs with the most relevant suppliers based on category, location, rating, and industry.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AISourcing;
