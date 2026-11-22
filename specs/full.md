# Project: Cosmic Charms Bakery Website

## Objective

Build a responsive, visually polished Jekyll website for Cosmic Charms Bakery, based on the attached homepage mockup.

The mockup is the primary visual reference. Recreate its overall appearance as closely as possible while making thoughtful adjustments for smaller screens.

The website must:
- Use Jekyll and Liquid templates.
- Use Tailwind CSS for styling.
- Use DaisyUI components where appropriate.
- Be compatible with GitHub Pages.
- Support desktop, tablet, and mobile screen sizes.
- Be maintainable, accessible, and easy to update.

This is a static marketing website. Do not introduce React, Next.js, or other JavaScript frameworks.

## 1. Before implementation

First, inspect the existing repository.

Determine:
- Whether a Jekyll project already exists.
- Whether Tailwind CSS and DaisyUI are already configured.
- What build scripts and dependencies are available.
- Whether there are existing images, logos, fonts, or other assets to reuse.
- Whether GitHub Pages deployment is already configured.

Do not overwrite existing project configuration unnecessarily.

Before making changes, provide a brief implementation plan describing the proposed project structure, dependencies, and build process.

## 2. Design direction

Recreate the visual style of the supplied mockup.

### Overall aesthetic

The website should feel:
- Whimsical and celestial.
- Elegant and polished.
- Magical without looking childish.
- Luxurious but approachable.
- Creative and visually rich.

Use a consistent visual language throughout the website.

### Color palette

Use the following approximate palette, adjusting shades as needed to match the reference image:

- Deep midnight purple: #211B59
- Primary purple: #41377F
- Secondary purple: #51458F
- Lavender: #A99BD8
- Soft lavender: #E9E5F5
- Periwinkle: #D8D9F2
- Off-white: #FAF9FC
- White: #FFFFFF

Use deep purple for primary buttons, headings, and dark section backgrounds.

Use lavender and periwinkle for subtle backgrounds, gradients, borders, and decorative elements.

### Typography

Use two complementary font families:

- Headings: An elegant serif font, use Aptly.
- Body text: A clean sans-serif font, use Quicksand.

Headings should have a distinctive editorial appearance. Body text should remain highly readable.

### Decorative styling

Incorporate subtle celestial details throughout the design:
- Stars and small sparkles.
- Soft galaxy textures.
- Nebula-inspired gradients.
- Subtle decorative borders.
- Gentle shadows.
- Rounded image corners and cards.

Avoid excessive decoration that competes with the content.

## 3. Homepage structure

Implement the homepage in the following order.

### A. Header / Navigation

Create a horizontal navigation bar with:

- Circular Cosmic Charms logo on the left.
- Home
- Catering & Events
- Order Online
- About
- Contact
- Shopping cart icon.
- Instagram and Pinterest icons.

Design:
- Light lavender/white background.
- Dark purple text.
- Generous horizontal spacing.
- Logo should be prominent.
- Navigation should be horizontally centered or balanced between the logo and utility icons.

On mobile:
- Replace desktop navigation links with a hamburger menu.
- Keep the logo visible.
- Keep the cart accessible.
- Ensure the mobile menu is keyboard accessible.

### B. Hero Section

Create a two-column hero section.

Left column:
- Large headline: "Unforgettable Dessert Experiences"
- Supporting headline: "for Baltimore's Most Memorable Events"
- Description: "Where cosmic creativity meets flawless execution — custom dessert tables, wedding cakes, and branded treats designed to impress and delivered with precision."
- Primary CTA: "Plan Your Event"
- Secondary CTA: "Browse Menu"

Right column:
- Large, visually dominant photograph of an elaborate purple dessert table at an upscale Baltimore event.
- The image should include a city skyline or elegant event setting.
- Use rounded corners and a polished presentation.

Design:
- Soft lavender and white background.
- Celestial decorative elements.
- Large serif typography.
- Primary button in deep purple.
- Secondary outlined button.

On mobile:
- Stack the text and image vertically.
- Keep the headline prominent.
- Place buttons below the description.
- Avoid excessive vertical spacing.

### C. Meet the Baker

Create a three-column section.

Left:
- Large photograph of the baker in a professional bakery setting.

Center:
- Heading: "Meet the Baker Behind the Magic"
- Introductory text:
  "Hi, I'm Jasmine Carter, founder of Cosmic Charms Bakery. With formal training from the Culinary Institute of America and over 8 years creating desserts for weddings, galas, and corporate events across Baltimore, I blend artistry with reliable execution so your event is as seamless as it is stunning."
- Text link: "Read My Full Story →"

Right:
- Three credential cards:
  1. Culinary Institute of America Graduate
  2. 8+ Years Event Experience
  3. Proudly Based in Baltimore, MD

Use graduation cap, star, and location icons.

Design:
- White or very light lavender background.
- Rounded photograph.
- Credentials displayed in a lightly tinted lavender card.
- Purple icons and typography.

On mobile:
- Stack the photograph, introduction, and credentials.
- Keep credentials readable without requiring horizontal scrolling.

### D. Our Event Work / Portfolio

Create a portfolio section with introductory text on the left and four image cards on the right.

Section heading: "Our Event Work"

Description:
"From weddings to corporate galas, we design dessert experiences that leave a lasting impression."

CTA: "View Full Portfolio →"

Four portfolio cards:
1. Wedding Reception
2. Corporate Gala
3. Bridal Shower
4. Branded Corporate Treats

Each card should contain:
- A large photograph.
- A dark purple caption overlay at the bottom.
- White centered text.
- Rounded corners.

On mobile:
- Use a two-column grid or a vertically stacked layout depending on available width.
- Ensure images retain their proportions.

### E. Client Testimonials

Create a full-width dark purple section with a subtle galaxy/star background.

Heading: "What Clients Are Saying"

Display three testimonials in a horizontal layout on desktop.

Each testimonial includes:
- Event photograph.
- Quote.
- Client name.
- Client description or event type.

Testimonials:

1. Melissa & Jordan — Baltimore Wedding
"Cosmic Charms completely transformed our wedding reception. The dessert table was the centerpiece of the night and everything tasted incredible!"

2. Daniel Reeves — Corporate Events Manager
"Flawless execution from start to finish. Everything arrived on time, branded perfectly, and our clients couldn't stop talking about it. We'll definitely be back."

3. Tara Bennett — Wedding Planner
"They're the easiest vendor to work with—creative, responsive, and unbelievably reliable. I recommend them to every couple I plan for."

Design:
- Deep purple galaxy background.
- White serif heading.
- White testimonial text.
- Rounded portrait-oriented event photographs.
- Subtle decorative stars.

On mobile:
- Stack testimonials vertically or implement an accessible carousel.
- Do not make testimonial text too small.

### F. How It Works / Event Process

Create a section with two columns.

Left column:
Heading: "How It Works"

Subtitle: "A seamless process from first chat to final bite."

Display four numbered steps connected by a subtle dotted horizontal line.

Steps:

1. Consultation
   "Tell us about your event, vision, and guest count."

2. Design & Tasting
   "We create a custom concept and you taste the magic."

3. Proposal
   "Receive a clear proposal with pricing and timeline."

4. Delivery & Setup
   "We handle everything so you can enjoy a flawless event."

Right column:
A prominent dark purple CTA card.

Heading: "Ready to Plan Your Event?"

Description:
"Let's create a dessert experience your guests will never forget."

Button: "Request a Custom Quote →"

Design:
- Light background.
- Purple numbered circles.
- Small celestial decorative elements.
- Dark purple CTA card with subtle stars and rounded corners.

On mobile:
- Stack the process steps vertically.
- Use a vertical connector instead of a horizontal line.
- Place the CTA card underneath.

### G. Latest Creations / Social Media

Create a horizontal Instagram-style gallery.

Left:
- Heading: "See Our Latest Creations"
- Instagram handle: @cosmiccharmsbakery

Center:
- Six square or portrait-oriented photographs of bakery creations.
- Consistent spacing and rounded corners.

Right:
- Small lavender CTA card.
- Text: "Looking for something sweet today?"
- Button: "Order Online →"

On mobile:
- Allow the image gallery to scroll horizontally or wrap into a compact grid.
- Keep the order CTA accessible.

### H. Footer

Create a full-width deep purple footer with a galaxy-inspired background.

Four columns:

1. Logo
   - Cosmic Charms logo.

2. Quick Links
   - Home
   - Catering & Events
   - Order Online
   - About
   - Contact

3. Contact
   - info@cosmiccharms.com
   - (410) 555-CHARM
   - Baltimore, MD

4. Follow Us
   - Instagram
   - Facebook
   - TikTok
   - Pinterest

5. Join the Cosmic Crew
   - Short newsletter description.
   - Email input.
   - Submit button.

Bottom copyright:
"© 2024 Cosmic Charms Bakery · Baltimore, MD · Made with love & little stardust ✨"

On mobile:
- Stack footer columns.
- Keep the logo visible.
- Ensure newsletter input and button work with the available width.

## 4. Responsive design requirements

Implement mobile-first responsive styling.

Support at least these viewport widths:

- Mobile: 375px
- Mobile: 430px
- Tablet: 768px
- Desktop: 1024px
- Desktop: 1440px

The supplied mockup represents the desktop visual direction.

Do not simply shrink the desktop design to fit mobile. Reorganize the content intelligently.

Important responsive behaviors:
- Desktop navigation becomes a mobile menu.
- Multi-column sections stack vertically.
- Portfolio cards adapt to available width.
- Testimonials become vertically stacked or swipeable.
- Process timeline becomes vertical.
- Images maintain appropriate aspect ratios.
- Buttons remain comfortably tappable.
- Prevent horizontal overflow.
- Preserve visual hierarchy and spacing.

## 5. Technical implementation

### Jekyll

Use Jekyll layouts, includes, and Liquid templates.

Suggested structure:

- _layouts/
  - default.html
- _includes/
  - header.html
  - footer.html
  - hero.html
  - baker.html
  - portfolio.html
  - testimonials.html
  - process.html
  - instagram-gallery.html
- _config.yml
- index.html
- assets/
  - css/
  - images/
  - js/

Use reusable Liquid includes for repeated components.

Keep content and presentation reasonably separated so text, links, and images can be updated without modifying large HTML files.

### Tailwind CSS and DaisyUI

Use Tailwind CSS for:
- Responsive layouts.
- Spacing.
- Typography.
- Flexbox and grid.
- Responsive visibility.
- Custom colors and backgrounds.

Use DaisyUI components where appropriate:
- Navbar.
- Buttons.
- Cards.
- Mobile dropdown menu.
- Form controls.
- Inputs.

Customize DaisyUI's theme to match the Cosmic Charms palette rather than using its default appearance.

Avoid forcing DaisyUI components where custom markup would produce a closer visual match.

### GitHub Pages compatibility

The website must deploy successfully using GitHub Pages.

Important:
- Use a compatible Jekyll build process.
- Do not depend on unsupported GitHub Pages plugins.
- If using additional Jekyll plugins, configure deployment through GitHub Actions.
- Account for the repository's base URL using Jekyll's relative_url filter where appropriate.
- Ensure CSS, JavaScript, and image paths work when deployed under a GitHub Pages project URL.
- Include an appropriate GitHub Actions workflow if needed.

### JavaScript

Keep JavaScript minimal.

Use it only for functionality such as:
- Mobile navigation.
- Accessible dropdown interactions.
- Optional image gallery interactions.

Do not introduce unnecessary dependencies.

## 6. Accessibility

Follow accessibility best practices:
- Semantic HTML.
- Proper heading hierarchy.
- Descriptive image alt text.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Accessible form labels.
- Reduced-motion support.

## 7. Image assets

Use the supplied mockup as the visual reference for image selection and composition.

Organize images under assets/images/.

Use descriptive filenames, for example:
- logo.png
- hero-dessert-table.jpg
- baker-portrait.jpg
- wedding-reception.jpg
- corporate-gala.jpg
- bridal-shower.jpg
- branded-treats.jpg
- testimonial-wedding.jpg
- testimonial-corporate.jpg
- testimonial-event.jpg

Reuse existing project assets wherever possible.

If actual photographs are not available, use clearly identified placeholders with appropriate aspect ratios. Do not use random unrelated stock photographs.

Make it easy to replace placeholder images with final photography.

## 8. Visual fidelity expectations

Prioritize matching the supplied mockup in:
- Section order.
- Overall composition.
- Background colors.
- Typography.
- Image placement.
- Relative column widths.
- Section spacing.
- Button styling.
- Rounded corners.
- Celestial decorative elements.

Pay particular attention to the balance between the light lavender sections and the deep purple testimonial and footer sections.

The finished website should look like a cohesive, professionally designed bakery brand rather than a generic DaisyUI template.

## 9. Implementation and verification

Implement the website in logical stages.

After implementation:
1. Run the Jekyll build.
2. Run the Tailwind CSS build.
3. Resolve any build errors.
4. Check that all internal links and asset paths work.
5. Verify the desktop layout.
6. Verify the mobile layout.
7. Check for horizontal overflow and accessibility issues.

If browser preview or screenshot comparison tools are available, use them to compare the implementation against the supplied mockup.

Do not consider the task complete until the site builds successfully and the responsive layouts have been checked.

Start by inspecting the repository and presenting the implementation plan. Then proceed with the implementation.
