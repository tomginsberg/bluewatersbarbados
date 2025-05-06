"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  checkIn: z.date({ required_error: "Please select a check-in date." }),
  checkOut: z.date({ required_error: "Please select a check-out date." }),
  groupInfo: z.string().min(10, { message: "Please provide some information about your group." }),
});

export default function BookPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      groupInfo: "",
    },
  });

  // Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Formspree submission (replace with your actual endpoint)
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          checkIn: format(values.checkIn, "PPP"),
          checkOut: format(values.checkOut, "PPP"),
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
            Reserve your dream vacation at Blue Waters Villa
          </motion.p>
        </div>
      </section>

      {/* Link to Rates & Availability */}
      <section className="w-full py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-blue-800 mb-4">
            Before booking, check our current rates and availability:
          </p>
          <Link href="/rates-and-availability">
            <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
              View Rates & Availability
            </Button>
          </Link>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Contact Us to Book</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank you for your booking request!</h3>
              <p>We have received your information and will contact you shortly to confirm availability and complete your booking.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="checkIn"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Check-in Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span className="text-muted-foreground">Select date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="checkOut"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Check-out Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="w-full pl-3 text-left font-normal"
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span className="text-muted-foreground">Select date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                const checkIn = form.getValues("checkIn");
                                return !checkIn || date <= checkIn || date < new Date();
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="groupInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Your Group & Questions</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please tell us about your group (number of adults/children) and any questions you may have."
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This helps us prepare for your stay and answer any questions you might have.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </form>
            </Form>
          )}
          
          {/* Terms and Agreement Links */}
          <div className="mt-8 text-center text-sm text-blue-600 space-y-2">
            <p>Please review our terms and conditions before booking:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
              <a 
                href="/terms" 
                className="inline-flex items-center hover:underline"
              >
                Terms and Conditions
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a 
                href="/agreement" 
                className="inline-flex items-center hover:underline"
              >
                Complete Rental Agreement
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              You&apos;ll need to agree to our terms and complete a rental agreement form after your booking is confirmed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}