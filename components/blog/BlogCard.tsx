"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  image?: string;
}

const BlogCard = ({ id, title, summary, image }: BlogCardProps) => {
  return (
    <div
      className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-[32px] gap-3 p-2"
      style={{
        width: "398px",
        height: "437px",
      }}
    >
      {/* Blog Image */}
      {image ? (
        <Image
          src={image}
          alt={title}
          className="object-cover w-[382px] h-[217px] rounded-[24px]"
          width={382}
          height={217}
        />
      ) : (
        <Image
          src="/assets/NoImage.png"
          alt="No image available"
          className="object-cover w-[382px] h-[217px] rounded-[24px]"
          width={382}
          height={217}
        />
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 gap-3 p-2">
        <h3
          className="text-gray-900 line-clamp-2"
          style={{
            fontFamily: "PP Editorial New",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "0%",
          }}
        >
          {title}
        </h3>

        <p
          className="flex-1 text-gray-600 line-clamp-3"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-1%",
          }}
        >
          {summary}
        </p>

        {/* Read Article Button */}
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center justify-center gap-2 transition-colors bg-white border rounded-[8px] hover:bg-gray-100"
          style={{
            width: "123px",
            height: "36px",
            padding: "8px 12px",
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            textAlign: "center",
            borderWidth: "1px",
            color: "#000",
          }}
        >
          Read Article
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
