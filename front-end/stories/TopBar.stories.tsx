import { TopBar } from "@/app/components/TopBar/TopBar";
import { MainMenu } from "@/app/components/MainMenu/MainMenu";
import { Logo } from "@/app/components/Logo/Logo";
import { CurrencySelector } from "@/app/components/CurrencySelector/CurrencySelector";
import { IconMenu } from "@/app/components/IconMenu/IconMenu";
import ClientProviders from "@/app/components/ClientProviders/ClientProviders";

export default {
  component: TopBar,
  title: "TopBar",
};

//Dolorem fugit non harum voluptate pariatur minus aspernatur distinctio. Delectus est suscipit quo quo. Rerum doloribus quibusdam. Velit aperiam laboriosam quisquam. Nesciunt sint reiciendis accusamus voluptatem. Molestiae nam ex odit officia exercitationem.

export const Default = {
  render: () => (
    <ClientProviders>
      <TopBar>
        <MainMenu />
        <Logo />
        <div>
          <CurrencySelector />
          <IconMenu />
        </div>
      </TopBar>
    </ClientProviders>
  ),
};
