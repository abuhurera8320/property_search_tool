import React from 'react';
import { useSelector, useDispatch  } from "react-redux";
import {  setSelectedType } from "../reducers/propertiesReducer"
export default function TypeFilters() {

  const dispatch = useDispatch();
  const filters = [
    { name: "All", value: "All" },
    { name: "Flat", value: "Flat" },
    { name: "Terraced House", value: "Terraced House" },
    { name: "Semi-detached", value: "Semi-detached" },
  ];
  const selectedType = useSelector((state) => state.properties.selectedType);
  const selectType = (type) => {
    dispatch(setSelectedType(type));
  };
  return (
    <div className="filters-container">
          <h6>Property Types</h6>
          <div className="filters">
            {filters.map((filter, index) => {
              return (
                <div
                  className={
                    selectedType === filter.value ? "selected-filter" : ""
                  }
                  onClick={() => selectType(filter.value)}
                  key={index}
                >
                  {filter.name}
                </div>
              );
            })}
          </div>
        </div>
  );
}
