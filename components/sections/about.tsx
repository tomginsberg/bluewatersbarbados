import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

export default function About() {
    return (
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
    )
}