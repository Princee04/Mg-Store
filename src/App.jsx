import Card from "./components/Card/card.jsx";

const App = () => {
  const product = {
    ananas: "/ananas.jpg",
    orange: "/orange.jpg",
    fraise: "/fraise.jpg",
    raisin: "/raisin.jpg",
    pomme: "/pomme.jpg",
    letchi: "letchi.jpg",
    tsiaiko: "/tsiaiko.jpg",
  };

  const items = [
    {
      id: 1,
      name: "Fraise d'Antsirabe",
      quantity: 1,
      price: 10000,
      product: product.fraise,
      unite: "Kg",
      stockage: 8,
      disponible: true,
    },
    {
      id: 2,
      name: "Ananas d'Ampanefena",
      quantity: 1,
      price: 2000.0,
      originalPrice: 2600.0,
      product: product.ananas,
      unite: "Kg",
      stockage: 9,
      disponible: true,
    },
    {
      id: 3,
      name: "Pomme d'Antsirabe",
      quantity: 1,
      price: 5000.0,
      originalPrice: 6000.0,
      product: product.pomme,
      unite: "Kg",
      stockage: 4,
      disponible: true,
    },
    {
      id: 4,
      name: "Tsy fantako",
      quantity: 1,
      price: 15.0,
      originalPrice: 20.0,
      product: product.tsiaiko,
      unite: "Kg",
      stockage: 5,
      disponible: true,
    },
    {
      id: 5,
      name: "Raisin d'Ambohitrarahaba",
      quantity: 1,
      price: 3000.0,
      originalPrice: 3500.0,
      product: product.raisin,
      unite: "Kg",
      stockage: 7,
      disponible: true,
    },
    {
      id: 6,
      name: "Letchi de Madagascar",
      quantity: 1,
      price: 15.0,
      originalPrice: 25.0,
      product: product.letchi,
      unite: "Kg",
      stockage: 3,
      disponible: false,
    },
  ];

  return (
    <div className="container mt-5" style={{ width: "500px" }}>
      <Card items={items} />
    </div>
  );
};

export default App;
