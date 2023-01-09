import React from 'react'
import { useState } from 'react'

function useSort(data, config = []) {
  const [sortOrder, setSortOrder] = useState(null); // sortOrder can be "asc", "desc" or null
  const [sortBy, setSortBy] = useState(null);  // sortBy is the label of the column that is currently sorted

  const handleClick = (label) => {
    if (sortBy && sortBy !== label) { // If a different column is clicked, reset the sort order
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {  // If the same column is clicked, toggle the sort order
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  }


  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    })
  }




  return (
    {
      sortedData,
      handleClick,
      sortOrder,
      sortBy
    }
  )
}

export default useSort