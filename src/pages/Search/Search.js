import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProperties } from "../../reducers/propertiesReducer";
import TypeFilters from "../../components/TypeFilters";
import SearchBar from "../../components/SearchBar";
import { Table } from "antd";
import "./search.css";

export default function Search() {
  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(setSelectedProperties(selectedRows));
    },
  };
  const columns = [
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Postcode",
      dataIndex: "postcode",
    },
    {
      title: "Property type",
      dataIndex: "propertytype",
    },
    {
      title: "Number of rooms",
      dataIndex: "rooms",
    },
    {
      title: "Floor Area (m²)",
      dataIndex: "area",
    },
  ];
  const searchWord = useSelector((state) => state.properties.searchWord);
  const selectedType = useSelector((state) => state.properties.selectedType);
  const results = useSelector((state) => state.properties.properties).filter(
    (item) =>
      item.propertytype.includes(selectedType === "All" ? "" : selectedType) &&
      item.address.includes(searchWord)
  );
  const selectedProperties = useSelector(
    (state) => state.properties.selectedProperties
  );

  return (
    <div>
      <div className="d-flex justify-center align-center container header">
        <h5>Property Search Tool</h5>
      </div>
      <div className="d-flex container">
        <div className="filters-container"></div>
        <div className="table-container">
          <SearchBar />
          <h6>Selected Properties</h6>
          <Table
            columns={columns}
            dataSource={selectedProperties}
            pagination={false}
          />
        </div>
      </div>
      <div className="d-flex container">
        <TypeFilters />
        <div className="table-container">
          <h6>Search results</h6>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={results}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
}
