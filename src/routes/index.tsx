import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse, MessageCircle, ShieldCheck, Stethoscope,
} from "lucide-react";
import shareNaama from "@/assets/compartilhamento-naama.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claudiane Geremias | Fisioterapia e Quiropraxia em Londrina" },
      { name: "description", content: "Claudiane Geremias, fisioterapeuta em Londrina. Atendimento para dores na coluna, postura, mobilidade, fascite plantar, fibromialgia, quiropraxia e ozonioterapia." },
      { property: "og:title", content: "Claudiane Geremias | Fisioterapia em Londrina" },
      { property: "og:description", content: "Cuidado individualizado para dores, postura, mobilidade e bem-estar." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://clinicanaama.lovable.app${shareNaama.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://clinicanaama.lovable.app${shareNaama.url}` },
      { name: "theme-color", content: "#14532d" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/554391418724";
const services = [
  { title: "Dores na coluna", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85", text: "Abordagem individualizada para desconfortos na região cervical, torácica e lombar, buscando melhorar a função e a qualidade de vida.", icon: Activity },
  { title: "Postura e alinhamento muscular", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85", text: "Orientações e exercícios terapêuticos para consciência corporal, equilíbrio muscular e hábitos posturais mais saudáveis.", icon: ShieldCheck },
  { title: "Mobilidade e movimento", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85", text: "Recursos de fisioterapia para trabalhar flexibilidade, amplitude de movimento e confiança nas atividades do dia a dia.", icon: HeartPulse },
  { title: "Quiropraxia", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85", text: "Avaliação e técnicas manuais selecionadas conforme as necessidades, o histórico e a segurança de cada pessoa.", icon: Activity },
  { title: "Fascite plantar", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85", text: "Cuidado voltado à dor na sola do pé, com avaliação funcional e estratégias para apoiar o movimento e as atividades diárias.", icon: Check },
  { title: "Fibromialgia e dor persistente", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85", text: "Acompanhamento adaptado aos limites e objetivos individuais, com foco em movimento gradual, funcionalidade e bem-estar.", icon: HeartPulse },
  { title: "Ozonioterapia", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85", text: "Converse com a profissional sobre indicação, evidências, benefícios esperados, riscos e alternativas para o seu caso.", icon: ShieldCheck },
];
const faqs = [
  ["Quais condições são atendidas?", "O atendimento é voltado a dores na coluna, postura, mobilidade, fascite plantar, fibromialgia, alinhamento muscular e outras necessidades avaliadas individualmente."],
  ["Como funciona a primeira consulta?", "O primeiro passo é uma conversa e uma avaliação individual para entender seus sintomas, histórico, objetivos e quais abordagens podem ser adequadas."],
  ["A quiropraxia é indicada para todo mundo?", "Nem sempre. A indicação depende de avaliação profissional, histórico e contraindicações. A abordagem é escolhida conforme a segurança e as necessidades de cada pessoa."],
  ["Como saber se a fisioterapia pode me ajudar?", "Entre em contato para explicar o que está sentindo e receber orientações sobre o agendamento de uma avaliação. A conduta é definida após avaliação."],
  ["Onde fica a clínica?", "A clínica fica na Rua Vigilato José da Cunha, Londrina – PR, CEP 86075-020. Entre em contato pelo WhatsApp para informações sobre horários."],
  ["Como posso agendar?", "Clique em qualquer botão de WhatsApp nesta página para conversar sobre disponibilidade e agendamento."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site da Claudiane Geremias e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Claudiane Geremias, cuidado especializado">
            <span className="brand-mark"><HeartPulse size={22}/></span>
            <span><strong>CLAUDIANE GEREMIAS</strong><small>FISIOTERAPIA • CREFITO 199192-F</small></span>
          </a>
          <nav className="nav maria-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <button className="header-cta" onClick={() => goWhatsapp("agendar um atendimento")}><MessageCircle size={16}/> Falar com a equipe</button>
        </div>
      </header>

      <section className="hero maria-hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy center-hero">
            <div className="physio-brand-lockup"><span>CG</span><div><strong>Claudiane Geremias</strong><small>FISIOTERAPEUTA • CREFITO 199192-F</small></div></div>
            <h1>Mais movimento, menos limitações e <em>cuidado para você viver melhor.</em></h1>
            <p className="hero-lead">Fisioterapia com atenção individualizada para dores na coluna, postura, mobilidade e bem-estar. Um cuidado que considera sua rotina, seus objetivos e as necessidades do seu corpo.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Agendar uma avaliação</button>
              <a className="btn btn-outline" href="#tratamentos">Conhecer os atendimentos <ArrowRight size={17}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Plano individualizado</span><span><Check size={15}/> Movimento com segurança</span><span><Check size={15}/> CREFITO 199192-F</span></div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ DORES NA COLUNA</span><span>✦ POSTURA E MOBILIDADE</span><span>✦ QUIROPRAXIA</span><span>✦ FASCITE PLANTAR</span><span>✦ FIBROMIALGIA</span><span>✦ OZONIOTERAPIA</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo photo-placeholder" role="img" aria-label="Espaço reservado para foto de Claudiane Geremias"><span>CG</span><small>Claudiane Geremias • Fisioterapeuta</small></div><div className="intro-copy"><span className="eyebrow">PRAZER, SOU CLAUDIANE</span><h2>Seu corpo merece atenção, movimento e <em>cuidado individualizado.</em></h2><p>Sou Claudiane Geremias, fisioterapeuta, CREFITO 199192-F. Meu trabalho é compreender o que você sente, avaliar suas necessidades e construir um plano de cuidado alinhado aos seus objetivos.</p><p>Atendimento acolhedor e responsável, com foco em função, mobilidade e qualidade de vida — respeitando o ritmo e as particularidades de cada pessoa.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento de enfermagem")}><MessageCircle size={18}/> conhecer o atendimento</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO PROCURAR APOIO</span><h2>Dores e limitações merecem <em>atenção especializada.</em></h2><p>Dores recorrentes, rigidez e limitações no movimento podem interferir no trabalho, no sono e nas atividades que você gosta. Uma avaliação ajuda a entender suas necessidades e orientar os próximos passos.</p><div className="check-list centered-list"><div><Check size={17}/><span>Desconforto na coluna, pescoço ou região lombar.</span></div><div><Check size={17}/><span>Dificuldade com postura, flexibilidade ou mobilidade.</span></div><div><Check size={17}/><span>Dor nos pés, tensão muscular ou dor persistente.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre o cuidado de uma ferida")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section procedures-section" id="tratamentos"><div className="container"><div className="section-heading center"><span className="eyebrow">ÁREAS DE ATUAÇÃO</span><h2>Abordagens para apoiar seu movimento e sua qualidade de vida.</h2><p>Conheça as áreas de atuação. As técnicas e os recursos são definidos após avaliação, considerando suas necessidades, objetivos e segurança.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,image,icon:Icon},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading={i<services.length?"eager":"lazy"}/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber qual atendimento pode ser adequado para mim")}><MessageCircle size={18}/> Consultar sobre meu caso</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Seu cuidado começa com uma avaliação <em>individual.</em></h2><p>Um processo claro, construído com você e adaptado aos seus objetivos.</p></div><div className="steps-grid">{[["01","Primeiro contato","Você explica brevemente o que está acontecendo e tira suas primeiras dúvidas."],["02","Avaliação","São consideradas a ferida, seu histórico e os fatores relevantes para o cuidado."],["03","Plano individual","As possibilidades de cuidado e orientações são explicadas com clareza."],["04","Acompanhamento","O cuidado é revisto conforme a evolução e a necessidade de cada caso."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("iniciar uma conversa sobre atendimento")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

<section className="section video-testimonials-section" id="depoimentos-em-video">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">CONHEÇA O ATENDIMENTO</span>
            <h2>Informação e orientação para cuidar melhor do <em>seu movimento.</em></h2>
            <p>Este espaço pode receber vídeos explicativos sobre fisioterapia, postura, mobilidade e as abordagens utilizadas no atendimento.</p>
          </div>
          <div className="video-testimonials-grid">
            {[
              ["Postura e coluna","Vídeo explicativo a adicionar"],
              ["Mobilidade e movimento","Vídeo explicativo a adicionar"],
              ["Conheça a avaliação","Vídeo de apresentação a adicionar"]
            ].map(([title,caption])=><article className="video-testimonial-card" key={title}>
              <div className="video-testimonial-placeholder"><span className="video-play" aria-hidden="true">▶</span><span className="video-placeholder-label">VÍDEO</span></div>
              <div className="video-testimonial-copy"><h3>{title}</h3><p>{caption}</p></div>
            </article>)}
          </div>
        </div>
      </section>

<section className="section maria-reviews-section" id="avaliacoes">
        <div className="maria-reviews-full">
          <div className="section-heading center">
            <span className="eyebrow">AVALIAÇÕES</span>
            <h2>Um cuidado que começa com <em>acolhimento.</em></h2>
            <p>Este espaço está preparado para exibir avaliações reais de pacientes, com autorização para publicação.</p>
          </div>
          <div className="maria-reviews-window">
            <div className="maria-reviews-track">
              {[
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."},
                {name:"Avaliação de paciente",text:"Adicione aqui uma avaliação real, autorizada pela pessoa atendida."}
              ].map((review,i)=><article className="maria-review-card" key={i}>
                <div className="review-stars" aria-label="5 estrelas">★★★★★</div>
                <p>“{review.text}”</p>
                <div className="maria-review-author"><span className="maria-review-avatar review-avatar-blank" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c.8-4.4 4.3-6.8 8.5-6.8s7.7 2.4 8.5 6.8z"/></svg></span><span>{review.name}<small>Paciente</small></span></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Informação clara, acolhimento e <em>responsabilidade.</em></h2></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Olhar individualizado</h3><p>Cada pessoa e cada ferida têm características próprias que precisam ser consideradas.</p></article><article><span>02</span><ShieldCheck/><h3>Segurança em primeiro lugar</h3><p>As condutas consideram avaliação, critérios profissionais e necessidades clínicas.</p></article><article><span>03</span><Stethoscope/><h3>Orientação responsável</h3><p>Você recebe informações claras sobre cuidados, possibilidades e próximos passos.</p></article><article><span>04</span><CircleCheck/><h3>Cuidado em conjunto</h3><p>Quando necessário, o acompanhamento considera a atuação integrada com outros profissionais.</p></article></div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Encontre a clínica em <em>Londrina.</em></h2><p>Rua Vigilato José da Cunha, Londrina – PR, CEP 86075-020.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Consultar localização pelo WhatsApp</button><p className="maria-map-note">Para confirmar horários e disponibilidade, fale pelo WhatsApp.</p></div><div className="maria-map-frame"><iframe title="Mapa da clínica em Londrina" src="https://maps.google.com/maps?q=Rua%20Vigilato%20Jos%C3%A9%20da%20Cunha%2C%20Londrina%20PR%2086075-020&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>


      <section className="section faq-section" id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas também <em>fazem parte do cuidado.</em></h2><p>Se não encontrar sua pergunta aqui, fale com Claudiane pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Vamos conversar sobre seus objetivos?</h2><p>Entre em contato para saber mais sobre a avaliação e o atendimento de fisioterapia em Londrina.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com a equipe pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><div className="footer-name-mark">CG</div><p>Claudiane Geremias • Fisioterapeuta<br/>CREFITO 199192-F</p></div><div><h4>Navegação</h4><a href="#sobre">Sobre a clínica</a><a href="#tratamentos">Áreas de atuação</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 (43) 9141-8724</a><span><ShieldCheck size={14}/> Cuidado responsável e individualizado</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Claudiane Geremias.</span><span>Fisioterapia • Quiropraxia • Mobilidade</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
