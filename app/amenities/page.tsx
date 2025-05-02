import { CheckCircle2 } from "lucide-react";

export default function AmenitiesPage() {
  const amenityCategories = [
    {
      title: "General",
      items: [
        "Laptop-friendly workspaces",
        "Strong, fast, fibre high speed Wifi throughout the house",
        "Ceiling fans in all rooms and A/C in bedrooms",
        "Internet TV service",
        "Parking for 2 cars",
        "4 umbrellas (for a rain shower)",
      ],
    },
    {
      title: "Kitchen",
      items: [
        "Large refrigerator with freezer",
        "Dishwasher",
        "Microwave",
        "Flat cooktop",
        "Oven",
        "Coffee maker with permanent filter",
        "Toaster",
        "Kettle",
        "Washer and dryer",
      ],
    },
    {
      title: "Well equipped kitchen",
      items: [
        "Pots and pans",
        "Serving dishes and bowls",
        "Dishes and silver ware",
        "Good selection of cooking utensils",
        "Salt, pepper and a variety of dried herbs and spices",
        "Dishes and silverware",
        "Water glasses and wine glasses",
        "Dish soap",
        "Dish cloth, brush and sponge",
      ],
    },
    {
      title: "Bed and bath",
      items: [
        "New, quiet air conditioning units in each bedroom",
        "Walk-in closets with racking and hangers",
        "100% white cotton bed sheets",
        "Towels, soap and toilet paper",
        "Hair dryer",
        "Iron and ironing board",
        "Outdoor clothesline and drying rack",
      ],
    },
    {
      title: "Outdoor",
      items: [
        "Gas BBQ grill",
        "Glass top dining table with 6 comfortable chairs each with a thick cushion",
        "Generous comfortable L shaped sofa",
        "Sun Umbrella",
      ],
    },
    {
      title: "Beach",
      items: [
        "4 beach chairs",
        "Beach umbrella",
        "Small cooler",
        "Wine / drinks cooler",
      ],
    },
    {
      title: "Safety features",
      items: [
        "Smoke detectors",
        "Fire extinguisher",
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Blue Waters Villa Amenities</h1>
          <p className="text-lg md:text-xl text-blue-800">
            Blue Waters Villa is an 1850 square foot house with a private plunge pool, 3 roomy bedrooms and 2.5 bathrooms.
          </p>
        </div>
      </section>

      {/* Amenities grid */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenityCategories.map((category, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-b border-blue-200 pb-2">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to enjoy all these amenities?</h2>
          <p className="text-xl mb-8">Book your stay at Blue Waters Villa today</p>
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