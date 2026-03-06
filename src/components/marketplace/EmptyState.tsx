import { motion } from "framer-motion";
import { FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionLink?: string;
}

const EmptyState = ({ icon, title, description, actionLabel, actionLink }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
        {icon || <FileText className="h-7 w-7 text-muted-foreground" />}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-6 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionLabel && actionLink && (
        <Link to={actionLink}>
          <Button className="gradient-primary text-primary-foreground border-0 gap-2">
            <Search className="h-4 w-4" />
            {actionLabel}
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default EmptyState;
