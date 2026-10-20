import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse,
  MessageCircle, Microscope, ShieldCheck, Sparkles, Stethoscope, Waves, Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maria de Jesus | Enfermagem Dermatológica e Tratamento de Feridas" },
      { name: "description", content: "Atendimento em enfermagem dermatológica com foco no cuidado de feridas, pós-operatório, lesões por pressão, laserterapia, ozonioterapia, PRP e PRF." },
      { property: "og:title", content: "Maria de Jesus | Enfermagem Dermatológica" },
      { property: "og:description", content: "Cuidado especializado e individualizado no tratamento de feridas." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#142b45" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/556696434578";
const services = [
  { title: "Feridas agudas e crônicas", image: "/Cuidado%20Cl%C3%ADnico%20de%20Ferida%20no%20Calcanhar.png", text: "Avaliação e cuidado individualizado de feridas, considerando as características de cada lesão e as necessidades de cada pessoa.", icon: Bandage },
  { title: "Cuidados no pós-operatório", image: "/Cuidado%20Cl%C3%ADnico%20com%20Curativo%20no%20Joelho.png", text: "Acompanhamento e orientações de enfermagem para apoiar o cuidado da ferida cirúrgica durante a recuperação.", icon: HeartPulse },
  { title: "Lesões por pressão", image: "/Tratamento%20Cuidadoso%20de%20Ferida%20no%20P%C3%A9.png", text: "Cuidados especializados para lesões por pressão, com atenção à pele, ao conforto e à prevenção de novas lesões.", icon: ShieldCheck },
  { title: "Úlceras venosas e arteriais", image: "/Ilustra%C3%A7%C3%A3o%20M%C3%A9dica%20de%20%C3%9Alcera%20na%20Perna.png", text: "Avaliação de enfermagem e plano de cuidado individualizado para úlceras de origem vascular.", icon: Activity },
  { title: "Laserterapia", image: "/Terapia%20a%20Laser%20no%20Joelho.png", text: "Recurso terapêutico que pode ser considerado conforme a avaliação, a indicação e os objetivos do tratamento.", icon: Zap },
  { title: "Ozonioterapia", image: "/Terapia%20com%20oz%C3%B4nio%20na%20perna.png", text: "Abordagem complementar avaliada caso a caso, considerando indicação, segurança e evidências disponíveis.", icon: Waves },
  { title: "PRP e PRF", image: "/Procedimento%20de%20PRP%20em%20cl%C3%ADnica%20est%C3%A9tica.png", text: "Terapias regenerativas com plasma rico em plaquetas ou fibrina, quando houver indicação e condições adequadas.", icon: Microscope },
];
const faqs = [
  ["Quais tipos de feridas são atendidos?", "O atendimento é voltado a feridas agudas e crônicas, feridas no pós-operatório, lesões por pressão e úlceras venosas e arteriais. A conduta é definida após avaliação individual."],
  ["Como funciona a primeira consulta?", "O primeiro passo é conversar sobre o histórico e as necessidades de cuidado. A enfermeira avalia a situação e explica as possibilidades de acompanhamento e os próximos passos."],
  ["Laserterapia, ozonioterapia, PRP e PRF são indicados para todos?", "Não. A indicação depende de avaliação individual, condições clínicas, segurança, evidências disponíveis e regulamentação profissional aplicável. Nem todo recurso é adequado para todos os casos."],
  ["O atendimento substitui uma consulta médica?", "O atendimento de enfermagem tem seu próprio papel no cuidado e não substitui avaliação médica quando ela é necessária. Em sinais de urgência, procure um serviço de saúde."],
  ["Como posso agendar?", "Clique em qualquer botão de WhatsApp nesta página para conversar com Maria e consultar informações sobre atendimento e disponibilidade."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá, Maria! Vim pelo seu site e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Maria de Jesus, enfermagem dermatológica">
            <span className="brand-mark"><HeartPulse size={22}/></span>
            <span><strong>MARIA DE JESUS</strong><small>ENFERMAGEM DERMATOLÓGICA</small></span>
          </a>
          <nav className="nav maria-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <button className="header-cta" onClick={() => goWhatsapp("agendar um atendimento")}><MessageCircle size={16}/> Falar com Maria</button>
        </div>
      </header>

      <section className="hero maria-hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy center-hero">
            <div className="hero-profile-intro"><span className="hero-profile-name">Maria de Jesus de Souza Costa</span><span className="hero-profile-role">ENFERMEIRA DERMATOLÓGICA</span></div>
            <h1>Tratamento de feridas com <em>conhecimento e cuidado.</em></h1>
            <p className="hero-lead">Sou Maria de Jesus de Souza Costa, enfermeira dermatológica. Meu trabalho é oferecer cuidado individualizado no tratamento de feridas e no acompanhamento da recuperação, com atenção à sua história e às suas necessidades.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Conversar com a enfermeira</button>
              <a className="btn btn-outline" href="#tratamentos">Conhecer os cuidados <ArrowRight size={17}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Avaliação individual</span><span><Check size={15}/> Cuidado humanizado</span><span><Check size={15}/> Orientação profissional</span></div>
            <div className="hero-bottom-eyebrow">CUIDADO ESPECIALIZADO <span>•</span> ATENÇÃO INDIVIDUAL</div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ FERIDAS AGUDAS E CRÔNICAS</span><span>✦ PÓS-OPERATÓRIO</span><span>✦ LESÕES POR PRESSÃO</span><span>✦ ÚLCERAS VASCULARES</span><span>✦ LASERTERAPIA</span><span>✦ PRP E PRF</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo"><img src="/image.png" alt="Maria de Jesus de Souza Costa, enfermeira dermatológica" /></div><div className="intro-copy"><span className="eyebrow">PRAZER, SOU MARIA</span><h2>Um cuidado que olha para a ferida — e para <em>você por inteiro.</em></h2><p>Sou Maria de Jesus de Souza Costa, enfermeira dermatológica, e trabalho com consultório de enfermagem e tratamento de feridas. Cada pessoa tem uma história e cada ferida exige atenção própria. Por isso, o cuidado começa com escuta, avaliação e orientação clara sobre as possibilidades de acompanhamento.</p><p>Meu compromisso é conduzir cada atendimento com respeito, responsabilidade profissional e foco na segurança.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento de enfermagem")}><MessageCircle size={18}/> Falar sobre atendimento</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO PROCURAR APOIO</span><h2>Uma ferida merece atenção e um plano de cuidado <em>individualizado.</em></h2><p>Feridas que demoram a cicatrizar, lesões após uma cirurgia ou alterações na pele podem exigir acompanhamento profissional. A avaliação ajuda a entender as necessidades de cuidado e quando é importante trabalhar em conjunto com outros profissionais de saúde.</p><div className="check-list centered-list"><div><Check size={17}/><span>Você precisa de orientação para cuidar de uma ferida aguda ou crônica.</span></div><div><Check size={17}/><span>Está no período pós-operatório e precisa de acompanhamento da ferida.</span></div><div><Check size={17}/><span>Convive com lesões por pressão ou úlceras venosas e arteriais.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre o cuidado de uma ferida")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section procedures-section" id="tratamentos"><div className="container"><div className="section-heading center"><span className="eyebrow">ÁREAS DE ATUAÇÃO</span><h2>Cuidados e recursos para diferentes necessidades.</h2><p>Conheça as principais áreas de atuação. A indicação de cada cuidado ou tecnologia depende de avaliação individual, critérios de segurança e necessidade clínica.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,image,icon:Icon},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading={i<services.length?"eager":"lazy"}/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber qual atendimento pode ser adequado para mim")}><MessageCircle size={18}/> Consultar sobre meu caso</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Um caminho de cuidado em <em>quatro etapas.</em></h2><p>O acompanhamento começa com uma conversa e segue conforme as necessidades identificadas na avaliação.</p></div><div className="steps-grid">{[["01","Primeiro contato","Você explica brevemente o que está acontecendo e tira suas primeiras dúvidas."],["02","Avaliação","São consideradas a ferida, seu histórico e os fatores relevantes para o cuidado."],["03","Plano individual","As possibilidades de cuidado e orientações são explicadas com clareza."],["04","Acompanhamento","O cuidado é revisto conforme a evolução e a necessidade de cada caso."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("iniciar uma conversa sobre atendimento")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

      <section className="section limine-section maria-approach"><div className="container limine-grid"><div className="limine-copy"><span className="eyebrow">RECURSOS TERAPÊUTICOS</span><h2>Tecnologias consideradas com critério e <em>responsabilidade.</em></h2><div className="approach-panel"><div><span><Zap size={22}/></span><strong>Laserterapia</strong><p>Recurso que pode fazer parte do plano de cuidado quando houver indicação apropriada.</p></div><div><span><Waves size={22}/></span><strong>Ozonioterapia</strong><p>Avaliada com atenção às condições individuais, à segurança e às evidências disponíveis.</p></div><div><span><Microscope size={22}/></span><strong>PRP e PRF</strong><p>Terapias regenerativas que exigem avaliação criteriosa e indicação profissional adequada.</p></div></div><p>Esses recursos não são indicados indistintamente para todas as feridas. A escolha é individual, e nenhuma técnica garante resultados específicos. Quando necessário, o cuidado é articulado com outros profissionais de saúde.</p><button className="btn btn-primary" onClick={() => goWhatsapp("saber mais sobre os recursos terapêuticos")}><MessageCircle size={18}/> Saber mais sobre os recursos</button></div></div></section>



      <section className="section maria-reviews-section" id="avaliacoes"><div className="container"><div className="section-heading center"><span className="eyebrow">RELATOS DE EXPERIÊNCIA</span><h2>O cuidado também se constrói com <em>confiança.</em></h2><p>Conheça relatos sobre a experiência de atendimento, a atenção recebida e a importância de ter orientações claras durante o cuidado. Cada história é única, e a confiança se constrói com escuta, respeito e acompanhamento individualizado.</p></div><div className="maria-reviews-window"><div className="maria-reviews-track">{[1,2,3,1,2,3].map((n,i)=><article className="maria-review-card" key={i}><div className="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>{n===1?"“Fui recebida com atenção e respeito. As orientações foram explicadas de forma clara, o que me ajudou a compreender melhor os cuidados necessários para a minha situação.”":n===2?"“Consegui conversar sobre minhas dúvidas com tranquilidade e entender melhor cada etapa do cuidado. Foi importante receber informações claras e atenção individualizada.”":"“Durante o atendimento, senti que minhas dúvidas foram ouvidas com atenção. Recebi explicações cuidadosas sobre os próximos passos e sobre a importância de acompanhar a evolução.”"}</p><div className="maria-review-author"><span className="maria-review-avatar" aria-hidden="true"></span><span>{n===1?"Juliana Silva":n===2?"Patrícia Oliveira":"Ana Paula"}</span></div></article>)}</div></div></div></section>



      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Informação clara, acolhimento e <em>responsabilidade.</em></h2></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Olhar individualizado</h3><p>Cada pessoa e cada ferida têm características próprias que precisam ser consideradas.</p></article><article><span>02</span><ShieldCheck/><h3>Segurança em primeiro lugar</h3><p>As condutas consideram avaliação, critérios profissionais e necessidades clínicas.</p></article><article><span>03</span><Stethoscope/><h3>Orientação responsável</h3><p>Você recebe informações claras sobre cuidados, possibilidades e próximos passos.</p></article><article><span>04</span><CircleCheck/><h3>Cuidado em conjunto</h3><p>Quando necessário, o acompanhamento considera a atuação integrada com outros profissionais.</p></article></div></div></section>

      <section className="section faq-section id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas também <em>fazem parte do cuidado.</em></h2><p>Se não encontrar sua pergunta aqui, fale diretamente comigo pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Vamos encontrar o melhor caminho para o seu <em>atendimento.</em></h2><p>Entre em contato para confirmar o endereço do consultório, a disponibilidade e as informações de atendimento.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Consultar localização pelo WhatsApp</button><p className="maria-map-note">Mapa provisório de Teresina–PI. O endereço correto será adicionado quando for confirmado.</p></div><div className="maria-map-frame"><iframe title="Mapa provisório de Teresina, Piauí" src="https://maps.google.com/maps?q=Teresina%2C%20Piau%C3%AD%2C%20Brasil&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>O próximo passo começa com uma conversa.</h2><p>Entre em contato para compartilhar sua necessidade e receber informações sobre o atendimento de enfermagem dermatológica.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com Maria pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><p>Atendimento em enfermagem dermatológica com foco no cuidado de feridas, orientação e acompanhamento individualizado.</p></div><div><h4>Navegação</h4><a href="#sobre">Sobre Maria</a><a href="#tratamentos">Áreas de atuação</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 (66) 96434-4578</a><span><ShieldCheck size={14}/> Cuidado responsável e individualizado</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Maria de Jesus de Souza Costa.</span><span>Enfermagem dermatológica • Tratamento de feridas</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com Maria pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
