## Plan przepisania aplikacji React na Next.js

### Faza 1: Przygotowanie środowiska

1. **Utworzenie kopii zapasowej**

   - Zmień nazwę obecnego folderu `front-end` na `front-end.OLD`
   - Utwórz nowy folder `front-end`

2. **Inicjalizacja projektu Next.js**

   - W nowym folderze `front-end` uruchom `npx create-next-app@latest .`
   - Wybierz opcje: JavaScript (bez TypeScript), CSS Modules, App Router
   - Zainstaluj zależności

3. **Konfiguracja Turbopack**
   - W `package.json` zmień skrypt dev na `"dev": "next dev --turbo"`

### Faza 2: Struktura folderów Next.js

1. **Utworzenie podstawowej struktury App Router**

   - `app/` - główny folder aplikacji
   - `app/layout.js` - główny layout
   - `app/page.js` - strona główna
   - `app/globals.css` - globalne style

2. **Utworzenie folderów dla stron**
   - `app/cart/page.js` - strona koszyka
   - `app/favourites/page.js` - strona ulubionych
   - `app/products/page.js` - lista produktów
   - `app/products/[id]/page.js` - szczegóły produktu

### Faza 3: Migracja komponentów

1. **Kopiowanie komponentów**

   - Skopiuj wszystkie komponenty z `front-end.OLD/src/components/` do `front-end/components/`
   - Skopiuj style CSS Modules

2. **Adaptacja komponentów**
   - Zmień importy z React Router na Next.js Link
   - Dostosuj routing do App Router
   - Zaktualizuj ścieżki do obrazów (przenieś do `public/`)

### Faza 4: Migracja kontekstów i hooków

1. **Kopiowanie logiki biznesowej**

   - Skopiuj `contexts/`, `hooks/`, `constants/` z `front-end.OLD/src/`
   - Dostosuj do Next.js (Client Components)

2. **Migracja API**
   - Skopiuj `api/` z `front-end.OLD/src/`
   - Dostosuj do Next.js Server Actions lub API Routes

### Faza 5: Routing i nawigacja

1. **Implementacja App Router**

   - Utwórz layouty dla każdej sekcji
   - Zaimplementuj dynamiczne routingi
   - Dostosuj nawigację

2. **Migracja Breadcrumbs**
   - Dostosuj do Next.js usePathname

### Faza 6: Stylowanie i assets

1. **Migracja stylów**

   - Skopiuj `globals.css` i `theme.css`
   - Dostosuj CSS Modules do Next.js

2. **Migracja obrazów**
   - Przenieś wszystkie obrazy do `public/`
   - Zaktualizuj ścieżki w komponentach

### Faza 7: Testowanie i debugowanie

1. **Sprawdzenie funkcjonalności**

   - Testuj każdą stronę
   - Sprawdź routing
   - Zweryfikuj komponenty

2. **Optymalizacja**
   - Sprawdź wydajność z Turbopack
   - Zoptymalizuj ładowanie obrazów

## Schemat nowej struktury folderów

```
front-end/
├── app/
│   ├── layout.js                 # Główny layout aplikacji
│   ├── page.js                   # Strona główna
│   ├── globals.css               # Globalne style
│   ├── cart/
│   │   └── page.js              # Strona koszyka
│   ├── favourites/
│   │   └── page.js              # Strona ulubionych
│   ├── products/
│   │   ├── page.js              # Lista produktów
│   │   └── [id]/
│   │       └── page.js          # Szczegóły produktu
│   └── not-found.js             # Strona 404
├── components/                   # Wszystkie komponenty (skopiowane z .OLD)
│   ├── Accordion/
│   ├── Bestsellers/
│   ├── Breadcrumbs/
│   ├── Button/
│   ├── CartProduct/
│   ├── CartProductsList/
│   ├── CartSummary/
│   ├── CategoriesMenu/
│   ├── CenteredContent/
│   ├── CurrencySelector/
│   ├── Detail/
│   ├── ExpandableMenu/
│   ├── FavouriteProduct/
│   ├── FavouritesList/
│   ├── FlexContainer/
│   ├── Footer/
│   ├── FullWidthButton/
│   ├── Hero/
│   ├── IconMenu/
│   ├── Layout/
│   ├── Logo/
│   ├── MainContent/
│   ├── MainMenu/
│   ├── PageTitle/
│   ├── Pagination/
│   ├── Photos/
│   ├── Product/
│   └── Products/
├── contexts/                     # Konteksty React (skopiowane z .OLD)
│   ├── CartContext.js
│   └── CurrencyContext.js
├── hooks/                       # Hooki (skopiowane z .OLD)
│   ├── useCart.js
│   └── useCurrency.js
├── constants/                   # Stałe (skopiowane z .OLD)
│   ├── categories.js
│   ├── costs.js
│   ├── curriencies.js
│   ├── genders.js
│   └── mappings.js
├── api/                        # API (skopiowane z .OLD)
│   ├── actionAddToFavourites.js
│   ├── actionDeleteFromFavourites.js
│   ├── loaderFavourites.js
│   ├── loaderMainPage.js
│   ├── loaderProductDetails.js
│   └── loaderProductsList.js
├── public/                     # Statyczne pliki
│   ├── logo_fashion_shop.png
│   ├── hero_summersale.jpg
│   ├── icon_arrow.svg
│   ├── icon_cart.svg
│   ├── icon_delete.svg
│   ├── icon_heart_red.svg
│   ├── icon_heart.svg
│   ├── icon_return.svg
│   ├── icon_shipping.svg
│   └── error.png
├── package.json
├── next.config.js
└── .gitignore
```

Ten plan pozwoli Ci krok po kroku przepisać aplikację, zachowując wszystkie funkcjonalności i stopniowo poznając różnice między React a Next.js.

```plaintext
front-end/
├── app/
│   ├── layout.js                 # Główny layout aplikacji
│   ├── page.js                   # Strona główna
│   ├── globals.css               # Globalne style
│   ├── cart/
│   │   └── page.js              # Strona koszyka
│   ├── favourites/
│   │   └── page.js              # Strona ulubionych
│   ├── products/
│   │   ├── page.js              # Lista produktów
│   │   └── [id]/
│   │       └── page.js          # Szczegóły produktu
│   └── not-found.js             # Strona 404
├── components/                   # Wszystkie komponenty (skopiowane z .OLD)
│   ├── Accordion/
│   ├── Bestsellers/
│   ├── Breadcrumbs/
│   ├── Button/
│   ├── CartProduct/
│   ├── CartProductsList/
│   ├── CartSummary/
│   ├── CategoriesMenu/
│   ├── CenteredContent/
│   ├── CurrencySelector/
│   ├── Detail/
│   ├── ExpandableMenu/
│   ├── FavouriteProduct/
│   ├── FavouritesList/
│   ├── FlexContainer/
│   ├── Footer/
│   ├── FullWidthButton/
│   ├── Hero/
│   ├── IconMenu/
│   ├── Layout/
│   ├── Logo/
│   ├── MainContent/
│   ├── MainMenu/
│   ├── PageTitle/
│   ├── Pagination/
│   ├── Photos/
│   ├── Product/
│   └── Products/
├── contexts/                     # Konteksty React (skopiowane z .OLD)
│   ├── CartContext.js
│   └── CurrencyContext.js
├── hooks/                       # Hooki (skopiowane z .OLD)
│   ├── useCart.js
│   └── useCurrency.js
├── constants/                   # Stałe (skopiowane z .OLD)
│   ├── categories.js
│   ├── costs.js
│   ├── curriencies.js
│   ├── genders.js
│   └── mappings.js
├── api/                        # API (skopiowane z .OLD)
│   ├── actionAddToFavourites.js
│   ├── actionDeleteFromFavourites.js
│   ├── loaderFavourites.js
│   ├── loaderMainPage.js
│   ├── loaderProductDetails.js
│   └── loaderProductsList.js
├── public/                     # Statyczne pliki
│   ├── logo_fashion_shop.png
│   ├── hero_summersale.jpg
│   ├── icon_arrow.svg
│   ├── icon_cart.svg
│   ├── icon_delete.svg
│   ├── icon_heart_red.svg
│   ├── icon_heart.svg
│   ├── icon_return.svg
│   ├── icon_shipping.svg
│   └── error.png
├── package.json
├── next.config.js
└── .gitignore
```

📊 Analiza stanu przepisania projektu z React na Next.js

✅ CO ZOSTAŁO ZROBIONE:

Faza 1: Przygotowanie środowiska - ✅ UKOŃCZONA

✅ Utworzono kopię zapasową (front-end.OLD)
✅ Zainicjalizowano projekt Next.js w nowym folderze front-end
✅ Skonfigurowano Turbopack w package.json ("dev": "next dev --turbopack --port 3001")
✅ Zainstalowano zależności (Next.js 15.5.0, React 19.1.1)

Faza 2: Struktura folderów Next.js - ✅ CZĘŚCIOWO UKOŃCZONA

✅ Utworzono podstawową strukturę App Router (app/)
✅ Utworzono app/layout.jsx - główny layout
✅ Utworzono app/page.jsx - strona główna
✅ Utworzono app/globals.css - globalne style
❌ BRAKUJE: Stron dla routingu (cart/, favourites/, products/, products/[id]/)

Faza 3: Migracja komponentów - ✅ CZĘŚCIOWO UKOŃCZONA

✅ Skopiowano część komponentów z front-end.OLD/src/components/ do front-end/app/components/
✅ Skopiowano style CSS Modules
❌ BRAKUJE: Wiele komponentów z oryginalnej aplikacji
Skopiowane komponenty:
Bestsellers, CategoriesMenu, CenteredContent, CurrencySelector
Footer, FullWidthButton, Hero, IconMenu, Logo
MainContent, MainMenu, PageTitle, Product, TopBar
Brakujące komponenty:
Accordion, Breadcrumbs, Button, CartProduct, CartProductsList
CartSummary, Detail, ExpandableMenu, FavouriteProduct
FavouritesList, FlexContainer, Layout, Pagination, Photos, Products

Faza 4: Migracja kontekstów i hooków - ✅ UKOŃCZONA

✅ Skopiowano contexts/ (CartContext.js, CurrencyContext.js)
✅ Skopiowano hooks/ (useCart.js, useCurrency.js)
✅ Skopiowano constants/ (categories.js, curriencies.js, genders.js, mappings.js)
❌ BRAKUJE: costs.js z constants
❌ BRAKUJE: Migracja API (tylko addToFavourites.jsx w actions)

Faza 6: Stylowanie i assets - ✅ UKOŃCZONA

✅ Skopiowano globals.css i theme.css
✅ Przeniesiono obrazy do public/ (ikony i obrazy)
✅ Dostosowano ścieżki do obrazów

❌ CO JESZCZE TRZEBA ZROBIĆ:

Faza 2: Struktura folderów Next.js - ⚠️ DO DOKOŃCZENIA

❌ Utworzyć app/cart/page.js - strona koszyka
❌ Utworzyć app/favourites/page.js - strona ulubionych
❌ Utworzyć app/products/page.js - lista produktów
❌ Utworzyć app/products/[id]/page.js - szczegóły produktu
❌ Utworzyć app/not-found.js - strona 404

Faza 3: Migracja komponentów - ⚠️ DO DOKOŃCZENIA

❌ Skopiować pozostałe komponenty z front-end.OLD/src/components/
❌ Dostosować importy z React Router na Next.js Link
❌ Dostosować routing do App Router

Faza 4: Migracja API - ⚠️ DO DOKOŃCZENIA

❌ Skopiować pozostałe pliki API z front-end.OLD/src/api/
❌ Dostosować do Next.js Server Actions lub API Routes
❌ Dodać brakujący costs.js do constants

Faza 5: Routing i nawigacja - ❌ NIE ROZPOCZĘTA

❌ Zaimplementować App Router dla wszystkich stron
❌ Dostosować nawigację do Next.js
❌ Migrować Breadcrumbs do Next.js usePathname

🎯 NASTĘPNE KROKI (wg planu z README.md):
Dokończyć migrację komponentów - skopiować pozostałe komponenty z front-end.OLD
Utworzyć strony routingu - dodać brakujące strony w strukturze App Router
Migrować API - przenieść pozostałe pliki API i dostosować do Next.js
Dostosować routing - zaimplementować nawigację Next.js
Testowanie - sprawdzić wszystkie funkcjonalności
