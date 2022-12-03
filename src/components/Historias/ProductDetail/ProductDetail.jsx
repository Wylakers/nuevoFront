import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Producto from "../../../api/Producto";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);
  const { Nombre } = useParams();

  useEffect(() => {
    const findProduct = () => {
      const newProduct = Producto.find((product) => product.Nombre === Nombre);
      setProductDetail(newProduct);
      console.log(newProduct);
    };

    findProduct();
  }, [Nombre]);

  return (
    <div>
      <div>
        <img src={productDetail.Imagen} alt="" />
      </div>
      <div>
        <h2>{productDetail.Nombre}</h2>

        <span>${productDetail.Precio}</span>

        <table>
          <tbody>
            <tr>
              <th>Descripcion</th>
              <td>{productDetail.Descripcion}</td>
            </tr>
          </tbody>
        </table>

        <button>Add to cart</button>
      </div>
    </div>
  );
}
