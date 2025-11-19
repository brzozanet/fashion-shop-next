import ContextProviders from "@/app/components/ContextProviders/ContextProviders";
import { Products } from "@/app/components/Products/Products";

export default {
  component: Products,
  title: "Products",
};

export const Default = {
  render: () => {
    return (
      <ContextProviders>
        <Products
          products={[
            {
              id: 26,
              gender: "women",
              category: "obuwie",
              subcategory: "eleganckie",
              name: "Szpilki klasyczne",
              brand: "Elegance",
              pricePLN: 249,
              priceEUR: 59,
              photos: [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
              ],
              description:
                "Eleganckie szpilki wykonane z wysokiej jakości skóry naturalnej. Wysokość obcasa 8 cm zapewnia komfort podczas noszenia. Idealne do eleganckich strojów i wyjść wieczorowych. Dostępne w kilku kolorach.",
              maintenanceInfo:
                "Czyścić miękką szmatką. Unikać kontaktu z wodą. Przechowywać w oryginalnym pudełku. Używać specjalnych wkładek do butów.",
            },
            {
              id: 27,
              gender: "women",
              category: "obuwie",
              subcategory: "eleganckie",
              name: "Szpilki na obcasie",
              brand: "Fashion Style",
              pricePLN: 189,
              priceEUR: 45,
              photos: [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
              ],
              description:
                "Stylowe szpilki z obcasem 10 cm, wykonane z ekologicznej skóry. Miękka wyściółka zapewnia komfort podczas długiego noszenia. Perfekcyjne dopasowanie i elegancki wygląd.",
              maintenanceInfo:
                "Czyścić delikatnie wilgotną szmatką. Unikać mokrych powierzchni. Przechowywać w suchym miejscu. Używać sprayu ochronnego.",
            },
            {
              id: 28,
              gender: "women",
              category: "odziez",
              subcategory: "swetry",
              name: "Sweter oversize",
              brand: "Comfort Wear",
              pricePLN: 179,
              priceEUR: 42,
              photos: [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg",
              ],
              description:
                "Miękki sweter oversize wykonany z 100% wełny merynos. Luźny krój zapewnia komfort i swobodę ruchów. Idealny na chłodniejsze dni. Dostępny w kilku pastelowych kolorach.",
              maintenanceInfo:
                "Pranie ręczne w chłodnej wodzie. Nie wykręcać. Suszyć na płasko. Nie używać wybielacza. Prasować przez wilgotną tkaninę.",
            },
            {
              id: 29,
              gender: "women",
              category: "odziez",
              subcategory: "spodnie",
              name: "Spodnie klasyczne",
              brand: "Style Pro",
              pricePLN: 199,
              priceEUR: 47,
              photos: [
                "http://localhost:3000/product-photos/women-trousers-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
              ],
              description:
                "Eleganckie spodnie o prostym kroju, wykonane z wysokiej jakości materiału stretch. Idealne do biura i codziennego noszenia. Wygodne i dopasowane, dostępne w kilku kolorach.",
              maintenanceInfo:
                "Pranie w temperaturze 30°C. Nie używać wybielacza. Prasować w średniej temperaturze. Można suszyć w suszarce bębnowej w niskiej temperaturze.",
            },
          ]}
          favourites={[
            {
              productId: 27,
              id: 1,
            },
            {
              productId: 28,
              id: 2,
            },
          ]}
        />
      </ContextProviders>
    );
  },
};
