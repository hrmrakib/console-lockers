"use client";

import Image from "next/image";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface ReviewCardProps {
  text: string;
  text2: string;
  author: string;
  position: string;
  rating: number;
  avatar: string;
}

export default function ReviewCard({
  text,
  text2,
  author,
  position,
  rating,
  avatar,
}: ReviewCardProps) {
  const [textLength, setTextLength] = useState(130);

  const [selectedLang, setSelectedLang] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    setSelectedLang(lang || "");
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg h-full flex flex-col">
      {" "}
      {/* Full height */}
      <p className="text-[#000000] leading-7 text-lg mb-6 flex-grow overflow-hidden">
        {selectedLang === "en"
          ? text.length > textLength
            ? `${text.slice(0, textLength)} ...`
            : text
          : text2.length > textLength
          ? `${text2.slice(0, textLength)} ...`
          : text2}

        {/* {text.length > textLength ? `${text.slice(0, textLength)} ...` : text} */}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{author}</h3>
            <p className="text-gray-600 text-sm">{position}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <StarFilled key={index} className="text-yellow-400 text-lg" />
            ) : (
              <StarOutlined key={index} className="text-gray-300 text-lg" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
