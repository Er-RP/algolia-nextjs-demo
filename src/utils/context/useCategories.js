import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { searchClient } from "../searchClient";
import { envConfig } from "../envConfig";
const index = searchClient.initIndex(envConfig?.ALGOLIA_CAT_INDEX);

export const categoriesInitialState = {
  data: null,
  error: null,
  loading: true,
};
const CategoriesContext = createContext(categoriesInitialState);

export const useCategories = () => useContext(CategoriesContext);
const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => categoriesInitialState);
  useEffect(() => {
    if (categories?.loading) {
      index
        .search("",{hitsPerPage:40})
        .then((res) =>
          setCategories({ data: res, error: null, loading: false })
        )
        .catch((err) => {
          console.log("Error while fetching Categories :", err);
          setCategories({ data: null, error: err, loading: false });
        });
    }
  }, [categories?.loading]);
  const value = useMemo(()=> categories,[categories])
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
