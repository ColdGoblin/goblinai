# Background Image Map — for generating with GPT

Use this as a guide when generating more hero backgrounds. Upload the existing one (`assets/photos/25-goblin-ai-banner.jpg`) to GPT first as a style reference so new images stay visually consistent — same goblin/rune-tech character, same dusk/lantern palette, same painterly fantasy-illustration style.

**Universal style prompt to prepend to every request:**
> Same art style as the reference image: painterly fantasy-illustration, moody dusk/dawn lighting, teal glowing rune/circuit accents, warm lantern light as a secondary accent, wide cinematic aspect ratio (16:9), no readable text/logo baked into the image this time (I'll add page titles separately in HTML), dark enough at the edges to keep white text readable if overlaid.

**Technical specs for every image:**
- Aspect ratio: 16:9 (e.g. 1600×900 or 1920×1080)
- Export as JPG or PNG
- Keep the top-left / text-side of the frame darker or less busy — that's where page headings sit

---

## 1. Home (בית) — done
File: `25-goblin-ai-banner.jpg`
Goblin/tech-shaman figure overlooking a fantasy valley at dusk through a rune archway. Sets the whole-site tone.

## 2. About (אודות)
Theme: personal journey, non-formal education → AI.
Prompt idea: *A lone figure walking a winding forest path at dusk that gradually turns into glowing circuit-lines underfoot, ancient trees on one side giving way to faint holographic rune-panels on the other — visualizing a journey from traditional teaching into AI.*

## 3. Services (שירותים)
Theme: practical tools, workshops, consultancy.
Prompt idea: *A goblin-tech artisan's workshop table at dusk, glowing rune-tools and a floating holographic screen, in the same painterly style — conveys "hands-on craft," not sterile tech.*

## 4. Case Studies (מקרי בוחן)
Theme: real projects, collaboration, proof of work.
Prompt idea: *A wide stone bridge lit by lanterns and teal rune-lights connecting two towers (representing institutions/collaborators) across a misty valley at dusk — visualizes partnership and real-world connection.*

## 5. AI Tools (כלי AI)
Theme: interactive, playful, hands-on experimentation.
Prompt idea: *A goblin-tech alchemy table covered in glowing potion-vials that double as holographic app icons, teal and warm-lantern lighting, painterly style — playful and toolish rather than epic.*

## 6. Articles (מאמרים)
Theme: writing, research, ideas.
Prompt idea: *An open ancient book on a stone desk with glowing rune-text lifting off the page into a soft holographic cloud of light, dusk library setting with lantern glow — visualizes ideas taking form.*

## 7. Contact (צור קשר)
Theme: invitation, conversation, openness.
Prompt idea: *A glowing rune-archway doorway standing open at dusk, warm lantern light spilling through from the other side, inviting the viewer to step through — visualizes "start a conversation."*

---

Once each is generated, drop it in `assets/photos/` and tell me which page it's for — I'll wire it in with the same `.hero-bg` treatment used on the homepage (dark gradient overlay included automatically for text readability).
