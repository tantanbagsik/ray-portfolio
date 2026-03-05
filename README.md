# My Portfolio Website

A modern portfolio website built with Next.js and Tailwind CSS.

## Live Website

https://titanbagsik.vercel.app

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tantanbagsik/ray-portfolio.git

# Navigate to project folder
cd ray-portfolio

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing the Portfolio

Edit `app/data/portfolioData.js` to customize:

- **Personal Info**: Name, title, logo
- **Hero Section**: Subtitle, profile image, CV link
- **About Section**: Description, about image
- **Skills**: List of your skills
- **Education**: Your education background
- **Certifications**: Any certifications
- **Achievements**: Projects count, users, awards, years
- **Projects**: Project titles, descriptions, images, links
- **Contact**: GitHub, LinkedIn, email

## Adding Images

Place images in the `public/images/` folder:
- `hero-image.png` - Your profile picture
- `about-image.png` - About section image
- `projects/1.png`, `2.png`, etc. - Project screenshots

## Deploying

The site automatically deploys to Vercel when you push to GitHub.

## Tech Stack

- Next.js 13
- Tailwind CSS
- Framer Motion
- React Type Animation
- React Animated Numbers
