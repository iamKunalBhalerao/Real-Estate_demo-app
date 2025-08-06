# Vercel Deployment Checklist

## Pre-deployment checks
- ✅ All TypeScript errors resolved
- ✅ Build process successful
- ✅ All dependencies installed
- ✅ SSR-safe code (window/document checks)
- ✅ Proper Vercel configuration

## Post-deployment troubleshooting
If the app doesn't work on Vercel:

1. Check Vercel build logs for errors
2. Ensure all environment variables are set
3. Verify public assets are accessible
4. Check browser console for runtime errors

## Common Vercel Issues Fixed:
- React.StrictMode wrapper added
- SSR-safe window/document access
- Proper base path configuration
- Legacy peer deps handling
- CSS import declarations
- Swiper CSS bundle import

## Deployment Command:
```
vercel --prod
```

## Local Preview:
```
npm run build && npm run preview
```
