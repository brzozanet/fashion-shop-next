# 🚀 Przewodnik deploymentu na Vercel

Ten przewodnik krok po kroku pomoże Ci opublikować projekt Fashion Shop na Vercel.

## 📋 Wymagania wstępne

- Konto na [Vercel](https://vercel.com) (można zalogować się przez GitHub)
- Konto na [Render](https://render.com) dla backendu (json-server)
- Projekt w repozytorium GitHub

---

## 🎯 Plan deploymentu

Projekt składa się z dwóch części:

1. **Frontend (Next.js)** → Vercel
2. **Backend (json-server)** → Render

---

## 📦 Krok 1: Przygotowanie projektu

### 1.1. Sprawdź, czy projekt się buduje lokalnie

```bash
cd front-end
npm run build
```

Jeśli build się powiedzie, możesz przejść dalej. Jeśli nie, napraw błędy przed deploymentem.

### 1.2. Upewnij się, że plik `.env` jest w `.gitignore`

Plik `.env` nie powinien być commitowany do repozytorium (zawiera lokalne ustawienia).

---

## 🔧 Krok 2: Deployment backendu (json-server) na Render

Vercel nie obsługuje json-server jako osobnego serwisu, więc użyjemy Render do hostowania backendu.

### 2.1. Zaloguj się na Render

1. Przejdź na [render.com](https://render.com)
2. Kliknij "Get Started for Free"
3. Zaloguj się przez GitHub (najłatwiejsza opcja)
4. Autoryzuj Render do dostępu do Twojego konta GitHub

### 2.2. Utwórz nowy Web Service

1. W Dashboard Render kliknij **"New +"** (w prawym górnym rogu)
2. Wybierz **"Web Service"**
3. Połącz swoje repozytorium GitHub:
   - Jeśli pierwszy raz, kliknij "Connect account" i autoryzuj
   - Wybierz repozytorium `project-fashion-shop-next`
   - Kliknij "Connect"

### 2.3. Konfiguracja Web Service

Wypełnij następujące pola:

**Basic Settings:**

- **Name:** `fashion-shop-backend` (lub dowolna nazwa)
- **Region:** Wybierz najbliższy region (np. `Frankfurt` dla Polski)
- **Branch:** `main` (lub branch, na którym jest Twój kod)
- **Root Directory:** `back-end` ⚠️ **To ważne!** Musisz wskazać folder z backendem

**Build & Deploy:**

- **Environment:** `Node`
- **Build Command:** `npm install` (lub możesz zostawić puste - Render automatycznie zainstaluje zależności)
- **Start Command:** `npx json-server --watch db.json --host 0.0.0.0 --port $PORT`

  **⚠️ Ważne:**

  - `$PORT` to zmienna środowiskowa, którą Render automatycznie ustawia (domyślnie `10000`)
  - **NIE zastępuj** `$PORT` konkretną wartością (np. `3000`) - Render przydziela porty dynamicznie
  - Aplikacja musi nasłuchiwać na porcie wskazanym przez `$PORT`, inaczej nie będzie działać
  - Dla json-server nie ma tradycyjnego "buildowania" - to narzędzie runtime, więc Build Command tylko instaluje zależności

**Plan:**

- Wybierz **"Free"** (dla małych projektów wystarczy)

### 2.4. Dodatkowe ustawienia (opcjonalnie)

1. Kliknij **"Advanced"** (jeśli potrzebujesz)
2. **Auto-Deploy:** Zostaw włączone (automatyczny redeploy przy push do brancha)

### 2.5. Utwórz Web Service

1. Kliknij **"Create Web Service"**
2. Render rozpocznie proces deploymentu
3. Poczekaj na zakończenie (zwykle 3-5 minut)

### 2.6. Zapisz URL backendu

1. Po zakończeniu deploymentu Render wygeneruje URL
2. URL będzie wyglądał tak: `https://fashion-shop-backend.onrender.com`
3. **⚠️ WAŻNE:** Zapisz ten URL - będziesz go potrzebować w następnym kroku!
4. Możesz go znaleźć w sekcji "Service Details" → "URL"

### 2.7. Weryfikacja backendu

1. Otwórz URL backendu w przeglądarce
2. Powinieneś zobaczyć stronę JSON Server z informacjami o dostępnych endpointach
3. Sprawdź, czy endpoint działa: `https://your-backend-url.onrender.com/women` (powinien zwrócić JSON z produktami)

**Uwaga:** Na darmowym planie Render serwis może "zasypiać" po 15 minutach bezczynności. Pierwsze requesty po przebudzeniu mogą być wolniejsze (tzw. "cold start").

---

## 🌐 Krok 3: Deployment frontendu na Vercel

### 3.1. Zaloguj się na Vercel

1. Przejdź na [vercel.com](https://vercel.com)
2. Kliknij "Sign Up" i zaloguj się przez GitHub
3. Połącz swoje konto GitHub z Vercel

### 3.2. Dodaj nowy projekt

1. Kliknij "Add New..." → "Project"
2. Wybierz repozytorium `project-fashion-shop-next`
3. Vercel automatycznie wykryje, że to projekt Next.js

### 3.3. Konfiguracja projektu

**Root Directory:**

- Kliknij "Edit" przy "Root Directory"
- Wybierz folder `front-end`
- Kliknij "Continue"

**Framework Preset:**

- Powinno być automatycznie wykryte: "Next.js"
- Jeśli nie, wybierz ręcznie "Next.js"

**Build and Output Settings:**

- **Build Command:** `npm run build` (domyślne)
- **Output Directory:** `.next` (domyślne)
- **Install Command:** `npm install` (domyślne)

### 3.4. Zmienne środowiskowe

**To jest kluczowy krok!**

1. W sekcji "Environment Variables" kliknij "Add"
2. Dodaj zmienną:

   - **Name:** `BACKEND_URL`
   - **Value:** URL Twojego backendu z Render (np. `https://fashion-shop-backend.onrender.com`)
   - **Environment:** Wybierz wszystkie (Production, Preview, Development)

   **⚠️ Ważne:** Nie dodawaj końcowego `/` na końcu URL!

3. Kliknij "Add" i zapisz

### 3.5. Deploy!

1. Kliknij "Deploy"
2. Vercel rozpocznie proces buildowania i deploymentu
3. Poczekaj na zakończenie (zwykle 2-5 minut)

### 3.6. Sprawdź deployment

1. Po zakończeniu Vercel wygeneruje URL (np. `https://your-project.vercel.app`)
2. Otwórz URL w przeglądarce
3. Sprawdź, czy aplikacja działa poprawnie

---

## ✅ Krok 4: Weryfikacja

### Sprawdź:

1. ✅ Strona główna ładuje się poprawnie
2. ✅ Produkty są wyświetlane (sprawdź Network tab w DevTools)
3. ✅ Dodawanie do ulubionych działa
4. ✅ Koszyk działa (localStorage)
5. ✅ Przełączanie walut działa
6. ✅ Routing działa (przejście między kategoriami)

### Jeśli coś nie działa:

1. **Sprawdź konsolę przeglądarki** (F12 → Console)
2. **Sprawdź Network tab** - czy requesty do backendu są wysyłane poprawnie?
3. **Sprawdź Vercel Dashboard:**
   - Przejdź do "Deployments"
   - Kliknij na najnowszy deployment
   - Sprawdź "Build Logs" - czy nie ma błędów?

---

## 🔄 Krok 5: Aktualizacja zmiennych środowiskowych

Jeśli zmienisz URL backendu lub dodasz nowe zmienne:

1. W Vercel Dashboard przejdź do projektu
2. Kliknij "Settings" → "Environment Variables"
3. Dodaj/edytuj zmienne
4. **Ważne:** Po zmianie zmiennych środowiskowych musisz zrobić **Redeploy**:
   - Przejdź do "Deployments"
   - Kliknij "..." przy najnowszym deployment
   - Wybierz "Redeploy"

---

## 🎨 Krok 6: Custom Domain (opcjonalnie)

Jeśli chcesz użyć własnej domeny:

1. W Vercel Dashboard przejdź do projektu
2. Kliknij "Settings" → "Domains"
3. Dodaj swoją domenę
4. Postępuj zgodnie z instrukcjami Vercel (dodaj rekordy DNS)

---

## 🐛 Rozwiązywanie problemów

### Problem: "Build failed"

**Rozwiązanie:**

- Sprawdź "Build Logs" w Vercel Dashboard
- Upewnij się, że `npm run build` działa lokalnie
- Sprawdź, czy wszystkie zależności są w `package.json`
- **Jeśli błąd dotyczy `--turbopack`:** Usuń flagę `--turbopack` z build script w `package.json` (Turbopack jest tylko dla developmentu, nie dla produkcji)

### Problem: "Cannot connect to backend"

**Rozwiązanie:**

- Sprawdź, czy backend jest uruchomiony (otwórz URL backendu w przeglądarce)
- Sprawdź, czy zmienna `BACKEND_URL` jest poprawnie ustawiona w Vercel
- Upewnij się, że backend akceptuje requesty z zewnątrz (CORS)
- Sprawdź, czy URL backendu nie zawiera końcowego `/`

### Problem: "Images not loading"

**Rozwiązanie:**

- Upewnij się, że obrazy są w folderze `public/`
- Sprawdź ścieżki do obrazów (powinny zaczynać się od `/`)
- Jeśli obrazy są w backendzie, upewnij się, że backend jest dostępny publicznie

### Problem: "404 on dynamic routes"

**Rozwiązanie:**

- To normalne w Next.js - Vercel automatycznie konfiguruje routing
- Jeśli problem występuje, sprawdź strukturę folderów w `app/`

---

## 📝 Uwagi

- **Darmowy plan Vercel** jest wystarczający dla małych projektów
- **Render** oferuje darmowy plan (z limitami):
  - Serwisy mogą "zasypiać" po 15 minutach bezczynności
  - Pierwsze requesty po przebudzeniu mogą być wolniejsze (cold start)
  - Dla produkcji warto rozważyć płatny plan
- Vercel automatycznie deployuje każdy push do `main` branch
- Możesz skonfigurować preview deployments dla innych branchy
- Render również automatycznie redeployuje przy push do połączonego brancha

---

## 🎉 Gotowe!

Twoja aplikacja powinna być teraz dostępna publicznie na Vercel!

**Przykładowy URL:** `https://your-project.vercel.app`

---

## 📚 Przydatne linki

- [Dokumentacja Vercel](https://vercel.com/docs)
- [Dokumentacja Next.js Deployment](https://nextjs.org/docs/deployment)
- [Render Documentation](https://render.com/docs)
- [JSON Server Documentation](https://github.com/typicode/json-server)

---

**Powodzenia z deploymentem! 🚀**
