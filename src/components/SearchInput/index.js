import React from "react";

const SearchInput =({value, onChange})=>{
  return (
    <div className="section-heading">
      <h2 className="section-title">Ресторани</h2>
      <label className="search">
        <input
          type="text"
           className="input input-search"
           placeholder="Поиск блюд и ресторанов"
           value={value}
           onChange={onChange}
        />
      </label>
    </div>
  )
}

export default SearchInput;