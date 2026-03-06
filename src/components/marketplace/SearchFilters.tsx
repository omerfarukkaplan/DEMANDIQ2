import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = [
  "cat_metals", "cat_textile", "cat_electronics", "cat_food",
  "cat_machinery", "cat_chemicals", "cat_automotive", "cat_construction", "cat_packaging"
] as const;

const countries = [
  "China", "Turkey", "Germany", "USA", "India", "Brazil", "Japan", "South Korea", "UAE", "Mexico"
];

interface SearchFiltersProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: Record<string, string>) => void;
  showCategoryFilter?: boolean;
  showCountryFilter?: boolean;
}

const SearchFilters = ({ onSearch, showCategoryFilter = true, showCountryFilter = true }: SearchFiltersProps) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("search_placeholder")}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            className="pl-10 bg-card"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFilters(!showFilters)}
          className={showFilters ? "bg-primary/10 text-primary border-primary/20" : ""}
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {showFilters && (
        <div className="flex flex-wrap gap-3 rounded-lg border border-border bg-card p-4">
          {showCategoryFilter && (
            <Select>
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder={t("category")} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {t(cat)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {showCountryFilter && (
            <Select>
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder={t("country")} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <Select>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder={t("budget")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1000-10000">$1,000 - $10,000</SelectItem>
              <SelectItem value="10000-100000">$10,000 - $100,000</SelectItem>
              <SelectItem value="100000+">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
