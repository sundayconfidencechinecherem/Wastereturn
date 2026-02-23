wastereturn/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── images/
│   │       ├── logo.png
│   │       └── waste-icons/
│   │           ├── plastic.svg
│   │           ├── glass.svg
│   │           ├── paper.svg
│   │           ├── metal.svg
│   │           └── electronics.svg
│   │
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── App.css
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   └── StatusBadge.jsx
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   ├── user/
│   │   │   │   ├── UserDashboard.jsx
│   │   │   │   ├── RequestPickup.jsx
│   │   │   │   ├── MyPickups.jsx
│   │   │   │   ├── TrackPickup.jsx
│   │   │   │   ├── PointsBalance.jsx
│   │   │   │   ├── PointsHistory.jsx
│   │   │   │   └── UserQRCode.jsx
│   │   │   │
│   │   │   ├── driver/
│   │   │   │   ├── DriverDashboard.jsx
│   │   │   │   ├── AssignedPickups.jsx
│   │   │   │   ├── PickupDetails.jsx
│   │   │   │   ├── GeneratePickupCode.jsx
│   │   │   │   ├── CompletePickup.jsx
│   │   │   │   └── TodayRoute.jsx
│   │   │   │
│   │   │   ├── frontdesk/
│   │   │   │   ├── FrontdeskDashboard.jsx
│   │   │   │   ├── WalkInTransaction.jsx    # Scan user QR, weigh, complete
│   │   │   │   ├── DriverReturnScan.jsx      # Scan pickup code, verify, complete
│   │   │   │   ├── TodayTransactions.jsx
│   │   │   │   ├── VerifyPickup.jsx
│   │   │   │   └── WasteCategories.jsx       # View only, no edit
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── UserManagement.jsx
│   │   │       ├── DriverManagement.jsx
│   │   │       ├── FrontdeskManagement.jsx
│   │   │       ├── AllTransactions.jsx
│   │   │       ├── DeletedRecords.jsx        # View all deleted items
│   │   │       ├── WasteCategoryManager.jsx  # Full CRUD
│   │   │       ├── PointsConfig.jsx          # Adjust points values
│   │   │       ├── AuditLogs.jsx             # View all admin actions
│   │   │       └── SystemSettings.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── UserPages.jsx
│   │   │   ├── DriverPages.jsx
│   │   │   ├── FrontdeskPages.jsx
│   │   │   └── AdminPages.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── userService.js
│   │   │   ├── pickupService.js
│   │   │   ├── pointsService.js
│   │   │   ├── transactionService.js
│   │   │   └── adminService.js
│   │   │
│   │   ├── contexts/
│   │   │   ├── AuthContext.js
│   │   │   └── NotificationContext.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── usePickups.js
│   │   │   ├── usePoints.js
│   │   │   └── useTransactions.js
│   │   │
│   │   ├── utils/
│   │   │   ├── formatters.js
│   │   │   ├── constants.js
│   │   │   ├── pointsCalculator.js
│   │   │   └── helpers.js
│   │   │
│   │   └── config/
│   │       └── routes.js
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── app.js
│   │   │
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── auth.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Pickup.js
│   │   │   ├── WasteCategory.js
│   │   │   ├── Transaction.js
│   │   │   ├── PointsLedger.js
│   │   │   ├── AuditLog.js           # Tracks all admin actions
│   │   │   └── DeletedRecord.js      # Stores permanently what was deleted
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── pickupController.js
│   │   │   ├── driverController.js
│   │   │   ├── frontdeskController.js
│   │   │   ├── pointsController.js
│   │   │   ├── transactionController.js
│   │   │   └── adminController.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── pickupRoutes.js
│   │   │   ├── driverRoutes.js
│   │   │   ├── frontdeskRoutes.js
│   │   │   ├── pointsRoutes.js
│   │   │   ├── transactionRoutes.js
│   │   │   └── adminRoutes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── roleCheck.js
│   │   │   ├── auditLogger.js        # Logs all admin actions
│   │   │   └── errorHandler.js
│   │   │
│   │   └── utils/
│   │       ├── calculatePoints.js
│   │       ├── generateCode.js        # For driver pickup codes
│   │       └── helpers.js
│   │
│   └── package.json
│
├── database/
│   ├── seeds/
│   │   └── wasteCategories.json
│   └── README.md
│
├── .env.example
├── .gitignore
├── README.md
└── package.json