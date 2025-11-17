import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import css from "./Hero.module.css";

type HeroProps = {
  imageUrl: string;
};

export function Hero({ imageUrl }: HeroProps) {
  return (
    <>
      <div className={css.hero} style={{ backgroundImage: `url(${imageUrl})` }}>
        <CenteredContent>
          <div className={css.promo}>
            <h2 className={css.promoTitle}>Letnie promocje do -70%</h2>
            <p className={css.promoText}>Tylko najlepsze okazje!</p>
            <FullWidthButton>Sprawdź produkty</FullWidthButton>
          </div>
        </CenteredContent>
      </div>
    </>
  );
}
