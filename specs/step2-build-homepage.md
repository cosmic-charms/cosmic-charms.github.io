# Step 2: Build the Cosmic Charms Desktop Homepage

The project foundation is complete. Now implement the Cosmic Charms Bakery homepage using the attached mockup as the primary visual reference.

The primary goal of this step is to recreate the desktop design as closely as possible.

Focus on desktop viewports between 1024px and 1440px. Use responsive-friendly markup and CSS, but do not spend this step optimizing mobile layouts. That will be handled separately.

Do not change the established technology stack or unnecessarily modify the project configuration from Step 1.

## 1. Overall design

Match the reference image's:

- Section order and proportions.
- Lavender, purple, and white color palette.
- Serif headings and sans-serif body typography.
- Celestial backgrounds and decorative elements.
- Image placement and sizing.
- Button styles.
- Rounded corners and subtle shadows.
- Spacing and visual hierarchy.

The website should feel like a professionally designed bakery and event catering brand, not a generic template.

## 2. Build the following homepage sections

Implement each section as a reusable Liquid include.

### Header

- Circular Cosmic Charms logo.
- Home, Catering & Events, Order Online, About, Contact navigation.
- Shopping cart icon.
- Instagram and Pinterest icons.
- Light lavender/white background.
- Balanced horizontal desktop layout.

### Hero

Two-column layout.

Left:

- "Unforgettable Dessert Experiences"
- "for Baltimore's Most Memorable Events"
- Description: "Where cosmic creativity meets flawless execution — custom dessert tables, wedding cakes, and branded treats designed to impress and delivered with precision."
- Primary CTA: Plan Your Event
- Secondary CTA: Browse Menu

Right:

- Large photograph of an elaborate purple dessert table at an upscale event.
- Baltimore skyline or elegant event setting.
- Rounded corners.

### Meet the Baker

Three-column layout.

Left:

- Baker portrait.

Center:

- "Meet the Baker Behind the Magic"
- "Hi, I'm Merlin Stardust."
- Read My Full Story link.

Right:
Three credentials with icons:

- Culinary Institute of America Graduate.
- 8+ Years Event Experience.
- Proudly Based in Baltimore, MD.

### Our Event Work

Introductory content on the left:

- "Our Event Work"
- "From weddings to corporate galas, we design dessert experiences that leave a lasting impression."
- View Full Portfolio button.

Four portfolio cards:

- Wedding Reception.
- Corporate Gala.
- Bridal Shower.
- Branded Corporate Treats.

Each card should have a large photograph and a dark purple caption area at the bottom.

### Testimonials

Full-width dark purple section with a subtle galaxy background.

Heading: "What Clients Are Saying"

Three testimonial layouts, each with a photograph, quote, name, and event description.

Melissa & Jordan — Baltimore Wedding:
"Cosmic Charms completely transformed our wedding reception. The dessert table was the centerpiece of the night and everything tasted incredible!"

Daniel Reeves — Corporate Events Manager:
"Flawless execution from start to finish. Everything arrived on time, branded perfectly, and our clients couldn't stop talking about it. We'll definitely be back."

Tara Bennett — Wedding Planner:
"They're the easiest vendor to work with—creative, responsive, and unbelievably reliable. I recommend them to every couple I plan for."

### How It Works

Two-column layout.

Left:

- "How It Works"
- "A seamless process from first chat to final bite."

Four numbered steps:

1. Consultation — Tell us about your event, vision, and guest count.
2. Design & Tasting — We create a custom concept and you taste the magic.
3. Proposal — Receive a clear proposal with pricing and timeline.
4. Delivery & Setup — We handle everything so you can enjoy a flawless event.

Connect the steps using a dotted horizontal line.

Right:
Dark purple CTA card:

- "Ready to Plan Your Event?"
- "Let's create a dessert experience your guests will never forget."
- Request a Custom Quote button.

### Latest Creations

Create a horizontal gallery section.

Left:

- "See Our Latest Creations"
- @cosmiccharmsbakery

Center:

- Six bakery photography thumbnails.

Right:

- Lavender CTA card.
- "Looking for something sweet today?"
- Order Online button.

### Footer

Full-width deep purple galaxy background.

Include:

- Cosmic Charms logo.
- Quick Links.
- Contact information.
- Social media links for Instagram, Facebook, TikTok, and Pinterest.
- Newsletter signup with email input and submit button.

Copyright:
"© 2024 Cosmic Charms Bakery · Baltimore, MD · Made with love & little stardust ✨"

## 3. Images and assets

Use existing project images wherever available.

If the final photography is unavailable, use clearly identified placeholders with appropriate aspect ratios.

Do not use random unrelated imagery.

Keep image references easy to update, preferably through centralized Jekyll data or clearly organized Liquid includes.

Use descriptive alt text.

## 4. Component architecture

Use the design system established in Step 1.

Use DaisyUI components where appropriate, especially for:

- Buttons.
- Cards.
- Navigation.
- Form controls.

Use custom Tailwind styling when necessary to match the reference more accurately.

Keep sections modular and reusable.

Avoid duplicating markup and styles.

Keep JavaScript minimal.

## 5. Desktop visual fidelity

The desktop homepage should closely resemble the reference image.

Pay particular attention to:

- Relative widths of columns.
- Image dimensions and cropping.
- Vertical spacing between sections.
- Heading sizes.
- Section background transitions.
- Button dimensions.
- Alignment of content.
- Overall page proportions.

Do not simply create a generic version of the sections. Match the composition of the screenshot.

## 6. Verification

After implementation:

1. Build the website.
2. Run it locally.
3. Inspect the desktop layout at 1440px and 1024px.
4. Compare the result against the reference image.
5. Fix obvious spacing, sizing, alignment, and styling differences.
6. Check that all sections are present and in the correct order.
7. Check that all assets load correctly.

If browser screenshot tools are available, capture the homepage and compare it with the supplied mockup.

Do not begin the mobile optimization step yet.

When finished, summarize the files created or modified and any remaining placeholder assets.
