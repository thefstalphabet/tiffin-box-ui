import React from "react";
import ReTable from "../../reusable-antd-components/ReTable/ReTable";

export default function Testing() {
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Team",
      age: 52,
      address: "Abc",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <ReTable
        header={{
          title: "Testing the table",
          headerButtons: [
            {
              title: "Create New",
              type: "primary",
            },
          ],
        }}
        data={dataSource}
        columns={columns}
        scroll={{
          x: 300,
          y: 300,
        }}
        columnOptions={{
          sorting: {
            columnsKeys: ["age", "name", "address"],
          },
          filter: {
            columnsKeys: ["age", "name", "address"],
          },
        }}
      />
    </div>
  );
}
