import React from "react";
import Table from "../Table/Table";

function SortableTable(props) {

  const { config } = props;

  const handleClick = (label) => {
    console.log(`You clicked on ${label}`)
  }

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th onClick={handleClick(column.label)} >{column.label} is sortable </th>
    }

  })


  return <Table {...props} config={updateConfig} />;
}

export default SortableTable;
