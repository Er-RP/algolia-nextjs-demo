"use client";
import { envConfig } from "@/utils/envConfig";
import { searchClient } from "@/utils/searchClient";
import { InstantSearchNext } from "react-instantsearch-nextjs";

export function AlgoliaSearchWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InstantSearchNext
      indexName={envConfig?.ALGOLIA_SEARCH_INDEX}
      searchClient={searchClient}
      routing
    >
      {children}
    </InstantSearchNext>
  );
}
