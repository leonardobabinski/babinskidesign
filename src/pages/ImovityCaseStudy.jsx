import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import useReveal from '../hooks/use-reveal';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import palette from '../assets/imovity/palette.webp';
import symbolExplorations from '../assets/imovity/symbol-explorations.webp';
import weightExplorations from '../assets/imovity/weight-explorations.webp';
import guideline from '../assets/imovity/guideline.webp';
import finalStacked from '../assets/imovity/final-stacked.webp';
import finalTagline from '../assets/imovity/final-tagline.webp';
import finalSymbol from '../assets/imovity/final-symbol.webp';

const meta = [
  { label: 'Client', value: 'Imovity' },
  { label: 'Industry', value: 'CRM & Marketing' },
  { label: 'Year', value: '2024–2025' },
  { label: 'Deliverables', value: 'Logo, symbol, color palette, typography, brand guideline' },
];

const Figure = ({ src, alt, caption, className = '' }) => (
  <figure className={className}>
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto" />
    </div>
    {caption && <figcaption className="text-sm text-[#17323A]/70 mt-3">{caption}</figcaption>}
  </figure>
);

const Step = ({ number, title, children }) => (
  <div className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8">
    <div className="text-[#DABB52] font-bold text-4xl md:text-5xl leading-none">{number}</div>
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#17323A] mb-3">{title}</h3>
      <div className="text-[#17323A]/80 leading-relaxed space-y-3">{children}</div>
    </div>
  </div>
);

const ImovityCaseStudy = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-[#F0F8FF]">
      {/* Barra superior */}
      <header className="bg-[#17323A] text-[#F0F8FF]">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <a href="/" className="text-xl md:text-2xl font-bold">Babinski</a>
          <a href="/#portfolio" className="flex items-center gap-2 text-sm md:text-base hover:text-[#DABB52] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </a>
        </div>
      </header>

      {/* Abertura */}
      <section id="case-hero" className="bg-[#17323A] text-[#F0F8FF] pb-16 md:pb-24">
        <div className="container-custom max-w-5xl">
          <p className="text-[#DABB52] font-medium mb-4 pt-8 md:pt-12">Case study · Branding</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Imovity
          </h1>
          <p className="text-lg md:text-2xl text-[#F0F8FF]/90 max-w-3xl leading-relaxed mb-12">
            A brand identity for a CRM &amp; marketing startup, built from scratch while the product itself was
            still taking shape.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/15 pt-8 mb-12">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs uppercase tracking-wider text-[#F0F8FF]/60 mb-1">{m.label}</dt>
                <dd className="text-sm md:text-base">{m.value}</dd>
              </div>
            ))}
          </dl>

          <img
            src={finalTagline}
            alt="Imovity logo with the tagline CRM & Marketing on a deep blue background"
            fetchPriority="high"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* O desafio */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17323A] mb-6">The challenge</h2>
          <div className="text-[#17323A]/80 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Imovity&apos;s founders were getting ready to pitch their MVP and launch the company publicly. They had a
              name and a direction, but no visual identity: nothing to put on a pitch deck, a landing page or a
              LinkedIn page.
            </p>
            <p>
              They wanted a brand that felt as clean and modern as the software platforms they admired, worked on a
              light interface and could later support a dark mode.
            </p>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom max-w-5xl space-y-16 md:space-y-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17323A]">The process</h2>

          <div className="space-y-8">
            <Step number="01" title="Starting from color">
              <p>
                Before drawing any shapes, I proposed a foundation: a range of deep blues, from almost-black navy
                to a bright accent, a color that signals the trust a CRM needs. The founders also wanted to know how
                the blues would sit next to the near-black of their landing page, so dark-mode contrast was part of
                the brief from day one.
              </p>
            </Step>
            <Figure src={palette} alt="Five shades of blue from dark navy to bright blue" caption="The initial blue range that guided the whole identity." className="md:ml-[152px] max-w-2xl" />
          </div>

          <div className="space-y-8">
            <Step number="02" title="Leaving the obvious monogram behind">
              <p>
                The first instinct was an &quot;IM&quot; monogram, but every version felt generic, like a hundred other
                startups. So I moved to an abstract symbol: two interlocking rings with yellow accent points, a mark
                that pairs naturally with the wordmark and can stand on its own once people know the brand.
              </p>
              <p>
                I presented several symbol and color variations. The team picked the first one for its clean feel,
                which became the direction for everything else.
              </p>
            </Step>
            <Figure src={symbolExplorations} alt="Four variations of the Imovity logo in blue and yellow" caption="Symbol and color explorations. The first option was the one chosen." className="md:ml-[152px] max-w-xl" />
          </div>

          <div className="space-y-8">
            <Step number="03" title="Finding the right weight">
              <p>
                With the symbol defined, I tested the wordmark in different weights of the same typeface. The regular
                weight looked clean and elegant, but the founders wanted a heavier look, and the bold version gave
                the logo more presence, so bold became the final wordmark.
              </p>
            </Step>
            <Figure src={weightExplorations} alt="Imovity wordmark in regular, bold and extra bold weights" caption="Same typeface, three weights. Bold won." className="md:ml-[152px] max-w-2xl" />
          </div>

          <div className="space-y-8">
            <Step number="04" title="Putting it all in one guideline">
              <p>
                To keep the project moving, I organized everything into a single brand guideline the team could use
                right away: the story and values behind the brand, logo usage, color palette and color psychology,
                typography, imagery and tone of voice.
              </p>
            </Step>
            <Figure src={guideline} alt="Overview of the Imovity brand guideline pages" caption="Pages from the Imovity brand guideline, straight from the working file." className="md:ml-[152px]" />
          </div>
        </div>
      </section>

      {/* Resultado */}
      <section className="bg-[#17323A] py-16 md:py-24">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F8FF] mb-6">The result</h2>
          <p className="text-[#F0F8FF]/85 text-base md:text-lg leading-relaxed max-w-3xl mb-12">
            The identity was approved by the founders, who said it had exactly the touch they had talked about. It
            went straight into use: the new logo launched Imovity&apos;s LinkedIn page, and the brand has grown with the
            company as the team expanded.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
            <img src={finalSymbol} alt="Imovity symbol" loading="lazy" className="w-full rounded-xl" />
            <img src={finalStacked} alt="Imovity stacked logo" loading="lazy" className="w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="bg-[#DABB52] py-16 md:py-20">
        <div className="container-custom max-w-3xl text-center">
          <blockquote className="text-[#17323A] text-lg md:text-2xl leading-relaxed font-medium mb-6">
            &ldquo;Leonardo was essential in translating Imovity&rsquo;s essence into a unique and memorable visual
            identity. The result went far beyond our expectations: a modern, professional, and full-of-personality
            identity that perfectly conveys Imovity&rsquo;s purpose.&rdquo;
          </blockquote>
          <p className="text-[#17323A] font-semibold">Renan Pinheiro</p>
          <p className="text-[#17323A]/70 text-sm">CEO, Imovity</p>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17323A] mb-4">Have a project in mind?</h2>
          <p className="text-[#17323A]/80 mb-8">Let&apos;s build a brand that feels like yours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Let&apos;s talk <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.behance.net/gallery/216802011/Imovity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#17323A]/30 text-[#17323A] font-semibold hover:border-[#17323A] transition-colors"
            >
              Full project on Behance <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#17323A]">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ImovityCaseStudy;
