import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { Card, Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

const AddtoCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  console.log("CART PAGE DATA:", cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <h1>changes</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item) => (
            <Card key={item.id} className="shadow">
              <div className="flex gap-4 items-center">
                <img src={item.product_image} alt={item.name} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <Button  onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} >
                      <MinusOutlined />
                    </Button>

                    <span className="font-semibold">{item.quantity}</span>

                    <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}  >
                      <PlusOutlined />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                  <Button danger type="link" onClick={() => removeFromCart(item.id)} >
                    <DeleteOutlined /> Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Order Summary
          </h2>

          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-black" >
                <span className="truncate max-w-[180px]">
                  {item.name} (x{item.quantity})
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <hr className="my-3" />

          <div className="flex justify-between mb-2 text-black">
            <span>Items</span>

            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-2 text-black">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <Button type="primary" className="w-full mt-4 bg-yellow-400 text-black hover:bg-yellow-500" >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
