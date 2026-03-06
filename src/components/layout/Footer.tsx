import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-xs font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-lg font-bold font-display text-foreground">
                Demand<span className="text-primary">IQ</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Global B2B procurement marketplace connecting buyers and suppliers worldwide.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Marketplace</h4>
            <div className="flex flex-col gap-2">
              <Link to="/rfqs" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_rfqs")}</Link>
              <Link to="/suppliers" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_suppliers")}</Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_products")}</Link>
              <Link to="/demand-map" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_demand_map")}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/analytics" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_analytics")}</Link>
              <Link to="/ai-sourcing" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_ai_sourcing")}</Link>
              <Link to="/dashboard/buyer" className="text-sm text-muted-foreground hover:text-foreground">{t("nav_dashboard")}</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">{t("footer_privacy")}</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">{t("footer_terms")}</Link>
              <Link to="/data-protection" className="text-sm text-muted-foreground hover:text-foreground">{t("footer_data_protection")}</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DemandIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
