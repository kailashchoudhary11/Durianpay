import { useState } from "react";
import SearchData from "./components/SearchData";
import SearchForm from "./components/SearchForm";

export default function App() {

  const [showSearchForm, setShowSearchForm] = useState(true);
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
    {showSearchForm ? (
      <SearchForm setShowSearchForm={setShowSearchForm} setSearchData={setSearchData} />
    ) : (
      <div>
        {searchData.length > 0 ? (
          <SearchData searchData={searchData} setShowSearchForm={setShowSearchForm} />
        ) : (
          <div className="text-gray-500">No data found</div>
        )}
      </div>
    )}
  </div>
  );
}
