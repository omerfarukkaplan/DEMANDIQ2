import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface RFQCardProps {
  id: string;
  title: string;
  category: string;
  country: string;
  budget?: string;
  quantity?: string;
  deadline?: string;
  createdAt: string;
}

const RFQCard = ({ id, title, category, country, budget, quantity, deadline, createdAt }: RFQCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/rfq/${id}`}
        className="block rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
      >
        <div className="mb-3 flex items-start justify-between">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>

        <h3 className="mb-3 text-base font-semibold text-foreground line-clamp-2">{title}</h3>

        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {country}
          </span>
          {budget && (
            <span className="flex items-center gap-1">
              <DollarSign className="h-3.5 w-3.5" /> {budget}
            </span>
          )}
          {quantity && (
            <span className="flex items-center gap-1">
              <Package className="h-3.5 w-3.5" /> {quantity}
            </span>
          )}
          {deadline && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {deadline}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default RFQCard;
