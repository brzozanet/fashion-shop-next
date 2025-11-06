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

## 📊 Analiza stanu przepisania projektu - Aktualizacja 2025-11-06

### ✅ CO ZOSTAŁO ZROBIONE:

**Faza 1: Przygotowanie środowiska - ✅ UKOŃCZONA**

- ✅ Utworzono kopię zapasową (front-end.OLD)
- ✅ Zainicjalizowano projekt Next.js w nowym folderze front-end
- ✅ Skonfigurowano Turbopack w package.json ("dev": "next dev --turbopack --port 3001")
- ✅ Zainstalowano zależności (Next.js 15.5.0, React 19.1.1)

**Faza 2: Struktura folderów Next.js - ✅ UKOŃCZONA**

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
- ✅ Utworzono app/not-found.jsx - strona 404

**Faza 3: Migracja komponentów - ✅ UKOŃCZONA**

- ✅ Skopiowano WSZYSTKIE komponenty z front-end.OLD/src/components/ do front-end/app/components/
- ✅ Skopiowano style CSS Modules dla wszystkich komponentów
- ✅ Dostosowano importy z React Router na Next.js Link
- ✅ Dostosowano routing do App Router
- ✅ Dostosowano ścieżki do obrazów (użycie /icons/ i /images/)
- ✅ Dodano komunikat w Products - "Brak produktów w kategorii" gdy lista jest pusta

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

**Faza 4: Migracja kontekstów i hooków - ✅ UKOŃCZONA**

- ✅ Skopiowano contexts/ (CartContext.js, CurrencyContext.js)
- ✅ Skopiowano hooks/ (useCart.js, useCurrency.js)
- ✅ Skopiowano constants/ (categories.js, costs.js, curriencies.js, genders.js, mappings.js)
- ✅ Server Actions - UKOŃCZONE:
  - ✅ app/actions/addToFavourites.jsx - działa poprawnie z obsługą błędów
  - ✅ app/actions/deleteFromFavourites.jsx - działa poprawnie z obsługą błędów
- ℹ️ UWAGA: Loadery z React Router zostały zastąpione bezpośrednimi fetch() w Server Components
- ✅ Obsługa błędów w zapytaniach fetch() do backendu - zaimplementowana (try/catch, fallback UI)

**Faza 5: Routing i nawigacja - ✅ UKOŃCZONA**

- ✅ Zaimplementowano App Router dla wszystkich stron
- ✅ Dostosowano nawigację do Next.js (Link zamiast NavLink)
- ✅ Zaimplementowano dynamiczne routingi z parametrami ([gender], [category], [subcategory], [id])
- ✅ Użyto useParams() w Client Components
- ✅ Breadcrumbs - Dostosowano do Next.js (useParams())
- ✅ Komunikat dla użytkownika "Brak produktów w kategorii" w komponencie Products - Dodano
- ✅ Przekierowanie ze strony głównej na /kobieta (redirect w page.jsx)
- ✅ Rozwiązano problem URL-e generowane w menu prowadzą do błędnych lokalizacji - naprawiono ścieżki relatywne / bezwzględne

**Faza 6: Stylowanie i assets - ✅ UKOŃCZONA**

- ✅ Skopiowano globals.css i theme.css (w app/styles/)
- ✅ Przeniesiono wszystkie obrazy do public/ (ikony i obrazy)
- ✅ Dostosowano ścieżki do obrazów w komponentach
- ✅ Wszystkie CSS Modules działają poprawnie
- ✅ Style w menu (zwłaszcza rozwijanym) działają poprawnie
- ✅ Style w Breadcrumbs działają poprawnie

### ⚠️ CO JESZCZE TRZEBA ZROBIĆ:

**Faza 7: Testowanie i debugowanie - ✅ UKOŃCZONA**

- ✅ Przetestowano wszystkie strony i funkcjonalności
- ✅ Sprawdzono routing - wszystkie dynamiczne ścieżki działają poprawnie
- ✅ Zweryfikowano komponenty - wszystkie działają poprawnie
- ✅ Przetestowano koszyk - dodawanie/usuwanie produktów działa
- ✅ Przetestowano ulubione - dodawanie/usuwanie z ulubionych działa
- ✅ Sprawdzono responsywność i UX
- ✅ Zoptymalizowano wydajność z Turbopack
- ✅ Zoptymalizowano ładowanie obrazów

### 🎯 NASTĘPNE KROKI (priorytetowo):

1. **Finalizacja:**
   - Usunąć zbędne pliki (np. page.OLD.jsx)
   - Uporządkować strukturę projektu
   - Sprawdzić zgodność z oryginalną aplikacją

## 🔀 Plan pracy i gałęzie Git

### Proponowane gałęzie do dokończenia projektu:

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

1. ✅ `04-server-actions-errors` - naprawić funkcjonalność i błędy - **UKOŃCZONA**

**Sesja 2 (średni priorytet):**

2. ✅ `05-navigation-fixes` - naprawić nawigację - **UKOŃCZONA**
3. ✅ `06-styles-improvements` - poprawić style - **UKOŃCZONA**

**Sesja 3 (testowanie i dopracowanie):**

4. ✅ `08-testing-optimization` - pełne testowanie i optymalizacja - **UKOŃCZONA**
5. ✅ `07-not-found` (opcjonalnie) - strona 404 - **UKOŃCZONA**
6. ⏳ `09-finalization` - porządki końcowe - **DO ZROBIENIA**

### Podsumowanie gałęzi:

| Gałąź | Nazwa                 | Priorytet | Czas     | Status          |
| ----- | --------------------- | --------- | -------- | --------------- |
| 04    | server-actions-errors | WYSOKI    | 2-3h     | ✅ Ukończona    |
| 05    | navigation-fixes      | ŚREDNI    | 1-2h     | ✅ Ukończona    |
| 06    | styles-improvements   | ŚREDNI    | 1-2h     | ✅ Ukończona    |
| 07    | 404-not-found         | NISKI     | 30min    | ✅ Ukończona    |
| 08    | testing-optimization  | WYSOKI    | 2-3h     | ✅ Ukończona    |
| 09    | finalization          | NISKI     | 30min-1h | ⏳ Do zrobienia |

### 📈 **POSTĘP OGÓLNY: ~98%**

- ✅ Środowisko: 100%
- ✅ Struktura: 100% (wszystkie strony utworzone, w tym not-found.jsx)
- ✅ Komponenty: 100%
- ✅ Konteksty/Hooki: 100%
- ✅ API/Actions: 100% (Server Components działają, Actions naprawione, obsługa błędów dodana)
- ✅ Stylowanie: 100% (wszystkie style działają poprawnie)
- ✅ Routing: 100% (działa, URL-e naprawione, Breadcrumbs dostosowane)
- ✅ Testowanie: 100% (wszystkie funkcjonalności przetestowane i działają poprawnie)

### 🎉 **SUKCESY:**

- ✅ Wszystkie komponenty zostały pomyślnie przeniesione i zaadaptowane
- ✅ Dynamiczne routingi działają poprawnie ([gender], [category], [subcategory], [id])
- ✅ Koszyk działa (localStorage, wszystkie komponenty funkcjonują)
- ✅ Server Components działają (pobieranie danych z backendu)
- ✅ Wszystkie style CSS Modules działają
- ✅ Assets (obrazy, ikony) działają poprawnie
- ✅ Linki zostały dostosowane z React Router do Next.js
- ✅ Server Actions (addToFavourites, deleteFromFavourites) działają poprawnie z obsługą błędów
- ✅ Obsługa błędów w Server Components (fetch) została zaimplementowana
- ✅ URL-e w menu naprawione (ścieżki bezwzględne)
- ✅ Breadcrumbs dostosowane do Next.js
- ✅ Aktywne linki w menu działają poprawnie
- ✅ Strona 404 (not-found.jsx) utworzona i działa poprawnie
- ✅ Walidacja parametrów routingu (notFound() dla nieprawidłowych ścieżek)
- ✅ Wszystkie funkcjonalności przetestowane i działają poprawnie
- ✅ Optymalizacja wydajności i responsywności zakończona

### ⚠️ **WYMAGAJĄ UWAGI:**

- ⏳ Finalizacja - usunięcie zbędnych plików i uporządkowanie projektu
