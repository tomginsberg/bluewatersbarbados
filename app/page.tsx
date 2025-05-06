"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  FadeIn, 
  SlideInLeft, 
  SlideInRight, 
  HoverImage,
  StaggerContainer,
  StaggerItem
} from "@/components/animations";

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
      title: "Relax Outside",
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
      <section className="w-full p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
          <motion.div 
            className="relative w-full lg:w-2/3 xl:w-3/4 aspect-[4/3] lg:aspect-auto lg:h-[50vh] xl:h-[80vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/villa/1.jpg"
              alt="Blue Waters Villa - Your private getaway"
              fill
              className="ms-4 object-cover rounded-2xl"
              priority
            />
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/3 xl:w-1/4 p-6 lg:p-8 xl:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <StaggerContainer delayChildren={0.4} staggerChildren={0.2}>
              <StaggerItem>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">{villaFeatures[0].title}</h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base md:text-lg text-blue-800 mb-6">{villaFeatures[0].description}</p>
              </StaggerItem>
              <StaggerItem>
                <Link href="/book" className="block">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }}
                    className="mt-4"
                  >
                    <Button size="lg" className="px-8 py-6 bg-blue-600 hover:bg-blue-700">Book Your Stay</Button>
                  </motion.div>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </div>
      </section>

      {/* Alternating image/text sections */}
      {villaFeatures.slice(1).map((feature, index) => {
        const isEven = index % 2 === 1;
        return (
          <section 
            key={feature.id} 
            className={`w-full flex flex-col ${isEven ? 'md:flex-row bg-blue-50' : 'md:flex-row-reverse bg-blue-100'} min-h-[500px]`}
          >
            <div className="relative w-full md:w-1/2 p-4 md:p-6">
              {isEven ? (
                <SlideInLeft>
                  <HoverImage>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                      <Image
                        src={`/villa/${feature.id}.jpg`}
                        alt={feature.title || `Blue Waters Villa feature`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </HoverImage>
                </SlideInLeft>
              ) : (
                <SlideInRight>
                  <HoverImage>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                      <Image
                        src={`/villa/${feature.id}.jpg`}
                        alt={feature.title || `Blue Waters Villa feature`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </HoverImage>
                </SlideInRight>
              )}
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12`}>
              <FadeIn delay={0.2}>
                {feature.title && (
                  <motion.h2 
                    className="text-4xl md:text-5xl font-semibold mb-4 text-blue-900"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h2>
                )}
                <motion.p 
                  className="text-2xl text-blue-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
                {feature.showBookButton && (
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/book">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="lg">Book Your Stay</Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* Call to action at the bottom */}
      <section className="w-full py-16 bg-blue-900 text-white text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience the perfect Caribbean getaway
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your dream vacation is waiting at Blue Waters Villa, Barbados
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/book">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white bg-blue-800/30 hover:bg-white hover:text-blue-900 rounded-xl shadow-md">
                    Book Your Stay
                  </Button>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* About Us section */}
      <section className="w-full py-16 px-4 bg-blue-50">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>
            
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <motion.p 
                className="text-lg text-blue-800 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We are Peter and Charlotte. We have been visiting Barbados for many years and have come to love the island. We purchased this beautiful villa in 2019 after deciding that we wanted to spend more time on the island and miss some of the winter in Canada. We visit as often as we can and enjoy coming to the island with our grown children and family.
              </motion.p>
              
              <motion.p 
                className="text-lg text-blue-800 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Please call anytime if you have questions or feel free to email us at{" "}
                <a href="mailto:bluewatersbarbados21@gmail.com" className="text-blue-600 hover:underline">
                  bluewatersbarbados21@gmail.com
                </a>
              </motion.p>
              
              <motion.p 
                className="text-lg text-blue-800 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <a href="tel:0014169956444" className="text-blue-600 hover:underline">001 416 995 6444</a> from UK and Europe or <a href="tel:14169956444" className="text-blue-600 hover:underline">1 416 995 6444</a> from North America. (time zone is GMT -5 hours)
              </motion.p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
