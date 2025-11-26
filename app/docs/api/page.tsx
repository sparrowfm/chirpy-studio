import { Wordmark } from '@/components/Wordmark';
import Link from 'next/link';

export const metadata = {
  title: 'REST API Documentation | Chirpy Studio',
  description: 'Complete REST API reference for Chirpy Studio - create AI-powered podcast episodes programmatically',
};

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/docs"
            className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
          >
            ← Back to Docs
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[#202635]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-black mb-6">
            <span className="gradient-text">REST API Reference</span>
          </h1>
          <p className="text-xl text-[#A7B0C0] max-w-2xl mx-auto mb-4">
            Build custom integrations with direct API access. Full control over the podcast creation pipeline.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Authentication */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Authentication</h2>
          <div className="gradient-border p-6">
            <p className="text-[#A7B0C0] mb-4">
              All API requests require authentication using an API key. Include your key in the request headers:
            </p>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-[#F97316]">X-API-Key: your_api_key_here</code>
            </div>
            <p className="text-[#5A6378] text-sm mt-4">
              Contact us to obtain API credentials for your organization.
            </p>
          </div>
        </section>

        {/* Base URL */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Base URL</h2>
          <div className="gradient-border p-6">
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm">
              <code className="text-[#D946EF]">https://api.chirpy.studio</code>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Endpoints</h2>

          {/* Create Episode */}
          <div className="gradient-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-mono">
                POST
              </span>
              <code className="text-white font-mono">/v1/episodes</code>
            </div>
            <p className="text-[#A7B0C0] mb-4">
              Create a new podcast episode. This initiates the full production pipeline including research, script generation, text-to-speech, and audio mixing.
            </p>

            <h4 className="text-white font-semibold mb-3">Request Body</h4>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre className="text-[#A7B0C0]">{`{
  "series_id": "string",      // Required: Your podcast series ID
  "topic": "string",          // Required: Episode topic or prompt
  "style": "narrative",       // Optional: "narrative" | "interview" | "educational"
  "duration_target": 300,     // Optional: Target duration in seconds
  "voice_id": "string",       // Optional: Voice profile ID
  "callback_url": "string"    // Optional: Webhook for completion notification
}`}</pre>
            </div>

            <h4 className="text-white font-semibold mb-3">Response</h4>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-[#A7B0C0]">{`{
  "episode_id": "ep_abc123",
  "status": "processing",
  "created_at": "2025-01-15T10:30:00Z",
  "estimated_completion": "2025-01-15T10:35:00Z"
}`}</pre>
            </div>
          </div>

          {/* Get Episode Status */}
          <div className="gradient-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">
                GET
              </span>
              <code className="text-white font-mono">/v1/episodes/:episode_id</code>
            </div>
            <p className="text-[#A7B0C0] mb-4">
              Get the status and details of an episode.
            </p>

            <h4 className="text-white font-semibold mb-3">Response</h4>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-[#A7B0C0]">{`{
  "episode_id": "ep_abc123",
  "status": "completed",
  "title": "The History of Coffee",
  "duration": 312,
  "audio_url": "https://cdn.chirpy.studio/episodes/ep_abc123.mp3",
  "transcript_url": "https://cdn.chirpy.studio/episodes/ep_abc123.json",
  "created_at": "2025-01-15T10:30:00Z",
  "completed_at": "2025-01-15T10:34:22Z"
}`}</pre>
            </div>
          </div>

          {/* List Episodes */}
          <div className="gradient-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">
                GET
              </span>
              <code className="text-white font-mono">/v1/series/:series_id/episodes</code>
            </div>
            <p className="text-[#A7B0C0] mb-4">
              List all episodes for a series.
            </p>

            <h4 className="text-white font-semibold mb-3">Query Parameters</h4>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre className="text-[#A7B0C0]">{`limit    // Number of results (default: 20, max: 100)
offset   // Pagination offset
status   // Filter by status: "processing" | "completed" | "failed"`}</pre>
            </div>
          </div>

          {/* Get Series */}
          <div className="gradient-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono">
                GET
              </span>
              <code className="text-white font-mono">/v1/series</code>
            </div>
            <p className="text-[#A7B0C0] mb-4">
              List all podcast series in your account.
            </p>
          </div>
        </section>

        {/* Status Codes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Status Codes</h2>
          <div className="gradient-border p-6">
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="text-green-400 w-12">200</span>
                <span className="text-[#A7B0C0]">Success</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400 w-12">201</span>
                <span className="text-[#A7B0C0]">Created</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 w-12">400</span>
                <span className="text-[#A7B0C0]">Bad Request - Invalid parameters</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 w-12">401</span>
                <span className="text-[#A7B0C0]">Unauthorized - Invalid or missing API key</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 w-12">404</span>
                <span className="text-[#A7B0C0]">Not Found - Resource doesn&apos;t exist</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 w-12">429</span>
                <span className="text-[#A7B0C0]">Rate Limited - Too many requests</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-400 w-12">500</span>
                <span className="text-[#A7B0C0]">Server Error</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Rate Limits</h2>
          <div className="gradient-border p-6">
            <p className="text-[#A7B0C0] mb-4">
              API requests are rate limited based on your subscription tier:
            </p>
            <ul className="space-y-2 text-[#A7B0C0]">
              <li className="flex items-center gap-2">
                <span className="text-[#F97316]">•</span>
                <span><strong>Starter:</strong> 10 episodes/day, 100 API calls/minute</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F97316]">•</span>
                <span><strong>Pro:</strong> 100 episodes/day, 500 API calls/minute</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F97316]">•</span>
                <span><strong>Enterprise:</strong> Custom limits</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Webhooks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Webhooks</h2>
          <div className="gradient-border p-6">
            <p className="text-[#A7B0C0] mb-4">
              When you provide a <code className="text-[#F97316]">callback_url</code>, we&apos;ll send a POST request when your episode completes:
            </p>
            <div className="bg-[#0B0E14] rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-[#A7B0C0]">{`{
  "event": "episode.completed",
  "episode_id": "ep_abc123",
  "status": "completed",
  "audio_url": "https://cdn.chirpy.studio/episodes/ep_abc123.mp3",
  "timestamp": "2025-01-15T10:34:22Z"
}`}</pre>
            </div>
            <p className="text-[#5A6378] text-sm mt-4">
              Webhook requests include an <code className="text-[#F97316]">X-Chirpy-Signature</code> header for verification.
            </p>
          </div>
        </section>

        {/* SDKs Coming Soon */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">SDKs & Libraries</h2>
          <div className="p-6 rounded-xl border border-[#202635] bg-[#10141D]/50">
            <p className="text-[#A7B0C0]">
              Official SDKs for Python, Node.js, and Go are coming soon. In the meantime, use any HTTP client to interact with the API.
            </p>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Need Help?</h2>
          <div className="gradient-border p-6">
            <p className="text-[#A7B0C0] mb-4">
              Questions about the API or need custom integration support?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[#F97316] hover:underline"
            >
              Contact our team →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#202635] mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#A7B0C0]">
            <Wordmark />
            <p>&copy; 2025 Chirpy Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
