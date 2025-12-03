# Brand Swap Guide

This website template is designed for easy rebranding. Follow this guide to swap to a new business.

---

## Quick Start (2 Files to Edit)

### 1. Update `brand.config.ts`
This is your **single source of truth**. Update ALL values in this file.

### 2. Update `index.html`
Update these 3 things:
1. **Page title** (line ~12)
2. **5 color values** in Tailwind config (lines ~38-44)
3. **Scrollbar colors** (lines ~73-81)

---

## AI Instructions for Brand Swap

**You will typically only receive:**
- Business name
- Logo image (PNG/JPG)

**You must generate everything else.** This is expected and acceptable.

### Step 1: Analyze the Logo

Use the Read tool to view the logo image. Extract:

1. **Primary color** - The dominant/main color in the logo
2. **Secondary color** - Supporting color or accent
3. **Background color** - A light, muted version of the primary (for page backgrounds)
4. **Text color** - A dark version that contrasts well (usually dark gray/charcoal based on logo tones)
5. **Light accent** - A very light tint of the primary color

**Example color extraction:**
- Logo has purple lavender flowers → Primary: purple, Secondary: green from stems
- Logo has warm orange tones → Primary: terracotta, Secondary: cream/tan

### Step 2: Infer Location

Look at the business name for location hints:
- "Kamloops Dog Grooming" → City: Kamloops, Province: BC
- "Seattle Pet Spa" → City: Seattle, State: WA
- No location in name → Use a generic but realistic location

### Step 3: Generate All Business Details

**CREATE realistic placeholder data for:**

| Field | How to Generate |
|-------|-----------------|
| Phone | Use local area code if location known (e.g., 250-XXX-XXXX for BC) |
| Email | Use format: info@[businessname].ca or .com |
| Address | Just use "City, Province/State" |
| Hours | Standard: Mon-Fri 9-5, Sat 10-4, Sun Closed |
| Instagram | @[BusinessNameNoSpaces] |
| Tagline | Create something fitting the business type |

### Step 4: Generate Authentic Copy

**Write ALL copy as if you ARE this business.** Make it feel real:

1. **Testimonials** - Create 3 believable reviews
   - Use common first names + last initial (Michelle T., Robert M.)
   - Mention the city name in at least one review
   - Reference the business name naturally
   - Include realistic pet names and breeds

2. **Team Members** - Create 3 staff profiles
   - Use common first names (Sarah, Mike, Emma)
   - Write bios that sound professional but warm
   - Vary their specialties

3. **Services** - Adapt to the business type
   - Keep pricing realistic for the region
   - Adjust service names to match their branding style

4. **FAQs** - Include the generated phone number in answers

5. **About Section** - Reference the city and create a compelling origin story

### Step 5: Update Files

1. **brand.config.ts** - Update ALL sections with generated content
2. **index.html** - Update title and 5 color values + scrollbar colors
3. **metadata.json** - Update name and description

---

## Color Class Reference

| Class | Purpose | How to Choose |
|-------|---------|---------------|
| `brand-bg` | Page background | Very light/muted version of primary |
| `brand-text` | Text & dark sections | Dark charcoal that complements primary |
| `brand-primary` | Buttons, links | Main logo color |
| `brand-primary-light` | Subtle highlights | 50% lighter than primary |
| `brand-secondary` | Hover states, accents | Secondary logo color or complement |

---

## Copy Writing Guidelines

### Make It Feel Like THEIR Shop

- **Use their city name** in testimonials and descriptions
- **Match the vibe** of their logo (playful? professional? luxurious?)
- **Be specific** - Don't say "great service", say "Charlie always comes home looking fabulous"
- **Sound local** - "Best groomer in Kamloops!" not "Best groomer in the area!"

### Testimonial Template
```typescript
{
  name: 'Michelle T.',
  petName: 'Charlie',
  petType: 'Goldendoodle',
  review: `${BUSINESS.name.short} is amazing! Charlie always comes home looking fabulous and so happy. The team truly cares about each dog.`,
}
```

---

## File Structure

```
├── brand.config.ts      # ⭐ MAIN FILE - All brand content here
├── index.html           # ⭐ Colors & title here
├── metadata.json        # Site name/description
├── package.json         # Project name (optional)
├── types.ts             # TypeScript interfaces
└── components/          # All import from brand.config.ts
```

---

## Checklist Before Finishing

- [ ] Logo colors extracted and applied consistently
- [ ] Business name appears correctly everywhere
- [ ] Generated phone number uses correct area code for region
- [ ] City name mentioned in testimonials and about section
- [ ] All copy sounds authentic (not generic/templated)
- [ ] index.html title matches the brand
- [ ] index.html colors match brand.config.ts THEME values
- [ ] Scrollbar colors updated in index.html

---

## Prompt Template for Brand Swaps

Copy this prompt to use for future swaps:

```
PIVOT THIS WEBSITE TO: [BUSINESS NAME]

[Attach or paste their logo image]

Instructions:
1. Read BRAND_SWAP.md first for the full process
2. Analyze the logo to extract 5 theme colors
3. Infer location from the business name (or generate realistic one)
4. Generate ALL business details (phone, email, hours, social handles)
5. Write authentic copy that sounds like THEIR business - mention the city, use the business name naturally
6. Update brand.config.ts with everything
7. Update index.html colors and title
8. Update metadata.json

Make this feel like it's actually their website, not a template.
```

---

## Example: What You'll Receive vs What You Generate

**INPUT:**
```
Business Name: "Kamloops Dog Grooming and Spa"
Logo: [image of lavender flowers with dog]
```

**YOU GENERATE:**
```
Phone: 250-819-7847 (250 = BC area code)
Email: info@kamloopsdoggrooming.ca
Location: Kamloops, BC
Hours: Mon-Fri 9-5, Sat 10-4, Sun Closed
Instagram: @KamloopsDogGrooming

Colors (from lavender logo):
- Background: #E8E4F0 (light lavender)
- Text: #2D2B3A (dark purple-gray)
- Primary: #7B6B9B (lavender purple)
- Primary Light: #D4CEE8 (pale lavender)
- Secondary: #6B8E6B (sage green from flower stems)

Testimonials mentioning "Kamloops", team bios, services, FAQs with phone number, etc.
```
