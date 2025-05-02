import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-900">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-1 space-y-6">
            <p className="text-lg">Blue Waters Villa is located in Porters, Saint James, Barbados.</p>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:bluewatersbarbados21@gmail.com" className="text-blue-600 hover:underline">
                bluewatersbarbados21@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <a href="tel:+14169956444" className="text-blue-600 hover:underline">
                +1 416 995 6444
              </a>
            </div>
            
            <p className="italic text-gray-600">Please call anytime if you have questions or feel free to email.</p>
          </div>
          
          <div className="flex-1">
            
            <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-200 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.6622235094857!2d-59.63826992453878!3d13.200232662441704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeae2dc3017826c5a!2sBlue%20Waters%20Villa!5e0!3m2!1sen!2sus!4v1714666752143!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
}