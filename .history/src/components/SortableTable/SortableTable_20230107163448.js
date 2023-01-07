import React from "react";
import Table from "../Table/Table";

function SortableTable(props) {

  const { config } = props;

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} is sortable </th>
    }

  })


  return <Table {...props} />;
}

export default SortableTable;
