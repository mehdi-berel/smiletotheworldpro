import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - SmileToTheWorld Pro</title>
        <meta name="description" content="Terms and conditions for using SmileToTheWorld Pro services" />
      </Head>

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Terms and Conditions</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by these terms, please do not 
                    use this website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Services Description</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    SmileToTheWorld Pro provides dental practice management solutions and related services. 
                    We reserve the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or withdraw any part of our services without notice</li>
                    <li>Refuse service to anyone for any valid reason</li>
                    <li>Change the terms and conditions under which our website and services are offered</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. User Obligations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>By using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Not use the service for any illegal or unauthorized purpose</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All content on this website, including but not limited to text, graphics, logos, images, 
                    software, and audio, is the property of SmileToTheWorld Pro and is protected by 
                    international copyright laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works from any material 
                    from this site without explicit written consent.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Payment terms are specified in individual service agreements. All fees are non-refundable 
                    unless otherwise specified. We reserve the right to modify our pricing structure at any time.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    SmileToTheWorld Pro shall not be liable for any direct, indirect, incidental, special, 
                    or consequential damages resulting from the use or inability to use our services.
                  </p>
                  <p>
                    We do not guarantee the accuracy, completeness, or usefulness of any information on the 
                    website or the service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to terminate or suspend access to our services immediately, without 
                    prior notice or liability, for any reason, including breach of these Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of France. 
                    Any disputes relating to these terms and conditions shall be subject to the exclusive 
                    jurisdiction of the courts of Paris, France.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of any 
                    material changes by posting a notice on our website. Your continued use of the site 
                    after such modifications constitutes your acceptance of the modified terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <p>Email: legal@smile2theworldpro.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Last Update</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions were last updated on February 19, 2025.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
