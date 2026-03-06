import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const Register = () => {
  const { t } = useLanguage();

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("buyer");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          company_name: company,
          account_type: accountType,
        },
      },
    });

    if (error) {
      alert(error.message);
      console.error(error);
    } else {
      alert("Registration successful! Check your email.");
      console.log(data);
    }
  };

  return (
    <Layout>
      <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-8">
        <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-display text-foreground">{t("register_title")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">Join DemandIQ marketplace</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <Label>{t("company_name")}</Label>
              <Input
                placeholder="Your company name"
                className="mt-1.5 bg-background"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <Label>{t("email")}</Label>
              <Input
                type="email"
                placeholder="you@company.com"
                className="mt-1.5 bg-background"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label>{t("password")}</Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 bg-background"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <Label>Account Type</Label>
              <Select onValueChange={(value) => setAccountType(value)}>
                <SelectTrigger className="mt-1.5 bg-background">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0">
              {t("nav_register")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              {t("nav_login")}
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;