# WasteReturn - Complete Sorting & Points Algorithm

## Core Formula


Total Points = [(Base Points × Weight) × Sorting Multiplier × Cleanliness Factor × Loyalty Bonus] - Contamination Penalty



## Variable Definitions

### Base Points
- Determined by waste category and type (see Points-Table.md)
- Updated weekly based on market prices
- Minimum base points: 0 (non-recyclable)
- Maximum base points: 800 (circuit boards)

### Weight
- Measured in kilograms (kg)
- Precision: 0.1kg (100g increments)
- Maximum weight per transaction: 500kg (bulk pickup required beyond this)

### Sorting Multiplier
| Level | Multiplier | Criteria |
|-------|------------|----------|
| **Gold** | 1.5 | Perfect sorting: all items properly prepared, separated by type, labels removed, crushed where applicable |
| **Silver** | 1.3 | Good sorting: items separated by type but not prepared (labels on, not crushed) |
| **Bronze** | 1.1 | Basic sorting: some separation but mixed within categories |
| **Mixed** | 1.0 | All recyclables together in one bag/container |
| **Contaminated** | 0.5 | Wrong items present (up to 20% contamination) |
| **Hazardous** | 0.0 | Dangerous items present (immediate deduction, warning issued) |

### Cleanliness Factor
| Level | Factor | Criteria |
|-------|--------|----------|
| **Clean** | 1.2 | Items rinsed, no residue, completely dry |
| **Average** | 1.0 | Some residue present, mostly clean |
| **Dirty** | 0.7 | Food residue, wet, odorous, attracts pests |

### Loyalty Bonus
| Tier | Requirement | Bonus |
|------|-------------|-------|
| **New** | <3 months or <5 pickups | 1.0 |
| **Regular** | 3-12 months and 10+ pickups | 1.1 |
| **Loyal** | 12-24 months and 50+ pickups | 1.2 |
| **VIP** | 24+ months and 100+ pickups | 1.25 |

### Contamination Penalty

Penalty applied when unacceptable items are found in the waste:

| Severity | Penalty | Examples |
|----------|---------|----------|
| **Mild** | 10% deduction | Small amount of food scraps in paper (under 5%) |
| **Moderate** | 25% deduction | 5-20% wrong items mixed in |
| **Severe** | 50% deduction | 20-50% contamination |
| **Critical** | 100% deduction + Warning | Hazardous items, >50% contamination |

## Example Calculations

### Example 1: Perfect Recycling (Gold)
**Scenario:** Mrs. Williams recycles 2kg of PET bottles (properly prepared)
- Base Points: 40 pts/kg × 2kg = 80 base points
- Sorting Multiplier: 1.5 (Gold - labels removed, rinsed, crushed)
- Cleanliness Factor: 1.2 (Clean - rinsed, dry)
- Loyalty Bonus: 1.1 (Regular user)
- Contamination Penalty: 0 (Perfect)

**Calculation:**
80 × 1.5 × 1.2 × 1.1 = 158.4 points

### Example 2: Mixed Recycling (Mixed)
**Scenario:** Tunde recycles 3kg of mixed recyclables (all in one bag)
- Base Points: 15 pts/kg × 3kg = 45 base points (mixed recyclables rate)
- Sorting Multiplier: 1.0 (Mixed)
- Cleanliness Factor: 1.0 (Average)
- Loyalty Bonus: 1.0 (New user)
- Contamination Penalty: 0

**Calculation:**
45 × 1.0 × 1.0 × 1.0 = 45 points

### Example 3: Contaminated Waste
**Scenario:** User puts 5kg of paper with food residue and some plastic mixed
- Base Points: 15 pts/kg × 5kg = 75 base points (office paper rate)
- Sorting Multiplier: 0.5 (Contaminated)
- Cleanliness Factor: 0.7 (Dirty)
- Loyalty Bonus: 1.0
- Contamination Penalty: 10% (Mild)

**Calculation:**
75 × 0.5 × 0.7 × 1.0 = 26.25 points
26.25 - (26.25 × 0.10) = 23.6 points (final)

### Example 4: Hazardous Waste
**Scenario:** User puts battery in with plastic recycling
- Base Points: 40 pts/kg × 2kg = 80 base points (plastic rate)
- Sorting Multiplier: 0 (Hazardous - immediate zero)
- Cleanliness Factor: 0.7
- Loyalty Bonus: 1.0
- Contamination Penalty: 100%

**Calculation:**
80 × 0 × 0.7 × 1.0 = 0 points
Warning issued, possible fee applied

## Special Rules

### Minimum Points Threshold
- Transactions under 10 points are rounded up to 10 points (encouragement for small recyclers)
- Maximum points per transaction: 100,000 points (requires KYC verification)

### Volume Bonus
- 50-100kg: +5% bonus
- 100-500kg: +10% bonus
- 500kg+: +15% bonus (requires bulk pickup scheduling)

### First-Time Recycler Bonus
- First 3 transactions: +50 points each (encouragement)

### Referral Bonus
- Refer a friend who completes first pickup: +200 points
- Friend also gets +100 points on first pickup

### Points Expiry
- Points expire after 12 months of inactivity
- Active users (at least 1 pickup every 3 months) never lose points

## Points Calculation API (Pseudo-code)

```javascript
function calculatePoints(wasteType, weightKg, sortingLevel, cleanliness, userHistory) {
    // Get base points from database
    const basePointsPerKg = getBasePoints(wasteType);
    const baseTotal = basePointsPerKg * weightKg;
    
    // Get multipliers
    const sortingMultiplier = getSortingMultiplier(sortingLevel);
    const cleanlinessFactor = getCleanlinessFactor(cleanliness);
    const loyaltyBonus = calculateLoyaltyBonus(userHistory);
    
    // Calculate preliminary total
    let total = baseTotal * sortingMultiplier * cleanlinessFactor * loyaltyBonus;
    
    // Check for contamination
    const contaminationPenalty = calculateContaminationPenalty(wasteType, sortingLevel);
    total = total * (1 - contaminationPenalty);
    
    // Apply minimum points rule
    if (total < 10 && total > 0) {
        total = 10;
    }
    
    // Apply volume bonus if applicable
    if (weightKg >= 50) {
        total = total * getVolumeBonus(weightKg);
    }
    
    return Math.round(total * 10) / 10; // Round to 1 decimal
}


