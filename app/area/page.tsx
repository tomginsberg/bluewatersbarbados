import Image from "next/image";

export default function AreaPage() {
  const areaFeatures = [
    {
      id: 1,
      title: "Local Area",
      description: "Blue Waters Villa is less than a 10 minute walk from beautiful, sandy Heron Bay Beach. It's located near Holetown on the Platinum West Coast of Barbados.",
      imageExtension: "png",
    },
    {
      id: 2,
      title: "Located in a quiet, gated community of 28 villas",
      description: "",
      imageExtension: "png",
    },
    {
      id: 3,
      title: "Snorkeling",
      description: "Walk to nearby Heron Bay Beach with snorkels in hand to discover a coral reef teeming with tropical fish. This is one of our favorite things to do nearby!",
      imageExtension: "png",
    },
    {
      id: 4,
      title: "Sunset",
      description: "Enjoy watching the sun set over the ocean from nearby Heron Bay Beach.",
      imageExtension: "jpg",
    },
    {
      id: 5,
      title: "Holetown",
      description: "Holetown is a 20 minute beach walk or 5 minute drive. There, you'll find both local and high end restaurants, lively beach bars, a large supermarket, high-end shops and back streets to explore.",
      imageExtension: "png",
    },
    {
      id: 6,
      title: "Zacchios",
      description: "Enjoy dinner listening to the waves at Zaccios on the beach in Holetown",
      imageExtension: "png",
    },
    {
      id: 7,
      title: "Limegrove",
      description: "The most luxurious shopping centre on island is in Holetown with luxury brands and high-end open air restaurants.",
      imageExtension: "png",
    },
    {
      id: 8,
      title: "La Baguette",
      description: "A new French bakery selling freshly baked baguettes and delicious croissants - located on the coast road, 10 minutes walk from Blue Waters Villa",
      imageExtension: "png",
    },
    {
      id: 9,
      title: "Exploring the island",
      description: "Famed for its fantastic beaches, Barbados has it all. In addition to soft, white sand and turquoise bays, you'll find plenty of culture and history. Inland, it's covered in lush greenery, interesting plantations and on the East coast, huge picturesque waves and amazing cliff hikes. The island is inhabited by a proud and welcoming population.",
      imageExtension: "png",
    },
    {
      id: 10,
      title: "West Coast - Your Home",
      description: "The villa is located in the middle of the west coast, where you can find other luxurious private villas, and high-end restaurants enveloped by tropical gardens and lush foliage. The whole of the West coast is easy to explore either by frequent buses that cost only $3.50 or with your own car.",
      imageExtension: "png",
    },
    {
      id: 11,
      title: "Speightstown",
      description: "Full of interesting old buildings, Speightstown is only 5 km up the road. Enjoy lunch at one of the beach front cafes.",
      imageExtension: "png",
    },
    {
      id: 12,
      title: "St. Nicholas Abbey",
      description: "Plantation house, museum and rum distillery located in St Peter, Barbados - well worth visiting. Colonel Benjamin Berringer built the house in 1658",
      imageExtension: "png",
    },
    {
      id: 13,
      title: "Huntes Garden",
      description: "One of the many wonderful tropical gardens you can visit inland.",
      imageExtension: "png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero section with first image */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <Image
          src="/area/1.png"
          alt="Blue Waters Villa - Local Area"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">{areaFeatures[0].title}</h1>
            <p className="text-base md:text-lg text-blue-800">{areaFeatures[0].description}</p>
          </div>
        </div>
      </section>

      {/* Grid layout for the remaining images */}
      <section className="w-full py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Discover the Surroundings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaFeatures.slice(1).map((feature) => (
              <div key={feature.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={`/area/${feature.id}.${feature.imageExtension}`}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-blue-800">{feature.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the best of Barbados</h2>
          <p className="text-xl mb-8">The perfect location for your Caribbean adventure</p>
          <a 
            href="/book" 
            className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </main>
  );
}