import { Wordmark } from '@/components/Wordmark';
import { EmailSignupForm } from '@/components/EmailSignupForm';
import { ContactForm } from '@/components/ContactForm';
import { WaveformAnimationCSS } from '@/components/WaveformAnimation';
import { AudioShowcase } from '@/components/AudioShowcase';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-[#202635]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Wordmark className="scale-90" />
          <div className="flex items-center gap-4">
            <a
              href="/docs"
              className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="#signup"
              className="text-sm px-4 py-2 rounded-full font-medium text-white"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Waveform */}
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <WaveformAnimationCSS />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up delay-100">
            From idea to <span className="gradient-text">podcast</span> in minutes
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl text-[#A7B0C0] mb-12 opacity-0 animate-fade-in-up delay-200">
            AI-powered production. Full creative control. Ready-to-publish RSS.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in-up delay-300">
            <a
              href="#signup"
              className="inline-block px-8 py-4 rounded-xl font-medium text-white text-lg shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Audio Samples Showcase */}
      <AudioShowcase />

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#10141D]/50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-2xl sm:text-3xl text-[#A7B0C0] leading-relaxed">
            Deep research. Vivid storytelling. Rich sound design. One-click publishing.
          </p>
          <p className="text-lg text-[#A7B0C0]">
            AI agents that handle the heavy lifting—while you stay in the driver&apos;s seat.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Built for <span className="gradient-text">storytellers at every scale</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">🎙️</div>
              <p className="text-sm text-[#A7B0C0]">Podcasters</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🏢</div>
              <p className="text-sm text-[#A7B0C0]">Brands</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📚</div>
              <p className="text-sm text-[#A7B0C0]">Publishers</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🚀</div>
              <p className="text-sm text-[#A7B0C0]">Small Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-12 px-6 bg-[#10141D]/50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#A7B0C0]">
            Built by a team from one of the great podcast storytelling companies of our time.
          </p>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be the <span className="gradient-text">first to know</span>
          </h2>
          <p className="text-[#A7B0C0] mb-8">
            We&apos;ll be in touch.
          </p>
          <EmailSignupForm variant="stacked" buttonText="Join Waitlist" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#10141D]/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="text-[#A7B0C0] text-center mb-8">
            Curious? Want to see our deck? We&apos;d love to hear from you.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#202635]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Wordmark className="scale-75" />
            <div className="flex items-center gap-6 text-sm text-[#A7B0C0]">
              <a href="/docs" className="hover:text-white transition-colors">Docs</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#202635] text-center text-sm text-[#A7B0C0]">
            <p>&copy; 2025 Chirpy Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
