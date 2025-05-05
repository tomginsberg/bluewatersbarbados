import { Star, Quote, MapPin } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      text: "The villa is very beautifully decorated and spacious, we really enjoyed our stay there and felt very at home in this luxurious house! We really enjoyed swimming in the pool and walking to the beach to hang out on the sand. The beaches near the villa are beautiful and calm with soft, white sand. Beach chairs and great food are available at the beach near Ju'jus which is a 10 minute walk. Peter and Charlotte were very quick to respond and once we arrived, Ja-Net was very helpful. We definitely recommend this beautiful villa!",
      author: "Hannah",
      date: "February 2025"
    },
    {
      text: "Charlotte and Peter's home is truly beautiful and we were delighted to be able to stay there during our visit to Holetown.\n    The house is larger than it appears in the pictures and every detail to make one comfortable has been considered. The backyard patio with plunge pool is a lovely place to relax after a long day in the sun! The upstairs bedrooms are quite private from the downstairs which was lovely as another couple stayed with us.\n   The walk to the beach was very easy once we had first found our way and the Alleyne's bay beach Charlotte and Peter recommended is quite long with quieter stretches for swimming, as well as higher swells in some parts. Water sports are sometimes available but not intrusive. Ju ju's beach bar has delicious food and drinks all day and Rico saved our favourite beach loungers for us. We stayed until sunset each day. We will definitely stay here again next time we are in Barbados, hopefully for a longer visit.",
      author: "Louise",
      date: "February 2025"
    },
    {
      text: "We have spent months traveling in Barbados in the past couple of years, and have stayed in several different places. Blue Waters Villa is a perfect rental in Barbados: the house has lots of space, is nicely decorated, has a great outdoor space and plunge pool and has all amenities required. Location in Porters is perfect, near the beach, close to Holetown and Speightstown, and near several restaurants, bars and a lovely bakery (la Baguette). We also worked remotely from the villa, and the wifi is fast and reliable. Peter and Charlotte are fantastic hosts, and we look forward to being back soon!",
      author: "Francois Paradis",
      date: "January 2024"
    },
    {
      text: "Everything that you read about Blue Waters Villa and the surrounding area is completely accurate. A luxury villa furnished to a very high standard with everything you could wish for, in a great location, minutes away from 2 fantastic beaches. Communication from Peter & Charlotte was faultless from start to finish, and Ja'Net was very helpful during our stay.",
      author: "Anthony Sage",
      date: "5 years ago"
    },
    {
      text: "Wow! What a great find. My family and I enjoyed 10 lovely nights staying at Peter & Charlotte's stunning home. The villa was spotless and so spacious, the whole villa feels like real luxury. We enjoyed full days at the pool and had a few BBQ's - the cooking facilities are ideal for what we needed. The location is also very good. JaNette was also very helpful. Many thanks for a lovely stay, I would recommend this villa to anyone looking for a relaxing stay!",
      author: "Emma",
      date: "5 years ago"
    },
    {
      text: "We thoroughly enjoyed our stay at this very spacious, beautifully decorated villa. Peter and Charlotte were a pleasure to deal with and JaNet very welcoming and thorough when we arrived. The villa is in a great location - perfect for beaches, restaurants and bars! We'll definitely be booking again - would highly recommend. Thank you :)",
      author: "Sharnel",
      date: "5 years ago"
    },
    {
      text: "There aren't words great enough to describe the amazing time we had at Peter and Charlotte's place! My son (1.5 years) and I stayed there with my inlaws for a holiday in Barbados and we can't wait for the next opportunity to go!\n\nThe space is both gracious and spacious - the pictures that describe it are great, but they don't do the space justice at all - we were all surprised at how large the bedrooms, bathrooms and living room were. The soundproofing is incredible - so nice for a multi-family experience. I was upstairs and my in-laws watched a movie and I couldn't hear them at all - and vice versa! Also, the way the bedrooms are placed in proximity to each other and the stairs affords maximum privacy - so nice for multi family guests.\n\nThe downstairs bedroom has the bed at the far end of the room (including a private ensuite bathroom!) and so it provides great privacy. There are 3 bathrooms, which was exceptional and one of the reasons why the space felt so easy and gracious (also the bathroom upstairs has a separate door to the toilet/bathtub room - a feature I always appreciate when traveling with others) The rooms were huge - all bedrooms included walk in closets, hangers and large dressers to store all your belongings. It was so nice, because I was able to unpack my suitcase in the dressers, and then hide my suitcase away in the closet - such a luxury and made me feel like I was at home instead of temporarily there! The couches, chairs and importantly the beds are all high quality and extremely comfortable. It looks recently renovated, and it shows.\n\nThe kitchen is well stocked for cooking - all the necessary items, plus lots of spices. Great knives and everything we needed in a kitchen to make food -including the BBQ on the patio! Also, wifi was good - something not to be taken for granted on an island. The garden is lovely and landscaped, the plunge pool is simply amazing - it has a lovely bench along one side, so you can just sit in it. The tiled patio was gorgeous - it was so lovely to sit out there in the consistently 29 degree weather evening and just enjoy the warm weather and the gracious space.\n\nHowever, The 100% best part about this place was the proximity to the beach. An easy 10 min walk to Alleynes Bay that has chairs/umbrellas you can rent from a great guy named Rico (a chair is 15 Barbadian dollars and an umbrella is 15 Barbadian dollars p/day), (the hosts do also have chairs/umbrellas too that you can take, I just didn't actually realize that right away), a restaurant called JuJus that was just a fabulous beachside bar with basic (but delicious!) sandwiches (might I recommend the bacon and cheese sandwich!), fish and burgers, amazing fries and lots of drink selections (don't forget to drink up your Banks while in Barbados!). I think a lot of people tend to like Heron Bay for swimming, but we loved Alleynes Bay as it had everything - bathrooms, restaurant, chairs, swimming. We literally spent from 9am to 6pm sunset there.\n\nI'm dreaming of going back if you can't tell. There literally isn't anything I could find negative about this place. The 10 min walk to the beach wasn't a problem, and it meant that you had a lot of privacy in a quiet neighbourhood. Thank you so much Charlotte and Peter for a wonderful place to holiday!",
      author: "Jessica",
      date: "5 years ago"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header section */}
      <section className="w-full py-16 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Guest Reviews</h1>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-blue-800">
            Read what our guests have to say about their experience at Blue Waters Villa
          </p>
        </div>
      </section>

      {/* Reviews section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-8 shadow-sm relative">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-200 opacity-50" />
                <div className="pl-4">
                  <p className="text-blue-800 mb-6 whitespace-pre-line">
                    {review.text}
                  </p>
                  <div className="flex items-center border-t border-blue-100 pt-4">
                    <div>
                      <p className="font-semibold text-blue-900">{review.author}</p>
                      <p className="text-sm text-blue-600">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Reviews section */}
      <section className="w-full py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-900">Google Maps Reviews</h2>
          </div>
          
          <p className="text-lg text-blue-800 mb-6">
            Read more reviews or share your own experience on our Google Maps listing
          </p>
          
          <a 
            href="https://www.google.com/maps/place/Blue+Waters+Villa/@13.2002327,-59.6382702,17.75z/data=!4m5!3m4!1s0x0:0xeae2dc3017826c5a!8m2!3d13.2001311!4d-59.6363477" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-200 rounded-lg text-blue-600 font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Star className="h-5 w-5" />
            View and Leave Reviews on Google Maps
          </a>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience Blue Waters Villa?</h2>
          <p className="text-xl mb-8">Join our happy guests and create your own memories in Barbados</p>
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