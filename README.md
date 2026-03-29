# Project Walter (Frontend)

Willkommen bei **Project Walter**! Dies ist mein persönliches Lernprojekt, an dem ich in meiner Freizeit arbeite. Als
Einzelentwickler nutze ich dieses Projekt, um meine Fähigkeiten in der modernen Webentwicklung auszubauen und neue
Technologien in der Praxis auszuprobieren.

![Build](https://img.shields.io/github/actions/workflow/status/Robertwlt03/Project-Walter-Frontend/pipeline.yml?color=31C854&label=build)
![Updated](https://img.shields.io/github/last-commit/Robertwlt03/Project-Walter-Frontend?color=646CFF&label=updated)
![License](https://img.shields.io/github/license/Robertwlt03/Project-Walter-Frontend?&color=informational&label=license)
![Issues](https://img.shields.io/github/issues/Robertwlt03/Project-Walter-Frontend?color=orange&label=issues)

## Tech Stack

| Technologie                                                                                                                       | Kategorie  |
|:----------------------------------------------------------------------------------------------------------------------------------|:----------:|
| <a href="https://react.dev/"><img alt="React" src="https://skillicons.dev/icons?i=react" width="50"/></a> **v. 19**               | Framework  |
| <a href="https://vite.dev/"><img alt="Vite" src="https://skillicons.dev/icons?i=vite" width="50"/></a> **v. 8**                   | Build Tool |
| <a href="https://tailwindcss.com/"><img alt="Tailwind" src="https://skillicons.dev/icons?i=tailwind" width="50"/></a> **v. 4**    |  Styling   |
| <a href="https://vitest.dev/"><img alt="Vitest" src="https://skillicons.dev/icons?i=vitest" width="50"/></a> **v. 4**             |  Testing   |
| <a href="https://gsap.com/"><img alt="GSAP" src="./public/gsap.svg" width="50"/></a> **v. 3**                                     | Animations |
| <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://skillicons.dev/icons?i=ts" width="50"/></a> **v. 5** |  Language  |
| <a href="https://haptics.lochie.me/"><img alt="WebHaptics" src="./public/webHaptics.svg" width="100"/></a> **v. 0.0.6**           |  Feedback  |

## Entwicklung & Qualitätssicherung

Kleine Helfer, die mir beim Programmieren unter die Arme greifen:

* **Vitest**: Ein blitzschnelles Test-Framework, das nativ mit Vite zusammenarbeitet.
* **React Testing Library**: Ermöglicht es mir, Komponenten so zu testen, wie ein echter Nutzer sie bedienen würde.
* **jsdom**: Simuliert eine Browser-Umgebung im Terminal für schnelle Testläufe.
* **ESLint 9 & Prettier**: Sorgen für sauberen Code und verhindern Flüchtigkeitsfehler.
* **TypeScript**: Sichert die Datenstrukturen ab und bietet erstklassige Autovervollständigung in der IDE.

## Projektstruktur – wo finde ich was?

| Pfad                                                       | Inhalt                                                                                                                                                      |
|:-----------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `index.html`                                               | HTML-Einstieg; bindet `src/main.tsx` ein und setzt Titel sowie Favicon (`/favicon.svg`).                                                                    |
| `src/main.tsx`                                             | React-Einstieg: rendert `<App />` in `#root`, importiert globale Styles.                                                                                    |
| `src/App.tsx`                                              | Hauptkomponente der Anwendung.                                                                                                                              |
| `src/App.css`                                              | Styles, die nur zur App-Komponente gehören.                                                                                                                 |
| `src/index.css`                                            | Globale Styles: Tailwind (`@import 'tailwindcss'`), CSS-Variablen (Farben, Typo), Basis-Layout.                                                             |
| `src/App.test.tsx`                                         | Beispiel-Test mit Vitest und React Testing Library.                                                                                                         |
| `public/`                                                  | Statische Dateien, die unverändert ausgeliefert werden (z. B. `favicon.svg`, Badges/Icons wie `gsap.svg`, `webHaptics.svg`). Unter `/dateiname` erreichbar. |
| `vite.config.ts`                                           | Vite-Konfiguration: React- und Tailwind-Plugin, **Vitest** (`environment: jsdom`, `setupFiles: vitest.setup.ts`).                                           |
| `vitest.setup.ts`                                          | Test-Setup (z. B. `@testing-library/jest-dom`).                                                                                                             |
| `eslint.config.js`                                         | ESLint-Regeln (Flat Config, ESLint 9).                                                                                                                      |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | TypeScript-Projektaufteilung (App vs. Build-Tools wie Vite).                                                                                                |
| `.github/workflows/pipeline.yml`                           | GitHub Actions: bei Push/PR auf `main` werden `npm install`, `npm run lint` und `npm run build` ausgeführt.                                                 |

Neue UI-Logik gehört typischerweise unter `src/` (Komponenten, Hooks, Hilfsfunktionen). Gemeinsame Tests liegen neben
der getesteten Datei oder in einem späteren `src/**/__tests__`-Muster – aktuell liegt ein Beispieltest bei
`App.test.tsx`.

## NPM-Skripte

| Befehl            | Zweck                                                           |
|:------------------|:----------------------------------------------------------------|
| `npm run dev`     | Entwicklungsserver (Vite) mit Hot Reload.                       |
| `npm run build`   | TypeScript-Check (`tsc -b`) und Produktions-Build nach `dist/`. |
| `npm run preview` | Lokaler Preview-Server für den Build unter `dist/`.             |
| `npm run lint`    | ESLint über das gesamte Projekt.                                |
| `npm run test`    | Vitest (Watch-Modus; einmalig z. B. `npx vitest run`).          |

## Installation

```bash
# Installiert alle Abhängigkeiten
npm install

# Startet die lokale Entwicklungsumgebung
npm run dev
```