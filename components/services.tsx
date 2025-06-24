import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Vastu Consultancy Services",
    description: "Vaastu Sanjivanii helps you to create a Vastu friendly house Aesthetically.",
    icon: "🏠"
  },
  {
    title: "Astro Vastu Remedies",
    description: "Customized Vastu remedies as per your Horoscope for optimal results.",
    icon: "⭐"
  },
  {
    title: "Numerology Solutions",
    description: "Numerology solutions to ensure one's growth in their field.",
    icon: "🔢"
  },
  {
    title: "Vastu Compliant Floor Plan",
    description: "Get your Vastu compliant plan made and take your first step towards your desired life.",
    icon: "📐"
  }
]

export function Services() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Provide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether the objective is to improve love life, career or financial status, or simply to
            experience greater level of tranquility, Vaastu Sanjivanii helps you to make it happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 