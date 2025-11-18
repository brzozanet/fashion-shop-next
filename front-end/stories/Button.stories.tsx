import { Button } from "@/app/components/Button/Button";

export default {
  component: Button,
  title: "Button",
};

export const Default = {
  args: {
    children: "Testowy przycisk",
    onClick: () => console.log("Kliknięto przycisk"),
  },
};
