# SocialPro Management

SocialPro Management is a social media suite built with Next.js and Tailwind CSS. It provides a modern user interface for managing social media accounts, scheduling posts, and analyzing engagement.

## Features

- Responsive layout with left and right sidebars
- Centralized header for navigation
- Modal support via context provider
- Clean, modern UI using Tailwind CSS
- Built with Next.js for fast performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd social-media-management
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Main app layout and pages
- `src/components/` - Reusable UI components (Header, Sidebars, etc.)
- `src/context/` - Context providers (e.g., ModalContext)
- `public/` - Static assets

## Customization

- Update site metadata in `src/app/layout.tsx`
- Modify styles in `src/app/globals.css` and Tailwind config
- Add or update components in `src/components/`

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Contact

For questions or support, please contact the maintainer.
