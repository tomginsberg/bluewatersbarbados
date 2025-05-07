"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import About from "@/components/sections/about";

export default function BookPage() {
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
            Book Your Stay
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We'd be so pleased to welcome you to Blue Waters Villa. Please tell us about your group and when you'd like to visit and we'll get back to you within one day. 
          </motion.p>
        </div>
      </section>

      {/* Link to Rates & Availability */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-blue-800 mb-4">
            Before booking, check our current rates and availability
          </p>
          <Link href="/rates-and-availability">
            <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
              View Rates & Availability
            </Button>
          </Link>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="w-full py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Contact Us to Book</h2>
          
          <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeL8ISaSWsvPlo8gGbX0aarcVqVSdKxBafS8Vf7u2aH_L-XKw/viewform?embedded=true" 
               
                style={{ border: "none" }}
                title="Booking Form"
                className="h-[1300px] w-full"
              >
                Loading…
              </iframe>
          
          {/* Terms and Agreement Links */}
          <div className="mt-8 text-center text-sm text-blue-600 space-y-2">
            <p>Please review our terms and conditions</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 w-full text-center items-center">
                <Link href="/terms">
                  <Button variant="outline" className="inline-flex items-center">
                  Terms and Conditions
                  </Button>
                </Link>
                <span className="hidden sm:inline text-gray-400">|</span>
                <Link href="/agreement">
                  <Button variant="outline" className="inline-flex items-center">
                  Complete Rental Agreement
                  </Button>
                </Link>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              You&apos;ll need to agree to our terms and complete a rental agreement form after your booking is confirmed.
            </p>
          </div>
        </div>
      </section>

      <About/>
    </main>
  );
}