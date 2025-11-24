import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'MCP Workflow Tools | Chirpy Studio',
  description: 'Model Context Protocol tools for automating podcast episode creation with Chirpy Studio',
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
            <span style={{ color: '#F97316' }}>MCP Workflow Tools</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
            Automate complete podcast episode creation pipelines with Model Context Protocol integration for Claude Code and Claude Desktop.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#quick-start"
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Get Started
            </a>
            <a
              href="#tools"
              className="px-6 py-3 rounded-xl font-semibold border-2 hover:bg-[var(--card-bg)] transition-colors"
              style={{ borderColor: '#F97316', color: '#F97316' }}
            >
              View Tools
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Overview
          </h2>
          <div className="space-y-4 text-[var(--text-muted)]">
            <p>
              The Tier 3 Workflow Tools solve the <strong>40-minute timeout problem</strong> by implementing an async job pattern. Instead of blocking for the entire episode creation pipeline, these tools return a job ID immediately and allow you to poll for completion.
            </p>
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Pipeline Architecture</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">1</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Skylark</span>
                    <span className="text-[var(--text-muted)]"> - Script generation (2-5 min)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">2</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Condor</span>
                    <span className="text-[var(--text-muted)]"> - TTS audio (1-3 min)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs">3</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Magpie SDC</span>
                    <span className="text-[var(--text-muted)]"> - Sound design planning (3-5 min)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-xs">4</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Magpie Gather</span>
                    <span className="text-[var(--text-muted)]"> - Asset download (5-10 min)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xs">5</span>
                  <div>
                    <span className="font-semibold text-[var(--foreground)]">Nightingale</span>
                    <span className="text-[var(--text-muted)]"> - Mixing/mastering (10-15 min)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border)] text-sm">
                <strong className="text-[var(--foreground)]">Total Duration:</strong> 40-60 minutes end-to-end
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Quick Start
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Using with Claude Code</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Workflow tools are automatically available in Claude Code conversations. Simply describe what you want to create:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">USER:</div>
                  <div className="text-[var(--foreground)]">"Create an episode about Herman's mayoral campaign for the Briefly Remembered series"</div>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-2" style={{ color: '#F97316' }}>CLAUDE CODE:</div>
                  <div className="text-[var(--text-muted)] text-sm space-y-2">
                    <p>I'll start the episode creation workflow.</p>
                    <div className="bg-[var(--background)] rounded-lg p-3 font-mono text-xs">
                      <div>✓ Episode workflow started successfully!</div>
                      <div>Job ID: workflow_01HABCDEFG123456789</div>
                      <div>Episode ID: ep_01HABCDEFG123456789</div>
                    </div>
                    <p>Orchestrating complete pipeline:</p>
                    <div className="space-y-1 text-xs">
                      <div>1. ✓ Skylark (script generation)</div>
                      <div>2. → Condor (TTS audio)</div>
                      <div>3. → Magpie SDC (sound design)</div>
                      <div>4. → Magpie Gather (asset download)</div>
                      <div>5. → Nightingale (mixing/mastering)</div>
                    </div>
                    <p className="text-xs">Estimated completion: 40-60 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">Checking Progress</h3>
              <p className="text-[var(--text-muted)] mb-4">
                Ask Claude Code to check the status of your workflow at any time:
              </p>
              <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="text-[var(--foreground)]">"What's the status of my episode job?"</div>
                <div className="mt-4 text-[var(--text-muted)] text-sm">
                  <div className="bg-[var(--background)] rounded-lg p-3 font-mono text-xs space-y-1">
                    <div>Current Jobs: 1</div>
                    <div>• Job workflow_01HABCDEFG123456789 (60% complete)</div>
                    <div className="ml-4">Status: Processing</div>
                    <div className="ml-4">Current Step: Magpie Gather</div>
                    <div className="ml-4">Progress: 3/5 steps complete</div>
                    <div className="ml-4">Time Remaining: 20-30 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Tools */}
        <section id="tools" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Available Tools
          </h2>
          <div className="space-y-6">
            {/* Tool 1 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                workflow_start_episode
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Start a complete async episode creation workflow. Returns immediately with a job ID.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">INPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "seriesId": "series-123",        // Required
  "topic": "Episode topic",        // Required
  "title": "Episode Title",        // Optional
  "researchData": "...",           // Optional
  "scriptOutline": "..."           // Optional
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">OUTPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01HABCDEFG123456789",
  "episodeId": "ep_01HABCDEFG123456789",
  "estimatedDuration": "40-60 minutes"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                workflow_get_job_status
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Get current status and progress of a workflow job. Poll this endpoint to track progress.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">INPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "jobId": "workflow_01HABCDEFG123456789"
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">OUTPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01HABCDEFG123456789",
  "status": "processing",
  "currentStep": "magpie_sdc",
  "progress": {
    "completed": 2,
    "total": 5,
    "percent": 40
  },
  "estimatedTimeRemaining": "25-35 minutes"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                workflow_cancel_job
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Cancel a running workflow job. Can only cancel jobs in queued or processing status.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">INPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "jobId": "workflow_01HABCDEFG123456789",
  "reason": "User requested cancellation"  // Optional
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">OUTPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobId": "workflow_01HABCDEFG123456789",
  "stepsCancelled": 3,
  "message": "Job cancelled successfully"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tool 4 */}
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                workflow_list_jobs
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                List workflow jobs with filtering options. Useful for monitoring active workflows.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">INPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "seriesId": "series-123",     // Optional filter
  "status": "processing",       // Optional filter
  "limit": 20                   // Optional (default: 50)
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">OUTPUT:</div>
                  <pre className="bg-[var(--background)] rounded-lg p-3 overflow-x-auto text-xs text-[var(--foreground)]">
{`{
  "success": true,
  "jobs": [
    {
      "jobId": "workflow_01HABCDEFG123456789",
      "episodeId": "ep_01HABCDEFG123456789",
      "status": "processing",
      "progress": { "percent": 60 },
      "currentStep": "magpie_gather"
    }
  ],
  "total": 1
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Best Practices
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Polling Intervals</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                Poll at reasonable intervals to balance responsiveness with server load:
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Recommended:</strong> 5-10 second intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span><strong>Too frequent:</strong> &lt;2 seconds (causes rate limiting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span><strong>Too slow:</strong> &gt;60 seconds (poor user experience)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Error Handling</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                Always handle both success and failure states:
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Check for both <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">completed</code> and <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">failed</code> status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Set reasonable timeouts (60 minutes recommended)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Provide clear error messages to users</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">User Feedback</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                Keep users informed of progress:
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Show current step and progress percentage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Display estimated time remaining</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Provide job ID for support and tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Job Stuck in Processing</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                If a job stays at the same step for more than 20 minutes:
              </p>
              <ol className="space-y-2 text-sm text-[var(--text-muted)] list-decimal list-inside">
                <li>Wait 5 more minutes (some steps are genuinely slow)</li>
                <li>Check the specific step that's running</li>
                <li>Cancel and retry if needed using <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">workflow_cancel_job</code></li>
              </ol>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Job Not Found</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                If you get a "job not found" error:
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Verify the job ID format (should start with <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">workflow_</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Use <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">workflow_list_jobs</code> to see active jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Check if the job was cancelled or the episode was deleted</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Progress Not Updating</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                If progress percentage stays the same:
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Verify you're calling <code className="text-xs bg-[var(--background)] px-1 py-0.5 rounded">workflow_get_job_status</code> each time (not caching)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Check individual step statuses in the response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>If stuck for more than 20 minutes, cancel and retry</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] rounded-2xl p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Ready to Get Started?</h2>
            <p className="text-[var(--text-muted)] mb-6 max-w-2xl mx-auto">
              Start automating your podcast episode creation with MCP workflow tools. Available now in Claude Code and Claude Desktop.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Back to Home
            </Link>
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
                Studio Dashboard
              </a>
              <a
                href="https://github.com/anthropics/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                Claude Code
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
