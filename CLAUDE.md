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
│   │   ├── mcp/
│   │   │   └── page.tsx            # MCP documentation (developer-focused)
│   │   └── studio/                 # Studio Console user guides
│   │       ├── page.tsx            # Studio docs index
│   │       ├── getting-started/
│   │       ├── creating-series/
│   │       ├── creating-episodes/
│   │       ├── voices/
│   │       ├── audio-production/
│   │       ├── publishing/
│   │       └── troubleshooting/
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles + Tailwind imports
│   ├── podcasts/
│   │   └── [slug]/
│   │       ├── page.tsx            # Podcast series page (data from Aviary API + RSS)
│   │       ├── loading.tsx         # Skeleton loading state
│   │       ├── error.tsx           # Error boundary with retry
│   │       └── not-found.tsx       # 404 for unknown slugs
├── components/
│   ├── podcasts/                   # Podcast-specific components
│   │   ├── SeriesHero.tsx          # Key art, title, tagline, genres
│   │   ├── GenreBadge.tsx          # iTunes category pills
│   │   ├── SubscribeButtons.tsx    # App deep links (Apple, Overcast, Pocket Casts, Castro)
│   │   ├── EpisodeCard.tsx         # Episode with play button
│   │   ├── EpisodeList.tsx         # Episode container
│   │   └── AudioPlayer.tsx         # Sticky bottom player
│   ├── AudioShowcase.tsx           # Audio samples section (3 genre cards)
│   ├── AudioSampleCard.tsx         # Sample card with waveform + play button
│   ├── WaveformAnimation.tsx       # Animated waveform for hero
│   ├── EmailSignupForm.tsx         # Waitlist signup form
│   ├── ContactForm.tsx             # Contact form
│   └── Wordmark.tsx                # Brand wordmark component
├── lib/
│   ├── aviary-api.ts               # API client for Wren + RSS feed parsing
│   └── audio-player-context.tsx    # React Context for audio player state
├── types/
│   └── podcast.ts                  # TypeScript interfaces for podcast data
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

### Podcast Series Pages (`/podcasts/[slug]`)

Public-facing podcast landing pages for series with published RSS feeds.

**Example URL**: https://chirpy.studio/podcasts/fact-frenzy

**Data Sources**:
- **Series metadata**: Wren API at `https://studio.chirpy.studio/api/series`
- **Episodes**: RSS feed at `https://rss.chirpy.studio/feeds/{slug}`
- **Auth**: `X-API-Key` header with `AVIARY_API_KEY` env var

**Slug Matching** (in order of priority):
1. RSS feed URL contains `/feeds/{slug}`
2. `starling_feed_id` matches slug
3. Series ID matches slug
4. Slugified series name matches slug

**Features**:
- Hero with key art, title, tagline, genre badges
- Subscribe buttons with deep links (Apple Podcasts, Overcast, Pocket Casts, Castro)
- Episode list with descriptions and publish dates
- Sticky audio player with seek bar
- SEO metadata and Open Graph images

**Known Issue / Pending Requirement**:
> **TODO for Wren**: Store `rss_feed_url` in `series.config.rss_feed_url`
>
> Currently, chirpy-studio constructs the RSS URL from the slug pattern `https://rss.chirpy.studio/feeds/{slug}`.
> This is fragile - Wren should store the canonical RSS feed URL so chirpy-studio can read it directly.
> See: `lib/aviary-api.ts:54` for the TODO comment.

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

## Investor Deck & Messaging

### Deck Location
Investor teaser deck is maintained separately (not in this repo). Key messaging decisions are documented here for consistency.

### Core Positioning
- **Tagline**: "Agentic AI for premium, personalizable narrative audio"
- **Category**: Hyper-Personalized Narrative Audio
- **Key differentiator**: "Others built the instruments. We conduct the orchestra."

### Messaging Principles
1. **End-to-end is the lead story** - Chirpy is a full production studio, not a tool
2. **Modularity is secondary** - Buyers can use individual agents via API, but don't lead with this
3. **Inspirational over prescriptive** - Use questions ("What becomes possible?") rather than exhaustive use case lists
4. **Storytelling emphasis** - Competitors focus on tooling; Chirpy focuses on the storyteller

### "Why Now" Framing
Three technology shifts + one market gap:
1. TTS crossed the uncanny valley (2023-24)
2. LLM costs collapsed (10-100x cheaper)
3. Agentic infrastructure matured (MCP, function calling)
4. Gap: Current players build tools, not stories

### Avoid in External Messaging
- Internal service names (Skylark, Condor, Magpie, Nightingale)
- Specific metrics without sources (e.g., "100M+ listeners" needs citation)
- "~$0 marginal cost" without context (clarify: per episode after setup)
- Prescriptive use case lists that limit imagination

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
