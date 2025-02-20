import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Mentions - SmileToTheWorld Pro',
  description: 'Legal information and mentions for SmileToTheWorld Pro dental laboratory services.',
};

export default function LegalMentions() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Legal Mentions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Company Name:</strong> SmileToTheWorld Pro</p>
                <p><strong>Legal Status:</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                <p><strong>Registration Number:</strong> RCS PARIS XXX XXX XXX</p>
                <p><strong>VAT Number:</strong> FR XX XXX XXX XXX</p>
                <p><strong>Registered Office:</strong> Ville de Paris, Paris, France</p>
                <p><strong>Contact Email:</strong> support@smile2theworldpro.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Publication Director</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Director of Publication:</strong> [Director Name]</p>
                <p><strong>Contact Email:</strong> director@smile2theworldpro.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Hosting Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Hosting Provider:</strong> Vercel Inc.</p>
                <p><strong>Address:</strong> 340 S Lemon Ave #4133 Walnut, CA 91789</p>
                <p><strong>Website:</strong> https://vercel.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The entire content of this website, including but not limited to graphics, logos, 
                  images, photographs, and text, is protected by copyright and intellectual property laws. 
                  Any reproduction, modification, or use of these elements without prior written authorization 
                  is strictly prohibited.
                </p>
                <p>
                  The SmileToTheWorld Pro brand, logo, and all associated elements are registered 
                  trademarks and are the exclusive property of SmileToTheWorld Pro.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SmileToTheWorld Pro strives to ensure the accuracy and currency of information 
                  published on this website. However, we cannot guarantee that all information is 
                  complete, accurate, or current. The information provided is for general guidance 
                  only and should not be considered as professional advice.
                </p>
                <p>
                  SmileToTheWorld Pro disclaims all liability for any direct or indirect damages 
                  that may result from accessing or using this website or the information it contains.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Applicable Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These legal mentions and any disputes relating to this website are governed by 
                  French law. Any disputes arising from the use of this website fall under the 
                  exclusive jurisdiction of the courts of Paris, France.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Last Update</h2>
              <p className="text-muted-foreground">
                These legal mentions were last updated on February 19, 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
