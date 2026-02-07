# Ukrainian Tax Manager

A React Native app built with Expo for managing Ukrainian tax calculations and financial transactions.

## Features

- **Tax Calculation**: Automatic tax calculation based on Ukrainian FOP tax groups (2025-2026)
- **Multi-Currency Support**: USD, EUR, and UAH with real-time exchange rates from NBU
- **Transaction Management**: Income, expense, and tax tracking with automatic tax generation
- **Recurring Transactions**: Support for recurring income/expense transactions
- **Analytics**: Revenue vs tax tracking, expense categorization, and cumulative charts
- **Master Wallet**: Aggregate balance across all wallets

## Tech Stack

- **Framework**: Expo SDK ~54, React Native 0.81.5
- **Navigation**: Expo Router (file-based routing)
- **State & Storage**: AsyncStorage (local-only)
- **Styling**: NativeWind v4 (Tailwind CSS)
- **Charts**: victory-native
- **Icons**: lucide-react-native


## Tax Groups

- **Group 1**: Fixed Unified Tax (~302.80 UAH/mo) + Fixed Military Tax (~800 UAH/mo)
- **Group 2**: Fixed Unified Tax (~1600 UAH/mo) + Fixed Military Tax (~800 UAH/mo)
- **Group 3**: 5% Unified Tax from revenue + 1% Military Tax from revenue
- **ESV**: Fixed expense (~1903 UAH/mo) - treated as expense with isESV flag

## Linc
https://tax-manager-9e259.web.app/


