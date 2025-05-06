"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideInLeft } from "@/components/animations";

export default function RatesAndAvailabilityPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rates & Availability
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check our current rates and availability calendar for Blue Waters Villa
          </motion.p>
        </div>
      </section>

      {/* Availability Calendar Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Check Availability</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-200 shadow-md mb-6">
              {/* Google Calendar embed code */}
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=bluewatersbarbados21%40gmail.com&ctz=America%2FToronto" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
              ></iframe>
            </div>
            <p className="text-center text-blue-600 italic">
              The calendar shows our current availability. Dates marked are already booked.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <SlideInLeft>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Rental Rates</h2>
            
            <div>
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vSAkc3vsMduK_AOrL-SJcLpt21IotVMFuyl6gT5xlwcSfddkhnIc8uTjMs7QL7dQ7FUVydD2Tpg_1bA/pubembed?start=false&loop=false&delayms=60000" 
                height="100%"
                className="w-full aspect-[1.655] rounded-lg border-2 border-gray-200 shadow-md" 
                allowFullScreen={true}
              />
            </div>
            
            <div className="bg-blue-100 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Additional Information</h3>
              <ul className="space-y-3 text-blue-800 list-disc pl-5">
                <li>There is an additional one-time fee for cleaning of $95 USD per booking.</li>
                <li>Refundable damage deposit of $400 USD (or £300) will be charged at booking and refunded within one week of departure.</li>
                <li>7 night minimum stay.</li>
                <li>50% of the total rental price is payable on booking. The remaining 50% is due 8 weeks before your arrival.</li>
                <li>We accept payment by PayPal or direct bank transfer in USD, CAD or GBP.</li>
                <li>If you would like to pay by PayPal we will need to add the 4% fee they charge us to your total.</li>
                <li>Blue Waters Villa is in a very quiet neighbourhood and our neighbours are our friends. No parties or music are allowed.</li>
              </ul>
            </div>
          </SlideInLeft>
        </div>
      </section>

      {/* CTA Section for booking */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Ready to Book Your Stay?</h2>
            <p className="text-lg text-blue-800 mb-8">
              Contact us to complete your booking or ask any questions you may have.
            </p>
            <a 
              href="/book" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}