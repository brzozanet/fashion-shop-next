# 🛒 Fashion contemporary shop

### Projekt sklepu internetowego z koszykiem zakupowym

Aplikacja Fashion contemporary shop to nowoczesny sklep internetowy umożliwiający przeglądanie produktów, dodawanie ich do ulubionych oraz zarządzanie koszykiem zakupowym.

**✨ Projekt został przepisany z czystego React na Next.js oraz z JavaScript na TypeScript** - migracja obejmuje pełną adaptację komponentów, routingu, zarządzania stanem, integrację z Server Components i Server Actions oraz pełne typowanie całej aplikacji.

Projekt obejmuje frontend w Next.js oraz backend z JSON Server do obsługi danych produktów.

## 🔄 Migracja z React na Next.js

Projekt został w całości przepisany z czystego React (React Router, Vite) na **Next.js 15** z App Router. Migracja obejmuje:

- ✅ **Server Components** - pobieranie danych po stronie serwera
- ✅ **Server Actions** - mutacje danych (dodawanie/usuwanie z ulubionych)
- ✅ **App Router** - nowoczesny routing oparty na strukturze folderów
- ✅ **Dynamiczne routingi** - `[gender]`, `[category]`, `[subcategory]`, `[id]`
- ✅ **Obsługa błędów** - try/catch w Server Components z fallback UI
- ✅ **Optymalizacja** - Turbopack dla szybszego developmentu
- ✅ **Walidacja routingu** - `notFound()` dla nieprawidłowych ścieżek

Oryginalna wersja React znajduje się w w repozytorium: [project-fashion-shop](https://github.com/brzozanet/project-fashion-shop), jako referencja.

## 🔄 Migracja z JavaScript na TypeScript

Projekt został w całości przepisany z **JavaScript** na **TypeScript**. Migracja obejmuje:

- ✅ **Pełne typowanie** - wszystkie komponenty, funkcje i zmienne mają zdefiniowane typy
- ✅ **Type safety** - kontrola typów na etapie kompilacji
- ✅ **IntelliSense** - lepsze wsparcie IDE z autouzupełnianiem i podpowiedziami
- ✅ **Typy dla propsów** - wszystkie komponenty mają zdefiniowane typy propsów
- ✅ **Typy dla kontekstów** - React Context z pełnym typowaniem
- ✅ **Typy dla Server Actions** - typowanie funkcji serwerowych
- ✅ **Type assertions** - bezpieczne typowanie odpowiedzi API (`.json()`)
- ✅ **Organizacja typów** - centralne miejsce dla definicji typów w folderze `types/`

## 🌐 Demo

### 🚀 Wersja online

Aplikacja jest dostępna online pod adresem:

**👉 [https://fashion-shop-next-liart.vercel.app/](https://fashion-shop-next-liart.vercel.app/)**

**Platformy:**

- **Frontend**: [Vercel](https://vercel.com) - hosting Next.js
- **Backend**: [Render](https://render.com) - hosting JSON Server

**⚠️ Ważne informacje:**

- **Cold Start**: Przy pierwszym uruchomieniu (lub po dłuższym czasie bezczynności) aplikacja może ładować się dłużej (15-30 sekund). To normalne zjawisko na darmowych planach - serwisy "zasypiają" po 15 minutach bezczynności i wymagają przebudzenia.
- **Backend**: Backend na Render może również wymagać kilku sekund na pierwsze uruchomienie po okresie bezczynności.
- **Cierpliwość**: Jeśli strona nie ładuje się od razu, odczekaj chwilę i odśwież stronę - kolejne requesty będą znacznie szybsze.

### 📦 Architektura

Aplikacja składa się z dwóch części:

- **Frontend**: Interfejs użytkownika w Next.js (App Router) - hostowany na Vercel
- **Backend**: JSON Server z bazą danych produktów - hostowany na Render

## 🛠 Użyte technologie

### Frontend

- **Next.js** (v15.5.0 - framework React z App Router)
- **React** (v19.1.1 - biblioteka JavaScript do budowania interfejsów użytkownika)
- **TypeScript** (typowany nadzbiór JavaScript z kontrolą typów)
- **Turbopack** (szybki bundler Next.js)
- **React Context** (zarządzanie stanem aplikacji - koszyk i waluta)
- **CSS Modules** (lokalne style komponentów)
- **Server Components** (komponenty renderowane po stronie serwera)
- **Server Actions** (mutacje danych po stronie serwera)
- **Modern Normalize** (normalizacja stylów CSS)
- **Nanoid** (generowanie unikalnych identyfikatorów)
- **Notiflix** (powiadomienia użytkownika)
- **HTML5** (semantyczna struktura dokumentu)
- **CSS3** (zaawansowane style i layout)
- **LocalStorage** (lokalne przechowywanie danych koszyka)

### Backend

- **JSON Server** (v0.17.4 - mock REST API server)
- **Node.js** (środowisko uruchomieniowe JavaScript)

### Narzędzia deweloperskie

- **TypeScript** (kompilator i system typów)
- **ESLint** (linting i kontrola jakości kodu)
- **Git & GitHub** (kontrola wersji i hosting kodu)

## 📂 Struktura aplikacji

```
project-fashion-shop-next/
├── front-end/                        # Aplikacja Next.js
│   ├── app/
│   │   ├── components/               # Komponenty React
│   │   │   ├── Bestsellers/          # Sekcja bestsellerów
│   │   │   ├── Cart*/                # Komponenty koszyka
│   │   │   ├── Categories*/          # Menu kategorii
│   │   │   ├── Currency*/            # Selektor walut
│   │   │   ├── Detail/               # Szczegóły produktu
│   │   │   ├── Favourite*/           # Komponenty ulubionych
│   │   │   ├── Hero/                 # Sekcja hero
│   │   │   ├── Product*/             # Komponenty produktów
│   │   │   └── ...
│   │   ├── [gender]/                 # Dynamiczny routing - kategoria płci
│   │   │   ├── [category]/           # Dynamiczny routing - kategoria
│   │   │   │   ├── [subcategory]/    # Dynamiczny routing - podkategoria
│   │   │   │   │   └── [id]/         # Dynamiczny routing - szczegóły produktu
│   │   ├── koszyk/                   # Strona koszyka
│   │   ├── ulubione/                 # Strona ulubionych
│   │   ├── actions/                  # Server Actions
│   │   │   ├── addToFavourites.ts
│   │   │   └── deleteFromFavourites.ts
│   │   ├── contexts/                 # React Context
│   │   │   ├── CartContext.ts        # Kontekst koszyka
│   │   │   └── CurrencyContext.ts    # Kontekst waluty
│   │   ├── hooks/                    # Custom hooks
│   │   ├── types/                    # Definicje typów TypeScript
│   │   ├── constants/                # Stałe aplikacji
│   │   ├── styles/                   # Globalne style
│   │   ├── layout.tsx                # Główny layout
│   │   ├── page.tsx                  # Strona główna
│   │   ├── not-found.tsx             # Strona 404
│   │   └── loading.tsx               # Komponent ładowania
│   ├── public/                       # Pliki statyczne
│   │   ├── icons/                    # Ikony SVG
│   │   └── images/                   # Obrazy
│   ├── .env                          # .gitignore (lokalne ustawienia)
│   └── package.json
├── back-end/                         # JSON Server
│   ├── db.json                       # Baza danych produktów
│   ├── public/product-photos/        # Zdjęcia produktów
│   └── package.json
└── README.md
```

## 📋 Dostępne strony

- **/** - Strona główna (przekierowanie na /kobieta)
- **/[gender]** - Strona kategorii płci (kobieta, mezczyzna, dziecko)
- **/[gender]/[category]** - Strona kategorii (odziez, obuwie, akcesoria, sport)
- **/[gender]/[category]/[subcategory]** - Strona podkategorii
- **/[gender]/[category]/[subcategory]/[id]** - Szczegóły produktu
- **/koszyk** - Koszyk zakupowy
- **/ulubione** - Lista ulubionych produktów
- **404** - Strona błędu dla nieistniejących tras

## 🚀 Jak uruchomić aplikację

### Wymagania wstępne

- Node.js (wersja LTS)
- npm

### Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/brzozanet/project-fashion-shop-next.git
   cd project-fashion-shop-next
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Utwórz plik `.env` w folderze `front-end/`:

   ```bash
   BACKEND_URL=http://localhost:3000
   ```

4. W terminalu wywołaj:

   ```bash
   npm run dev
   ```

   ✅ Oba serwery (frontendowy i backendowy) uruchomią się jednocześnie!

   Frontend będzie dostępny pod adresem: [http://localhost:3001](http://localhost:3001)

   Backend będzie dostępny pod adresem: [http://localhost:3000](http://localhost:3000)

## 🌐 API Endpoints

Backend udostępnia następujące endpointy:

- `GET /women` - Lista produktów dla kobiet
- `GET /men` - Lista produktów dla mężczyzn
- `GET /children` - Lista produktów dla dzieci
- `GET /favourites` - Lista ulubionych produktów
- `POST /favourites` - Dodanie do ulubionych
- `DELETE /favourites/:id` - Usunięcie z ulubionych

## ✨ Funkcjonalności

### Zaimplementowane

- 📱 Responsywny design
- 🛍️ Przeglądanie produktów z dynamicznym routingiem
- 🔍 Filtrowanie produktów (kategoria, płeć, podkategoria)
- ❤️ System ulubionych produktów (Server Actions)
- 🛒 Koszyk zakupowy z localStorage
- 💱 Przełączanie walut (PLN, EUR)
- 🔄 Breadcrumbs navigation
- 📦 Szczegóły produktu z galerią zdjęć
- ⚡ Server Components dla optymalnej wydajności
- 🛡️ Obsługa błędów z fallback UI
- 🔗 Aktywne linki w menu nawigacyjnym
- 🚫 Strona 404 dla nieistniejących ścieżek

## 🔄 Różnice między React a Next.js

### React (oryginalna wersja)

- React Router DOM do nawigacji
- Vite jako bundler
- Loadery do pobierania danych
- Client-side rendering
- `useNavigate()` do programowej nawigacji

### Next.js (przepisana wersja)

- App Router oparty na strukturze folderów
- Turbopack jako bundler
- Server Components do pobierania danych
- Server Actions do mutacji danych
- Server-side rendering
- `useRouter()` z `next/navigation` do programowej nawigacji
- `notFound()` do obsługi błędów routingu

## 📝 Uwagi

- Aplikacja wymaga uruchomienia zarówno frontendu jak i backendu
- Dane koszyka są przechowywane lokalnie w localStorage
- Zdjęcia produktów znajdują się w folderze `back-end/public/product-photos/`
- Aplikacja wspiera waluty: PLN, EUR
- Oryginalna wersja React znajduje się w w repozytorium: [project-fashion-shop](https://github.com/brzozanet/project-fashion-shop), jako referencja.

### 🌐 Deployment

Projekt jest zdeployowany na:

- **Frontend**: Vercel (automatyczny deployment z GitHub)
- **Backend**: Render (automatyczny deployment z GitHub)

Szczegółowy przewodnik deploymentu znajduje się w pliku [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎯 Status projektu

✅ **Projekt ukończony** - wszystkie funkcjonalności zostały pomyślnie przepisane z React na Next.js oraz z JavaScript na TypeScript i przetestowane.

---

**Projekt powstał z przepisania aplikacji z czystego React na Next.js 15 z App Router oraz z JavaScript na TypeScript.**

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/project-fashion-shop-next/refs/heads/main/front-end/public/images/gh-cover-react-shop-online.jpg)
