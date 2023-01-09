import React, { useState } from "react";
import Table from "../Table/Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import useSort from "../../hooks/useSort";


function SortableTable(props) {
  const { config, data } = props; // Get the config and data from the props
  const { sortedData, handleClick, sortOrder, sortBy } = useSort(config, data); // Get the sorted data, the handleClick function, the sortOrder and the sortBy from the useSort hook ....instead of using the code here


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




  return
  <Table {...props} data={sortedData} config={updateConfig} />

}

export default SortableTable;
