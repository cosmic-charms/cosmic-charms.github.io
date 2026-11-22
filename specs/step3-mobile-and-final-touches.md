# Step 3: Responsive Design, Accessibility, and Final Polish

The desktop homepage is implemented.

Now refine the website to support mobile, tablet, and desktop screen sizes while preserving the visual identity and design of the original mockup.

The goal is not simply to shrink the desktop layout. Reorganize sections where necessary to create a polished, intentional mobile experience.

Do not rebuild the website from scratch or unnecessarily change the established architecture.

## 1. Responsive breakpoints

Support these viewport widths:

- 375px — small mobile.
- 430px — large mobile.
- 768px — tablet.
- 1024px — small desktop.
- 1440px — large desktop.

Use Tailwind's responsive utilities and mobile-first styling.

Avoid hardcoded widths that cause horizontal overflow.

## 2. Responsive section requirements

### Header
Desktop:
- Keep the existing horizontal navigation.

Mobile:
- Display the logo and shopping cart.
- Replace navigation links with a hamburger menu.
- Implement an accessible dropdown or slide-out menu.
- Ensure the menu opens and closes correctly.
- Support keyboard navigation and visible focus states.

### Hero
Desktop:
- Preserve the existing two-column design.

Mobile:
- Stack the text above the hero image.
- Keep the heading readable and visually prominent.
- Stack or wrap CTA buttons appropriately.
- Make the hero image full-width within the content container.
- Preserve appropriate image proportions.

### Meet the Baker
Desktop:
- Preserve the existing three-column design.

Mobile:
- Stack the baker photograph, introduction, and credentials.
- Keep the credentials visually distinct.
- Avoid excessively long text lines.

### Our Event Work
Desktop:
- Preserve the existing four-card portfolio layout.

Tablet:
- Adjust the number of columns according to available space.

Mobile:
- Use a two-column grid where practical.
- Use a single column on especially narrow screens if needed.
- Maintain consistent image aspect ratios and readable captions.

### Testimonials
Desktop:
- Preserve the three-column layout.

Mobile:
- Stack testimonials vertically or implement a swipeable carousel.
- Keep photographs and testimonial text comfortably readable.
- Avoid tiny text or excessive horizontal compression.

Prefer a simple stacked layout unless a carousel provides a meaningful improvement.

### How It Works
Desktop:
- Preserve the horizontal four-step timeline.

Mobile:
- Convert the timeline into a vertical sequence.
- Replace the horizontal dotted connector with a vertical connector.
- Keep numbered circles aligned with their descriptions.
- Stack the event CTA card below the timeline.

### Latest Creations
Desktop:
- Preserve the horizontal gallery layout.

Mobile:
- Allow horizontal scrolling of the image gallery or use a compact grid.
- Keep the Order Online CTA accessible.
- Avoid forcing the entire gallery into tiny thumbnails.

### Footer
Desktop:
- Preserve the existing multi-column layout.

Mobile:
- Stack footer sections vertically.
- Keep the logo visible.
- Make social icons easy to tap.
- Ensure newsletter input and button fit the available width.

## 3. Visual consistency

Across all screen sizes:

- Preserve the established color palette.
- Maintain consistent typography.
- Keep appropriate section spacing.
- Ensure buttons have consistent styling.
- Maintain consistent border radii.
- Prevent images from stretching.
- Keep decorative elements from obscuring content.
- Avoid unnecessary animations.

Use responsive typography and spacing rather than simply scaling every element proportionally.

## 4. Accessibility

Review the entire website for accessibility.

Check:
- Semantic HTML.
- Proper heading hierarchy.
- Descriptive image alt text.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible mobile menu.
- Form labels.
- Sufficient color contrast.
- Appropriate button and link labels.
- Reduced-motion preferences.

Ensure interactive elements have appropriate touch target sizes.

## 5. Functional verification

Verify:
- Navigation links work.
- Mobile menu works.
- CTA buttons navigate to the appropriate destinations.
- Social links are configured correctly.
- Newsletter form has an appropriate submission behavior or clearly identified integration placeholder.
- Images load correctly.
- No broken asset paths exist.

Do not invent external destinations or integrations.

## 6. Performance

Review:
- Image sizes and optimization.
- Lazy loading for below-the-fold images.
- Font loading.
- Unnecessary CSS.
- Unnecessary JavaScript.
- Layout shifts.
- Overall page weight.

Avoid introducing unnecessary dependencies.

## 7. Final testing

Build and test the production website.

Check the following viewports:
- 375px.
- 430px.
- 768px.
- 1024px.
- 1440px.

Look specifically for:
- Horizontal scrolling.
- Overlapping elements.
- Text wrapping problems.
- Incorrect image cropping.
- Inconsistent spacing.
- Navigation issues.
- Buttons that are too small.
- Layouts that look cramped.

If browser preview or screenshot tools are available, capture screenshots at each viewport size and inspect them.

Fix issues rather than simply reporting them.

Finally, verify that the GitHub Pages production build succeeds and that Jekyll baseurl handling works correctly.

Provide a summary of the completed work, any remaining limitations, and the commands needed to build and run the website.
