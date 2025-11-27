import { Wordmark } from '@/components/Wordmark';
import { EmailSignupForm } from '@/components/EmailSignupForm';
import { ContactForm } from '@/components/ContactForm';
import { WaveformAnimationCSS } from '@/components/WaveformAnimation';

// Feature cards data
const features = [
  {
    title: 'Stories That Remember',
    description: 'Narrative continuity that spans episodes and seasons. Your content learns and evolves.',
    icon: '📖',
  },
  {
    title: 'Sound That Feels',
    description: 'Cinematic audio design with emotional intelligence. Not just speech—experiences.',
    icon: '🎧',
  },
  {
    title: 'Content That Scales',
    description: 'Premium quality at zero marginal cost. Finally, personalization is economically viable.',
    icon: '∞',
  },
];

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
              Request Early Access
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
            The <span className="gradient-text">AI-native studio</span><br />
            for narrative audio
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl text-[#A7B0C0] mb-4 opacity-0 animate-fade-in-up delay-200">
            From idea to podcast-ready episode in minutes, not months.
          </p>

          <p className="text-lg text-[#A7B0C0] max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-300">
            Chirpy Studio handles research, scripting, voice, sound design, and mixing—so you can focus on the stories that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-400">
            <a
              href="#signup"
              className="px-8 py-4 rounded-xl font-medium text-white text-lg shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              Request Early Access
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-medium text-white text-lg border border-[#202635] hover:border-[#F97316] transition-colors bg-[#10141D]"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#10141D]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            A new category of <span className="gradient-text">audio</span>
          </h2>
          <p className="text-[#A7B0C0] text-center mb-12 max-w-2xl mx-auto">
            Hyper-personalized narrative audio that was previously impossible to create economically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="gradient-border p-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#A7B0C0]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Badge */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm font-medium animate-float">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            Early Access Opening Soon
          </div>
          <p className="mt-6 text-[#A7B0C0] max-w-lg mx-auto">
            We&apos;re onboarding our first creators now. Request access to be among the first to transform how you produce audio content.
          </p>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="py-20 px-6 bg-[#10141D]/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Request <span className="gradient-text">early access</span>
          </h2>
          <p className="text-[#A7B0C0] mb-8">
            Join the waitlist and we&apos;ll reach out when a spot opens up.
          </p>
          <EmailSignupForm variant="stacked" buttonText="Request Access" />
          <p className="text-xs text-[#A7B0C0] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Let&apos;s <span className="gradient-text">talk</span>
          </h2>
          <p className="text-[#A7B0C0] text-center mb-8">
            Have questions? Want to explore a partnership? We&apos;d love to hear from you.
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
