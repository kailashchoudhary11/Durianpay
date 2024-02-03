const availableSites = [
  {
    id: 1,
    name: 'Amazon'
  },
  {
    id: 2,
    name: 'Flipkart'
  },
  {
    id: 3,
    name: 'Snapdeal'
  },
]

const availableFilters = [
  {
    id: 1,
    name: 'Highest Price'
  },
  {
    id: 2,
    name: 'Lowest Price'
  },
  {
    id: 3,
    name: 'Highest Rating'
  },
]

const errors = {
  search: 'Please enter a search term',
  site: 'Please select a site',
  filter: 'Please select a filter',
  topN: 'Number of items to display must be a number greater than 0',
}


export { availableSites, availableFilters, errors };