# WasteReturn - User Stories with Real Scenarios

This document contains all user stories for the WasteReturn platform. Each story follows the format: **As a [persona], I want to [action], so that [value].**

## Epic 1: User Registration & Household Setup

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US001** | As a **new user**, I want to **register using my phone number**, so that **I can start earning points even if I don't have a smartphone**. | Mrs. Williams | Mrs. Williams dials *347*01#, enters her name, and gets a USSD menu. She registers in 30 seconds using her basic phone. Her household ID is SMS'd to her. |
| **US002** | As a **registered user**, I want to **set up my household profile with address and waste preferences**, so that **drivers can find me easily**. | Mrs. Williams | After downloading the app, Mrs. Williams adds her exact address with pin drop, saves "whatsapp" as preferred contact, and notes: "Gate is usually open, but call on arrival." |
| **US003** | As a **household head**, I want to **add family members to my account**, so that **my children can also earn points for their own waste**. | Mrs. Williams | Mrs. Williams adds her children (Tunde, 14 and Funke, 10) as sub-users. They get their own QR codes. Now Tunde gets points when he recycles his soda cans separately. |
| **US004** | As a **user**, I want to **see my unique household QR code**, so that **I can print and display it for easy scanning**. | Mrs. Williams | Mrs. Williams prints the QR code, laminates it, and tapes it to her waste bin. Drivers can scan without her needing to be present. |
| **US005** | As a **high-value user**, I want to **complete KYC verification**, so that **I can withdraw larger amounts and access premium rewards**. | Mr. Ibrahim | Ibrahim has accumulated 75,000 points. He uploads his ID and takes a selfie. After verification, his withdrawal limit increases from ₦50,000 to ₦200,000 per month. |

## Epic 2: Waste Education & Sorting

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US006** | As a **new user**, I want to **see pictures of what waste goes where**, so that **I don't make mistakes sorting**. | Mrs. Williams | Mrs. Williams opens "Waste Guide" and sees: "PET Bottles" with photo of a water bottle, "Aluminum Cans" with photo of a Coke can. She learns that pizza boxes (greasy) cannot be recycled with paper. |
| **US007** | As a **user**, I want to **take a quiz about sorting**, so that **I can test my knowledge and earn bonus points**. | Tunde (14) | Tunde takes the "Sorting Champion Quiz" and scores 90%. He immediately gets 50 bonus points. He's motivated to learn more. |
| **US008** | As a **user**, I want to **see the point value for each waste type**, so that **I know what to focus on collecting**. | Mr. Ibrahim | Ibrahim checks the app and sees "Copper Wire: 200 pts/kg" vs "Nylon: 5 pts/kg." He prioritizes collecting copper from his neighborhood. |
| **US009** | As a **user**, I want to **get alerts when I'm about to make a sorting mistake**, so that **I can correct it before pickup**. | Mrs. Williams | Mrs. Williams puts a plastic bag in the paper bin. Her app notifies: "⚠️ Plastic bags contaminate paper recycling. Please remove." |
| **US010** | As a **user**, I want to **see examples of contaminated waste**, so that **I understand what to avoid**. | Mrs. Williams | She opens "Contamination Warnings" and sees photos: "Greasy pizza box (cannot recycle)," "Battery in plastic bin (HAZARDOUS - causes fires)." |

## Epic 3: Pickup Scheduling (EXPANDED)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US011** | As a **user**, I want to **schedule a one-time pickup**, so that **I can dispose of accumulated waste**. | Mrs. Williams | Mrs. Williams has 5 bags of waste. She opens app, taps "Request Pickup," selects "Tomorrow, Afternoon (2pm-5pm)." Confirmed instantly. |
| **US012** | As a **user**, I want to **set up recurring pickups**, so that **I never miss collection day**. | Mrs. Williams | Mrs. Williams selects "Every Tuesday and Friday, 8am-11am." Now pickups happen automatically. She gets a reminder SMS the night before. |
| **US013** | As a **user**, I want to **specify what types of waste I have for pickup**, so that **the driver comes prepared with right equipment**. | Mrs. Williams | Mrs. Williams checks: "5kg Mixed Plastics, 3kg Glass, 2kg Electronics." The driver brings separate compartments and safety gear for the electronics. |
| **US014** | As a **user**, I want to **track my driver in real-time**, so that **I know exactly when to bring out my bins**. | Mrs. Williams | At 2:15pm, Mrs. Williams sees a map with "Driver Segun is 3 stops away (approx 15 minutes)." She waits until he's close before bringing bins out. |
| **US015** | As a **user**, I want to **cancel or reschedule with notice**, so that **I don't waste the driver's time**. | Mrs. Williams | Mrs. Williams travels unexpectedly. She opens app, taps "Reschedule," and picks next Tuesday. Driver gets updated route automatically. |
| **US016** | As a **user**, I want to **view my pickup history with photos**, so that **I can see what was collected and verify accuracy**. | Mrs. Williams | She opens "Past Pickups" and sees: "March 15: 5.2kg collected (photo of bags), 270 points earned. Driver: Segun. Rating: ⭐⭐⭐⭐⭐" |
| **US017** | As a **user**, I want to **rate my driver after pickup**, so that **I can give feedback and recognize good service**. | Mrs. Williams | After pickup, she rates Segun 5 stars and comments: "Very polite and explained how to sort better." |
| **US018** | As a **user**, I want to **request emergency pickup for urgent waste**, so that **I can quickly dispose of waste before traveling or after a party**. | Mrs. Williams | She has a party this weekend. She selects "Emergency Pickup" (₦500 fee), and a driver arrives within 2 hours. |

## Epic 4: Driver Collection Experience (EXPANDED)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US019** | As a **driver**, I want to **see my optimized route for the day**, so that **I can minimize travel time and fuel**. | Segun | Segun starts his shift. His app shows: 32 pickups, sorted by location, estimated completion 6 hours. Turn-by-turn navigation starts. |
| **US020** | As a **driver**, I want to **scan the household QR code to start a transaction**, so that **I don't waste time typing IDs**. | Segun | Segun arrives at Mrs. Williams' house. He scans the QR code on her bin. Her account opens instantly showing: "Mrs. Williams - Regular recycler, 98% sorting accuracy." |
| **US021** | As a **driver**, I want to **weigh waste using a connected Bluetooth scale**, so that **weight is accurate and automatically recorded**. | Segun | Segun places the bag on his digital scale. The app shows: "5.2kg detected. Confirm?" He taps confirm. No manual entry needed. |
| **US022** | As a **driver**, I want to **verify sorting quality and take a photo**, so that **I can apply the correct multiplier**. | Segun | Segun opens the bag. It's perfectly sorted: plastics separate, rinsed, crushed. He selects "Gold (1.5x)" and snaps a photo as proof. |
| **US023** | As a **driver**, I want to **issue warnings for contamination**, so that **users learn to improve**. | Segun | Segun finds a dead battery mixed with paper (fire hazard). He selects "Red Contamination" and adds note: "Batteries cause fires! Please separate." Mrs. Williams gets an alert. |
| **US024** | As a **driver**, I want to **generate a unique pickup completion code**, so that **frontdesk can verify when I return to the center**. | Segun | After completing pickup, Segun's app generates a QR code and 6-digit code: "PK-3F9K-2A." He tells Mrs. Williams to keep this code for her records. |
| **US025** | As a **driver**, I want to **see points calculated in real-time**, so that **I can show the user their earnings**. | Segun | After entering 2kg PET (40 pts/kg × 1.5 gold = 60 pts), 1kg Aluminum (100 pts × 1.5 = 150 pts), total 210 pts. Segun shows Mrs. Williams: "You just earned 210 points!" |
| **US026** | As a **driver**, I want to **complete the transaction with one tap**, so that **I can move to next pickup quickly**. | Segun | Segun taps "Complete & Credit." Mrs. Williams' phone buzzes instantly: "+210 points. New balance: 3,450 points." |
| **US027** | As a **driver**, I want to **flag hazardous items for special handling**, so that **I can ensure safety**. | Segun | Segun finds old paint cans. He selects "Hazardous Item," takes photo, and places in separate compartment. User gets notification about proper hazardous disposal. |

## Epic 5: Points & Wallet

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US028** | As a **user**, I want to **see my points balance prominently**, so that **I know my total earnings**. | Mrs. Williams | Mrs. Williams opens app. Top card shows "3,450 points ≈ ₦6,900" (conversion rate displayed). She's saving for something special. |
| **US029** | As a **user**, I want to **see a detailed breakdown of each transaction**, so that **I understand how points were calculated**. | Mrs. Williams | She taps yesterday's transaction: "PET: 2kg × 40 × 1.5 = 120 pts, Aluminum: 1kg × 100 × 1.5 = 150 pts, Total: 270 pts. Gold sorting bonus applied!" |
| **US030** | As a **user**, I want to **see my environmental impact in tangible terms**, so that **I feel motivated**. | Tunde (14) | Tunde's dashboard shows: "You've recycled 45kg of waste, saved 12 trees, prevented 30kg CO2, and powered a home for 3 days with energy recovered!" |
| **US031** | As a **user**, I want to **set a points savings goal**, so that **I stay motivated to recycle**. | Mrs. Williams | Mrs. Williams sets goal: "New blender - 10,000 points." App shows: "3,450/10,000 (34%). Recycle 65kg more to reach goal." |
| **US032** | As a **user**, I want to **share my achievements on social media**, so that **I can inspire friends and neighbors**. | Mrs. Williams | She taps "Share" and posts: "I just earned 270 points for recycling this week! Join me @WasteReturn" with a badge graphic. |

## Epic 6: Drop-off Center (Self-Service)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US033** | As a **user**, I want to **find the nearest drop-off center**, so that **I can recycle when I'm out**. | Tunde | Tunde is at school with empty soda cans. He opens app, taps "Find Drop-off," and sees 3 centers within 2km. One is at the supermarket he's passing. |
| **US034** | As a **user**, I want to **use a self-service kiosk**, so that **I can recycle outside pickup hours**. | Mr. Ibrahim | Ibrahim collects waste in the evening. He goes to a 24/7 kiosk, places waste on scale, selects categories on touchscreen, and scans his QR code. Points credited instantly. |
| **US035** | As a **user**, I want to **get a printed receipt with QR code**, so that **I can scan later if I forgot my phone**. | Elderly user | An elderly woman drops waste but doesn't have her phone. Kiosk prints receipt. She takes it home, her grandson scans the QR code to credit her account. |
| **US036** | As a **user**, I want to **use the kiosk in my local language**, so that **I can understand the instructions clearly**. | Elderly user | The kiosk screen shows: "Press 1 for English, 2 for Yoruba, 3 for Igbo, 4 for Hausa, 5 for Pidgin." She selects Pidgin and follows instructions easily. |

## Epic 7: Admin & Management (EXPANDED)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US037** | As an **admin**, I want to **see real-time waste inflow dashboard**, so that **I can plan processing capacity**. | Engr. Funmi | Funmi opens dashboard: "Today: 3.2 tons incoming. Breakdown: 1.1t Plastics, 0.8t Paper, 0.5t Glass, 0.4t Metals, 0.4t Other." |
| **US038** | As an **admin**, I want to **track driver performance**, so that **I can identify training needs**. | Engr. Funmi | Dashboard shows: "Segun: 32 stops, 4.2hrs, 2.1 tons collected. Mary: 28 stops, 5.1hrs, 1.8 tons. Segun is 22% more efficient." |
| **US039** | As an **admin**, I want to **manage waste type points dynamically**, so that **I can respond to market prices**. | Engr. Funmi | Aluminum market price increased. Funmi updates: "Aluminum Cans: 100 → 120 pts/kg." All future transactions use new rate. |
| **US040** | As an **admin**, I want to **generate monthly regulatory reports**, so that **I can comply with LASEPA requirements**. | Engr. Funmi | One click generates: "March 2025: 45.2 tons diverted from landfill, 12.8 tons recycled, 3.4 tons composted." PDF ready for submission. |
| **US041** | As an **admin**, I want to **view the audit log of all admin actions**, so that **I can detect unauthorized changes or fraud**. | Engr. Funmi | Funmi opens Audit Log: "Today 10:23am - Admin James changed Aluminum points from 100 to 120. IP: 102.89.x.x. Reason: Market update." |
| **US042** | As an **admin**, I want to **view deleted records and restore if needed**, so that **I can recover accidentally deleted transactions**. | Engr. Funmi | A user complains about missing transaction. Funmi searches Deleted Records, finds it, and restores with one click. User gets points back. |
| **US043** | As an **admin**, I want to **configure soft delete policies**, so that **I control how long deleted items are kept before permanent removal**. | Engr. Funmi | Funmi sets: "Keep deleted transactions for 90 days, deleted users for 30 days, then auto-purge." |
| **US044** | As a **super admin**, I want to **view points liability**, so that **I can manage financial exposure**. | CFO | Dashboard shows: "Total outstanding points: 12.5 million (≈ ₦25 million). Monthly accrual rate: 3.2 million points. Cash reserve: ₦30 million - Healthy." |

## Epic 8: Rewards & Cash-out

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US045** | As a **user**, I want to **convert points to cash in my bank account**, so that **I can use the money for anything**. | Mr. Ibrahim | Ibrahim has 15,000 points. He taps "Cash Out," enters 10,000 points (≈ ₦5,000), selects bank, confirms. Money arrives in 2 hours. |
| **US046** | As a **user**, I want to **pay my electricity bill with points**, so that **I reduce household expenses**. | Mrs. Williams | Mrs. Williams selects "Pay Bills," chooses IKEDC, enters meter number, uses 8,000 points to pay ₦4,000 bill. Receipt generated. |
| **US047** | As a **user**, I want to **donate points to charity**, so that **I can help others while recycling**. | Mrs. Williams | Mrs. Williams selects "Donate," chooses "Lagos Food Bank," enters 2,000 points. Gets thank you message and tax receipt. |
| **US048** | As a **user**, I want to **browse rewards catalog**, so that **I can see what I can get with my points**. | Tunde | Tunde browses: "Movie tickets - 2,500 pts, Game voucher - 3,000 pts, School supplies - 1,500 pts, Bicycle - 25,000 pts." He starts saving. |
| **US049** | As a **user**, I want to **gift points to family members**, so that **I can share my recycling rewards**. | Mrs. Williams | Mrs. Williams transfers 1,000 points to her sister's account as a birthday gift. |

## Epic 9: Estate/Bulk Management

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US050** | As an **estate manager**, I want to **register my entire estate**, so that **all residents can participate**. | Mr. Chuka | Chuka registers "Ikeja Gardens Estate" with 200 units. Each unit gets individual QR codes, but estate gets collective metrics. |
| **US051** | As an **estate manager**, I want to **see estate-wide recycling stats**, so that **I can report to homeowners association**. | Mr. Chuka | Dashboard: "Estate total: 2.3 tons this month. Top recycler: House 45 (87kg). Estate diversion rate: 68%." |
| **US052** | As an **estate manager**, I want to **schedule bulk pickups for common areas**, so that **estate grounds stay clean**. | Mr. Chuka | Chuka schedules pickup for 10 estate bins. Driver collects all at once, weight recorded, estate account credited. |
| **US053** | As an **estate manager**, I want to **run inter-estate competitions**, so that **residents stay motivated to recycle**. | Mr. Chuka | "Green Estate Challenge" launches: Estate with highest recycling per capita wins ₦100,000 in estate improvements. |

## Epic 10: Frontdesk Operations (NEW)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US054** | As a **frontdesk agent**, I want to **scan a walk-in user's QR code**, so that **I can quickly pull up their account and process their drop-off**. | Grace | A customer walks in with 3 bags. Grace scans their phone QR code, account opens instantly showing "Mrs. Okafor - 2,450 points." |
| **US055** | As a **frontdesk agent**, I want to **weigh waste and select categories**, so that **I can accurately calculate points**. | Grace | Grace places bags on scale. App shows "8.3kg detected." She selects: "PET Plastics (3.2kg), Aluminum Cans (2.1kg), Glass (3.0kg)." |
| **US056** | As a **frontdesk agent**, I want to **apply sorting quality multipliers based on visual inspection**, so that **users are rewarded for good sorting**. | Grace | She checks the bags: plastics are rinsed, aluminum crushed. She selects "Gold (1.5x)" and snaps a photo for record. |
| **US057** | As a **frontdesk agent**, I want to **scan a driver's pickup completion code**, so that **I can verify the waste matches what was collected**. | Grace | Driver Segun returns with 20 pickups. Grace scans each code. App shows: "Pickup #PK-3F9K-2A: Expected 5.2kg from Mrs. Williams. Actual 5.1kg - Verified." |
| **US058** | As a **frontdesk agent**, I want to **handle cash payments for users without accounts**, so that **anyone can recycle regardless of phone access**. | Grace | An elderly woman without a phone brings waste. Grace processes manually, pays her ₦500 cash from the till, and records in system. |
| **US059** | As a **frontdesk agent**, I want to **manually enter transactions when the system is offline**, so that **service continues during internet outages**. | Grace | Internet goes down. Grace uses offline mode, enters transactions manually. When connection returns, all records sync automatically. |
| **US060** | As a **frontdesk agent**, I want to **view today's transactions**, so that **I can reconcile at end of shift**. | Grace | At 5pm, Grace views "Today's Transactions: 45 walk-ins, 32 driver returns, total 567kg, points issued: 8,450. Cash paid out: ₦12,500." |
| **US061** | As a **frontdesk agent**, I want to **print receipts for all transactions**, so that **users have proof of their drop-off**. | Grace | After each transaction, thermal printer prints receipt with: Date, weight, points earned, new balance. User keeps as record. |
| **US062** | As a **frontdesk agent**, I want to **flag suspicious transactions for admin review**, so that **fraud can be prevented**. | Grace | A user tries to recycle the same items twice in one day. Grace flags transaction. Admin gets alert to review. |
| **US063** | As a **frontdesk agent**, I want to **look up users by phone number**, so that **I can help those who forgot their QR code**. | Grace | A user says "I forgot my phone." Grace asks for phone number, searches, finds account, and manually enters their ID. |

## Epic 11: Audit & Compliance (NEW)

| ID | User Story | Persona | Real Scenario |
|----|------------|---------|---------------|
| **US064** | As a **compliance officer**, I want to **view all admin actions with timestamps and IP addresses**, so that **I can ensure accountability**. | Regulatory Officer | The regulator requests audit trail. Officer exports: "March 2025: 1,245 admin actions. All traced to specific users with IP addresses." |
| **US065** | As a **compliance officer**, I want to **see all deleted records with reason codes**, so that **I can verify proper data governance**. | Regulatory Officer | Officer views Deleted Records: "Transaction #TX1234 deleted by Admin James. Reason: Duplicate entry. Original exists as #TX1233." |
| **US066** | As a **compliance officer**, I want to **receive alerts for suspicious patterns**, so that **I can investigate potential fraud**. | Regulatory Officer | System alerts: "Multiple high-value transactions from same IP address. 5 accounts, 3 different names, same phone number pattern." |