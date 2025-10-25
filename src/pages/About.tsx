import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Package, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We source only the finest products from trusted manufacturers worldwide."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We're here to help every step of the way."
    },
    {
      icon: Package,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your products to you as soon as possible."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Shop with confidence knowing your data and transactions are protected."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted destination for premium products since 2020. We believe in 
              quality, authenticity, and exceptional customer service.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2020, ShopHub began with a simple mission: to make premium 
                products accessible to everyone. What started as a small online store has 
                grown into a trusted marketplace serving thousands of satisfied customers 
                worldwide.
              </p>
              <p>
                We carefully curate our product selection, partnering with reputable brands 
                and manufacturers to ensure every item meets our high standards. From 
                electronics to fashion, each product is chosen with our customers in mind.
              </p>
              <p>
                Today, we're proud to offer a diverse range of products, backed by exceptional 
                customer service and a commitment to sustainability. We're not just selling 
                products—we're building relationships and creating experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Brand Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
