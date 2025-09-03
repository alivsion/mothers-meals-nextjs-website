# Mother Meals Next.js Website

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Project Overview
Mother Meals is a Next.js 15.5.0 TypeScript website for a food delivery service in Hyderabad. It uses Tailwind CSS v4.1.12 for styling and is configured for static export deployment to GitHub Pages. The project exports to the `docs` directory instead of the standard `.next` output.

## Working Effectively

### Bootstrap and Build Process
Run these commands in order to set up and build the project:

1. **Install Dependencies**: `npm install` 
   - Takes 12 seconds. NEVER CANCEL.
   - Uses Node.js packages including Next.js 15.5.0, React 19.1.0, TypeScript 5.9.2

2. **Build Project**: `npm run build`
   - Takes 22-25 seconds. NEVER CANCEL. Set timeout to 60+ minutes.
   - Exports static files to `docs/` directory (not `.next/`)
   - Includes TypeScript compilation and optimization
   - Generates 9 static pages total

3. **TypeScript Check**: `npx tsc --noEmit`
   - Takes 2-3 seconds
   - Validates TypeScript without emitting files
   - **IMPORTANT**: Run after `npm run build` at least once to generate .next types
   - Use this to check for type errors before making changes

### Development and Testing

#### Development Server
- **Start Development**: `npm run dev`
  - Starts on http://localhost:3000
  - Takes 1-2 seconds to start
  - Ready message appears when fully loaded
  - **IMPORTANT**: Navigate to `http://localhost:3000/mothers-meals-nextjs-website` (not just `http://localhost:3000`) due to basePath configuration

#### Production Testing
- **Build Output**: Files are exported to `docs/` directory
- **Static Serving**: Serve `docs/` directory content using any static file server
- **Production Start**: `npm start` will FAIL because it expects `.next` but we export to `docs/`

### Available Commands
- `npm run dev` - Development server
- `npm run build` - Production build (exports to docs/)
- `npm run export` - Alias for build
- `npm run start` - Production server (won't work with this config)
- `npm run deploy` - Custom GitHub Pages deployment script

## Validation Requirements

### Manual Testing Scenarios
After making changes, ALWAYS test these scenarios:

1. **Home Page Load**: Navigate to `http://localhost:3000/mothers-meals-nextjs-website`
   - Verify hero section with "We Don't Make it Until You Order it!" displays
   - Check navigation menu (Home, Contact, Who Are We, Delivery Areas)
   - Verify app download buttons are present
   - Scroll through safety guidelines section
   - Check customer reviews section

2. **Navigation Testing**: Test all menu links
   - Contact page: `/mothers-meals-nextjs-website/contact`
   - Who Are We: `/mothers-meals-nextjs-website/who-are-we`  
   - Delivery Areas: `/mothers-meals-nextjs-website/delivery-areas`
   - Privacy Policy: `/mothers-meals-nextjs-website/privacy-policy`
   - Terms of Service: `/mothers-meals-nextjs-website/terms-of-service`

3. **Contact Form Testing**: On contact page
   - Fill in Name, Email, Phone, Message fields
   - Verify form accepts input (form submission may not work in development)
   - Check form validation and styling

4. **Mobile Responsiveness**: Test at different screen sizes
   - Use browser dev tools to test mobile, tablet views
   - Verify navigation menu works on mobile

### Build Validation
- ALWAYS run `npm run build` before committing changes
- Verify build completes without errors  
- Check that `docs/` directory is populated with static files
- Run `npx tsc --noEmit` to check for TypeScript errors (requires build first)
- Build succeeds even with some TypeScript warnings - Next.js handles type checking internally

## Important Configuration Details

### GitHub Pages Setup
- **Output Directory**: `docs/` (configured in next.config.mjs)
- **Base Path**: `/mothers-meals-nextjs-website` (set when GITHUB_ACTIONS=true)
- **Asset Prefix**: Uses repository name for GitHub Pages deployment
- **Deployment**: Automatic via GitHub Actions on main branch push

### Key Files and Locations
- **Source Code**: `src/app/` (Next.js 13+ app directory structure)
- **Components**: `src/app/components/` 
- **Styles**: `src/app/globals.css` (Tailwind CSS imports)
- **Configuration**: `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`
- **Build Output**: `docs/` directory
- **Public Assets**: `public/` directory

### Technologies Used
- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS v4.1.12
- **Icons**: React Icons 5.5.0
- **Animation**: Motion library 12.23.12, Lenis 1.3.9
- **Forms**: hCaptcha integration

## Troubleshooting

### Common Issues
1. **404 on localhost:3000**: Navigate to `http://localhost:3000/mothers-meals-nextjs-website` instead
2. **Build fails**: Check TypeScript errors with `npx tsc --noEmit`
3. **npm start fails**: This is expected - use static file serving for production testing
4. **Images not loading**: Check public/ directory and verify file paths
5. **Linting setup**: ESLint is not configured - Next.js will prompt to set it up if you run `npx next lint`

### Asset Loading Issues
- Some external API calls to randomuser.me are blocked (used for reviews)
- This doesn't affect functionality - reviews use static data
- Images should load from public/ directory

### Development Workflow
1. Run `npm install` (if first time or dependencies changed)
2. Run `npm run build` (if first time - needed for TypeScript types)
3. Make changes to source files in `src/`
4. Test in development with `npm run dev`
5. Navigate to `http://localhost:3000/mothers-meals-nextjs-website`
6. Validate changes manually using scenarios above
7. Run `npx tsc --noEmit` to check TypeScript (optional - build will catch errors)
8. Run `npm run build` to verify production build works
9. Commit changes

## Deployment Process
- **Automatic**: GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Trigger**: Push to main branch
- **Process**: Installs dependencies → Builds → Commits docs/ → Pushes
- **Live Site**: Served from docs/ directory on GitHub Pages
- **URL**: https://alivsion.github.io/mothers-meals-nextjs-website

## Performance Notes
- Build includes optimization and static generation
- All pages are pre-rendered as static content
- Images use Next.js Image component with unoptimized flag for static export
- Tailwind CSS is optimized and purged in production builds

Always test your changes thoroughly using the validation scenarios before committing. The site should load quickly and all navigation should work smoothly.