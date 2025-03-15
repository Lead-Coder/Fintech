import {useState, useEffect} from "react"
import axios from "axios";

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  
  export default function Example() {
    const [loyalty, setLoyalty] = useState(0);
    const [email, setEmail] = useState("");

    useEffect(() => {
      axios.get("/api/user").then((response) => {
        setEmail(response.data.email);
        setLoyalty(response.data.loyaltyPoints);
      });
    }, []);

    const updateLoyalty = () => {
      const newPoints = loyalty + 10;
      setLoyalty(newPoints);
      const token = localStorage.getItem("token"); 

      axios
      .post(
        "http://localhost:3000/api/update-loyalty",
        { email, loyaltyPoints: newPoints },
        {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        }
      )
      .then(() => console.log("Loyalty points updated"))
      .catch((err) => console.error("Error updating loyalty points:", err));
    };

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div onClick={updateLoyalty} key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  onClick={updateLoyalty}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  