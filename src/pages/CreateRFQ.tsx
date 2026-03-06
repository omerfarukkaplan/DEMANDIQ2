import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const categories = [
  "cat_metals", "cat_textile", "cat_electronics", "cat_food",
  "cat_machinery", "cat_chemicals", "cat_automotive", "cat_construction", "cat_packaging"
] as const;

const CreateRFQ = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="container max-w-2xl py-8">
        <h1 className="mb-6 text-2xl font-bold font-display text-foreground">{t("rfq_create")}</h1>

        <div className="space-y-5 rounded-xl border border-border bg-card p-6">
          <div>
            <Label>{t("title")}</Label>
            <Input placeholder="e.g. 500 tons of stainless steel sheets" className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label>{t("description")}</Label>
            <Textarea placeholder="Describe your requirements in detail..." className="mt-1.5 min-h-[120px] bg-background" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>{t("category")}</Label>
              <Select>
                <SelectTrigger className="mt-1.5 bg-background">
                  <SelectValue placeholder={t("category")} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{t(cat)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>{t("country")}</Label>
              <Input placeholder="e.g. Germany" className="mt-1.5 bg-background" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <Label>{t("quantity")}</Label>
              <Input placeholder="e.g. 500 tons" className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label>{t("budget")}</Label>
              <Input placeholder="e.g. $50,000" className="mt-1.5 bg-background" />
            </div>
            <div>
              <Label>{t("deadline")}</Label>
              <Input type="date" className="mt-1.5 bg-background" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button className="gradient-primary text-primary-foreground border-0 flex-1">{t("submit")}</Button>
            <Button variant="outline">{t("cancel")}</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateRFQ;
