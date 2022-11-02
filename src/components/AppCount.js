import { useState, useMemo } from "react";

export default function AppCount({title}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  document.title = title
  const [products, setProducts] = useState([]);
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
  };

  // useMemo: Ghi nhớ kết quả của hàm
  // Khi nào dependencies thay đổi thì nó sẽ gọi
  const total = useMemo(() => {
    const result = products.reduce((prev, product) => {
      return prev + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="App">
      <input
        value={name}
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        Total:{total}
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

