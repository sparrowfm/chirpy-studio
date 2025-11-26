# Chirpy Studio Marketing Site

## Project Overview

**Purpose**: Marketing website for Chirpy Studio - an AI-powered podcast generation platform
- **Live URL**: https://chirpy.studio
- **Type**: Public marketing site (NOT the dashboard app)
- **Primary Goal**: Developer marketing, API documentation, MCP tools documentation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS v3.4.0 (IMPORTANT: Do NOT upgrade to v4 - see Tailwind section)
- **Deployment**: Vercel (auto-deploy from git)
- **DNS**: AWS Route53 → Vercel

## Brand Identity

### Colors
- **Orange**: `#F97316` - Primary brand color
- **Magenta**: `#D946EF` - Secondary accent color
- **Gradient buttons**: Orange to Magenta

### Mascot
- **Tweety**: Yellow bird mascot (Looney Tunes character)
- Used as friendly, approachable brand element
- Featured in hero sections and throughout marketing content

## Project Structure

```
/Users/neelketkar/chirpy-studio/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── docs/
│   │   └── mcp/
│   │       └── page.tsx            # MCP documentation (developer-focused)
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles + Tailwind imports
├── public/
│   ├── robots.txt                  # SEO configuration
│   ├── tweety-bird.png             # Brand mascot
│   └── favicon.ico                 # Site favicon
├── tailwind.config.ts              # Tailwind v3 configuration
├── postcss.config.mjs              # PostCSS plugins (Tailwind + Autoprefixer)
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
└── package.json                    # Dependencies
```

## DNS and Deployment

### Route53 Configuration
- **Domain**: chirpy.studio
- **Hosted Zone**: Z01660693Q09OXZBMG86N
- **A Record**: Points to Vercel (76.76.21.21)
- **SSL**: Auto-provisioned by Vercel

### Vercel Deployment
- **Auto-deploy**: Commits to git trigger automatic deployment
- **Build command**: `npm run build`
- **Framework**: Next.js (auto-detected)
- **Node version**: Latest LTS

### Deployment Workflow
```bash
# Make changes
git add .
git commit -m "Your message"
git push

# Vercel auto-deploys
# Site live at https://chirpy.studio within 1-2 minutes
```

## Documentation Content Strategy

### Homepage (`/`)
- Hero with Tweety mascot
- Clear value proposition
- Call-to-action to MCP docs
- Use cases overview
- Feature highlights

### MCP Documentation (`/docs/mcp`)
**Content Philosophy**: Developer marketing, not internal architecture

**Target Audience**: External developers who want to build with Chirpy Studio

**Content Structure**:
1. **Hero**: "Build with Chirpy Studio" - clear value proposition
2. **What You Can Build**: 4 concrete use cases with examples
3. **How It Works**: 4 simple developer-facing steps (not internal pipeline)
4. **Installation**: Claude Code and Claude Desktop instructions
5. **API Reference**: Clear parameter documentation with real examples
6. **Example Use Cases**: Daily news, education, blog-to-podcast, AI research
7. **Best Practices**: 4 concise cards with actionable tips

**Avoid**:
- Internal service names (Skylark, Condor, Magpie, Nightingale)
- Internal architecture diagrams
- Implementation details
- Internal workflows

**Focus on**:
- What developers can build
- How to get started quickly
- Real-world use cases
- Clear API documentation

## Common Issues and Fixes

### Tailwind CSS Styling Failures

**Symptom**: Site renders completely blank/white with no styling

**Cause**: Accidentally upgraded to Tailwind CSS v4 (alpha/beta)

**Fix**:
```bash
# Remove v4
npm uninstall tailwindcss @tailwindcss/postcss

# Install stable v3
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
```

Update `postcss.config.mjs`:
```javascript
const config = {
  plugins: {
    tailwindcss: {},      // NOT '@tailwindcss/postcss'
    autoprefixer: {},
  },
};
```

**Prevention**: Pin Tailwind to v3.4.x in package.json:
```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

### Verifying Deployment

After deploying, always verify:
1. **Visual check**: Visit https://chirpy.studio and check styling
2. **Gradient buttons**: Should show orange-to-magenta gradient
3. **Tweety bird**: Should be visible in hero section
4. **Responsive**: Check mobile layout
5. **Console**: No CSS errors, thousands of Tailwind utility classes loaded

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (verify before deploying)
npm run build
```

Access local site at http://localhost:3000

## Key Files to Understand

### `/app/docs/mcp/page.tsx`
- 563 lines of developer marketing content
- Complete rewrite focused on external developers
- Uses Tailwind utility classes extensively
- Structured for developer onboarding and API education

### `/app/globals.css`
- Tailwind directives (@tailwind base, components, utilities)
- CSS custom properties for theming
- Dark mode support
- Global typography styles

### `/tailwind.config.ts`
- Content paths for Tailwind scanning
- Theme extensions
- Custom colors via CSS variables
- Plugin configuration

## SEO Configuration

### robots.txt
- Allows all crawlers
- Sitemap: https://chirpy.studio/sitemap.xml
- Crawl-delay: 1 second for polite bots

### Future: sitemap.xml
- Should be generated for better SEO
- Include all pages (homepage, MCP docs, etc.)
- Update frequency and priority hints

## Development Guidelines

### Making Content Changes
1. Edit relevant page in `app/` directory
2. Preview locally with `npm run dev`
3. Build with `npm run build` to check for errors
4. Commit and push - Vercel auto-deploys

### Adding New Pages
1. Create new directory/file in `app/` (e.g., `app/about/page.tsx`)
2. Follow Next.js 16 App Router conventions
3. Use Tailwind for styling
4. Match brand colors (Orange #F97316, Magenta #D946EF)
5. Test locally, then commit and push

### Styling Guidelines
- Use Tailwind utility classes (NOT custom CSS unless necessary)
- Follow existing color scheme
- Ensure mobile responsiveness
- Use gradient buttons for CTAs: `bg-gradient-to-r from-[#F97316] to-[#D946EF]`
- Dark mode: Use CSS variables for colors

### Brand Voice
- **Friendly and approachable**: Tweety bird mascot sets the tone
- **Developer-focused**: Clear, concise technical writing
- **Action-oriented**: Focus on what developers can build
- **Professional yet playful**: Balance technical credibility with brand personality

## Testing Checklist

Before deploying major changes:
- [ ] Local dev server works (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Styling looks correct (gradients, spacing, colors)
- [ ] Mobile responsive
- [ ] Links work
- [ ] Console has no errors
- [ ] Tweety bird loads
- [ ] Brand colors correct

## Future Enhancements

### Content
- [ ] Add sitemap.xml for better SEO
- [ ] Add more use case examples
- [ ] Add video demos
- [ ] Add customer testimonials
- [ ] Add pricing page (if needed)

### Features
- [ ] Analytics integration (Vercel Analytics or Google Analytics)
- [ ] Newsletter signup
- [ ] Blog section (if desired)
- [ ] API playground/sandbox
- [ ] Interactive code examples

### Technical
- [ ] Optimize images (use Next.js Image component)
- [ ] Add metadata for social sharing (Open Graph, Twitter Cards)
- [ ] Performance monitoring
- [ ] Accessibility audit
- [ ] Lighthouse score optimization
