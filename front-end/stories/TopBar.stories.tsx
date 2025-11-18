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

//Enim nihil enim maiores maxime soluta enim omnis odit. Voluptate explicabo sed voluptas quo et sint. Eos consequatur dolores excepturi iusto cum. Voluptatibus similique voluptatem ipsam dolore et distinctio autem fuga. Perspiciatis mollitia voluptatem voluptas dignissimos voluptatum inventore quasi autem quibusdam. Expedita expedita quisquam voluptatem maiores natus sunt sapiente est.

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
