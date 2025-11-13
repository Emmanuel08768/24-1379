import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to Your Advanced React App</h2>
      <p className="text-xl max-w-2xl mx-auto mt-4 text-gray-700">
        This project includes routing, animations, components, and a structured layout. Expand it with API calls, authentication, charts, or dashboards.
      </p>
    </motion.div>
  );
}
