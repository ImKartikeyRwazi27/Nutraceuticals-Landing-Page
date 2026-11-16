# Nutraceuticals landing page — image prompts

Page: home `/` · Copy: `src/lib/content.ts`

Drop the finished files over the placeholders at these exact paths (same names, nothing else to change):

| Slot | Path | Final size | Format | How it is shown |
|---|---|---|---|---|
| Hero | `public/images/hero/athlete.webp` | **3120 × 1593** (≈1.96:1) | WebP, q≈82, < 350 KB | Anchored bottom-right at 82% of hero height. Left ~45% sits behind the headline. Bottom ~22% fades to black. On mobile it is cropped to the subject, centred at **63.5% across** |
| Step 1–5 | `public/steps/1.webp` … `5.webp` | **2400 × 1600** (3:2, min 1536 × 1024) | WebP | `object-cover` in a 3:2 frame with 28–37 px rounded corners and a thin white border. Keep key content inside the middle ~88% |

## Visual language

- Background: near-black `#0A0A0A` to `#000`, never grey. The page is pure black, so the image edges must disappear into it.
- One accent colour only: Altilos orange **#F97316**, used as light (rim light, glow) and on UI highlights. No teal, purple or neon.
- Photographic, editorial, low-key lighting. Not 3D-render glossy, not stock-photo bright.
- Real people: visible skin texture, pores, sweat, flyaway hair, natural asymmetry. No plastic skin, no perfect symmetry, no extra fingers.
- **Products are unbranded.** No real supplement brands (no ON, MuscleBlaze, etc.) on tubs or in photos. The only brand that appears anywhere is Altilos, on the shaker.
- Generators garble logos. Generate the shaker with a **plain orange circle emblem** and composite the real mark (`public/brand/altilos-icon.png` / `altilos-logo-light.png`) in Photoshop/Figma with a Warp → Arc to follow the bottle's curve, a slight blur to match depth of field, and Multiply/Overlay at 90–95%.

**Recommended tools:** hero → Midjourney v7 (`--style raw`) or Flux 1.1 Pro Ultra (best skin realism). Steps 1–3 and 5 contain UI text → ChatGPT / GPT-Image (best at legible text). Step 4 is mostly photographic → either.

---

## HERO — athlete with an Altilos shaker

> Generate at 2:1, upscale 2× (Topaz / Magnific, "low creativity"), crop to 3120 × 1593 with the subject's face at ~63% across and ~30% down, export WebP.

```
Editorial sports portrait photograph, wide 2:1 frame. A 26-year-old Indian athlete, athletic but not bodybuilder-bulky, medium-brown skin, short natural black hair damp with sweat, light stubble, standing slightly turned to camera, positioned right of centre with the face about 63% across the frame and in the upper third. He has just finished training: real beads of sweat on his forehead, temples and collarbone, a faint flush on the cheeks, slightly damp charcoal-grey sleeveless training tee with a darker sweat patch at the chest, a small worn towel over one shoulder.

He is mid-sip, drinking a protein shake from a matte black shaker bottle held in his right hand at a natural angle, lips on the spout, eyes open and looking just past the camera with a relaxed, satisfied expression, a hint of a smile at the corners of the eyes. The shaker: matte black body, orange #F97316 flip cap, a clean plain orange circular emblem printed on the front facing the camera, faint light-brown shake residue visible through a small translucent measurement window. Visible forearm veins, natural knuckles, five correctly formed fingers wrapped around the bottle.

Background: pure deep black studio void on the left 45% of the frame, completely clean and empty for text. Behind the subject, two large soft overlapping circles of warm orange #F97316 light glowing out of the black, like a soft gel-lit backdrop, brightest behind his head and shoulders and falling off to black at the edges. Strong orange rim light tracing his shoulders, jaw and the edge of the shaker; soft warm key light from front-left, low-key, high contrast, deep shadows. Frame cut at mid-torso, the lower body dissolving into darkness.

Shot on Sony A7R V, 85mm f/1.8, ISO 400, shallow depth of field, tack-sharp on the eyes and the shaker emblem, natural film grain, true-to-life skin texture with pores and fine hairs, no retouching, no airbrushing, Nike and Gatorade campaign aesthetic, cinematic colour grade with crushed blacks and warm highlights.

Negative: plastic skin, waxy face, perfect symmetry, extra fingers, deformed hands, text, watermark, real brand logos, gym equipment clutter, bright background, grey background, bodybuilder pose, flexing, cartoon, 3D render, oversaturated, HDR halo.
```

Midjourney suffix: `--ar 2:1 --style raw --stylize 120 --v 7`

Female alternative (same composition, swap the subject paragraph):

```
A 25-year-old Indian woman athlete, lean and strong, warm medium-brown skin, long dark hair tied in a high ponytail with damp flyaways at the hairline, light sweat on her forehead and collarbones, black racerback sports top, a thin worn towel around her neck…
```

---

## STEP 1 — "Tell us what you need to know"

Concept: a brand manager's brief, framed as a dark UI over a real desk scene. Mirrors the existing Step 1 (UI on the left, photographic object on the right).

```
Premium dark product-marketing image, 3:2 landscape, 2400x1600. Left 55%: a sleek dark UI panel floating on a near-black background. Top: a small rounded pill outlined in orange #F97316 with the text "STEP 1 OF 5". Large white heading in a clean geometric sans-serif (Inter): "Tell us your question". Grey subtext: "Describe the one business question you need answered." A label "YOUR BUSINESS QUESTION" with a small orange dot, then a dark rounded text box with a thin #2A2A2A border containing: "Why do first-time whey protein buyers stop reordering after the first month?" and a small grey counter "76/300" bottom-right. Below, four small dark cards in a row with thin orange line icons: "RESPONDENTS 200", "LOCATIONS India (Metro + Tier 2)", "IMAGES 150", "PROFILING DEPTH Standard", each with a small chevron.

Right 45%: a photorealistic still life on a reflective matte black surface, low-key lit: an unbranded matte black protein powder tub with the lid off and a metal scoop resting on top with a little powder spilled, a small open notebook with handwritten notes, and a black pen. A soft orange #F97316 rim light from behind, deep shadows, subtle reflection on the surface.

Style: Apple-keynote-grade dark UI, crisp legible text, generous spacing, everything else pure black #0A0A0A so it blends into a black web page. No brand names, no logos.
```

---

## STEP 2 — "We build your buyer audience"

Concept: audience-builder dashboard: India map with city pins and nutraceutical buyer segments.

```
Premium dark SaaS dashboard image, 3:2 landscape, 2400x1600, shown slightly angled in perspective on a near-black background with a soft orange glow behind it. Dashboard title in white: "Build your audience". On the left a minimal dark map of India with thin grey state outlines and glowing orange #F97316 dots of varying size over Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Jaipur, Lucknow, Indore and Kochi, with faint connecting lines.

On the right a filter panel with rounded chips, selected chips filled orange and the rest outlined grey: "Gym-goers", "Buys protein monthly", "Age 22-35", "Tier 1 + Tier 2", "Vegetarian", "Spends ₹1,500-3,000 / month". Below, a large white number "200" with the grey label "verified buyers matched", a thin orange progress bar at 100%, and a small green-dot status "Configuration started · within 24 hours".

Style: clean Inter typography, crisp and legible, thin 1px #2A2A2A borders, subtle glassmorphism, lots of black space, Linear / Stripe dashboard aesthetic. Edges fade to pure black #0A0A0A. No real brand logos.
```

---

## STEP 3 — "Verified buyers answer"

Concept: the consumer side: a phone survey plus a photo-proof of their real supplement shelf. Mirrors the existing Step 3 (device angled, survey left, photo upload right).

```
Photorealistic image of a modern smartphone lying in landscape orientation, angled slightly in perspective on a dark surface, low-key studio lighting with a warm orange #F97316 rim light, 3:2 landscape, 2400x1600. The screen shows a dark-mode survey app:

Left column: heading "Mobile Collection", subtext "Share your opinion. Help brands build better supplements for you.", "Question 1 of 4" with a thin orange progress bar, and three small rows with orange line icons: "Your voice matters", "Your data is private", "Make an impact".

Centre: the question "Which factor matters most when choosing a protein powder?" with "Select one", and five rounded option rows: "Protein per serving" (selected, orange border, orange check), "Lab-tested & certified", "Taste & mixability", "Price per serving", "Brand trust", each with a thin line icon.

Right: "Add a photo of the products you use" with a dashed orange camera icon, and a real-looking smartphone photo of a home kitchen shelf: two unbranded supplement tubs (one white, one black), a small amber bottle of multivitamin gummies and a strip of tablets, natural warm home lighting, slightly imperfect framing like a real user photo. Below it a "Retake photo" button. Top-right badges: a green shield "Verified buyer" and a green dot "Real-time response". Bottom bar: an orange lightbulb "Tip: There are no right or wrong answers." and an orange "Next question →" button.

Crisp legible UI text in Inter. No real brand names or logos on any product. Background around the phone fades to pure black.
```

---

## STEP 4 — "Experts and AI refine it"

Concept: the human in the loop. A real analyst reviewing AI-surfaced patterns. Most "human" of the five.

```
Cinematic editorial photograph, 3:2 landscape, 2400x1600. Over-the-shoulder view of an Indian woman market analyst in her early 30s, dark hair in a loose low bun, reading glasses, wearing a charcoal knit sweater, at a desk in a dim modern office at night. She leans in slightly toward a large monitor, one hand resting on her chin and the other on a mouse, focused and thoughtful. Her face is in soft three-quarter profile, lit only by the warm glow of the screen.

The monitor shows a clean dark analytics dashboard: a horizontal bar chart titled "Top reasons buyers switch protein brands" with orange #F97316 bars, a small panel labelled "AI-surfaced pattern" with one highlighted insight card, a "Noise removed: 38 responses" chip, and a green "Expert reviewed" check. Next to the keyboard: a matte black coffee mug and a printed page with a few handwritten orange annotations.

Lighting: low-key, the screen as the main light source, a subtle orange practical lamp out of focus in the background, deep blacks, gentle bokeh. Shot on Canon R5, 50mm f/1.4, shallow depth of field focused on her eyes and the screen edge, natural skin texture, real fabric texture, film grain, documentary realism. The edges of the frame fall off to near-black #0A0A0A.

Negative: stock-photo smile, looking at camera, plastic skin, extra fingers, cluttered office, blue corporate colour grade, real brand logos.
```

---

## STEP 5 — "You act"

Concept: the finished report landing on a founder's desk next to their own product.

```
Premium photorealistic still life, 3:2 landscape, 2400x1600, low-key lighting on a matte black stone desk. Centre-left: a printed, bound A4 report lying open at a slight angle, the left page titled in bold white-on-black "Nutraceutical Consumer Report" with a small orange #F97316 rule and "Prepared for your brand · Analyst-edited", the right page showing a clean horizontal bar chart with orange bars and a short "Recommendations" list with three orange numbered points. A human hand with natural skin texture and a simple watch is turning the page, slightly motion-blurred.

Right side, softly out of focus: an unbranded matte black supplement tub and a matte black shaker bottle with an orange cap and a plain orange circular emblem, plus a tablet showing the same report in dark mode. Warm orange rim light from behind, gentle reflections on the stone, deep shadows, edges fading to pure black #0A0A0A.

Style: luxury editorial product photography, shot on Phase One, 80mm, f/4, crisp legible text on the report, film grain, no real brand names or logos.
```

(Composite the real Altilos mark onto the shaker here too, same way as the hero.)

---

## Before you drop them in

- [ ] Hero: face at ~63% across. If it lands elsewhere, update `-translate-x-[63.5%]` in `src/components/LandingPage/Hero.tsx`.
- [ ] Hero left 45% is clean black (no glow bleeding behind the headline).
- [ ] Check hands, fingers, teeth and the shaker at 100% zoom.
- [ ] No real brand names on any tub, bottle or photo.
- [ ] Step images: text inside the middle ~88% so the rounded corners don't clip it.
- [ ] Compress: hero WebP < 350 KB; steps < 1 MB each (`cwebp -q 82` or squoosh.app).
- [ ] Set `NEXT_PUBLIC_BASE_URL=https://nutraceuticals.altilos.com` in the new project's environment at launch.
