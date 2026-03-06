import Layout from "@/components/layout/Layout";

const LegalPage = ({ title, content }: { title: string; content: string }) => {
  return (
    <Layout>
      <div className="container max-w-3xl py-12">
        <h1 className="mb-8 text-3xl font-bold font-display text-foreground">{title}</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p>{content}</p>
        </div>
      </div>
    </Layout>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    content="This Privacy Policy describes how DemandIQ collects, uses, and protects your personal information. By using our platform, you agree to the practices described in this policy. We collect information you provide directly, such as account details, company information, and communication data. We use this information to operate and improve our platform, facilitate transactions between buyers and suppliers, and comply with legal obligations."
  />
);

export const TermsOfService = () => (
  <LegalPage
    title="Terms of Service"
    content="Welcome to DemandIQ. These Terms of Service govern your use of our B2B procurement marketplace platform. By accessing or using DemandIQ, you agree to be bound by these terms. DemandIQ provides a platform for buyers and suppliers to connect through Requests for Quotation (RFQs). We do not guarantee any transactions and are not a party to any agreements between users."
  />
);

export const DataProtection = () => (
  <LegalPage
    title="Data Protection / KVKK"
    content="DemandIQ is committed to protecting your personal data in accordance with applicable data protection laws, including the Turkish Personal Data Protection Law (KVKK), GDPR, and other relevant regulations. We implement appropriate technical and organizational measures to ensure the security of personal data processed through our platform."
  />
);
