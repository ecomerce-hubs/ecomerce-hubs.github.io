import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Truck, Package, Clock, MapPin } from "lucide-react";

const ShippingInfo = () => {
  const shippingMethods = [
    {
      icon: Truck,
      title: "Standard Shipping",
      time: "5-7 business days",
      cost: "$10.00"
    },
    {
      icon: Package,
      title: "Express Shipping",
      time: "2-3 business days",
      cost: "$20.00"
    },
    {
      icon: Clock,
      title: "Overnight Shipping",
      time: "1 business day",
      cost: "$35.00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our shipping policies and delivery options
            </p>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Shipping Methods</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {shippingMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <method.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-xl mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-2">{method.time}</p>
                <p className="text-2xl font-bold text-primary">{method.cost}</p>
              </Card>
            ))}
          </div>

          {/* Details */}
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-3">Shipping Locations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We ship to all 50 states in the United States and most international locations. 
                    International shipping times and costs vary by destination.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Free Shipping</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Enjoy free standard shipping on all orders over $100. This offer applies to 
                domestic shipments only.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Order Processing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Orders are processed Monday through Friday, excluding holidays. Orders placed 
                after 2 PM EST will be processed the next business day.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Tracking Your Order</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Once your order ships, you'll receive a confirmation email with tracking information. 
                You can track your package through the carrier's website.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">International Shipping</h3>
              <p className="text-muted-foreground leading-relaxed">
                International orders may be subject to customs fees and import duties determined 
                by your country's customs office. These fees are the responsibility of the recipient.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
