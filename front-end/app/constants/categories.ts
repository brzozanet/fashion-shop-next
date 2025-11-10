type Subcategory = {
  name: string;
  path: string;
};

type Category = {
  name: string;
  path: string;
  subcategories: Subcategory[];
};

export const CATEGORIES: Category[] = [
  {
    name: "Odzież",
    path: "odziez",
    subcategories: [
      {
        name: "Koszulki",
        path: "koszulki",
      },
      {
        name: "Swetry",
        path: "swetry",
      },
      {
        name: "Spodnie",
        path: "spodnie",
      },
    ],
  },
  {
    name: "Obuwie",
    path: "obuwie",
    subcategories: [
      {
        name: "Eleganckie",
        path: "eleganckie",
      },
      {
        name: "Sportowe",
        path: "sportowe",
      },
      {
        name: "Sneakersy",
        path: "sneakersy",
      },
    ],
  },
  {
    name: "Akcesoria",
    path: "akcesoria",
    subcategories: [
      {
        name: "Torby",
        path: "torby",
      },
      {
        name: "Zegarki",
        path: "zegarki",
      },
    ],
  },
  {
    name: "Sport",
    path: "sport",
    subcategories: [
      {
        name: "Piłka nożna",
        path: "pilkanozna",
      },
      {
        name: "Narty",
        path: "narty",
      },
      {
        name: "Pływane",
        path: "plywanie",
      },
    ],
  },
];
