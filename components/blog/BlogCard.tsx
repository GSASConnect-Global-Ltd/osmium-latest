"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
  image?: string;
}

const BlogCard = ({ slug, title, summary, image }: BlogCardProps) => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden bg-gray-100 rounded-[32px] gap-3 p-2"
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

      {/* Blog Body */}
      <div
        className="flex flex-col flex-1 bg-white rounded-[24px]"
        style={{
          width: "382px",
          height: "192px",
          gap: "24px",
          padding: "24px",
        }}
      >
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
          href={`/blog/${slug}`}
          className="flex items-center justify-center gap-2 px-3 py-2 transition-colors rounded-[8px] border border-[#E9E9E9] hover:bg-gray-100"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#000",
            width: "fit-content", // ✅ make it fit the content
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
