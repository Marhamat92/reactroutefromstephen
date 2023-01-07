import React from "react";
import Table from "../../components/Table/Table";
import { AiFillSecurityScan } from "react-icons/ai";
import SortableTable from "../../components/SortableTable/SortableTable";

type Props = {};

function TablePage({}: Props) {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Grape", color: "bg-purple-500", score: 2 },
    { name: "Strawberry", color: "bg-pink-500", score: 9 },
    { name: "Pineapple", color: "bg-yellow-500", score: 7 },
    { name: "Mango", color: "bg-yellow-500", score: 8 },
    { name: "Watermelon", color: "bg-red-500", score: 6 },
  ];

  const config = [
    {
      label: "Fruit", // This is the column header
      render: (fruit: { name: string }) => fruit.name, // This is the cell renderer
      sortValue: (fruit: { name: string }) => fruit.name, // This is the value used for sorting
    },
    {
      label: "Color",
      render: (fruit: { color: string }) => (
        <div className={`w-6 h-6 m-2 rounded-md  ${fruit.color}`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit: { score: number }) => fruit.score,
      sortValue: (fruit: { score: number }) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit: { score: number }) => fruit.score ** 2,
      sortValue: (fruit: { score: number }) => fruit.score,
    },
    {
      label: "Security",
      render: (fruit: { score: number }) =>
        fruit.score > 3 ? (
          <div className='flex items-center'>
            <AiFillSecurityScan className='text-green-500' />
            <span className='ml-2'>Secure</span>
          </div>
        ) : (
          <div className='flex items-center'>
            <AiFillSecurityScan className='text-red-500' />
            <span className='ml-2'>Insecure</span>
          </div>
        ),
    },
  ];

  const fnKey = (fruit: { name: string }) => fruit.name;

  return <SortableTable data={data} config={config} fnKey={fnKey} />;
}

export default TablePage;
