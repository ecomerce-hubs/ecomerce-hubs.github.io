import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-muted-foreground mt-4">Effective Date: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using ShopHub's website and services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any 
                of these terms, you are prohibited from using this site.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on ShopHub's website for 
                personal, non-commercial viewing only. This license shall not include the right to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Modify or copy the materials
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Use the materials for commercial purposes
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Attempt to reverse engineer any software
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Remove copyright or proprietary notations
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features, you may be required to create an account. You agree to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Provide accurate and complete information
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Maintain the security of your password
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Accept responsibility for all activities under your account
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Notify us immediately of any unauthorized use
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">4. Product Information and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to display accurate product information and pricing. However, we do not 
                warrant that product descriptions, pricing, or other content is accurate, complete, 
                or error-free. We reserve the right to correct any errors and to cancel any orders 
                affected by pricing or description errors.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">5. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By placing an order, you:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Confirm that you are legally capable of entering into binding contracts
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Agree to pay the listed price plus applicable taxes and shipping fees
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Authorize us to charge your payment method
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Acknowledge that we reserve the right to refuse or cancel any order
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of ShopHub or its content suppliers and is protected by international 
                copyright and trademark laws. Unauthorized use may violate these laws.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Use the site for any illegal purpose
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Transmit viruses or malicious code
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Attempt to gain unauthorized access to our systems
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Harass, abuse, or harm other users
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Use automated systems to access the site
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on ShopHub's website are provided on an "as is" basis. ShopHub makes 
                no warranties, expressed or implied, and hereby disclaims all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall ShopHub or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit) arising out of the use or 
                inability to use the materials on ShopHub's website, even if ShopHub has been notified 
                of the possibility of such damage.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless ShopHub and its affiliates from any claims, 
                losses, damages, liabilities, and expenses arising out of your use of the site or 
                violation of these Terms of Service.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws 
                of the United States, and you irrevocably submit to the exclusive jurisdiction of the 
                courts in that location.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                ShopHub reserves the right to modify these Terms of Service at any time. Changes will 
                be effective immediately upon posting. Your continued use of the site after changes 
                constitutes acceptance of the modified terms.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> legal@shophub.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Address:</span> 123 Commerce Street, NY 10001
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Phone:</span> +1 (555) 123-4567
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
