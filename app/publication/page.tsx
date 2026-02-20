"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// ---------------- TYPES ----------------

type SortOption = "relevance" | "date" | "citations";

interface Publication {
  id: number;
  type: string;
  title: string;
  authors: string;
  year: number;
  source: string;
  citations: number;
  description: string;
}

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface SortControlProps {
  sort: SortOption;
  setSort: React.Dispatch<React.SetStateAction<SortOption>>;
}

interface PublicationCardProps {
  item: Publication;
}

// ---------------- MOCK DATA ----------------

const publications: Publication[] = [
  {
    id: 1,
    type: "Book",
    title: "Digital Marketing",
    authors: "D. Chaffey, F. Ellis‑Chadwick",
    year: 2019,
    source: "Books",
    citations: 8734,
    description:
      "Benefits of digital marketing, alternative digital business models, and modern online presence strategies.",
  },
  {
    id: 2,
    type: "PDF",
    title: "Digital Marketing: A Review",
    authors: "V. Desai, B. Vidyapeeth",
    year: 2019,
    source: "Journal",
    citations: 925,
    description:
      "Conceptual understanding of digital marketing campaigns and consumer behavior in online environments.",
  },
  {
    id: 3,
    type: "Review",
    title: "A Critical Review of Digital Marketing",
    authors: "M. Bala, D. Verma",
    year: 2018,
    source: "Research Papers",
    citations: 1640,
    description:
      "SEO, SEM, content marketing, and influencer marketing trends in the digital era.",
  },
  {
    id: 4,
    type: "PDF",
    title: "Digital Marketing",
    authors: "A. Sawicki",
    year: 2016,
    source: "Scientific News",
    citations: 224,
    description:
      "Digital evolution enabling dynamic marketing models and online engagement strategies.",
  },
];

// ---------------- COMPONENTS ----------------

function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <input
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value)
      }
      placeholder="Search publications…"
      className="w-full p-3 border shadow-sm rounded-2xl"
    />
  );
}

function SortControl({ sort, setSort }: SortControlProps) {
  return (
    <select
      value={sort}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setSort(e.target.value as SortOption)
      }
      className="p-3 border shadow-sm rounded-2xl"
    >
      <option value="relevance">Sort by relevance</option>
      <option value="date">Sort by year</option>
      <option value="citations">Sort by citations</option>
    </select>
  );
}

function PublicationCard({ item }: PublicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-5 space-y-2 bg-white shadow-md rounded-2xl"
    >
      <div className="text-sm text-gray-500">[{item.type}]</div>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">
        {item.authors} — {item.year}
      </p>
      <p className="text-sm">{item.description}</p>
      <div className="text-xs text-gray-500">
        Source: {item.source} • Citations: {item.citations}
      </div>

      <div className="flex gap-4 text-sm text-blue-600">
        <button>Save</button>
        <button>Cite</button>
        <button>Related</button>
      </div>
    </motion.div>
  );
}

// ---------------- PAGE ----------------

export default function PublicationPage() {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<SortOption>("relevance");

  const filtered = useMemo(() => {
    let result = publications.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );

    if (sort === "date") {
      result = [...result].sort((a, b) => b.year - a.year);
    }

    if (sort === "citations") {
      result = [...result].sort(
        (a, b) => b.citations - a.citations
      );
    }

    return result;
  }, [query, sort]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Publications</h1>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
          <SortControl sort={sort} setSort={setSort} />
        </div>

        <div className="space-y-4">
          {filtered.map((item) => (
            <PublicationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
