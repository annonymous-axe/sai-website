# Responsiveness Enhancement TODO

## Tasks to Complete

- [x] Update `src/components/home/sliders.jsx`: Change Swiper height to responsive using sx prop (e.g., height: { xs: "70vh", md: "100vh" }).
- [x] Update `src/components/project/projectList.jsx`: Make ImageList cols responsive (cols={{ xs: 1, sm: 2, md: 3 }}) and image heights responsive (height: { xs: 200, md: 250 }).
- [x] Update `src/theme/theme.js`: Add responsive font sizes for h1-h5 and body1 (e.g., h3: { fontSize: { xs: "1.5rem", md: "2rem" } }).
- [x] Adjust grids in components (paraCard.jsx, serviceSection.jsx, founder.jsx, company.jsx, contact.jsx): Ensure proper stacking on mobile, make images responsive (width: '100%', height: 'auto').
- [x] Enhance `src/components/project/openProject.jsx`: Make images responsive and allow full-size viewing in modal (e.g., add full-size toggle or responsive sizing).

## Followup Steps

- [x] Run dev server and test responsiveness using browser dev tools for mobile/tablet simulations.
- [x] Confirm no features changed, only responsiveness enhanced.
