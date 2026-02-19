
```mermaid
graph TB
    subgraph "User Facing Applications"
        U1[Mobile Web App<br/>Citizen Interface]
        U2[Admin Dashboard<br/>Waste Collection Center]
        U3[Pickup Driver App<br/>Mobile Interface]
    end
    
    subgraph "Core Services - Next.js API"
        A1[Authentication Service<br/>JWT + Role Based Access]
        A2[User Management<br/>Profiles & Wallet]
        A3[Waste Catalog Service<br/>Types, Categories, Points]
        A4[Transaction Engine<br/>Weight + Sorting Quality]
        A5[Pickup Scheduler<br/>Booking & Route Optimization]
        A6[Points Calculator<br/>Multi-variable Algorithm]
    end
    
    subgraph "Data Layer - MongoDB"
        D1[(Users)]
        D2[(Waste Categories)]
        D3[(Waste Types)]
        D4[(Drop-off Transactions)]
        D5[(Pickup Requests)]
        D6[(Driver Routes)]
        D7[(Points Ledger)]
        D8[(Rewards Catalog)]
    end
    
    subgraph "External Integrations"
        E1[Digital Scale API<br/>Bluetooth/Wi-Fi Scales]
        E2[Mapping Service<br/>Google Maps/OpenStreetMap]
        E3[SMS Gateway<br/>Pickup Confirmations]
        E4[Payment Gateway<br/>Cash-out Points]
    end
    
    %% Connections
    U1 --> A1
    U1 --> A2
    U1 --> A5
    U3 --> A5
    U3 --> A4
    U2 --> A3
    U2 --> A4
    
    A1 --> D1
    A3 --> D2
    A3 --> D3
    A4 --> D4
    A5 --> D5
    A5 --> D6
    A6 --> D7
    
    A4 --> E1
    A5 --> E2
    A5 --> E3
    A7 --> E4



    