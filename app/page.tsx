import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const villaFeatures = [
    {
      id: 1,
      title: "Your private getaway",
      description: "Blue Waters Villa is a beautiful 3 bedroom house with a private pool, beautiful outdoor covered patio and garden and fast, strong wifi. It's a quiet, peaceful and exceptional home-away-from home to enjoy your vacation. Beautiful Heron Bay beach is an easy 9 minute walk or 1 minute drive. The waters are clear, blue and calm. Perfect for swimming or seeing an amazing array of tropical fish with a snorkel.",
      showBookButton: true,
    },
    {
      id: 2,
      title: "Relax at Heron Bay Beach",
      description: "An easy 9 minute walk or 1 minute drive to one of the most beautiful beaches in Barbados. Calm, clear water & great sunsets!",
    },
    {
      id: 3,
      title: "Your private oasis",
      description: "The well designed outdoor living space is a perfect spot to relax on the sofa, enjoy a delicious meal outside and take a dip in the pool. The tropical garden is positioned so you can enjoy sun or shade around the pool all day!",
    },
    {
      id: 4,
      title: "",
      description: "Super comfortable sofa to enjoy a cold drink and the warm Barbados weather. If you are still you'll see hummingbirds visiting the tropical flowers.",
    },
    {
      id: 5,
      title: "Main Floor Master Bedroom",
      description: "Spacious, tastefully decorated with king size bed, quiet A/C, walk-in closet, en-suite 3 piece bathroom and windows overlooking the garden.",
    },
    {
      id: 6,
      title: "En-suite Master Bathroom",
      description: "With granite counters and oversized walk in shower",
    },
    {
      id: 7,
      title: "Garden Room",
      description: "Upstairs, with twin beds, this spacious room has a walk-in closet and quiet AC. It shares a modern bathroom with double sinks, shower and bathtub with the Blue Room.",
    },
    {
      id: 8,
      title: "Blue Room",
      description: "Upstairs light filled room with four windows. Shared 4 piece bathroom. Very comfortable king size bed, quiet A/C and walk-in closet.",
    },
    {
      id: 9,
      title: "Kitchen",
      description: "Teriffic, open plan kitchen with granite countertops, dishwasher, built in microwave and ceramic cooktop. The kitchen is very well equipped with lots of dishes, cutlery, utensils and a variety of spices. Wonderful eat-at L shaped peninsula.",
    },
    {
      id: 10,
      title: "Living Room",
      description: "Spacious and beautifully furnished living room has elegant seating and internet TV. Huge windows and double glass doors open onto the private pool, patio, dining areas and garden.",
    },
    {
      id: 11,
      title: "Breakfast Nook",
      description: "Open dining area close to the kitchen, with view of front garden.",
    },
    {
      id: 12,
      title: "Outdoor Dining",
      description: "Covered dining area is a wonderful place to enjoy a meal with friends by the pool!",
    },
    {
      id: 13,
      title: "Private pool",
      description: "Beautiful, totally private plunge pool surrounded by lush garden and elegant patio space.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero section with first image */}
      <section className="relative w-full h-screen">
        <Image
          src="/villa/1.jpg"
          alt="Blue Waters Villa - Your private getaway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">{villaFeatures[0].title}</h1>
            <p className="text-base md:text-lg text-blue-800 mb-6">{villaFeatures[0].description}</p>
            <Link href="/book" className="block text-center">
              <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6">Book Your Stay</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Alternating image/text sections */}
      {villaFeatures.slice(1).map((feature, index) => {
        const isEven = index % 2 === 0;
        return (
          <section 
            key={feature.id} 
            className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[500px]`}
          >
            <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
              <Image
                src={`/villa/${feature.id}.jpg`}
                alt={feature.title || `Blue Waters Villa feature`}
                fill
                className="object-cover"
              />
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 ${isEven ? 'bg-blue-50' : 'bg-blue-100'}`}>
              {feature.title && (
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">{feature.title}</h2>
              )}
              <p className="text-lg text-blue-800">{feature.description}</p>
              {feature.showBookButton && (
                <div className="mt-6">
                  <Link href="/book">
                    <Button size="lg">Book Your Stay</Button>
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Call to action at the bottom */}
      <section className="w-full py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the perfect Caribbean getaway</h2>
          <p className="text-xl mb-8">Your dream vacation is waiting at Blue Waters Villa, Barbados</p>
          <Link href="/book">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black border-white hover:bg-white hover:text-blue-900">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
