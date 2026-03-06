import { motion } from "framer-motion";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SupplierCardProps {
  id: string;
  companyName: string;
  country: string;
  industry: string;
  yearsInBusiness: number;
  rating: number;
  verified: boolean;
}

const SupplierCard = ({ id, companyName, country, industry, yearsInBusiness, rating, verified }: SupplierCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`/suppliers/${id}`}
        className="block rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold font-display text-lg">
            {companyName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground truncate">{companyName}</h3>
              {verified && <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {country}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">{industry}</Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-accent text-accent" /> {rating.toFixed(1)}
          </span>
          <span className="text-xs text-muted-foreground">
            {yearsInBusiness}y exp
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default SupplierCard;
