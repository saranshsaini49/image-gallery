import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 w-full sm:w-3/4 md:w-2/4 text-white">
      <input
        className="block w-full px-3 py-1.5 bg-transparent border-2 rounded-md focus:outline-none"
        type="search"
        placeholder="Search high resolution images"
      />
      <button className="bg-transparent border-[1.5px] rounded-md text-xl px-5 py-2">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
