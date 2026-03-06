import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const Login = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      console.error(error);
    } else {
      console.log("Login success", data);
      navigate("/dashboard");
    }
  };

  return (
    <Layout>
      <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-8">
        <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-8">

          <div className="text-center">
            <h1 className="text-2xl font-bold font-display text-foreground">
              {t("login_title")}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to DemandIQ
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>

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

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground border-0"
            >
              {t("nav_login")}
            </Button>

          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              {t("nav_register")}
            </Link>
          </p>

        </div>
      </div>
    </Layout>
  );
};

export default Login;