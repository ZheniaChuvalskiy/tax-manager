# Deployment (Web + Firebase)

## Prerequisites

1. **Firebase Console**
   - Enable **Google** sign-in: Authentication → Sign-in method → Google → Enable.
   - For native (iOS/Android) builds: copy the **Web client ID** from the Google sign-in config and set it in `contexts/AuthContext.tsx` (replace `GOOGLE_WEB_CLIENT_ID`). On web, Google sign-in uses the Firebase SDK and does not need this.

2. **Authorized domains**
   - After first deploy, add your hosting domain (e.g. `tax-manager-9e259.web.app`) to Authentication → Settings → Authorized domains if needed.

## Web (Safari on iPhone / desktop)

1. Export the web app:
   ```bash
   npx expo export --platform web
   ```
   This writes the build to the `dist/` folder.

2. Deploy to Firebase Hosting:
   ```bash
   firebase deploy
   ```
   Hosting is configured to use `dist` as the public directory, so the exported app is served at your project’s hosting URL.

3. Open the hosting URL in Safari on your iPhone (or any browser). Log in with Google and use the app; data is stored in Firestore under `users/{uid}/`.

## Offline

Firestore offline persistence is enabled in `config/firebase.ts`, so the app can be used without internet (e.g. in Ukraine) and will sync when back online.
