import { Plane, Car, MapPin, ShoppingBag, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DirectionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Getting Here</h1>
        </div>
      </section>

      {/* Content sections */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Flights section */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Plane className="h-10 w-10 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Flying to Barbados</h2>
            </div>
            
            <div className="space-y-4 text-blue-800">
              <p>Barbados is served by many international airlines from Europe, USA and Canada.</p>
              
              <p>British Airways and Virgin Atlantic both fly daily from London Gatwick to Bridgetown, and there is also a twice-weekly Virgin flight from Manchester.</p>
              
              <p>Westjet and Air Canada both fly daily from Toronto. American Airlines, Delta and Jet Blue all fly daily from the US to Barbados.</p>
            </div>
          </div>
          
          {/* Getting to the villa */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Car className="h-10 w-10 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">From Airport to Villa</h2>
            </div>
            
            <div className="space-y-4 text-blue-800">
              <p>Blue Waters Villa is located 28km from Grantley Adams International Airport and it takes about 35 minutes in a taxi or your own rental car.</p>
              
              <p>Taxis are readily available on arrival and hire car companies have offices at the airport.</p>
              
              <p>We have good contacts for rental vehicles. They will meet you with a sign at the airport and take you to Blue Waters Villa. Or bring a car to the Villa for you. Very convenient. They offer a discount to guests of Blue Waters Villa. Let us know and we'll give you the discount code to get your discount.</p>
            </div>
          </div>
          
          {/* Additional services */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <UtensilsCrossed className="h-10 w-10 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Additional Services</h2>
            </div>
            
            <div className="space-y-4 text-blue-800">
              <p>We can arrange to have grocery shopping done for you or for a chef to cook for you in the villa. Just let us know.</p>
              
              <p>We can arrange a rental car for you or a taxi to meet you at the airport. Just let us know how we can help you.</p>
            </div>
          </div>
          
          {/* Contact for assistance */}
          <div className="bg-blue-900 text-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="h-10 w-10 text-white" />
              <h2 className="text-2xl font-semibold">Need Assistance?</h2>
            </div>
            
            <p className="mb-6">Contact us directly for help with travel arrangements, car rentals, or any other questions about getting to Blue Waters Villa.</p>
            
            
          </div>
        </div>
      </section>
    </main>
  );
}