import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Returns & Exchanges</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our hassle-free return and exchange policy to ensure your satisfaction
            </p>
          </div>
        </section>

        {/* Policy Overview */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <RefreshCw className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">30-Day Return Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We want you to be completely satisfied with your purchase. If you're not happy 
                    with your order, you can return most items within 30 days of delivery for a 
                    full refund or exchange.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Eligible Returns
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Items must be unused and in original condition
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Original packaging and tags must be intact
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Proof of purchase required (receipt or order number)
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                  Return initiated within 30 days of delivery
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                <XCircle className="h-6 w-6 text-destructive" />
                Non-Returnable Items
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Final sale or clearance items
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Personalized or customized products
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Beauty and personal care items (for hygiene reasons)
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full mr-3 mt-2" />
                  Items damaged due to misuse
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6">How to Return an Item</h3>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</span>
                  <div>
                    <p className="font-medium text-foreground mb-1">Contact Customer Service</p>
                    <p>Email us at support@shophub.com with your order number and reason for return</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</span>
                  <div>
                    <p className="font-medium text-foreground mb-1">Receive Return Authorization</p>
                    <p>We'll send you a return authorization number and shipping label</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">3</span>
                  <div>
                    <p className="font-medium text-foreground mb-1">Pack Your Return</p>
                    <p>Securely pack the item in its original packaging with all tags attached</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">4</span>
                  <div>
                    <p className="font-medium text-foreground mb-1">Ship Your Return</p>
                    <p>Attach the provided label and drop off at any authorized shipping location</p>
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-4">Refund Processing</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Once we receive your return, please allow 5-7 business days for inspection. 
                    Approved refunds will be issued to your original payment method within 10 business days.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Exchanges</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To exchange an item for a different size, color, or product, please return the 
                original item and place a new order. This ensures faster processing and availability 
                of your desired item.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
