

```mermaid
sequenceDiagram
    participant User
    participant App
    participant Admin
    participant Driver
    participant Scale
    
    User->>App: Request Pickup
    App->>User: Select Waste Types & Estimate Volume
    User->>App: Confirm Address & Time Window
    App->>Admin: New Pickup Request
    
    Admin->>App: Assign Driver & Optimize Route
    App->>Driver: Push Notification - New Pickup
    
    Driver->>User: Arrive at Location
    Driver->>Scale: Weigh Waste (Connected Scale)
    Scale-->>Driver: Weight Data
    
    Driver->>App: Verify Waste Types & Sorting Quality
    App->>App: Calculate Points (Base + Bonuses)
    
    Driver->>User: Confirmation & Points Credited
    App->>User: Notification - Points Added
    User->>App: View Updated Balance