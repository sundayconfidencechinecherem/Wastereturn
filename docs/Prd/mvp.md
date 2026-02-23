## 9. MVP Scope (UPDATED)

### Phase 1: Core Functionality (Month 1-3)

| Feature | Priority | Description |
|---------|----------|-------------|
| User Registration | P0 | Phone number + OTP |
| Basic Waste Categories | P0 | 20 most common types |
| QR Code Generation | P0 | Unique household ID |
| Driver Check-in/out | P0 | Start/end shift |
| Manual Weight Entry | P0 | For non-connected scales |
| Points Calculation | P0 | Base points only |
| Points Balance | P0 | View current points |
| Admin User Management | P0 | Basic CRUD |
| Frontdesk Basic Ops | P0 | Walk-in processing |

### Phase 2: Enhanced Features (Month 4-6)

| Feature | Priority | Description |
|---------|----------|-------------|
| Pickup Scheduling | P1 | Calendar-based booking |
| Bluetooth Scale Integration | P1 | Connected hardware |
| Sorting Quality Verification | P1 | Photo upload + multiplier |
| Waste Category Expansion | P1 | 50+ waste types |
| Basic Reports | P1 | Daily/weekly summaries |
| Driver Route Optimization | P1 | Simple sequencing |
| Audit Logging | P1 | Track admin actions |
| Driver Pickup Codes | P1 | Generate/scan codes |

### Phase 3: Advanced Features (Month 7-9)

| Feature | Priority | Description |
|---------|----------|-------------|
| Reward Redemption | P2 | Catalog + codes |
| Cash-out via Bank | P2 | Paystack integration |
| Real-time Driver Tracking | P2 | Live map for users |
| Educational Content | P2 | Videos, quizzes |
| Referral Program | P2 | Points for referrals |
| Analytics Dashboard | P2 | Charts, exports |
| Deleted Records Recovery | P2 | Restore functionality |

### Phase 4: Scale Features (Month 10-12)

| Feature | Priority | Description |
|---------|----------|-------------|
| Self-service Kiosks | P3 | Drop-off centers |
| USSD Integration | P3 | Feature phone support |
| AI Sorting Assistant | P3 | Photo recognition |
| Carbon Credit Tracking | P3 | Environmental impact |
| API for Partners | P3 | Estate integrations |
| Multi-language Support | P3 | Local languages |

## 10. Constraints & Considerations

### Technical Constraints
- Must work on low-end Android devices (primary user base)
- Offline capability for driver app (rural areas with poor internet)
- Secure data handling for KYC information
- Integration with existing weighing scales (Bluetooth/USB)
- SMS delivery reliability for USSD users

### Business Constraints
- Partnership agreements with recycling facilities
- Reward partner onboarding and management
- Points liability financial reserves (must maintain 80% cash coverage)
- Regulatory reporting requirements (monthly to LASEPA)
- Insurance coverage for drivers and facilities

### Security Considerations
- User data protection (NDPR compliance)
- Secure QR code generation (encrypted, non-duplicable)
- Transaction integrity (no double-spending, audit trails)
- Admin access controls and role-based permissions
- Financial reconciliation (daily, weekly, monthly)
- CCTV integration at drop-off centers

## 11. Success Metrics (UPDATED)

### User Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Registration Conversion | >60% | % of visitors who sign up |
| Active Users (DAU/MAU) | >30% | Daily active / monthly active |
| Recycling Frequency | 2x per month | Average transactions per user |
| Points Utilization | >70% | % of earned points redeemed |
| User Retention (90-day) | >65% | Still active after 90 days |

### Operational Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Transaction Time | <3 minutes | Scan to completion |
| Error Rate | <2% | Transactions requiring correction |
| Driver Efficiency | >25 stops/day | Pickups per driver per shift |
| Route Optimization | <20% deadhead | % empty miles driven |
| Audit Coverage | 100% | All admin actions logged |

### Financial Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Points Liability Ratio | <80% | % of reserve cash to points issued |
| Cost per kg Collected | ₦50 | Operational cost per kg |
| Revenue per kg | ₦120 | Recycling revenue per kg |
| Gross Margin | >40% | (Revenue - Cost)/Revenue |

### Environmental Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| E-Waste Collected | 500 tons/year | Total kg recycled |
| Diversion Rate | >70% | % kept from landfill |
| CO2 Reduction | 10,000 tons/year | Estimated emissions saved |
| Trees Saved | 50,000/year | Paper recycling equivalent |
