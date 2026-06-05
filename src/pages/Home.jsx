/*
  Home — landing page.
  Sections: Hero → What Is It (split) → Who It's For → Why It Works (6-card grid) → Developer CTA.

  The "Why It Works" grid uses a gap-px pattern: the parent has a light gray background
  and children have white backgrounds — the gray shows through as 1px separators.
  AnimateOnScroll wrappers inside the grid need className="h-full" or cards won't fill
  their cells and gray will bleed above/below.
*/
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimateOnScroll from '../components/AnimateOnScroll'
import heroImage from '../assets/hero.jpg'
import locationImage from '../assets/location.jpg'

const tenantTypes = [
  'General Contractors',
  'Plumbers, Electricians & HVAC',
  'Landscapers & Irrigation',
  'Mobile Service Businesses',
  'Hobbyists & Car Collectors',
  'E-Commerce & Light Storage',
  'Entrepreneurs & Start-Ups',
  'Restoration & Detailing',
]

const whyCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h16v4M4 16v4h16v-4M4 12h16" />
      </svg>
    ),
    title: 'Right-Sized Units',
    body: '500–1,500 SF bays match exactly what small trade businesses actually need — not a cramped storage unit, not an oversized flex suite.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15v-4h-2v4H9l3 3 3-3h-2zm0-8V5h-2v4H9l3-3 3 3h-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M9 11l3 3 3-3" />
      </svg>
    ),
    title: 'Affordable Rents',
    body: 'Below market flex rates mean tenants stay for years. Low churn keeps your NOI predictable and your headaches minimal.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Recession Resistant',
    body: 'Tradespeople are among the last to cut workspace. Demand held strong in 2008 and through every cycle since — by design.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M4.582 9A8 8 0 0119.419 15M19.418 15A8 8 0 014.581 9" />
      </svg>
    ),
    title: 'Repeatable by Design',
    body: 'The model is intentionally simple and standardized. Once you build one, you know exactly how to build the next — in any market.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Simple to Build',
    body: 'No complex HVAC, no restrooms, no storefront build-out. Basic industrial construction with strong returns — developers love the economics.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: 'Strong Occupancy',
    body: 'Kevin\'s projects routinely fill before construction is complete. The demand is there — it\'s been underserved for decades.',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-40 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold uppercase tracking-[0.22em] text-[#C85A0A] text-sm mb-5"
          >
            The Original Since 2008
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-white uppercase leading-none text-[clamp(3.5rem,10vw,7.5rem)] mb-7"
          >
            Space Built<br />for the<br />Trades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Large-bay industrial workspace for contractors, tradespeople, and small
            businesses. More than mini storage. Less overhead than flex. The right
            fit — finally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/locations"
              className="inline-block font-display font-bold uppercase tracking-wider text-sm bg-[#C85A0A] text-white px-8 py-3.5 hover:bg-[#A84808] transition-colors"
            >
              Find a Location
            </Link>
            <Link
              to="/brand-with-us"
              className="inline-block font-display font-bold uppercase tracking-wider text-sm border-2 border-white text-white px-8 py-3.5 hover:bg-white hover:text-[#1A1A1A] transition-colors"
            >
              Developer Consulting →
            </Link>
          </motion.div>
        </div>

        {/* Stats bottom-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-10 right-8 lg:right-12 hidden lg:flex items-end gap-8"
        >
          {[
            { value: '10+', label: 'Projects' },
            { value: '15+', label: 'Years' },
            { value: '~1,000', label: 'Sq Ft / Unit' },
          ].map(({ value, label }) => (
            <div key={label} className="text-right">
              <div className="font-display font-black text-[#C85A0A] text-4xl leading-none">{value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-1 font-display font-semibold">{label}</div>
            </div>
          ))}
          <div className="w-px h-10 bg-white/20 self-center ml-2" />
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </section>

      {/* ── WHAT IS IT ────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left: copy */}
            <div className="px-8 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
              <AnimateOnScroll>
                <p className="font-display font-bold uppercase tracking-[0.2em] text-[#C85A0A] text-xs mb-4">
                  The Concept
                </p>
                <h2 className="font-display font-black text-[#1A1A1A] uppercase leading-none text-5xl lg:text-6xl mb-8">
                  Something Better<br />Than Storage.<br />
                  <span className="text-[#C85A0A]">Less Overhead<br />Than Flex.</span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <p className="text-[#1A1A1A]/70 text-base lg:text-lg leading-relaxed mb-6">
                  Contractor Garage™ fills a gap that has been overlooked for decades.
                  It's not a storage unit — tenants work out of these spaces every day.
                  It's not flex office — there's no HVAC to pay for, no restrooms, no
                  storefront buildout eating your margins.
                </p>
                <p className="text-[#1A1A1A]/70 text-base lg:text-lg leading-relaxed mb-10">
                  What it is: a 500–1,500 SF bay with a 10-foot overhead door, basic
                  electric, and a concrete floor. The right size. The right price.
                  Something that actually works for the trades.
                </p>
                <Link
                  to="/about"
                  className="inline-block font-display font-bold uppercase tracking-wider text-sm text-[#C85A0A] border-b-2 border-[#C85A0A] pb-0.5 hover:text-[#A84808] hover:border-[#A84808] transition-colors"
                >
                  About the Founder →
                </Link>
              </AnimateOnScroll>
            </div>

            {/* Right: photo */}
            <div
              className="min-h-80 lg:min-h-0 bg-gray-700"
              style={{
                backgroundImage: `url(${locationImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <p className="font-display font-bold uppercase tracking-[0.2em] text-[#C85A0A] text-xs mb-4">
              Tenant Profile
            </p>
            <h2 className="font-display font-black text-white uppercase leading-none text-5xl lg:text-6xl mb-14">
              Who It's For
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tenantTypes.map((type, i) => (
              <AnimateOnScroll key={type} delay={i * 0.05}>
                <div className="flex items-start gap-3 group">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#C85A0A]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#C85A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-body font-medium text-sm leading-snug group-hover:text-white transition-colors">
                    {type}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ─────────────────────────────────────── */}
      <section className="bg-[#F7F6F4] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <p className="font-display font-bold uppercase tracking-[0.2em] text-[#C85A0A] text-xs mb-4">
              The Investment Case
            </p>
            <h2 className="font-display font-black text-[#1A1A1A] uppercase leading-none text-5xl lg:text-6xl mb-14">
              Why It Works
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/10">
            {whyCards.map(({ icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.07} className="h-full">
                <div className="h-full bg-white p-8 lg:p-10 group hover:bg-[#1A1A1A] transition-colors duration-300">
                  <div className="text-[#C85A0A] mb-5">{icon}</div>
                  <h3 className="font-display font-black uppercase text-xl text-[#1A1A1A] group-hover:text-white mb-3 transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                    {body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPER CTA BAND ───────────────────────────────── */}
      <section className="bg-[#C85A0A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-display font-bold uppercase tracking-[0.2em] text-white/60 text-xs mb-3">
                  For Developers &amp; Investors
                </p>
                <h2 className="font-display font-black text-white uppercase leading-tight text-4xl lg:text-5xl">
                  Are You a Developer?<br />Build One in Your Market.
                </h2>
              </div>
              <Link
                to="/brand-with-us"
                className="flex-shrink-0 inline-block font-display font-bold uppercase tracking-wider text-sm bg-white text-[#C85A0A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                See How It Works →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
