import React, { useState } from 'react'
import { availableFilters, availableSites, errors } from '../utils/utils';
import axiosInstance from '../utils/apiConfig';

export default function SearchForm({ setShowSearchForm, setSearchData }) {

  const [formData, setFormData] = useState({
    searchTerm: '',
    filter: "",
    topN: 3,
    comparisonSites: availableSites.map(({ name }) => name),
  });

  const [curErrors, setCurErrors] = useState({
    search: false,
    site: false,
    topN: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name == "searchTerm") {
      if (value.length > 20) {
        return;
      }
    }
    if (name === 'comparisonSites') {
      const options = event.target.options;
      const selectedSites = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedSites.push(options[i].value);
        }
      }
      setFormData({ ...formData, [name]: selectedSites });
      return;
    }
    setFormData({ ...formData, [name]: value });
  }

  function validateForm() {
    const tempErrors = {
      search: false,
      site: false,
      topN: false,
    };
    if (formData.searchTerm == "") {
      tempErrors.search = true;
    }
    if (!formData.comparisonSites.length) {
      tempErrors.site = true;
    }
    if (formData.topN < '1') {
      tempErrors.topN = true;
    }
    setCurErrors({ ...tempErrors });
    if (!formData.searchTerm || !formData.comparisonSites.length || formData.topN < '1') {
      return false;
    }
    return true;
  }

  async function handleSubmit(event) {
    setIsSubmitting(true);
    event.preventDefault();
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    // const res = await axiosInstance.post('/api/search/', formData);
    const res = await axiosInstance.get('/api/');
    const data = res.data;
    console.log(data);
    setSearchData(data);
    setShowSearchForm(false);
    setIsSubmitting(false);
  }


  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchTerm">
          Search Text
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${curErrors.search ? 'border-red-500' : ''
            }`}
          id="searchTerm"
          name="searchTerm"
          type="text"
          placeholder="Search Text"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        {curErrors.search && <p className="text-red-500 text-xs italic">{errors.search}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topN">
          Top N products
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${curErrors.topN ? 'border-red-500' : ''
            }`}
          id="topN"
          name="topN"
          type="number"
          placeholder="Top N products"
          value={formData.topN}
          onChange={handleChange}
        />
        {curErrors.topN && <p className="text-red-500 text-xs italic">{errors.topN}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
          Select Filter
        </label>
        <select
          className={`block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${curErrors.filter ? 'border-red-500' : ''
            }`}
          id="filter"
          name="filter"
          value={formData.filter}
          onChange={handleChange}
        >
          <option value={null}>Select Filter</option>
          {availableFilters.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
        {curErrors.filter && <p className="text-red-500 text-xs italic">{errors.filter}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comparisonSites">
          Select Comparison Sites
        </label>
        <select
          className={`block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${curErrors.site ? 'border-red-500' : ''
            }`}
          id="comparisonSites"
          name="comparisonSites"
          multiple
          value={formData.comparisonSites}
          onChange={handleChange}
        >
          {availableSites.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
        {curErrors.site && <p className="text-red-500 text-xs italic">{errors.site}</p>}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Searching..." : "Search"}
      </button>
    </form>

  )
}
