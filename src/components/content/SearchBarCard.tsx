import { useState } from "react";
import unsplash from "../../api/unsplash";
import { useAppContext } from "../../context/AppContext";
import SearchBar from "./SearchBar";

const SearchBarCard = () => {
  const { dispatch } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const getPhotos = async () => {
    const res = await unsplash.search.getPhotos({
      perPage: 30,
      query: searchQuery.trim(),
    });
    if (res.response) {
      dispatch({ type: "ADD_IMAGES", payload: res.response.results });
    }
  };

  return (
    <section className="bg-[url('/assets/mountain.jpg')] bg-auto bg-center bg-no-repeat px-10 min-h-[28rem] flex flex-col justify-center items-center bg-gray-600 bg-blend-overlay gap-y-5">
      <h1 className="text-white font-bold text-3xl text-center">
        Download High Quality Image by creators
      </h1>
      <p className="text-gray-300 text-center">
        Over 2.4 million+ stock Image by our talented community
      </p>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getPhotos={getPhotos}
      />
    </section>
  );
};

export default SearchBarCard;
