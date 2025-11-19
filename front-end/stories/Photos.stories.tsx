import { Photos } from "@/app/components/Photos/Photos";

export default {
  component: Photos,
  title: "Photos",
};

export const Default = {
  render: () => {
    return (
      <Photos
        photos={[
          "http://localhost:3000/product-photos/women-shoes-2.jpg",
          "http://localhost:3000/product-photos/women-shoes-3.jpg",
          "http://localhost:3000/product-photos/women-shoes-1.jpg",
        ]}
        name={"Szpilki na obcasie"}
      />
    );
  },
};
