"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Heart } from "lucide-react";

interface Project {
  title: string;
  price: string | number;
  location: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, price, location, image } = project;

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer w-[320px]">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:scale-110 transition">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Details Section */}
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="flex items-center gap-1 text-lg font-semibold text-primary">
            {price}
          </p>

          <button className="bg-primary text-white text-sm px-4 py-1.5 rounded-full hover:bg-primary/90 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
