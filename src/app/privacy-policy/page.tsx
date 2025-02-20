import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - SmileToTheWorld Pro</title>
        <meta name="description" content="Privacy policy and data protection information for SmileToTheWorld Pro" />
      </Head>

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At SmileToTheWorld Pro, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                    please do not access the site.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal identification information (Name, email address, phone number, etc.)</li>
                    <li>Business information (Company name, address, etc.)</li>
                    <li>Communication preferences</li>
                    <li>Feedback and correspondence (Survey responses, customer service inquiries)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your requests and transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors (lawyers, accountants, etc.)</li>
                    <li>Law enforcement or government bodies when required by law</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information. However, no security system is impenetrable and we cannot guarantee 
                    the security of our systems 100%.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Under the GDPR and other applicable data protection laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate personal data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and 
                    hold certain information. You can instruct your browser to refuse all cookies or to 
                    indicate when a cookie is being sent.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our services are not intended for individuals under the age of 16. We do not knowingly 
                    collect personal information from children under 16.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p>Email: privacy@smile2theworldpro.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Last Update</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy was last updated on February 19, 2025.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
