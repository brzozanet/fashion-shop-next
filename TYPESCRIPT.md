# 📘 Przewodnik przepisania projektu na TypeScript

Ten przewodnik krok po kroku pomoże Ci przepisać projekt Fashion Shop z JavaScript na TypeScript.

---

## 🎯 Od czego zacząć i czy wymaga to dodatkowej konfiguracji?

**Tak, wymaga to dodatkowej konfiguracji i zależności.**

### Krok 1: Instalacja zależności TypeScript

Musisz zainstalować TypeScript oraz typy dla React i Next.js:

```bash
cd front-end
npm install --save-dev typescript @types/react @types/react-dom @types/node
```

### Krok 2: Utworzenie pliku `tsconfig.json`

Zastąp istniejący plik `jsconfig.json` plikiem `tsconfig.json`. Możesz zacząć od podstawowej konfiguracji Next.js:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Ważne:** Po utworzeniu `tsconfig.json` możesz usunąć `jsconfig.json` (TypeScript używa własnego pliku konfiguracyjnego).

### Krok 3: Zmiana rozszerzeń plików

Podczas migracji będziesz zmieniać rozszerzenia plików:

- `.js` → `.ts`
- `.jsx` → `.tsx`

---

## 🔄 Jak powinien przebiegać proces przepisywania?

Zalecana kolejność migracji (Next.js wspiera mieszanie JS i TS, więc możesz migrować stopniowo):

### Faza 1: Przygotowanie (bez zmian w kodzie)

1. **Zainstaluj zależności TypeScript** (patrz Krok 1 powyżej)
2. **Utwórz `tsconfig.json`** (patrz Krok 2 powyżej)
3. **Usuń `jsconfig.json`** (już nie jest potrzebny)
4. **Uruchom `npm run dev`** - Next.js automatycznie wygeneruje plik `next-env.d.ts` (to jest normalne i potrzebne)

### Faza 2: Migracja stopniowa (pliki można migrować jeden po drugim)

#### 1. Zacznij od plików konfiguracyjnych i stałych (najprostsze)

- `app/constants/*.js` → `.ts`

  - `app/constants/categories.js` → `categories.ts`
  - `app/constants/costs.js` → `costs.ts`
  - `app/constants/curriencies.js` → `curriencies.ts`
  - `app/constants/genders.js` → `genders.ts`
  - `app/constants/mappings.js` → `mappings.ts`

- `app/utils/*.js` → `.ts`
  - `app/utils/imageUtils.js` → `imageUtils.ts`

#### 2. Następnie konteksty i hooki

- `app/contexts/*.js` → `.ts`

  - `app/contexts/CartContext.js` → `CartContext.ts`
  - `app/contexts/CurrencyContext.js` → `CurrencyContext.ts`

- `app/hooks/*.js` → `.ts`
  - `app/hooks/useCart.js` → `useCart.ts`
  - `app/hooks/useCurrency.js` → `useCurrency.ts`

#### 3. Potem akcje

- `app/actions/*.js` → `.ts`
  - `app/actions/addToFavourites.js` → `addToFavourites.ts`
  - `app/actions/deleteFromFavourites.js` → `deleteFromFavourites.ts`

#### 4. Na końcu komponenty (najbardziej złożone)

- `app/components/**/*.jsx` → `.tsx`
- `app/**/page.jsx` → `page.tsx`
- `app/layout.jsx` → `layout.tsx`
- `app/loading.jsx` → `loading.tsx`
- `app/not-found.jsx` → `not-found.tsx`

### Faza 3: Dodawanie typów

- **Dodawaj typy stopniowo** - zacznij od prostych interfejsów/typów
- **Użyj `any` tymczasowo** jeśli coś blokuje - możesz wrócić do tego później
- **Włącz `strict: true`** w `tsconfig.json` (już jest w przykładzie powyżej) - to pomoże wyłapać więcej błędów

---

## 💡 Ważne wskazówki

1. **Next.js pozwala na mieszanie JS i TS** - możesz migrować plik po pliku, nie musisz wszystkiego przepisywać naraz
2. **Po zmianie rozszerzenia pliku** TypeScript automatycznie zacznie sprawdzać typy w tym pliku
3. **Błędy typów będą widoczne** w terminalu (gdy uruchomisz `npm run dev`) oraz w edytorze (jeśli używasz VS Code lub innego edytora z obsługą TypeScript)
4. **Zacznij od prostych plików** (stałe, utils), potem przejdź do bardziej złożonych (komponenty)

---

## 🐛 Gdy napotkasz problemy

Jeśli napotkasz błędy podczas migracji:

1. **Wskaż lokalizację błędu** (plik i linia)
2. **Wyjaśnię przyczynę** błędu
3. **Podam sposób naprawy** (bez zmiany kodu - Ty będziesz wprowadzać zmiany)

Mogę również sprawdzić konkretne pliki i wskazać, jakie typy będą potrzebne.

---

## 📚 Przydatne linki

- [Dokumentacja TypeScript](https://www.typescriptlang.org/docs/)
- [Next.js TypeScript Documentation](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

**Powodzenia z migracją na TypeScript! 🚀**
