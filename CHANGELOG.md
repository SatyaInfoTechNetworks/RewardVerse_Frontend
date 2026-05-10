# Changelog - RewardVerse Frontend

## [1.2.0] - 2026-05-10

### Pivot (Native Android App Focus)
- **Product Strategy**: Re-positioned the entire landing page to promote the Native Android Application.
- **Android Pivot Refinement**:
  - Replaced all "Download APK" references with "Get it on Play Store".
  - Integrated the official `logo.png` into the Favicon, Navbar, and Footer.
  - Removed all Login and Register pages/links to focus strictly on app conversion.
  - Implemented custom SVG Play Store icon for all primary CTAs.
- **Branding**:
  - Standardized branding using the provided logo and Sora typography.
  - Refined the "Trusted by" row in the Hero section for app-specific authority.
- **Design Refinements**:
  - Reduced visible borders in favor of soft shadows and premium glassmorphism.
  - Increased white space (`py-32`) and improved visual hierarchy.
  - Simplified Navbar and Footer to a minimal, conversion-focused layout.
- **Content Updates**:
  - Updated Stats to show downloads and app ratings.
  - Refined How It Works to reflect the mobile app installation flow.
  - Updated FAQ for mobile-specific concerns (security, permissions, APK).

### Fixed
- **Lucide Icons**: Replaced missing/broken social icons (Twitter, Youtube) with standard Lucide exports (Globe, Mail, MessageCircle).
- **Base-UI Error**: Fixed `Accordion` type error in `FAQ.tsx` by removing unsupported props for the Base-UI implementation.
- **Build Errors**: Resolved multiple TypeScript and PostCSS issues related to the massive style migration.
