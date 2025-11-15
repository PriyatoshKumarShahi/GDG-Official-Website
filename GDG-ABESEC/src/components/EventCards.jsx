"use client";

import React, { useState } from "react";
import BounceCards from "./ui/BounceCards";
import { motion, AnimatePresence } from "framer-motion";

const eventsData = [
  {
    title: "CodeStorm 2025",
    date: "March 12, 2025",
    description:
      "A coding hackathon where developers collaborated and built impactful tech solutions.",
    thumbnail: "/event1.png",

    gallery: [
      "https://source.unsplash.com/random/800x600/?coding",
      "https://source.unsplash.com/random/800x600/?hackathon",
      "https://source.unsplash.com/random/800x600/?developers",
      "https://source.unsplash.com/random/800x600/?programming",
      "https://source.unsplash.com/random/800x600/?technology",
    ],
  },
  {
    date: "April 5, 2025",
    description:
      "A 24-hour hackathon focused on creative problem solving and real-world innovation.",
    thumbnail: "/event2.png",
    gallery: [
      "/images/events/hack1.jpg",
      "/images/events/hack2.jpg",
      "/images/events/hack3.jpg",
      "/images/events/hack4.jpg",
      "/images/events/hack5.jpg",
    ],
  },
  {
    title: "Web Innovate",
    date: "May 10, 2025",
    description:
      "A front-end challenge encouraging creativity in modern web design and user experience.",
    thumbnail: "/event3.png",
    gallery: [
      "/images/events/web1.jpg",
      "/images/events/web2.jpg",
      "/images/events/web3.jpg",
      "/images/events/web4.jpg",
      "/images/events/web5.jpg",
    ],
  },
  {
    title: "TechTalks",
    date: "June 3, 2025",
    description:
      "Expert-led sessions sharing insights on AI, Web3, cloud computing, and more.",
    thumbnail: "/event4.png",
    gallery: [
      "/images/events/talk1.jpg",
      "/images/events/talk2.jpg",
      "/images/events/talk3.jpg",
      "/images/events/talk4.jpg",
      "/images/events/talk5.jpg",
    ],
  },
];

export default function EventsCard() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section className="w-full min-h-screen bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            style={{ height: "360px" }}
            onClick={() => setActiveEvent(event)}
          >
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-300 transition-all duration-500 p-5 flex flex-col justify-end">
              <p className="text-gray-300 text-xs">{event.date}</p>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{event.description}</p>

              <p
                className="mt-4 text-sm text-blue-400 font-medium flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEvent(event);
                }}
              >
                Explore More
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative bg-gray-900/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
            >
              <button
                className="absolute cursor-pointer top-3 right-3 text-gray-300 hover:text-white text-3xl"
                onClick={() => setActiveEvent(null)}
              >
                ×
              </button>

              <h3 className="text-center text-2xl font-bold mb-6">
                {activeEvent.title}
              </h3>

              <BounceCards
                images={activeEvent.gallery}
                containerWidth={480}
                containerHeight={360}
                enableHover={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
