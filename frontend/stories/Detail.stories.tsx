import ContextProviders from "@/app/components/ContextProviders/ContextProviders";
import { Detail } from "@/app/components/Detail/Detail";

export default {
  component: Detail,
  title: "Detail",
};

export const Default = {
  render: () => {
    return (
      <ContextProviders>
        <Detail
          product={{
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
          }}
        />
      </ContextProviders>
    );
  },
};
