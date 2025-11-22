import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  productName,
  brand,
  image,
  price,
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  id,
  _id, //id from mongo
  handleEdit, 
  handleDelete, 
}) {
  return (
    <div className="ProductCard">
      <h3>{productName}</h3>
      <img src={image} alt="" />
      <h4>{brand}</h4>
      {/* <div className="ProductQuantityDiv">
        <div onClick={() => handleRemoveQuantity(id)} className="QuantityBtn">
          <p>➖</p>
        </div>

        <p>{productQuantity}</p>
        <div onClick={() => handleAddQuantity(id)} className="QuantityBtn">
          <p>➕</p>
        </div>
      </div> */}
      <QuantityCounter
        handleAddQuantity={handleAddQuantity}
        productQuantity={productQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        id={id}
        mode="product"
      />
      <h3>{price}</h3>
      <button onClick={() => handleAddToCart(id)}>Add to Cart</button>

      {/*adding edit and delete button to each product*/}

      <div style={{ marginTop: "10px", display: "flex", gap: "10px", justifyContent: "center" }}>
        
        {/*edit button*/}
        <button 
            onClick={() => handleEdit(_id)} 
            style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </button>

        {/*delete button */}
        <button 
            onClick={() => handleDelete(_id)} 
            style={{ backgroundColor: "red", color: "white" }}
        >
          Delete
        </button>

      </div>
       
    </div>
  );
}