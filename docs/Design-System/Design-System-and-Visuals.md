## Design-System-and-Visuals.md

# WasteReturn - Design System & Visual Foundations

## 1. Design Philosophy

WasteReturn's design balances three key priorities:

| Priority | Design Approach |
|----------|-----------------|
| **Clarity** | Waste sorting must be unambiguous - clear icons, colors, labels |
| **Trust** | Financial transactions (points) need professional, secure feel |
| **Motivation** | Gamification elements encourage continued participation |
| **Accessibility** | Works for all ages, education levels, and phone types |

## 2. Color System

### Category Color Coding (Universal Waste Recognition)

```css
/* Category Colors - Used consistently across all interfaces */
--recyclable-blue: #1976D2;      /* All recyclable materials */
--organic-green: #2E7D32;         /* Biodegradable waste */
--hazardous-red: #C62828;         /* Hazardous/special waste */
--residual-gray: #757575;          /* Residual/landfill waste */
--electronic-purple: #7B1FA2;      /* E-waste category */

/* Material Type Colors - Specific variants */
--plastic-teal: #00796B;           /* All plastics */
--paper-amber: #FF8F00;             /* Paper/cardboard */
--glass-cyan: #00ACC1;              /* Glass materials */
--metal-orange: #F57C00;             /* Metals (aluminum, tin, copper) */


Points & Status Colors
Element	Color	Hex	Usage
Points High	Deep Green	#2E7D32	Large balances, achievements
Points Medium	Light Green	#4CAF50	Regular points display
Points Low	Yellow	#FFC107	Warning before expiry
Bonus Multiplier	Purple	#9C27B0	Gold/Silver sorting bonus
Deduction	Red	#D32F2F	Contamination penalties
Info	Blue	#1976D2	Tips, education

Sorting Quality Levels
Level	Color	Hex	Visual Indicator
Gold	Gold	#FFD700	Star badge, shimmer effect
Silver	Silver	#C0C0C0	Circle badge, metallic
Bronze	Bronze	#CD7F32	Triangle badge, matte
Mixed	Gray	#9E9E9E	Square badge
Contaminated	Red	#D32F2F	Warning icon
     

```


## Icons & Typography



## 3. Icon System

### Category Icons (Consistent Visual Language)



♻️ Recyclables: Recycling symbol with material icon
🍃 Organics: Leaf or apple core
⚠️ Hazardous: Warning triangle with symbol
🗑️ Residual: Trash can with line
📱 E-Waste: Phone/laptop silhouette


### Material-Specific Icons

| Material | Icon | Visual Cue |
|----------|------|------------|
| PET Plastic | 🧴 | Bottle shape |
| HDPE Plastic | 🥛 | Jug shape |
| Aluminum | 🥫 | Can with pull tab |
| Tin | 🥫 | Can with lid |
| Glass | 🥤 | Bottle with ridges |
| Paper | 📄 | Sheet with lines |
| Cardboard | 📦 | Box shape |
| Nylon | 🛍️ | Bag/sachet |
| Battery | 🔋 | Battery shape |
| Electronics | 📱 | Phone/laptop |

## 4. Typography

### Font Stack

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: 'Poppins', 'Inter', sans-serif;  /* Headings, points */
--font-mono: 'Roboto Mono', monospace;            /* QR codes, IDs */

Type Scale for Different Contexts
Context	Size	Weight	Purpose
Points Balance (Dashboard)	48px	800	Immediate attention
Points Balance (Admin)	32px	700	Clear but not overwhelming
Waste Category Title	20px	600	Section headers
Weight Display	24px	600	Scale reading
QR Code Label	14px	400	Below QR
Sorting Tips	16px	400	Educational text
Driver Instructions	18px	500	Navigation prompts




---

## SECTION 22: Design-System-and-Visuals.md (Part 3 - Component Specs)

Copy this section next:

```markdown
## 5. Component Specifications

### Driver App - Key Components



┌─────────────────────────────────┐
│ 🚛 Pickup #23 of 32 │ ← Status header
│ ┌───────────────────────────┐ │
│ │ 👤 Mrs. Williams │ │ ← User info
│ │ 🏠 12, Adebayo Street │ │ ← Address
│ │ ⏱️ ETA: 5 mins │ │ ← Time estimate
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ 📦 Expected: │ │ ← Waste expected
│ │ • Plastics: 5kg │ │
│ │ • Glass: 2kg │ │
│ │ • Electronics: 1kg │ │
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ ⚖️ CONNECTED SCALE │ │ ← Scale status
│ │ 5.2 kg detected │ │ ← Live reading
│ │ [✓ Confirm Weight] │ │ ← Action button
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ Sorting Quality: │ │
│ │ [Gold ⭐ 1.5x] │ │ ← Quality selector
│ │ [Add Photo] 📸 │ │ ← Evidence
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ Points: 270 │ │ ← Calculated
│ │ [✓ Complete Transaction] │ │ ← Final action
│ └───────────────────────────┘ │
└─────────────────────────────────┘


```


### User App - Dashboard


┌─────────────────────────────────┐
│ 👤 Welcome back, Mrs. W! │
│ ┌───────────────────────────┐ │
│ │ ⭐ 3,450 points │ │ ← Large display
│ │ ≈ ₦6,900 │ │ ← Value equivalent
│ │ [ Cash Out ] [ Rewards ] │ │ ← Actions
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ 🌍 Your Impact │ │
│ │ 45kg recycled │ │
│ │ 12 trees saved │ │ ← Environmental
│ │ 30kg CO2 prevented │ │
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ Next Pickup: Tomorrow │ │
│ │ 2pm - 5pm │ │
│ │ [Reschedule] [Cancel] │ │
│ └───────────────────────────┘ │
│ ┌───────────────────────────┐ │
│ │ Recent Activity │ │
│ │ • Yesterday +270 pts │ │
│ │ • 3 days ago +150 pts │ │ ← History
│ │ • Last week +320 pts │ │
│ └───────────────────────────┘ │
└─────────────────────────────────┘


---

## SECTION 23: Design-System-and-Visuals.md (Part 4 - Sorting Guide & Summary)

Copy this section next:

```markdown
### Sorting Guide - Visual Reference


┌─────────────────────────────────────┐
│ ♻️ PLASTICS │
├─────────────────────────────────────┤
│ ┌────┐ PET Bottles │
│ │🧴│ → Clean, remove label │
│ │ │ → Crush to save space │
│ │ │ → 40 pts/kg + bonus │
│ └────┘ │
│ ┌────┐ HDPE (Milk Jugs) │
│ │🥛│ → Rinse thoroughly │
│ │ │ → Cap optional │
│ │ │ → 35 pts/kg + bonus │
│ └────┘ │
│ ┌────┐ Nylon/Sachets │
│ │🛍️│ → Must be dry │
│ │ │ → Bundle together │
│ │ │ → 5 pts/kg │
│ └────┘ │
└─────────────────────────────────────┘


```

---

## Summary: What Makes WasteReturn Different

| Aspect | Traditional Waste | WasteReturn |
|--------|------------------|-------------|
| **Cost** | You pay for collection | You EARN for recycling |
| **Sorting** | No incentive | Higher points for better sorting |
| **Tracking** | Waste disappears | Track every kg and its impact |
| **Education** | None | Visual guides, quizzes, bonuses |
| **Flexibility** | Fixed schedule | Schedule on-demand or recurring |
| **All Waste** | Pickers take valuables only | ALL waste has value (even low-value) |


