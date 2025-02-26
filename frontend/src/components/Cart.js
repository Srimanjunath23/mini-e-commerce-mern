import React, { useState, Fragment, use } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cartItems, setCartItems }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complete, setComplete] = useState(false);
  const OrderDate = new Date().toLocaleDateString();
  const [dnumber,setdnumber]=useState();
  const [daddress,setdaddress]=useState();
  // Increment Item Quantity
  const increment = (item) => {
    if (item && item.product && item.qty < item.product.stock) {
      const updatedItems = cartItems.map((i) =>
        i.product._id === item.product._id ? { ...i, qty: i.qty + 1 } : i
      );
      setCartItems(updatedItems);
    }
  };

  // Decrement Item Quantity
  const decrement = (item) => {
    if (item.qty > 1) {
      const updatedItems = cartItems.map((i) =>
        i.product._id === item.product._id ? { ...i, qty: i.qty - 1 } : i
      );
      setCartItems(updatedItems);
    }
  };

  // Remove Item from Cart
  const removeItem = (item) => {
    setCartItems(cartItems.filter((i) => i.product._id !== item.product._id));
  };

  // Calculate Subtotal and Total Price
  const subtotalUnits = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const estimatedTotal = cartItems
    .reduce((acc, item) => acc + item.product.price * item.qty, 0)
    .toFixed(2);

  // Place Order
  const placeOrder = () => {
    fetch(process.env.REACT_APP_API_URL + "/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems, address, number }),
    }).then(() => {
      setCartItems([]);
      setComplete(true);
      setdaddress(address);
      setdnumber(number);
      toast.success("Order placed successfully! 🎉");
      setAddress("");
      setNumber("");
    });
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart: <b>{cartItems.length}</b></h2>
      <div className="row d-flex justify-content-between">
        
        {/* Cart Items */}
        <div className="col-12 col-lg-8">
          <hr />
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Fragment key={item.product._id}>
                <div className="row align-items-center border-bottom py-3">
                  
                  {/* Product Image */}
                  <div className="col-3">
                    <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115" />
                  </div>

                  {/* Product Name */}
                  <div className="col-3">
                    <Link to={`/product/${item.product._id}`}>{item.product.name}</Link>
                  </div>

                  {/* Product Price */}
                  <div className="col-2 text-center">
                    <p>₹{item.product.price}</p>
                  </div>

                  {/* Quantity Control */}
                  <div className="col-3">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-danger btn-sm" onClick={() => decrement(item)}>-</button>
                      <input type="number" className="form-control mx-2 text-center" value={item.qty} readOnly />
                      <button className="btn btn-primary btn-sm" onClick={() => increment(item)}>+</button>
                    </div>
                  </div>

                  {/* Remove Item */}
                  <div className="col-1 text-center">
                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </Fragment>
            ))
          ) : (
            !complete ? (
              <h4 className="text-center text-muted mt-4">🛒 Your cart is empty.</h4>
            ) : (
              <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg p-4 border-0" style={{ maxWidth: "600px", width: "100%" }}>
                  {/* Order Invoice */}
                  <div className="card-header bg-primary text-white text-center">
                    <h3>🧾 Order Invoice</h3>
                  </div>

                  <div className="card-body">
                    <h5 className="text-secondary">📦 Order Details</h5>
                    <p><strong>Invoice No:</strong> #{Math.floor(Math.random() * 100000)}</p>
                    <p><strong>Order Date:</strong> {OrderDate}</p>
                    <hr />
                    <h5 className="text-secondary">👤 Customer Info</h5>
                    <p><strong>Contact:</strong> {dnumber}</p>
                    <p><strong>Address:</strong> {daddress}</p>
                    <hr />
                    <h5 className="text-secondary">💰 Payment Mode</h5>
                    <p>Cash on Delivery</p>
                  </div>

                  <div className="card-footer text-center text-muted">
                    <h6>✅ Thank you for shopping with us!</h6>
                    <Link to={'/'}><button className="btn btn-primary">Continue shopping</button></Link>
                  </div>

                </div>
              </div>
            )
          )}
          <hr />
        </div>

        {/* Order Summary */}
        <div className="col-12 col-lg-3">
          <div className="border p-3">
            <h4>Order Summary</h4>
            <hr />
            <p>Subtotal: <span>{subtotalUnits} (Units)</span></p>
            <p>Est. Total: <span>₹{cartItems.length > 0 ? estimatedTotal : "0.00"}</span></p>
            <hr />
            <button className="btn btn-warning btn-block rounded-pill" onClick={() => setShowCheckout(true)}>
              Check Out
            </button>
            <hr />

            {/* Delivery Section */}
            {showCheckout && (
              <div>
                <h4>Delivery</h4>
                <hr />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Contact Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <hr />
                <button className="btn btn-success btn-block rounded-pill" onClick={placeOrder}>
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
