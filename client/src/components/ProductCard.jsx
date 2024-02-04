export default function ProductCard({ productData }) {
  const { name, price, link, rating, rating_count, source } = productData;
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <div className="text-xl font-bold mb-2">Name: {name}</div>
      <div className="text-lg mb-2">Price: Rs {price}</div>
      <div className="text-lg mb-2">
        Link: <a href={link} target="_blank" className="text-blue-500 underline">Visit on {source}</a>
      </div>
      <div className="text-lg mb-2">Rating: {rating}</div>
      <div className="text-lg mb-2">Rating Count: {rating_count}</div>
      <hr className="my-4 border-t" />
    </div>
  )
}
