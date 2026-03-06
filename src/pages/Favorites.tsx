import Layout from "@/components/layout/Layout";
import EmptyState from "@/components/marketplace/EmptyState";
import { Heart } from "lucide-react";

const Favorites = () => {
  return (
    <Layout>
      <div className="container max-w-2xl py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">Favorites</h1>
        <EmptyState
          icon={<Heart className="h-7 w-7 text-muted-foreground" />}
          title="No favorites yet"
          description="Save suppliers and RFQs to your favorites for quick access."
        />
      </div>
    </Layout>
  );
};

export default Favorites;
