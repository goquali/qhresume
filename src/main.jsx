import React, {useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion} from 'framer-motion';
import {ArrowUpRight, BrainCircuit, Building2, CheckCircle2, Download, GraduationCap, LineChart, Network, Sparkles, TerminalSquare, Users} from 'lucide-react';
import './styles.css';

const experience = [
  {
    company:'HighLevel', role:'Global Chief People Officer', period:'July 2024 - Present',
    headline:'Scaling an AI-powered, remote-first software company across global markets.',
    points:['Leads global people strategy, operating infrastructure, talent systems, analytics, and organizational design for a fully distributed company across 10+ countries.','Helped scale the organization from roughly 800 to 2,200+ employees globally while supporting growth from about $200M to $500M+ in annual revenue.','Modernized HR technology and people operations for a workforce with a significant international footprint, including India, US, Philippines, Mexico, and other regions.','Partners with CEO, founders, executive team, and board-facing stakeholders on org design, executive hiring, compensation, governance, and scaling systems.']
  },
  {
    company:'Airbnb', role:'Senior People and Organizational Leadership Roles', period:'July 2018 - March 2023',
    headline:'Did the job at OpenAI-like scale: hypergrowth, contraction, IPO, and post-public operating maturity.',
    points:['Joined when Airbnb was approximately 3,000 employees and helped scale to 8,000+ globally in roughly 18 months before supporting organizational redesign during COVID.','Served as Airbnb’s first global People Operations leader, helping build the systems, operating model, and workforce infrastructure needed for global scale.','Played leadership roles through IPO readiness, public company transition, and two years of post-IPO operating evolution.','Helped evolve people systems across technical, product, business, and international organizations while preserving innovation velocity and culture.']
  },
  {
    company:'Paper', role:'Chief People Officer', period:'April 2023 - April 2024',
    headline:'Led people strategy for a mission-driven education technology company.',
    points:['Led global people strategy, organizational redesign, workforce planning, and operating systems during a critical business transformation period.','Partnered with executive leadership on leadership infrastructure, talent strategy, and distributed team effectiveness.']
  }
];

const proof = [
  {label:'Airbnb hypergrowth', value:'3K → 8K+ in 18 months', icon: Building2},
  {label:'JLL enterprise scale', value:'50K+ employees', icon: Users},
  {label:'IPO experience', value:'Airbnb IPO + 2 yrs post', icon: LineChart},
  {label:'Technical fluency', value:'Engineer → Founder → CPO', icon: TerminalSquare},
  {label:'AI leadership', value:'PeopleGPT + Global People Labs founder', icon: BrainCircuit},
  {label:'Investor + educator', value:'London Business School', icon: GraduationCap},
];

const fit = [
  ['People science + operations','Built people operating systems across hypergrowth, distributed organizations, and public-company readiness.'],
  ['AI-native workforce design','Founded PeopleGPT and teaches HR + AI, with a clear point of view on human + AI operating models.'],
  ['Technical credibility','Engineering background plus years partnering with technical, product, and executive teams in complex technology companies.'],
  ['OpenAI-relevant scale','Airbnb experience maps directly to the complexity of scaling a generational technology company before and after IPO.']
];

function App(){
  const [active,setActive]=useState(1);
  const selected = experience[active];
  const print = () => window.print();
  return <div className="page">
    <div className="orb one"/><div className="orb two"/>
    <nav>
      <div className="brand">Q Hamirani</div>
      <div className="navlinks"><a href="#fit">Fit</a><a href="#experience">Experience</a><a href="#ideas">Ideas</a><a href="https://www.linkedin.com/in/hamirani" target="_blank">Resume</a><a href="#cover-letter">Cover Letter</a><button onClick={print}><Download size={16}/> Print / Save PDF</button></div>
    </nav>

    <main>
      <section className="hero">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><Sparkles size={16}/><span>Candidate profile for OpenAI Head of People Science & Operations</span></div>
          <h1>Engineer turned global CPO building human + AI operating systems at scale.</h1>
          <p className="lead">I have already lived the journey OpenAI is entering: scaling an iconic technology company through hypergrowth, complexity, contraction, IPO readiness, public-company transition, and the work of preserving innovation while adding durable operating systems.</p>
          <div className="cta-row"><a className="primary" href="https://www.linkedin.com/in/hamirani" target="_blank">LinkedIn <ArrowUpRight size={17}/></a><a className="secondary" href="https://openai.com/careers/head-of-people-science-and-operations-san-francisco/" target="_blank">Role alignment <ArrowUpRight size={17}/></a></div>
        </motion.div>
        <motion.div className="hero-side" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}}>
          <img className="profile-photo" src="/q-hamirani.jpg" alt="Q Hamirani" />
          <div className="signal-card">
            <div className="signal-title">Why this is not a traditional profile</div>
            <p>Technical foundation. Hypergrowth operator. IPO experience. AI educator. Founder mindset. Global CPO with systems orientation.</p>
            <a className="signal-line signal-link" href="https://www.youtube.com/watch?v=PurwrzkPcKo" target="_blank" rel="noreferrer"><span/> Culture as an operating system, not a slogan. <ArrowUpRight size={16}/></a>
            <div className="signal-line"><span/> AI as capability amplification, not headcount replacement.</div>
            <div className="signal-line"><span/> People science grounded in systems, data, and execution.</div>
          </div>
        </motion.div>
      </section>

      <section className="proof-grid">
        {proof.map((p,i)=>{const Icon=p.icon; return <motion.div className="proof" key={p.label} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} transition={{delay:i*.04}} viewport={{once:true}}><Icon size={21}/><div><strong>{p.value}</strong><span>{p.label}</span></div></motion.div>})}
      </section>

      <section id="fit" className="section two-col">
        <div><div className="kicker"><span>Role fit</span></div><h2>What OpenAI gets</h2><p className="section-lead">A people systems leader who can operate with technical credibility, executive range, and the pattern recognition of someone who has scaled a generational company before.</p></div>
        <div className="fit-list">{fit.map(([h,b])=><div className="fit" key={h}><CheckCircle2 size={20}/><div><strong>{h}</strong><p>{b}</p></div></div>)}</div>
      </section>

      <section id="experience" className="section">
        <div className="kicker"><span>Selected experience</span></div><h2>Proof across OpenAI-relevant moments</h2>
        <div className="tabs">{experience.map((e,i)=><button className={active===i?'active':''} onClick={()=>setActive(i)} key={e.company}>{e.company}</button>)}</div>
        <motion.div key={selected.company} className="exp-card" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.25}}>
          <div className="exp-head"><div><h3>{selected.company}</h3><p>{selected.role}</p></div><span>{selected.period}</span></div>
          <h4>{selected.headline}</h4>
          <ul>{selected.points.map(p=><li key={p}>{p}</li>)}</ul>
        </motion.div>
      </section>

      <section id="ideas" className="section two-col dark-card">
        <div><div className="kicker"><span>Operating philosophy</span></div><h2>The next organization will not scale through headcount alone.</h2><p>It will scale through systems, judgment, AI augmentation, leadership infrastructure, and human capability design.</p></div>
        <div className="idea-stack">
          <div><Network size={20}/><strong>Systems over programs</strong><p>Design the operating architecture that makes good decisions repeatable.</p></div>
          <div><BrainCircuit size={20}/><strong>AI-native work design</strong><p>Redesign workflows so people expand leverage, quality, and judgment.</p></div>
          <div><Users size={20}/><strong>Human at the center</strong><p>Use technology to amplify people, not strip the humanity from work.</p></div>
        </div>
      </section>

      <section id="cover-letter" className="section compact cover-letter">
        <div className="kicker"><span>Cover letter</span></div><h2>Why OpenAI, why this role</h2>
        <p>OpenAI Team,</p>
        <p>I am excited to express my interest in the Head of People Science and Operations role. My career has centered on helping organizations scale through moments of profound technological and organizational change. As an engineer turned founder turned Chief People Officer, I have operated at the intersection of people, systems, and technology across high-growth startups, scaled public companies, and global enterprises.</p>
        <p>At Airbnb, I helped scale the company from roughly 3,000 to 8,000+ employees globally in about 18 months, and then helped navigate the organization through COVID, IPO readiness, public-company transition, and post-IPO operating maturity. At HighLevel, I now lead the global people function for a hypergrowth, AI-powered, remote-first technology company, where I have used OpenAI tools and AI-native workflows to rethink how a modern people function operates.</p>
        <p>What makes this role especially compelling is the opportunity to help shape how organizations evolve in an AI-first world. I believe the next generation of companies will not scale through headcount alone. They will scale through systems, AI augmentation, judgment, leadership infrastructure, and human capability design.</p>
        <p>OpenAI sits at the center of one of the most important technological shifts of our generation. The opportunity to help build the people science, operational systems, and leadership infrastructure that support that mission would be deeply meaningful.</p>
        <p>Q Hamirani</p>
      </section>

      <section className="section compact">
        <div className="kicker"><span>External credibility</span></div><h2>Speaker, investor, founder, advisor</h2>
        <p>Founder of PeopleGPT and Global People Labs. Guest faculty contributor at London Business School. Keynote speaker and educator on AI, HR, leadership, organizational systems, and the future of work. Investor and advisor to founders and executives building the next generation of people and work technology.</p>
      </section>
    </main>
    <footer>Built as an interactive executive profile for OpenAI recruiting conversations • Q Hamirani</footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
