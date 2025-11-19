import { TopBar } from "@/app/components/TopBar/TopBar";
import { MainMenu } from "@/app/components/MainMenu/MainMenu";
import { Logo } from "@/app/components/Logo/Logo";
import { CurrencySelector } from "@/app/components/CurrencySelector/CurrencySelector";
import { IconMenu } from "@/app/components/IconMenu/IconMenu";
import ContextProviders from "@/app/components/ContextProviders/ContextProviders";

export default {
  component: TopBar,
  title: "TopBar",
};

export const Default = {
  render: () => (
    <ContextProviders>
      <TopBar>
        <MainMenu />
        <Logo />
        <div>
          <CurrencySelector />
          <IconMenu />
        </div>
      </TopBar>
    </ContextProviders>
  ),
};
