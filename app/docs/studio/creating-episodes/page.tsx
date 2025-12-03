import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Creating Episodes | Chirpy Studio',
  description: 'Turn ideas into finished podcast episodes with AI-powered scripting, research, and audio production',
}

export default function CreatingEpisodesPage() {
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
            <span>Creating Episodes</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Creating Episodes</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Episodes are the individual installments of your podcast. Learn how to create them from scratch, from research, or from existing content.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Three Ways */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Three Ways to Create Episodes
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">From a Topic</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Give the AI a topic or idea. It researches and writes a complete script.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">From a URL</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Paste an article link. The AI adapts it into a podcast-friendly script.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">From Your Script</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Paste or write your own script. The AI helps polish and produce it.
              </p>
            </div>
          </div>
        </section>

        {/* From a Topic */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Creating an Episode from a Topic
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            This is the most common way to create episodes. You provide the idea, and the AI does the heavy lifting.
          </p>

          {/* Step 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Start a New Episode
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Make sure you&apos;ve selected the right series from the dropdown, then click <strong>Create Episode</strong> in the episode library panel.
              </p>
              <p className="text-[var(--text-muted)]">
                This clears the chat and prepares the AI to help you create a new episode using your series&apos; style and voice.
              </p>
            </div>
          </div>

          {/* Step 2 - Research */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Research Your Topic (Recommended)
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Before writing, gather facts and sources. Type:
              </p>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <p className="text-sm font-mono text-[var(--foreground)]">
                  research the history of the printing press
                </p>
              </div>
              <p className="text-[var(--text-muted)]">
                The AI searches for authoritative information and presents its findings. A green <strong>View Research</strong> button appears—click it to see the full research summary with citations and key facts.
              </p>
              <div className="p-4 rounded-xl bg-[#10B981]/5 border border-[#10B981]/30">
                <p className="text-sm text-[var(--text-muted)]">
                  <strong className="text-[#10B981]">Why research first?</strong> Research gives the AI accurate information to work with. Without it, the AI uses general knowledge, which might be less detailed or current.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Generate */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Generate Your Script
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Now ask for your script. Be as specific as you want:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <p className="text-sm font-mono text-[var(--foreground)]">
                    Write me a script about the printing press
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-2">Simple—AI uses research + series style</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <p className="text-sm font-mono text-[var(--foreground)]">
                    Write a script about how Gutenberg&apos;s printing press changed literacy rates in Europe. Focus on the human impact—stories of individuals whose lives changed.
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-2">Detailed—gives the AI a clear angle and approach</p>
                </div>
              </div>
              <p className="text-[var(--text-muted)]">
                The AI writes a complete production script with:
              </p>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">Narration:</strong> The spoken content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D946EF' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">MUSIC cues:</strong> Suggestions for background music (in bold)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#D946EF' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">SFX cues:</strong> Sound effect suggestions (in bold)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">Structure:</strong> Acts and transitions for pacing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* From a URL */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Creating an Episode from a URL
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Turn existing articles, blog posts, or web content into podcast episodes.
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">
                Turn this article into a podcast: https://example.com/article
              </p>
            </div>
          </div>
          <p className="text-[var(--text-muted)] mb-4">
            The AI will:
          </p>
          <ol className="space-y-2 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">1.</span>
              <span>Read and understand the article content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">2.</span>
              <span>Adapt it for audio (spoken content flows differently than written)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">3.</span>
              <span>Add music and sound effect cues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">4.</span>
              <span>Apply your series&apos; writing style</span>
            </li>
          </ol>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--foreground)]">Note:</strong> The AI needs to access the full article text. Paywalled content or pages that block web access won&apos;t work. If a URL doesn&apos;t work, try copying and pasting the article text directly.
            </p>
          </div>
        </section>

        {/* From Your Script */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Creating an Episode from Your Own Script
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Already have content? Paste it in and the AI will help turn it into a production-ready script.
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">
                Here&apos;s my script, please add music and sound effect cues and format it for production:
              </p>
              <p className="text-sm font-mono text-[var(--text-muted)] mt-2">
                [paste your content]
              </p>
            </div>
          </div>
          <p className="text-[var(--text-muted)]">
            The AI will format your content, add audio cues, and apply your series style while keeping your original writing intact.
          </p>
        </section>

        {/* Editing Scripts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Editing Your Script
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            Your script appears in the editor panel on the right. You have two ways to make changes:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Manual Editing</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Click anywhere in the script and type. Changes save automatically after you stop typing.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Good for: fixing typos, small wording changes, adding a quick sentence.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">AI Revision</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Select text, describe what you want changed, and click <strong>Revise with AI</strong>.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Good for: rewriting paragraphs, changing tone, making content longer or shorter.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">Using AI Revision</h3>
          <ol className="space-y-3 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">1.</span>
              <span><strong className="text-[var(--foreground)]">Select the text</strong> you want to change (click and drag)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">2.</span>
              <span>A purple revision panel appears below the editor</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">3.</span>
              <span><strong className="text-[var(--foreground)]">Describe your change</strong> in the input field</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">4.</span>
              <span>Click <strong className="text-[var(--foreground)]">Revise with AI</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">5.</span>
              <span>The AI rewrites just that section, keeping the rest of your script unchanged</span>
            </li>
          </ol>

          <p className="text-[var(--text-muted)] mb-4">Example revision requests:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Make this more dramatic&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Simplify for a younger audience&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Add a personal anecdote here&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Make this section shorter&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Add more specific examples&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--foreground)]">&quot;Make the ending more impactful&quot;</p>
            </div>
          </div>
        </section>

        {/* Episode Metadata */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Episode Metadata
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Each episode has metadata that appears when people browse or subscribe to your podcast:
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Title</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The episode name. The AI suggests one based on your content—edit it in the field at the top of the editor.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Description</h3>
              <p className="text-sm text-[var(--text-muted)]">
                A paragraph describing this episode. Shown in podcast apps and on your RSS feed.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Summary</h3>
              <p className="text-sm text-[var(--text-muted)]">
                A one-sentence teaser. Used for social sharing and quick previews.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-1">Tags</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Keywords that help categorize your episode. Used for search and recommendations.
              </p>
            </div>
          </div>
          <p className="text-[var(--text-muted)]">
            The AI generates all metadata automatically. You can edit any field by clicking on it in the editor panel.
          </p>
        </section>

        {/* Generating Audio */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Generating Your Audio
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            When your script is ready, click <strong>Submit to TTS</strong> to start audio production.
          </p>
          <div className="space-y-6 mb-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Voice Generation</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Your narration is converted to natural-sounding speech using your series&apos; voice settings.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Music Selection</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  The AI selects music tracks that match your script&apos;s mood and your MUSIC cues.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Sound Effects</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Sound effects are sourced and placed according to your SFX cues.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Final Mix</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Everything is mixed together—voice levels balanced, music ducked under speech, professional mastering applied.
                </p>
              </div>
            </div>
          </div>
          <p className="text-[var(--text-muted)] mb-4">
            The whole process takes 1-2 minutes. You&apos;ll see status updates as it progresses.
          </p>
          <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <p className="text-sm text-[var(--text-muted)] italic">
              Screenshot placeholder: Progress indicators and status badges
            </p>
          </div>
        </section>

        {/* Episode Status */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Understanding Episode Status
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Each episode shows a status badge. Here&apos;s what they mean:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-500/20 text-gray-400">DRAFT</span>
              <span className="text-sm text-[var(--text-muted)]">Script created, not yet submitted for audio</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-400">PROCESSING</span>
              <span className="text-sm text-[var(--text-muted)]">Audio is being generated</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-400">COMPLETED</span>
              <span className="text-sm text-[var(--text-muted)]">Audio ready—listen and download</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <span className="px-2 py-1 rounded text-xs font-semibold bg-red-500/20 text-red-400">FAILED</span>
              <span className="text-sm text-[var(--text-muted)]">Something went wrong—check the error message and retry</span>
            </div>
          </div>
        </section>

        {/* Listening and Downloading */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Listening and Downloading
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            When your episode is complete, an audio player appears at the bottom of the screen.
          </p>
          <ul className="space-y-2 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Play/Pause:</strong> Listen to your episode</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Seek:</strong> Jump to any point in the episode</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Download:</strong> Get the MP3 file to use anywhere</span>
            </li>
          </ul>
          <p className="text-[var(--text-muted)]">
            Not happy with the result? You can edit your script and submit again. Each submission generates a new audio version.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Tips for Great Episodes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Research first</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The &quot;research [topic]&quot; command gives the AI accurate facts and sources. This makes your episodes more credible and detailed.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Give context</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The more specific your request, the better the result. &quot;Write about coffee&quot; is okay, but &quot;Write about Ethiopian coffee traditions for an audience interested in food history&quot; is better.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Read aloud</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Before submitting, read your script out loud. What looks good on screen doesn&apos;t always sound natural when spoken.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Iterate</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Your first draft is a starting point. Use AI revision to refine sections until they feel right. The AI learns your preferences over time.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Check audio cues</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Review the MUSIC and SFX cues in your script. They guide the audio production. Change them if they don&apos;t match what you want.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Preview before publishing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Always listen to the complete episode before sharing. Check for awkward phrasing, timing issues, or spots that need adjustment.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Episodes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Managing Your Episodes
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            All your episodes are saved in the episode library (left panel). You can:
          </p>
          <ul className="space-y-2 text-[var(--text-muted)]">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Click any episode</strong> to open it in the editor</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Search</strong> by title to find specific episodes</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">See status badges</strong> to know what state each episode is in</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Continue editing</strong> any draft episode</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Re-submit</strong> completed episodes if you make changes</span>
            </li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/studio/creating-series"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Create more series →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set up different series for different content types or audiences.
              </p>
            </Link>
            <Link
              href="/docs/studio/getting-started"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Back to basics →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Review the fundamentals in our Getting Started guide.
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
