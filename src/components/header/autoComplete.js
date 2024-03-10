import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { searchClient } from "../../utils/searchClient";
import { envConfig } from "../../utils/envConfig";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { convertToSlug } from "../../utils/strToSlug";

const Autocomplete = () => {
  const containerRef = useRef(null);
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      openOnFocus:true,
      renderer: { createElement, Fragment, render: () => {} },
      getSources: ({ query }) => [
        {
          sourceId: "hits",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: envConfig?.ALGOLIA_SEARCH_INDEX,
                  query,
                  params: {
                    hitsPerPage: 3,
                  },
                },
              ],
            });
          },
          templates: {
            item({ item }) {
                const slug = convertToSlug(item?.name)
              return (
                <Link
                to={`/${slug}/${item?.objectID}`}
                  className="my grid grid-cols-[50px_auto] grid-rows-[50px] gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ borderRadius: "4px" }}
                    className="row-span-1 h-full"
                  />
                  <div>
                    <p style={{ fontWeight: "600", padding: "0" }}>
                      {item.name}
                    </p>
                    <p className=" text-sm text-gray-900">$ {item.price}</p>
                  </div>
                </Link>
              );
            },
          },
        },
      ],
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(
          <RouterProvider
            router={createBrowserRouter([
              {
                path: "*",
                element: children,
              },
            ])}
          ></RouterProvider>
        );
      },
    });

    return () => {
      search.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Autocomplete;
