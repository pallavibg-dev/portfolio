# 🛵 Tapzy Food Delivery — Landing Page

Welcome to the **Tapzy Food** landing page project! 🚀 This is a production-ready, highly aesthetic web page designed for a modern food delivery application. It is built strictly around the **Street Food** custom design language.

---

## 🎨 Design System: "Street Food"
The project uses a custom-tailored theme inspired by **night-market neon signs on rustic butcher paper**. It relies on flat, high-contrast aesthetics with no gradients.

### 🔴 Color Palette
| Token Name | Hex Code | Visual Preview | Role / Usage |
| :--- | :--- | :---: | :--- |
| **Primary** | `#1A0F05` | 🟫 | Headlines, body copy, and core elements |
| **Secondary** | `#7A6A54` | 🪵 | Borders, captions, and secondary metadata |
| **Tertiary** | `#F23C3C` | 🟥 | **The Sole Driver for Interaction** (CTA buttons) |
| **Neutral** | `#F5E9CF` | 🟨 | Page background foundation (Butcher Paper light cream) |
| **Surface** | `#FCF3DC` | 🟨 | Raised card containers and form backgrounds |
| **On-Primary**| `#FCF3DC` | 🟨 | Text color overlay for dark components |

> [!IMPORTANT]
> **The Single-Accent Rule:** The Tertiary Red (`#F23C3C`) is reserved strictly for exactly **one major action per viewport** to guide the user's attention straight to conversion.

---

## 🔤 Typography
Loaded via Google Fonts for maximum styling consistency and visual impact:
* **Display / Headings (`h1`, `h2`, `.logo`):** `Bowlby One` (4.5rem for display / 2.4rem for h1). A chunky, eye-catching slab style reminiscent of street food market signs.
* **Body / Labels / Form Text:** `DM Sans` (1rem, line-height 1.55). A clean, geometric sans-serif that ensures excellent readability.

---

## 📐 Spacing & Layout
* **Corner Rounding (`border-radius`):** 
  - Tighter curves for a blocky, street-posters vibe.
  - Small: `4px` | Medium: `8px` | Large: `14px`.
* **Margins & Paddings:**
  - Small: `8px` | Medium: `16px` | Large: `32px`.
* **Transitions:** Smooth, snappy transitions (`0.25s ease`) for hover states.

---

## 📂 Project Structure
```bash
CSS selectors/
├── index.html       # Main landing page structured using semantic HTML5
├── styles.css       # Clean, modern stylesheet utilizing CSS Custom Properties
└── images/
    ├── tapzy_logo.png       # Generated minimalist brand logo (dark brown & neon red)
    ├── tapzy_logo_a.webp    # High-resolution original logo backup
    └── tapzy_logo_b.webp    # Optimized thumbnail-size logo backup
```

---

## 🌟 Key Features of the Page
1. **Header Navigation**: Sticky navbar with local brand logo, responsive links, and a Call-To-Action button.
2. **Hero Section**: High-impact split-screen layout with active floating count-badges (`500+ Restaurants` / `30 min Delivery`).
3. **Platform Statistics**: Fast facts strip with high-contrast text on a dark primary background.
4. **How It Works**: Modern 3-step grid guiding customers from discovery to tasting.
5. **Menu & Restaurants**: Card-based showcases featuring high-resolution Unsplash images of actual dishes (Truffle Pizza, Sushi Platter, Butter Chicken, Quinoa Bowl).
6. **Testimonials**: Clean card-based review grid with realistic user avatars.
7. **App Store CTA**: Promotion for downloading mobile applications with custom-styled download badges.
8. **Contact & Newsletter Form**: Fully styled, user-friendly form with interactive focus animations.
9. **Responsive Grid Layout**: Adaptive layouts tailored for Desktops, Tablets, and Mobile screens.
