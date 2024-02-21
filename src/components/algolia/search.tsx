"use client";
import { SearchBox } from "react-instantsearch";
import { AlgoliaSearchWrapper } from "./algoliaSearchWrapper";


export function Search() {
  return (
    <AlgoliaSearchWrapper>
      <SearchBox />
    </AlgoliaSearchWrapper>
  );
}
