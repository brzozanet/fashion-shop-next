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

## 📊 Analiza stanu przepisania projektu - Aktualizacja 2025-10-28

### ✅ CO ZOSTAŁO ZROBIONE:

**Faza 1: Przygotowanie środowiska - ✅ UKOŃCZONA**

- ✅ Utworzono kopię zapasową (front-end.OLD)
- ✅ Zainicjalizowano projekt Next.js w nowym folderze front-end
- ✅ Skonfigurowano Turbopack w package.json ("dev": "next dev --turbopack --port 3001")
- ✅ Zainstalowano zależności (Next.js 15.5.0, React 19.1.1)

**Faza 2: Struktura folderów Next.js - ⚠️ PRAWIE UKOŃCZONA**

- ✅ Utworzono podstawową strukturę App Router (app/)
- ✅ Utworzono app/layout.jsx - główny layout
- ✅ Utworzono app/page.jsx - strona główna (z redirect na /kobieta)
- ✅ Utworzono app/globals.css - globalne style
- ✅ Utworzono app/loading.jsx - komponent ładowania
- ✅ Utworzono app/koszyk/page.jsx - strona koszyka
- ✅ Utworzono app/ulubione/page.jsx - strona ulubionych
- ✅ Utworzono dynamiczne routingi:
  - ✅ app/[gender]/page.jsx - strona kategorii płci
  - ✅ app/[gender]/[category]/page.jsx - strona kategorii
  - ✅ app/[gender]/[category]/[subcategory]/page.jsx - strona podkategorii
  - ✅ app/[gender]/[category]/[subcategory]/[id]/page.jsx - szczegóły produktu
- ❌ BRAKUJE: app/not-found.jsx - strona 404

**Faza 3: Migracja komponentów - ✅ UKOŃCZONA**

- ✅ Skopiowano WSZYSTKIE komponenty z front-end.OLD/src/components/ do front-end/app/components/
- ✅ Skopiowano style CSS Modules dla wszystkich komponentów
- ✅ Dostosowano importy z React Router na Next.js Link
- ✅ Dostosowano routing do App Router
- ✅ Dostosowano ścieżki do obrazów (użycie /icons/ i /images/)

Wszystkie skopiowane komponenty:

- ✅ Accordion, Bestsellers, Breadcrumbs
- ✅ CartProduct, CartProductsList, CartSummary
- ✅ CategoriesMenu, CenteredContent, CurrencySelector
- ✅ Detail, ExpandableMenu
- ✅ FavouriteProduct, FavouritesList, FlexContainer
- ✅ Footer, FullWidthButton
- ✅ Hero, IconMenu, Logo
- ✅ MainContent, MainMenu
- ✅ PageTitle, Pagination, Photos
- ✅ Product, Products
- ✅ TopBar

**Faza 4: Migracja kontekstów i hooków - ⚠️ CZĘŚCIOWO UKOŃCZONA**

- ✅ Skopiowano contexts/ (CartContext.js, CurrencyContext.js)
- ✅ Skopiowano hooks/ (useCart.js, useCurrency.js)
- ✅ Skopiowano constants/ (categories.js, costs.js, curriencies.js, genders.js, mappings.js)
- ⚠️ Server Actions - DO ZROBIONIA:
  - ❌ app/actions/addToFavourites.jsx (pliki istnieją ale nie działają poprawnie)
  - ❌ app/actions/deleteFromFavourites.jsx (pliki istnieją ale nie działają poprawnie)
- ℹ️ UWAGA: Loadery z React Router zostały zastąpione bezpośrednimi fetch() w Server Components
- ⚠️ BRAKUJE: Obsługa błędów w zapytaniach fetch() do backendu

**Faza 5: Routing i nawigacja - ⚠️ CZĘŚCIOWO UKOŃCZONA**

- ✅ Zaimplementowano App Router dla wszystkich stron
- ✅ Dostosowano nawigację do Next.js (Link zamiast NavLink)
- ✅ Zaimplementowano dynamiczne routingi z parametrami ([gender], [category], [subcategory], [id])
- ✅ Użyto useParams() w Client Components
- ❌ Breadcrumbs - NIE DOSTOSOWANO do Next.js (usePathname())
- ✅ Przekierowanie ze strony głównej na /kobieta (redirect w page.jsx)
- ⚠️ PROBLEM: URL-e generowane w menu prowadzą do błędnych lokalizacji

**Faza 6: Stylowanie i assets - ⚠️ CZĘŚCIOWO UKOŃCZONA**

- ✅ Skopiowano globals.css i theme.css (w app/styles/)
- ✅ Przeniesiono wszystkie obrazy do public/ (ikony i obrazy)
- ✅ Dostosowano ścieżki do obrazów w komponentach
- ✅ Wszystkie CSS Modules działają poprawnie
- ⚠️ PROBLEM: Style w menu (zwłaszcza rozwijanym) wymagają poprawek
- ⚠️ PROBLEM: Style w Breadcrumbs wymagają poprawek

### ⚠️ CO JESZCZE TRZEBA ZROBIĆ:

**Faza 2: Struktura folderów Next.js - ⚠️ DROBNE DOKOŃCZENIE**

- ❌ Utworzyć app/not-found.jsx - strona 404 (opcjonalnie)

**Faza 4: Migracja API - ⚠️ DO DOKOŃCZENIA**

- ❌ Naprawić Server Actions:
  - ❌ app/actions/addToFavourites.jsx - poprawić implementację
  - ❌ app/actions/deleteFromFavourites.jsx - poprawić implementację
- ❌ Dodać obsługę błędów w zapytaniach fetch() do backendu:
  - ❌ Try/catch w Server Components
  - ❌ Komunikaty błędów dla użytkownika
  - ❌ Fallback UI przy błędach

**Faza 5: Routing i nawigacja - ⚠️ DO DOKOŃCZENIA**

- ❌ Dostosować Breadcrumbs do Next.js (użyć usePathname())
- ❌ Poprawić URL-e generowane w menu (prowadzą do błędnych lokalizacji)

**Faza 6: Stylowanie i assets - ⚠️ DO POPRAWY**

- ❌ Poprawić style w menu (zwłaszcza rozwijanym - ExpandableMenu)
- ❌ Poprawić style w Breadcrumbs

**Faza 7: Testowanie i debugowanie - ⚠️ DO ROZPOCZĘCIA**

- ⚠️ Przetestować wszystkie strony i funkcjonalności
- ⚠️ Sprawdzić routing - wszystkie dynamiczne ścieżki
- ⚠️ Zweryfikować komponenty - czy wszystkie działają poprawnie
- ⚠️ Przetestować koszyk - dodawanie/usuwanie produktów
- ⚠️ Przetestować ulubione - dodawanie/usuwanie z ulubionych (po naprawie Server Actions)
- ⚠️ Sprawdzić responsywność i UX
- ⚠️ Zoptymalizować wydajność z Turbopack
- ⚠️ Zoptymalizować ładowanie obrazów (użyć Next.js Image jeśli potrzeba)

### 🎯 NASTĘPNE KROKI (priorytetowo):

1. **Naprawić Server Actions:**

   - Poprawić implementację addToFavourites.jsx
   - Poprawić implementację deleteFromFavourites.jsx
   - Dodać prawidłową obsługę błędów

2. **Dodać obsługę błędów:**

   - Try/catch w fetch() w Server Components
   - Komunikaty błędów dla użytkownika
   - Fallback UI przy błędach połączenia z backendem

3. **Poprawić nawigację:**

   - Naprawić URL-e generowane w menu (prowadzą do błędnych lokalizacji)
   - Dostosować Breadcrumbs do Next.js (usePathname())

4. **Poprawić style:**

   - Naprawić style w menu rozwijanym (ExpandableMenu)
   - Naprawić style w Breadcrumbs

5. **Utworzyć stronę 404** - app/not-found.jsx (opcjonalnie)

6. **Testowanie funkcjonalności:**

   - Sprawdzić wszystkie dynamiczne routingi
   - Przetestować koszyk (dodawanie/usuwanie)
   - Przetestować ulubione (dodawanie/usuwanie) - po naprawie Server Actions
   - Sprawdzić nawigację między stronami

7. **Debugowanie i optymalizacja:**

   - Naprawić ewentualne błędy
   - Zoptymalizować wydajność
   - Sprawdzić responsywność

8. **Finalizacja:**
   - Usunąć zbędne pliki (np. page.OLD.jsx)
   - Uporządkować strukturę projektu
   - Sprawdzić zgodność z oryginalną aplikacją

## 🔀 Plan pracy i gałęzie Git

### Obecna struktura gałęzi:

- `main` - główna gałąź
- `00-initial` - inicjalizacja projektu
- `01-next-config` - konfiguracja Next.js
- `02-main-layout` - główny layout
- `03-pages-routing` - routing i strony

### Proponowane gałęzie do dokończenia projektu:

#### **04-server-actions-errors** (priorytet: WYSOKI)

**Zakres pracy:**

- Naprawić implementację `app/actions/addToFavourites.jsx`
- Naprawić implementację `app/actions/deleteFromFavourites.jsx`
- Dodać obsługę błędów w Server Actions
- Dodać try/catch w fetch() w Server Components
- Dodać komunikaty błędów dla użytkownika
- Dodać Fallback UI przy błędach połączenia z backendem

**Kolejność zadań:**

1. Naprawić Server Actions (działające dodawanie/usuwanie z ulubionych)
2. Dodać obsługę błędów w Server Components (try/catch w fetch)
3. Dodać UI do wyświetlania błędów
4. Przetestować funkcjonalność ulubionych

**Oszacowany czas:** 2-3 godziny

---

#### **05-navigation-fixes** (priorytet: ŚREDNI)

**Zakres pracy:**

- Naprawić URL-e generowane w menu (prowadzą do błędnych lokalizacji)
- Dostosować Breadcrumbs do Next.js (użyć usePathname())
- Sprawdzić wszystkie linki nawigacyjne
- Naprawić MainMenu i ExpandableMenu (jeśli problem z URL)

**Kolejność zadań:**

1. Zidentyfikować błędne URL-e w menu
2. Naprawić generowanie URL-i w komponentach menu
3. Dostosować Breadcrumbs (usePathname() zamiast React Router)
4. Przetestować wszystkie linki nawigacyjne

**Oszacowany czas:** 1-2 godziny

---

#### **06-styles-improvements** (priorytet: ŚREDNI)

**Zakres pracy:**

- Poprawić style w menu rozwijanym (ExpandableMenu)
- Poprawić style w Breadcrumbs
- Sprawdzić responsywność komponentów
- Upewnić się, że style są spójne z resztą aplikacji

**Kolejność zadań:**

1. Zidentyfikować problemy ze stylami w ExpandableMenu
2. Naprawić style w ExpandableMenu.module.css
3. Zidentyfikować problemy ze stylami w Breadcrumbs
4. Naprawić style w Breadcrumbs.module.css
5. Sprawdzić responsywność

**Oszacowany czas:** 1-2 godziny

---

#### **07-not-found** (priorytet: NISKI - opcjonalnie)

**Zakres pracy:**

- Utworzyć `app/not-found.jsx`
- Dodać style dla strony 404
- Sprawdzić czy Next.js automatycznie przekierowuje na not-found

**Kolejność zadań:**

1. Utworzyć komponent not-found.jsx
2. Dodać style (opcjonalnie)
3. Przetestować działanie

**Oszacowany czas:** 30 minut

---

#### **08-testing-optimization** (priorytet: WYSOKI)

**Zakres pracy:**

- Przetestować wszystkie strony i funkcjonalności
- Sprawdzić routing (wszystkie dynamiczne ścieżki)
- Przetestować koszyk (dodawanie/usuwanie produktów)
- Przetestować ulubione (dodawanie/usuwanie)
- Sprawdzić nawigację między stronami
- Zoptymalizować wydajność
- Sprawdzić responsywność i UX

**Kolejność zadań:**

1. Testowanie funkcjonalności (pełna lista sprawdzeń)
2. Debugowanie znalezionych błędów
3. Optymalizacja wydajności (Turbopack, obrazy)
4. Testowanie responsywności

**Oszacowany czas:** 2-3 godziny

---

#### **09-finalization** (priorytet: NISKI)

**Zakres pracy:**

- Usunąć zbędne pliki (page.OLD.jsx, inne pliki backupowe)
- Uporządkować strukturę projektu
- Sprawdzić zgodność z oryginalną aplikacją React
- Finalne sprawdzenie kodu
- Aktualizacja dokumentacji (jeśli potrzeba)

**Kolejność zadań:**

1. Identyfikacja zbędnych plików
2. Usunięcie zbędnych plików
3. Porównanie funkcjonalności z oryginalną aplikacją
4. Finalne sprawdzenie README.md

**Oszacowany czas:** 30 minut - 1 godzina

---

### Kolejność pracy:

**Sesja 1 (wysoki priorytet):**

1. `04-server-actions-errors` - naprawić funkcjonalność i błędy

**Sesja 2 (średni priorytet):** 2. `05-navigation-fixes` - naprawić nawigację 3. `06-styles-improvements` - poprawić style

**Sesja 3 (testowanie i dopracowanie):** 4. `08-testing-optimization` - pełne testowanie i optymalizacja 5. `07-not-found` (opcjonalnie) - strona 404 6. `09-finalization` - porządki końcowe

### Podsumowanie gałęzi:

| Gałąź | Nazwa                 | Priorytet | Czas     | Status          |
| ----- | --------------------- | --------- | -------- | --------------- |
| 04    | server-actions-errors | WYSOKI    | 2-3h     | ⏳ Do zrobienia |
| 05    | navigation-fixes      | ŚREDNI    | 1-2h     | ⏳ Do zrobienia |
| 06    | styles-improvements   | ŚREDNI    | 1-2h     | ⏳ Do zrobienia |
| 07    | 404-not-found         | NISKI     | 30min    | ⏳ Opcjonalnie  |
| 08    | testing-optimization  | WYSOKI    | 2-3h     | ⏳ Do zrobienia |
| 09    | finalization          | NISKI     | 30min-1h | ⏳ Do zrobienia |

**Całkowity szacowany czas:** 7-12 godzin pracy

### 📈 **POSTĘP OGÓLNY: ~85%**

- ✅ Środowisko: 100%
- ✅ Struktura: 95% (brak not-found.jsx)
- ✅ Komponenty: 100%
- ✅ Konteksty/Hooki: 100%
- ⚠️ API/Actions: 60% (Server Components działają, ale Actions wymagają naprawy, brak obsługi błędów)
- ⚠️ Stylowanie: 90% (wymagane poprawki w menu i breadcrumbs)
- ⚠️ Routing: 90% (działa, ale URL-e w menu wymagają naprawy, Breadcrumbs nie dostosowane)
- ⚠️ Testowanie: 0%

### 🎉 **SUKCESY:**

- ✅ Wszystkie komponenty zostały pomyślnie przeniesione i zaadaptowane
- ✅ Dynamiczne routingi działają poprawnie ([gender], [category], [subcategory], [id])
- ✅ Koszyk działa (localStorage, wszystkie komponenty funkcjonują)
- ✅ Server Components działają (pobieranie danych z backendu)
- ✅ Wszystkie style CSS Modules działają
- ✅ Assets (obrazy, ikony) działają poprawnie
- ✅ Linki zostały dostosowane z React Router do Next.js

### ⚠️ **WYMAGAJĄ NAPRAWY:**

- ❌ Server Actions - pliki istnieją ale nie działają poprawnie
- ❌ Obsługa błędów - brak try/catch w fetch()
- ❌ URL-e w menu - prowadzą do błędnych lokalizacji
- ❌ Breadcrumbs - nie dostosowane do Next.js (usePathname())
- ❌ Style - menu rozwijane i breadcrumbs wymagają poprawek
