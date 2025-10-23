"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Heart } from "lucide-react";

interface ProjectProps {
  title: string;
  price: string | number;
  location: string;
  image: string;
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { title, price, location, image } = project;

  return (
    <div className="group relative w-[320px] rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer">
      {/* Image Section */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Heart Icon */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all">
          <Heart size={18} className="text-gray-700 hover:text-red-500" />
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 bg-white/90 text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
          {price}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
          <MapPin size={15} className="text-primary" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
