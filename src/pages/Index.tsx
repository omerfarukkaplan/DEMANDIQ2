import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Shield, Zap, BarChart3, Users, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const categories = [
  { key: "cat_metals", icon: "⚙️" },
  { key: "cat_textile", icon: "🧵" },
  { key: "cat_electronics", icon: "💻" },
  { key: "cat_food", icon: "🍎" },
  { key: "cat_machinery", icon: "🏭" },
  { key: "cat_chemicals", icon: "🧪" },
  { key: "cat_automotive", icon: "🚗" },
  { key: "cat_construction", icon: "🏗️" },
  { key: "cat_packaging", icon: "📦" },
] as const;

const features = [
  { icon: Globe2, title: "Global Reach", desc: "Connect with suppliers across 190+ countries" },
  { icon: Shield, title: "Verified Suppliers", desc: "All suppliers go through verification" },
  { icon: Zap, title: "AI Matching", desc: "Smart algorithms match you with the best suppliers" },
  { icon: BarChart3, title: "Market Intelligence", desc: "Real-time demand analytics and insights" },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(220_70%_45%_/_0.15),_transparent_50%)]" />
        <div className="container relative py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl font-display">
              {t("hero_title")}
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/70">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/rfqs/create">
                <Button size="lg" className="gap-2 bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold px-8">
                  {t("hero_cta")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/suppliers">
                <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  {t("hero_cta_secondary")}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { label: t("stats_rfqs"), value: "0", icon: FileText },
              { label: t("stats_suppliers"), value: "0", icon: Users },
              { label: t("stats_countries"), value: "0", icon: Globe2 },
              { label: t("stats_buyers"), value: "0", icon: BarChart3 },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary-foreground/50" />
                <p className="text-2xl font-bold text-primary-foreground font-display">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold font-display text-foreground">
            Browse by {t("category")}
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/rfqs?category=${cat.key}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-xs font-medium text-foreground text-center">{t(cat.key)}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold font-display text-foreground">
            Why DemandIQ
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold font-display text-foreground">
            Grow Your Business
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 mx-auto max-w-4xl">
            {[
              { title: "Submit Offer", price: "$5", desc: "Per offer submitted on an RFQ" },
              { title: "Featured Supplier", price: "$199/mo", desc: "Premium listing and priority placement" },
              { title: "Boost RFQ", price: "$20", desc: "Promote your RFQ for more visibility" },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <h3 className="mb-1 text-sm font-semibold text-foreground">{plan.title}</h3>
                <p className="mb-2 text-3xl font-bold font-display text-primary">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
