# E2E Test Automation - Veeam assessment task with Playwright

End-to-end testing setup using [Playwright](https://playwright.dev/) with TypeScript and Docker.

> ✅ Easy to start · 🐳 Docker-ready · 🧪 Stable & repeatable

## 🧱 Tech Stack

- Playwright `1.52.0`
- TypeScript
- Docker + Docker Compose
- ESLint + Prettier

## 🚀 Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Run tests locally

```bash
yarn e2e              # All browsers
yarn e2e:chrome       # Chromium only
yarn pw:ui            # Playwright UI
```

## 🐳 Docker Usage

```bash
make build            # Build image
make start            # Start container
make test-in-docker   # Run tests inside container
make test-in-colima   # Run tests inside container using colima - checking if colima is started, if not then starting
```

> Port `9323` is exposed for Playwright UI or debugging.

## 🔐 Environment Variables

Create a `.env` file with your credentials:

```env
USER_NAME=...
USER_PASSWORD=...
USER_EMAIL=...
```

## 📂 Project Structure

```
src/
├── fixtures/         # Custom test fixtures
├── pages/            # Page Object Models
├── tests/            # Test files
├── utils/            # Helper functions
├── scripts/          # Custom scripts (e.g. flaky test checker)
```
