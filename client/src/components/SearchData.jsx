import ProductCard from "./ProductCard";

export default function SearchData({ searchData, setShowSearchForm }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Search Results</h1>
      <button
        onClick={() => setShowSearchForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Search Again
      </button>
      {searchData.map(({ name, price, link, rating, rating_count, source }, index) => (
        <div key={index} className="mb-4">
          <ProductCard productData={{ name, price, link, rating, rating_count, source }} />
        </div>
      ))}
    </div>
  );
}
