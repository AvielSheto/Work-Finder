# Work Finder

A cross-platform mobile app (iOS, Android and web) that helps job seekers find positions. Users can browse popular and nearby jobs, search by keyword, and open a job to see its full details.

## Features

- **Home screen**: a personalized welcome, a search bar, job-type filters, and lists of **popular** and **nearby** jobs.
- **Search**: keyword search with paginated results.
- **Job details**: company info, a tabbed view (About, Qualifications, Responsibilities), and a button that opens the original job posting.
- **Live data**: real job listings from the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) (RapidAPI).
- **Reusable `useFetch` hook**: loading, error and refetch logic handled in one place.

## Tech Stack

- React Native with [Expo](https://expo.dev)
- Expo Router (file-based navigation)
- Axios
- JSearch API through RapidAPI

## Project Structure

```
app/
├── index.js              # Home screen
├── search/[id].js        # Search results
└── job-details/[id].js   # Job details
components/
├── home/                 # Welcome, Popular jobs, Nearby jobs
├── jobdetails/           # Company, Tabs, About, Specifics, Footer
└── common/               # Job cards, header buttons
hook/useFetch.js          # API data fetching
constants/                # Theme, icons, images
```

## Getting Started

### Prerequisites
- Node.js 16 or later
- The Expo Go app on your phone, or an iOS or Android emulator
- A free RapidAPI key with access to the **JSearch** API

### Setup

```bash
git clone https://github.com/AvielSheto/Work-Finder.git
cd Work-Finder
npm install
```

Create a `.env` file in the project root:

```env
API_KEY=<your RapidAPI key>
```

### Run

```bash
npm start          # then scan the QR code with Expo Go
npm run android    # Android emulator
npm run ios        # iOS simulator (macOS only)
npm run web        # browser
```
