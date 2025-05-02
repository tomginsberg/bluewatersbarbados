"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Check, Link } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

// Guest Details form schema
const guestDetailsSchema = z.object({
  contactName: z.string().min(2, { message: "Contact name is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
  bedrooms: z.array(z.string()).min(1, { message: "Please select at least one bedroom" }),
  otherGuests: z.string().optional(),
});

// Travel Details form schema
const travelDetailsSchema = z.object({
  arrivalDate: z.date({ required_error: "Arrival date is required" }),
  arrivalFlightNo: z.string().optional(),
  arrivalTime: z.string().optional(),
  arrivalAirline: z.string().optional(),
  departureDate: z.date({ required_error: "Departure date is required" }),
  departureFlightNo: z.string().optional(),
  departureTime: z.string().optional(),
  departureAirline: z.string().optional(),
  transferRequired: z.enum(["yes", "no"], {
    required_error: "Please select if you require an airport transfer",
  }),
  name: z.string().min(2, { message: "Your name is required" }),
});

// Emergency Contact form schema
const emergencyContactSchema = z.object({
  emergencyName: z.string().min(2, { message: "Emergency contact name is required" }),
  emergencyNumber: z.string().min(7, { message: "Please enter a valid emergency contact number" }),
  firstTimeBarbados: z.enum(["yes", "no"], {
    required_error: "Please indicate if this is your first time to Barbados",
  }),
  firstTimeVilla: z.enum(["yes", "no"], {
    required_error: "Please indicate if this is your first time to Blue Waters Villa",
  }),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
  name: z.string().min(2, { message: "Your name is required" }),
});

export default function RentalAgreementPage() {
  // Form states
  const [guestDetailsSubmitted, setGuestDetailsSubmitted] = useState(false);
  const [travelDetailsSubmitted, setTravelDetailsSubmitted] = useState(false);
  const [emergencyContactSubmitted, setEmergencyContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize forms
  const guestDetailsForm = useForm<z.infer<typeof guestDetailsSchema>>({
    resolver: zodResolver(guestDetailsSchema),
    defaultValues: {
      contactName: "",
      address: "",
      email: "",
      phone: "",
      bedrooms: [],
      otherGuests: "",
    },
  });
  
  const travelDetailsForm = useForm<z.infer<typeof travelDetailsSchema>>({
    resolver: zodResolver(travelDetailsSchema),
    defaultValues: {
      arrivalFlightNo: "",
      arrivalTime: "",
      arrivalAirline: "",
      departureFlightNo: "",
      departureTime: "",
      departureAirline: "",
      name: "",
    },
  });
  
  const emergencyContactForm = useForm<z.infer<typeof emergencyContactSchema>>({
    resolver: zodResolver(emergencyContactSchema),
    defaultValues: {
      emergencyName: "",
      emergencyNumber: "",
      name: "",
      // Don't set a default value for agreeTerms since it must be true
    },
  });

  // Submit handlers
  const onSubmitGuestDetails = async (values: z.infer<typeof guestDetailsSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Formspree submission (replace with actual endpoint)
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Guest Details",
          ...values,
        }),
      });
      
      if (response.ok) {
        setGuestDetailsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onSubmitTravelDetails = async (values: z.infer<typeof travelDetailsSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Formspree submission (replace with actual endpoint)
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Travel Details",
          ...values,
          arrivalDate: format(values.arrivalDate, "PPP"),
          departureDate: format(values.departureDate, "PPP"),
        }),
      });
      
      if (response.ok) {
        setTravelDetailsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your travel details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const onSubmitEmergencyContact = async (values: z.infer<typeof emergencyContactSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Formspree submission (replace with actual endpoint)
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Emergency Contact",
          ...values,
        }),
      });
      
      if (response.ok) {
        setEmergencyContactSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your emergency contact details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Agreement for Rental</h1>
          <p className="text-lg md:text-xl text-blue-800">
            Please fill in and submit all three sections below
          </p>
        </div>
      </section>

      {/* Forms Container */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          
          {/* Guest Details Form */}
          <div className={`p-6 rounded-lg shadow-md border ${guestDetailsSubmitted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Guest Details</h2>
            <Separator className="mb-6" />
            
            {guestDetailsSubmitted ? (
              <div className="text-green-700 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Thank you! Guest details submitted.</h3>
                </div>
                <p>Please proceed to the next section.</p>
              </div>
            ) : (
              <Form {...guestDetailsForm}>
                <form onSubmit={guestDetailsForm.handleSubmit(onSubmitGuestDetails)} className="space-y-6">
                  <FormField
                    control={guestDetailsForm.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={guestDetailsForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={guestDetailsForm.control}
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
                    control={guestDetailsForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={guestDetailsForm.control}
                    name="bedrooms"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>For less than 6 guests, which bedrooms would you like to use?</FormLabel>
                          <FormDescription>
                            Select all bedrooms you&apos;d like to use.
                          </FormDescription>
                        </div>
                        
                        {["Blue Room upstairs with King bed (72\" width)", 
                          "Garden Room upstairs with 2 Single/Twin beds", 
                          "Master Suite downstairs with King bed (72\" width)"
                        ].map((bedroom) => (
                          <FormField
                            key={bedroom}
                            control={guestDetailsForm.control}
                            name="bedrooms"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={bedroom}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                      checked={field.value?.includes(bedroom)}
                                      onChange={(e) => {
                                        return e.target.checked
                                          ? field.onChange([...field.value, bedroom])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== bedroom
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {bedroom}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={guestDetailsForm.control}
                    name="otherGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Guests to Stay</FormLabel>
                        <FormDescription>
                          Please tell us about each person in the group who will be staying in the villa
                        </FormDescription>
                        <FormControl>
                          <Textarea 
                            placeholder="Names and ages of all guests" 
                            className="min-h-24"
                            {...field} 
                          />
                        </FormControl>
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
                    {isSubmitting ? "Submitting..." : "Submit Guest Details"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* Travel Details Form */}
          <div className={`p-6 rounded-lg shadow-md border ${travelDetailsSubmitted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Travel Details</h2>
            <Separator className="mb-6" />
            
            {travelDetailsSubmitted ? (
              <div className="text-green-700 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Thank you! Travel details submitted.</h3>
                </div>
                <p>Please proceed to the next section.</p>
              </div>
            ) : (
              <Form {...travelDetailsForm}>
                <form onSubmit={travelDetailsForm.handleSubmit(onSubmitTravelDetails)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={travelDetailsForm.control}
                      name="arrivalDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Arrival Date</FormLabel>
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
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={travelDetailsForm.control}
                      name="arrivalFlightNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Flight no.</FormLabel>
                          <FormControl>
                            <Input placeholder="Flight number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={travelDetailsForm.control}
                      name="departureDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Departure Date</FormLabel>
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
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={travelDetailsForm.control}
                      name="departureFlightNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Flight no.</FormLabel>
                          <FormControl>
                            <Input placeholder="Flight number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={travelDetailsForm.control}
                      name="arrivalTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Arrival Time</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 14:30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={travelDetailsForm.control}
                      name="arrivalAirline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Airline</FormLabel>
                          <FormControl>
                            <Input placeholder="Airline name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={travelDetailsForm.control}
                      name="departureTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departure Time</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 16:45" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={travelDetailsForm.control}
                      name="departureAirline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Airline</FormLabel>
                          <FormControl>
                            <Input placeholder="Airline name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={travelDetailsForm.control}
                    name="transferRequired"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Airport Transfer Required?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={travelDetailsForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
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
                    {isSubmitting ? "Submitting..." : "Submit Travel Details"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* Emergency Contact Form */}
          <div className={`p-6 rounded-lg shadow-md border ${emergencyContactSubmitted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Emergency Contact</h2>
            <Separator className="mb-6" />
            
            {emergencyContactSubmitted ? (
              <div className="text-green-700 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Thank you! Emergency contact details submitted.</h3>
                </div>
                <p>Your rental agreement has been completed.</p>
              </div>
            ) : (
              <Form {...emergencyContactForm}>
                <form onSubmit={emergencyContactForm.handleSubmit(onSubmitEmergencyContact)} className="space-y-6">
                  <FormField
                    control={emergencyContactForm.control}
                    name="emergencyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name of emergency contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={emergencyContactForm.control}
                    name="emergencyNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Emergency contact phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-4">
                    <h3 className="text-base font-medium">Is this your first time to:</h3>
                    
                    <FormField
                      control={emergencyContactForm.control}
                      name="firstTimeBarbados"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Barbados</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row space-x-4"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal">Yes</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal">No</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={emergencyContactForm.control}
                      name="firstTimeVilla"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Blue Waters Villa</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row space-x-4"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal">Yes</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal">No</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={emergencyContactForm.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I have read the &quot;Terms and Conditions&quot; on this website and accept these as part of this booking contract. I am over 18 years of age and accept that my booking is for the holiday period stated above. I am willing to accept responsibility for any breakages and electricity use. I / we will vacate the property at the conclusion of the period above as agreed.
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={emergencyContactForm.control}
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
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Emergency Contact"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* Completion Message */}
          {guestDetailsSubmitted && travelDetailsSubmitted && emergencyContactSubmitted && (
            <div className="p-6 bg-green-100 rounded-lg text-center border border-green-300">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Agreement Completed!</h2>
              <p className="text-green-700">
                Thank you for completing all the forms. We have received your information and will be in touch shortly to confirm your booking.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}