import React from "react";
import { useCategories } from "../../utils/context/useCategories";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const { data, error, loading } = useCategories();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if(!data?.hits?.length > 0) {
    return <NothingFound />
  }
  return (
    <div className="py-2 grid grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2 grid-flow-row-dense overflow-y-auto h-full text-base">
        {
            data?.hits?.map((hit)=> <MenuItem key={hit?.objectID} item={hit}/>)
        }
    </div>
  )
}

export default MegaMenu;

const Loader = () => (
  <div>
    <div className="pt-4 flex items-center justify-center ">
      <div className="animate-spin rounded-full border-t-4 border-accent border-solid h-16 w-16"></div>
    </div>
  </div>
);

const ErrorMessage = () => {
  return (
    <div className="pt-4 text-center">
      <p className="font-bold">Uh-oh!</p>
      <p className="text-base">Something went wrong. Please try again later.</p>
    </div>
  );
};

const NothingFound = () => {
  return (
    <div className="pt-4 text-center">
      <h2 className="ont-bold mb-2">Oops! Nothing Found</h2>
      <p className="text-base">
        It seems we misplaced it... or maybe it's on vacation! 🏖️
        <br />
        Please try again or check back later.
      </p>
    </div>
  );
};

const MenuItem = ({item}) => {
    return (
        <span >
        <Link to={`/browse?${item?.lvl + "=" + item?.name}`} className="hover:underline">{item?.name}</Link>
        </span>
    )
}