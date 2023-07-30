import axios from "axios";

const ProductsPage = async () => {
  const { data } = await axios.get("https://dummyjson.com/users");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>ProductsPage</div>;
};

export default ProductsPage;
