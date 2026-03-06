import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import EmptyState from "@/components/marketplace/EmptyState";
import { MessageSquare } from "lucide-react";

const Messages = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("nav_messages")}</h1>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4 lg:col-span-1">
            <p className="text-sm text-muted-foreground">Conversations</p>
            <div className="mt-4">
              <EmptyState
                icon={<MessageSquare className="h-6 w-6 text-muted-foreground" />}
                title="No messages"
                description="Start a conversation with a supplier."
              />
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-border bg-card p-8 lg:col-span-2">
            <p className="text-sm text-muted-foreground">Select a conversation to start messaging</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
