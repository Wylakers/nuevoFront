import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Producto from "../../../api/Producto";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Producto.getAll().filter((value) => {
      return value.Nombre.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder=""
          value={wordEntered}
          onChange={handleFilter}
        />
        <div>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div>
          <h3>Producto</h3>
          <hr></hr>
          {filteredData.map((value, key) => {
            return (
              <a href={"/" + value.Nombre} target="_blank">
                <div>
                  <img src="" alt="" />
                  <column>
                    <div>{value.Nombre}</div>
                    <div>
                      {value.Precio === null ? "No price" : "$" + value.Precio}
                    </div>
                  </column>
                </div>
              </a>
            );
          })}
          <hr></hr>
          <h3> Busca para "{wordEntered}"</h3>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
