


```mermaid
graph TD
    Waste[All Waste Types] --> Categories{Waste Categories}
    
    Categories --> Recyclable[Recyclable Materials]
    Categories --> Organic[Organic/Biodegradable]
    Categories --> Hazardous[Hazardous/Special Handling]
    Categories --> Residual[Residual/Non-recyclable]
    
    Recyclable --> Plastic[Plastics]
    Recyclable --> Paper[Paper & Cardboard]
    Recyclable --> Glass[Glass]
    Recyclable --> Metal[Metals]
    Recyclable --> Electronics[E-Waste]
    
    Plastic --> PET[PET - Bottles]
    Plastic --> HDPE[HDPE - Containers]
    Plastic --> LDPE[LDPE - Bags/Nylons]
    Plastic --> PP[PP - Yogurt Cups]
    Plastic --> PS[PS - Foam]
    
    Metal --> Aluminum[Aluminum Cans]
    Metal --> Tin[Tin Cans]
    Metal --> Steel[Steel Scrap]
    Metal --> Copper[Copper - High Value]
    
    Paper --> Cardboard[Cardboard/Boxes]
    Paper --> OfficePaper[Office Paper]
    Paper --> Newspaper[Newspaper]
    Paper --> MixedPaper[Mixed Paper]
    
    subgraph "Points Multipliers"
        M1[Base Points per kg]
        M2[Sorting Quality Bonus]
        M3[Cleanliness Factor]
        M4[Volume Bonus]
        M5[Regular User Multiplier]
    end