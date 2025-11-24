import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'MCP Workflow Tools | Chirpy Studio',
  description: 'Build AI-powered podcast creation applications with Chirpy Studio\'s Model Context Protocol integration',
}

export default function MCPDocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-black mb-6">
            <span style={{ color: '#F97316' }}>Build with Chirpy Studio</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-4">
            Create AI-powered applications that generate complete podcast episodes—from research to final mix—using natural language.
          </p>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
            Model Context Protocol (MCP) tools for Claude Code and Claude Desktop
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#installation"
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Get Started
            </a>
            <a
              href="#api-reference"
              className="px-6 py-3 rounded-xl font-semibold border-2 hover:bg-[var(--card-bg)] transition-colors"
              style={{ borderColor: '#F97316', color: '#F97316' }}
            >
              API Reference
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* What You Can Build */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            What You Can Build
          </h2>
          <div className="space-y-4 text-[var(--text-muted)]">
            <p>
              Chirpy Studio MCP tools enable you to programmatically create production-quality podcast episodes using AI. Perfect for building:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Content Automation Platforms</h3>
                <p className="text-sm">
                  Build services that generate daily news podcasts, educational content series, or automated audio newsletters from text sources.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Podcast-as-a-Service</h3>
                <p className="text-sm">
                  Create white-label podcast creation tools for clients who want AI-generated audio content without technical expertise.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">AI Agents & Workflows</h3>
                <p className="text-sm">
                  Integrate podcast creation into Claude-powered applications—generate episodes from research, convert blog posts to audio, or create summaries.
                </p>
              </div>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Educational Tools</h3>
                <p className="text-sm">
                  Build learning platforms that transform written content into engaging audio lessons with professional sound design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            How It Works
          </h2>
          <div className="space-y-4 text-[var(--text-muted)]">
            <p>
              Chirpy Studio handles the entire podcast production pipeline—from script generation to final audio mastering. The MCP tools provide an async workflow interface:
            </p>
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <div className="grid gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">1</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Start a Workflow</span>
                    <p className="text-[var(--text-muted)] mt-1">Provide a topic and optional parameters. Returns a job ID immediately—no waiting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">2</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">AI Creates Your Episode</span>
                    <p className="text-[var(--text-muted)] mt-1">Script writing, voice synthesis, sound design, music selection, and audio mixing—all automated (40-60 min).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">3</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Poll for Progress</span>
                    <p className="text-[var(--text-muted)] mt-1">Check job status anytime to get real-time progress updates and step-by-step completion tracking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">4</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Download Your Podcast</span>
                    <p className="text-[var(--text-muted)] mt-1">Get a production-ready MP3 file with professional mixing, sound effects, and background music.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Installation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Claude Code</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Add the Chirpy Studio MCP server to your Claude Code configuration:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <pre className="bg-[var(--background)] rounded-lg p-4 overflow-x-auto text-xs text-[var(--foreground)]">
{`# Add to your Claude Code MCP configuration
claude mcp add chirpy-studio \\
  --transport http \\
  https://api.chirpy.studio/mcp`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Claude Desktop</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Add to your <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">claude_desktop_config.json</code>:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <pre className="bg-[var(--background)] rounded-lg p-4 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "mcpServers": {
    "chirpy-studio": {
      "type": "http",
      "url": "https://api.chirpy.studio/mcp"
    }
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-magenta-50 dark:from-orange-950/20 dark:to-magenta-950/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">🔑 API Key Required</h3>
              <p className="text-sm text-[var(--text-muted)]">
                You'll need a Chirpy Studio API key to use these tools. <a href="https://studio.chirpy.studio/settings/api" className="underline" style={{ color: '#F97316' }}>Get your API key</a> from your dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Quick Start Example
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Create Your First Episode</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Use natural language to start creating podcast episodes:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">YOU:</div>
                  <div className="text-[var(--foreground)]">"Create a 5-minute podcast episode about the history of the internet for my tech series"</div>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-2" style={{ color: '#F97316' }}>CLAUDE:</div>
                  <div className="text-[var(--text-muted)] text-sm space-y-2">
                    <p>I'll start creating your episode about the history of the internet.</p>
                    <div className="bg-[var(--background)] rounded-lg p-3 font-mono text-xs">
                      <div>✓ Workflow started!</div>
                      <div>Job ID: workflow_abc123</div>
                      <div>Episode ID: ep_xyz789</div>
                      <div className="mt-2 text-[var(--text-muted)]">Processing: Script generation → Voice synthesis → Sound design → Final mix</div>
                      <div className="text-[var(--text-muted)]">Estimated time: 40-60 minutes</div>
                    </div>
                    <p className="text-xs">I'll monitor the progress and let you know when it's ready!</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Check Progress Anytime</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Ask about your job status at any time:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="text-[var(--foreground)] mb-3">"How's my podcast episode coming along?"</div>
                <div className="bg-[var(--background)] rounded-lg p-3 font-mono text-xs space-y-1">
                  <div className="text-green-500">✓ Script generation complete</div>
                  <div className="text-green-500">✓ Voice synthesis complete</div>
                  <div className="text-blue-500">⟳ Sound design in progress (65%)</div>
                  <div className="text-[var(--text-muted)]">○ Final mix pending</div>
                  <div className="mt-2 text-[var(--text-muted)]">Overall: 65% complete • ~15 minutes remaining</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            API Reference
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            Four MCP tools for managing podcast episode workflows. All tools use async job patterns—start workflows quickly and poll for completion.
          </p>
          <div className="space-y-6">
            {/* Tool 1 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                <code className="text-base">workflow_start_episode</code>
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Start an async workflow to create a complete podcast episode. Returns a job ID immediately—processing happens in the background (40-60 min).
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">PARAMETERS</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "seriesSlug": "my-tech-show",            // Required: Your podcast series identifier
  "topic": "The history of the internet", // Required: Episode topic/description
  "title": "Episode 42: The Internet",    // Optional: Custom title
  "targetLength": 300,                    // Optional: Target duration in seconds
  "researchData": "Additional context",   // Optional: Pre-researched content to include
  "voicePreference": "conversational"     // Optional: Voice style (conversational|professional|energetic)
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">RESPONSE</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U",
  "episodeId": "ep_01JCXA8K2M9N6P7Q8R9S0T1U",
  "status": "queued",
  "estimatedDuration": "40-60 minutes",
  "createdAt": "2025-01-15T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                <code className="text-base">workflow_get_job_status</code>
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Check the current status and progress of a running workflow. Poll every 5-10 seconds for real-time updates.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">PARAMETERS</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U"  // Required: Job ID from workflow_start_episode
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">RESPONSE</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U",
  "episodeId": "ep_01JCXA8K2M9N6P7Q8R9S0T1U",
  "status": "processing",           // queued | processing | completed | failed | cancelled
  "currentStep": "sound_design",    // Current pipeline step
  "progress": {
    "percent": 65,                  // Overall completion percentage
    "stepsCompleted": 3,
    "stepsTotal": 5
  },
  "estimatedTimeRemaining": "15 minutes",
  "audioUrl": null,                 // Available when status === "completed"
  "error": null                     // Error message if status === "failed"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                <code className="text-base">workflow_cancel_job</code>
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Cancel a queued or in-progress workflow. Completed jobs cannot be cancelled. Resources will be cleaned up automatically.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">PARAMETERS</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U",  // Required: Job ID to cancel
  "reason": "User requested cancellation"        // Optional: Reason for logging
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">RESPONSE</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U",
  "status": "cancelled",
  "cancelledAt": "2025-01-15T11:15:00Z",
  "message": "Workflow cancelled successfully"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 4 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                <code className="text-base">workflow_list_jobs</code>
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                List all workflows for your account with optional filtering. Great for building dashboards or monitoring multiple jobs.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">PARAMETERS</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "seriesSlug": "my-tech-show",    // Optional: Filter by podcast series
  "status": "processing",          // Optional: Filter by status (queued|processing|completed|failed|cancelled)
  "limit": 20,                     // Optional: Max results (default: 50, max: 100)
  "offset": 0                      // Optional: Pagination offset
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">RESPONSE</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobs": [
    {
      "jobId": "workflow_01JCXA8K2M9N6P7Q8R9S0T1U",
      "episodeId": "ep_01JCXA8K2M9N6P7Q8R9S0T1U",
      "seriesSlug": "my-tech-show",
      "topic": "The history of the internet",
      "status": "processing",
      "progress": { "percent": 65 },
      "createdAt": "2025-01-15T10:30:00Z",
      "updatedAt": "2025-01-15T11:05:00Z"
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Example Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">📰 Daily News Podcast</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Automatically generate daily news summaries from RSS feeds or web scraping. Schedule workflows to run every morning with curated topics.
              </p>
              <div className="text-xs bg-[var(--background)] px-2 py-1 rounded inline-block" style={{ color: '#F97316' }}>
                Automation • Scheduling • Content Aggregation
              </div>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">🎓 Educational Content</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Convert written lessons into audio format. Perfect for language learning apps, textbook companions, or online courses.
              </p>
              <div className="text-xs bg-[var(--background)] px-2 py-1 rounded inline-block" style={{ color: '#F97316' }}>
                EdTech • Accessibility • Content Transformation
              </div>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">✍️ Blog-to-Podcast</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Automatically turn blog posts into engaging audio episodes. Great for content creators who want to reach audio-first audiences.
              </p>
              <div className="text-xs bg-[var(--background)] px-2 py-1 rounded inline-block" style={{ color: '#F97316' }}>
                Content Marketing • Multi-Format Publishing
              </div>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">🤖 AI Research Assistant</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Build Claude-powered workflows that research topics, synthesize findings, and deliver them as polished audio reports.
              </p>
              <div className="text-xs bg-[var(--background)] px-2 py-1 rounded inline-block" style={{ color: '#F97316' }}>
                AI Agents • Research Automation • Knowledge Work
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">⏱️ Polling Strategy</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Poll every <strong>5-10 seconds</strong> for optimal balance. Avoid polling faster than 2 seconds (rate limiting) or slower than 60 seconds (poor UX).
              </p>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">🔄 Handle All States</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Check for <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">completed</code>, <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">failed</code>, and <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">cancelled</code> status. Always handle errors gracefully.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">📊 Show Progress</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Display current step, progress percentage, and time remaining. Store job IDs for user reference and support.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">⏳ Set Timeouts</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Workflows take <strong>40-60 minutes</strong>. Set appropriate timeouts (75 min recommended) and notify users of long-running processes.
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] rounded-2xl p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Ready to Build?</h2>
            <p className="text-[var(--text-muted)] mb-6 max-w-2xl mx-auto">
              Get your API key and start creating AI-powered podcast applications today. Works with Claude Code, Claude Desktop, and custom integrations.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://studio.chirpy.studio/settings/api"
                className="inline-block px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                Get API Key
              </a>
              <Link
                href="/"
                className="inline-block px-8 py-3 rounded-xl font-semibold border-2 hover:bg-[var(--card-bg)] transition-colors"
                style={{ borderColor: '#F97316', color: '#F97316' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--card-bg)] mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Wordmark />
            </div>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
                Home
              </Link>
              <a
                href="https://studio.chirpy.studio"
                className="hover:text-[var(--foreground)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashboard
              </a>
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                About MCP
              </a>
              <a
                href="https://github.com/anthropics/anthropic-quickstarts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                Examples
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
