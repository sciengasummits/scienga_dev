# Implementation Plan: Custom Hero Background Image

## Overview

This implementation plan focuses on replacing the external Unsplash background image with a locally-hosted scientific-themed image. The approach is minimal and straightforward: add the image asset to the project, update the CSS reference, and verify the implementation across different screen sizes.

## Tasks

- [ ] 1. Prepare and add background image asset
  - Source or create a high-quality scientific/laboratory-themed background image (minimum 1920x1080, preferably 2560x1440)
  - Optimize the image for web delivery (compress to under 500KB while maintaining quality)
  - Save the optimized image as `hero-background.jpg` (or appropriate format)
  - Place the image file in `src/assets/images/` directory
  - _Requirements: 1.1, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 6.1_

- [ ] 2. Update CSS to reference local background image
  - Open `src/components/sections/HeroSection/HeroSection.css`
  - Locate the `.hero` class background-image property
  - Replace the Unsplash URL with the relative path to the local asset: `url('../../../assets/images/hero-background.jpg')`
  - Add a fallback background-color property before background-image for graceful degradation: `background-color: #1a1a2e;`
  - Verify all other CSS properties remain unchanged (background-size, background-position, min-height, etc.)
  - _Requirements: 1.2, 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 3. Verify text readability and overlay
  - Start the development server and navigate to the home page
  - Visually inspect that the dark gradient overlay is properly applied over the new background
  - Verify all text elements are clearly readable: title, subtitle, countdown timer, description, and button labels
  - Check that the info cards (date and venue) are visible and properly positioned
  - If readability is compromised, adjust the overlay gradient opacity in `.hero__overlay` class
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Test responsive behavior across device sizes
  - Test desktop view (1920x1080 and 2560x1440 resolutions)
  - Test tablet view (768px and 1024px widths using browser dev tools)
  - Test mobile view (375px and 414px widths using browser dev tools)
  - Verify background-size: cover maintains proper scaling without distortion
  - Verify background-position: center keeps the focal point visible at all sizes
  - Verify no layout breaks or content overflow at any breakpoint
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 5. Verify build optimization and performance
  - Run `npm run build` (or equivalent build command)
  - Verify the build completes successfully without asset resolution errors
  - Check the `dist/assets/` directory to confirm the image is included with a hashed filename
  - Verify the image file size in the build output is under 500KB
  - Test the production build by serving the dist folder
  - Verify the background image loads correctly in the production build
  - Check browser Network tab to confirm proper caching headers
  - _Requirements: 1.3, 6.2, 6.3, 6.4, 6.5_

- [ ]* 6. Write unit tests for HeroSection component
  - Verify the HeroSection component renders without errors
  - Verify the `.hero` class is applied to the section element
  - Verify the `.hero__overlay` element is present in the DOM
  - Verify all child components (title, countdown, buttons, info cards) render correctly
  - _Requirements: 5.2_

- [ ] 7. Final checkpoint - Visual and functional verification
  - Perform a final visual inspection of the hero section on all device sizes
  - Verify the scientific theme is appropriate and professional
  - Verify no visual regressions in any hero section elements
  - Verify page load time is acceptable (< 3 seconds on standard connection)
  - Ensure all tests pass, ask the user if questions arise

## Notes

- The primary task is updating the CSS file - no JavaScript/React component changes are needed
- The image asset should be optimized before adding to the project (use tools like ImageOptim, TinyPNG, or Squoosh)
- If the initial image doesn't provide sufficient contrast for text readability, the overlay gradient can be adjusted by modifying the rgba values in `.hero__overlay`
- Vite automatically handles asset optimization and cache busting through filename hashing
- Tasks marked with `*` are optional and can be skipped for faster implementation
- The fallback background-color ensures graceful degradation if the image fails to load
