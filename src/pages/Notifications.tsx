import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import EmptyState from "@/components/marketplace/EmptyState";
import { Bell } from "lucide-react";

const Notifications = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container max-w-2xl py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("nav_notifications")}</h1>
        <EmptyState
          icon={<Bell className="h-7 w-7 text-muted-foreground" />}
          title="No notifications"
          description="You'll receive notifications for new RFQs, offers, and messages."
        />
      </div>
    </Layout>
  );
};

export default Notifications;
