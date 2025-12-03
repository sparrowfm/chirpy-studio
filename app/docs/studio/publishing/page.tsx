import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Publishing | Chirpy Studio',
  description: 'Download, share, and distribute your podcast episodes to major platforms',
}

export default function PublishingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/docs/studio"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← Studio Docs
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-sm text-[var(--text-muted)] mb-4">
            <Link href="/docs/studio" className="hover:text-[#F97316]">Studio</Link>
            <span className="mx-2">/</span>
            <span>Publishing</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Publishing</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Get your episodes out into the world—download files, share links, or publish directly to podcast platforms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Three Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Ways to Share Your Episodes
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">📥</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Download</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Get the MP3 file to upload anywhere or use in your own workflow.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Share Link</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Send a direct link to anyone so they can listen instantly.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">📡</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">RSS Feed</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Publish to Apple Podcasts, Spotify, and all major platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Downloading */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Downloading Your Episode
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Once your episode is complete, you can download it as an MP3 file:
          </p>
          <ol className="space-y-3 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">1.</span>
              <span>Open your completed episode in the Studio</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">2.</span>
              <span>Look for the audio player at the bottom of the screen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">3.</span>
              <span>Click the <strong>Download</strong> button</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">4.</span>
              <span>The MP3 file saves to your computer</span>
            </li>
          </ol>
          <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">What you get</h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-1">
              <li>• High-quality MP3 file (128+ kbps)</li>
              <li>• Professionally mixed and mastered</li>
              <li>• Ready for upload to any platform</li>
            </ul>
          </div>
        </section>

        {/* RSS Feed */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Publishing to Podcast Platforms
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            To get your podcast on Apple Podcasts, Spotify, and other platforms, you need an RSS feed. Chirpy Studio can create and manage this for you.
          </p>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">Setting Up Your Feed</h3>
          <ol className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold text-sm shrink-0">1</div>
              <div>
                <p className="text-[var(--foreground)] font-medium">Go to Publishing tab</p>
                <p className="text-sm text-[var(--text-muted)]">
                  In your series settings, find the Publishing tab.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold text-sm shrink-0">2</div>
              <div>
                <p className="text-[var(--foreground)] font-medium">Create your RSS feed</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Fill in your podcast details: title, description, author, and language.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold text-sm shrink-0">3</div>
              <div>
                <p className="text-[var(--foreground)] font-medium">Choose categories</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Select iTunes categories that describe your podcast. This helps listeners discover you.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold text-sm shrink-0">4</div>
              <div>
                <p className="text-[var(--foreground)] font-medium">Get your RSS URL</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Once created, you&apos;ll get an RSS feed URL to submit to podcast directories.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Publishing Episodes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Publishing Episodes to Your Feed
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Once your feed is set up, you can publish episodes directly from the Studio:
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Publish Now</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Make the episode available immediately. Platforms typically update within a few hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Schedule for Later</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set a future date and time. The episode will automatically publish at that moment.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Backdate</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Migrating from another platform? Set a past date to maintain your episode order.
              </p>
            </div>
          </div>
        </section>

        {/* Submitting to Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Submitting to Podcast Platforms
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            With your RSS feed URL, submit your podcast to these major platforms:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <a
              href="https://podcasters.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Apple Podcasts
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                podcasters.apple.com
              </p>
            </a>
            <a
              href="https://podcasters.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Spotify for Podcasters
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                podcasters.spotify.com
              </p>
            </a>
            <a
              href="https://podcastsmanager.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Google Podcasts
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                podcastsmanager.google.com
              </p>
            </a>
            <a
              href="https://www.amazon.com/music/podcasters"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Amazon Music
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                amazon.com/music/podcasters
              </p>
            </a>
          </div>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--foreground)]">Tip:</strong> Submit once, publish forever. After you submit your RSS feed to a platform, new episodes are automatically picked up—you don&apos;t need to submit again.
            </p>
          </div>
        </section>

        {/* Episode Metadata */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Episode Metadata
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Each episode has metadata that appears in podcast apps:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Title</h3>
              <p className="text-sm text-[var(--text-muted)]">
                What listeners see in their feed. Keep it clear and compelling.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Description</h3>
              <p className="text-sm text-[var(--text-muted)]">
                A paragraph explaining what the episode is about. Shows in podcast apps when someone taps for details.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Summary</h3>
              <p className="text-sm text-[var(--text-muted)]">
                A one-line teaser. Used for social sharing and quick previews.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Explicit Flag</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Mark episodes with adult content. Required for platform compliance.
              </p>
            </div>
          </div>
          <p className="text-[var(--text-muted)] mt-4">
            The AI generates this metadata automatically when creating your script. You can edit it anytime in the episode editor.
          </p>
        </section>

        {/* Scheduling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Scheduling Episodes
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Consistency is key for podcast growth. You can schedule episodes in advance:
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Pick your time zone</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set your preferred time zone so scheduled times make sense for you.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Choose date and time</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Select when the episode should go live. Most podcasters publish in the morning.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Create a schedule</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set up a recurring schedule for your series (e.g., every Tuesday at 6am).
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Publishing Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Be consistent</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Publish on the same day each week. Listeners appreciate predictability.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Write good titles</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Clear, specific titles get more clicks than vague ones. &quot;How Coffee Changed History&quot; beats &quot;Episode 5.&quot;
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Use keywords</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Include relevant keywords in titles and descriptions. This helps with search discovery.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Preview before publishing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Always listen to your episode before making it public. Catch issues early.
              </p>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">How long until my episode appears on Spotify/Apple?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Usually 1-24 hours after publishing. Spotify tends to be faster; Apple can take longer for new podcasts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I edit an episode after publishing?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                You can update the audio file and metadata. Changes propagate to platforms within 24-48 hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I unpublish an episode?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Yes, you can remove episodes from your feed. They&apos;ll disappear from podcast apps within 24-48 hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Do I need to upload artwork?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Yes, podcast platforms require artwork. It should be square (1400x1400 to 3000x3000 pixels) in JPG or PNG format.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/studio/troubleshooting"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Troubleshooting →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Solve common issues and get help when stuck.
              </p>
            </Link>
            <Link
              href="/docs/studio/creating-episodes"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Creating Episodes →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Make more content to publish.
              </p>
            </Link>
          </div>
        </section>

        {/* Need Help */}
        <section className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)]">
          <h2 className="font-semibold text-[var(--foreground)] mb-2">Need help?</h2>
          <p className="text-[var(--text-muted)]">
            If you get stuck or have questions, reach out at{' '}
            <a href="mailto:support@chirpy.studio" className="text-[#F97316] hover:underline">
              support@chirpy.studio
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <Wordmark />
            <p>&copy; 2025 Chirpy Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
