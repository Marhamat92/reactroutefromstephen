import React, { useState } from "react";
import Table from "../Table/Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {

  const [sortOrder, setSortOrder] = useState(null); // sortOrder can be "asc", "desc" or null
  const [sortBy, setSortBy] = useState(null);  // sortBy is the label of the column that is currently sorted

  const { config, data } = props; // Get the config and data from the props

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

  const updateConfig = config.map((column) => {  // Add onClick event to the header
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th className="cursor-pointer hover:bg-gray-200" onClick={() => handleClick(column.label)} >
        <div className="flex items-center" >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}</div></th>
    }

  })

  const getIcons = (label, sortBy, sortOrder) => { // Return the correct icons based on the sort order
    if (label !== sortBy) {
      return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    }
    if (sortOrder === null) {
      return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    } else if (sortOrder === "asc") {
      return <div><GoArrowSmallUp /></div>
    } else if (sortOrder === "desc") {
      return <div><GoArrowSmallDown /></div>
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


  return <>

    <Table {...props} data={sortedData} config={updateConfig} />
  </>
}

export default SortableTable;
