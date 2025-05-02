"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Book Your Stay</h1>
          <p className="text-lg md:text-xl text-blue-800">
            Check availability and contact us to reserve your dream vacation at Blue Waters Villa
          </p>
        </div>
      </section>

      {/* Availability Calendar Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Check Availability</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-200 shadow-md mb-6">
            {/* Replace with the actual Google Calendar embed code */}
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=placeholder%40group.calendar.google.com&ctz=America%2FBarbados" 
              style={{ border: 0 }} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no"
            ></iframe>
          </div>
          <p className="text-center text-blue-600 italic">
            The calendar shows our current availability. Dates marked are already booked.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Rental Rates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-blue-100 pb-2">
                Apr 1 – Dec 14, 2025
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1 bedroom (1-2 people):</span>
                  <span className="font-semibold">$280 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>2 bedrooms (up to 4 people):</span>
                  <span className="font-semibold">$360 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>3 bedrooms (up to 6 people):</span>
                  <span className="font-semibold">$440 USD/night</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-blue-100 pb-2">
                Dec 15, 2025 – Jan 12, 2026 (Peak)
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1 bedroom (1-2 people):</span>
                  <span className="font-semibold">$590 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>2 bedrooms (up to 4 people):</span>
                  <span className="font-semibold">$660 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>3 bedrooms (up to 6 people):</span>
                  <span className="font-semibold">$730 USD/night</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-blue-100 pb-2">
                Jan 13 – Apr 12, 2026
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1 bedroom (1-2 people):</span>
                  <span className="font-semibold">$380 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>2 bedrooms (up to 4 people):</span>
                  <span className="font-semibold">$460 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>3 bedrooms (up to 6 people):</span>
                  <span className="font-semibold">$540 USD/night</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-blue-100 pb-2">
                Apr 13 – Dec 14, 2026
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>1 bedroom (1-2 people):</span>
                  <span className="font-semibold">$290 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>2 bedrooms (up to 4 people):</span>
                  <span className="font-semibold">$370 USD/night</span>
                </li>
                <li className="flex justify-between">
                  <span>3 bedrooms (up to 6 people):</span>
                  <span className="font-semibold">$450 USD/night</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              From Dec 15, 2026 onward
            </h3>
            <p className="text-blue-800">
              Rates are not listed; please call for pricing. We are happy to book dates further in the future.
            </p>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Additional Information</h3>
            <ul className="space-y-3 text-blue-800">
              <li>There is an additional one-time fee for cleaning of $95 USD per booking</li>
              <li>Refundable damage deposit of $400 USD (or £300) will be charged at booking and refunded within one week of departure</li>
              <li>7 night minimum stay</li>
              <li>50% of the total rental price is payable on booking. The remaining 50% is due 8 weeks before your arrival</li>
              <li>We accept payment by PayPal or direct bank transfer in USD, CAD or GBP</li>
              <li>If you would like to pay by PayPal we will need to add the 4% fee they charge us to your total</li>
              <li>Blue Waters Villa is in a very quiet neighbourhood and our neighbours are our friends. No parties or music are allowed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Contact Us to Book</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank you for your booking request!</h3>
              <p>We have received your information and will contact you shortly to confirm availability and complete your booking.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        </div>
      </section>
    </main>
  );
}