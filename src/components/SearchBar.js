import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchWord } from "../reducers/propertiesReducer";
import { Input } from "antd";

export default function SearchBar() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const handleChange = () => {
    dispatch(setSearchWord(ref.current.input.value));
  };
  return (
    <div>
      <h6>Search</h6>
      <div className="d-flex">
        <div className="search-input">
          <Input
            onBlur={() => {
              !ref.current.input.value && handleChange();
            }}
            ref={ref}
            placeholder="Address"
          />
        </div>
        <div>
          <button onClick={handleChange} className="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
