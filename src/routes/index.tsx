import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse, MessageCircle, ShieldCheck, Stethoscope,
} from "lucide-react";
import cotoAmputacaoRegistro from "@/assets/coto-amputacao-registro.jpg.asset.json";
import cotoAmputacaoAntesDepois from "@/assets/coto-amputacao-antes-depois.jpg.asset.json";
import ulceraCotoAntes from "@/assets/ulcera-coto-antes.jpg.asset.json";
import ulceraCotoDepois from "@/assets/ulcera-coto-depois.jpg.asset.json";
import ulceraCalcanharAntes from "@/assets/ulcera-calcanhar-antes.jpg.asset.json";
import ulceraCalcanharDepois from "@/assets/ulcera-calcanhar-depois.jpg.asset.json";
import logoNaama from "@/assets/logo-naama.png.asset.json";
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
  { title: "Feridas agudas e crônicas", image: "/Cuidado%20Cl%C3%ADnico%20de%20Ferida%20no%20Calcanhar.png", text: "Avaliação e cuidado individualizado para feridas recentes ou de longa duração, com atenção às características de cada lesão.", icon: Bandage },
  { title: "Pé diabético", image: "/Tratamento%20Cuidadoso%20de%20Ferida%20no%20P%C3%A9.png", text: "Acompanhamento especializado para lesões nos pés de pessoas com diabetes, com foco na avaliação, proteção e prevenção de complicações.", icon: Activity },
  { title: "Curativos especializados", image: "/Cuidado%20Cl%C3%ADnico%20com%20Curativo%20no%20Joelho.png", text: "Curativos selecionados conforme a avaliação da ferida, a condição da pele e as necessidades de cada pessoa.", icon: ShieldCheck },
  { title: "Lesões por pressão", image: "/Ilustra%C3%A7%C3%A3o%20M%C3%A9dica%20de%20%C3%9Alcera%20na%20Perna.png", text: "Cuidados para lesões por pressão, conforto, proteção da pele e orientações para ajudar a reduzir novos danos.", icon: HeartPulse },
  { title: "Úlceras venosas e arteriais", image: "/Ilustra%C3%A7%C3%A3o%20M%C3%A9dica%20de%20%C3%9Alcera%20na%20Perna.png", text: "Avaliação e plano de cuidado individualizado para úlceras vasculares, considerando a necessidade de acompanhamento integrado.", icon: Activity },
  { title: "Atendimento domiciliar", image: "/Cuidado%20Cl%C3%ADnico%20de%20Ferida%20no%20Calcanhar.png", text: "Cuidado especializado no conforto de casa, com atenção individual, orientação e respeito à rotina da pessoa atendida.", icon: HeartPulse },
];
const faqs = [
  ["Quais tipos de feridas são atendidos?", "A Clínica Naamã oferece cuidado especializado para feridas agudas e crônicas, pé diabético, lesões por pressão e úlceras venosas e arteriais. A conduta é definida após avaliação individual."],
  ["O atendimento pode ser feito em casa?", "Entre em contato pelo WhatsApp para confirmar a disponibilidade de atendimento domiciliar, a região atendida e os detalhes da avaliação."],
  ["Como funciona a primeira avaliação?", "O primeiro passo é conversar sobre a situação e as necessidades de cuidado. A profissional avalia a ferida e explica as possibilidades de acompanhamento e os próximos passos."],
  ["O que fazer quando uma ferida não cicatriza?", "Uma ferida persistente, alterações de cor, secreção, mau cheiro, aumento da dor ou sinais de infecção precisam de avaliação profissional. Em situações de urgência, procure um serviço de saúde."],
  ["Como posso agendar?", "Clique em qualquer botão de WhatsApp desta página para conversar com a equipe da Clínica Naamã e consultar informações sobre atendimento e disponibilidade."],
];

type BeforeAfterCase = { title: string; description: string; slot: "pair-a" | "pair-b" | "tall" | "feature"; before?: string; after?: string; single?: string; aspect?: string; panels?: boolean };
const beforeAfterCases: BeforeAfterCase[] = [
  { slot: "pair-a", title: "Úlcera em calcanhar", description: "Lesão aberta na região do calcanhar, com leito de granulação, acompanhada até o fechamento da ferida e a formação de tecido de cicatrização.", before: ulceraCalcanharAntes.url, after: ulceraCalcanharDepois.url },
  { slot: "pair-b", title: "Ferida profunda em coto de amputação", description: "Ferida com tecido desvitalizado e bordas espessas que, com desbridamento e curativos especializados, evoluiu para um leito regular de tecido de granulação.", before: ulceraCotoAntes.url, after: ulceraCotoDepois.url },
  { slot: "tall", title: "Acompanhamento de ferida em coto de amputação", description: "Registro publicado com autorização: à esquerda, a ferida aberta; à direita, a mesma área com a lesão praticamente fechada.", single: cotoAmputacaoRegistro.url, aspect: "900/1600", panels: true },
  { slot: "feature", title: "Cicatrização de ferida em coto de amputação", description: "Registro publicado com autorização: à esquerda, a ferida com tecido desvitalizado; à direita, a mesma área em fase de cicatrização.", single: cotoAmputacaoAntesDepois.url, aspect: "828/739" },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site da Claudiane Geremias e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Clínica Naamã, cuidado especializado">
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

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ FERIDAS AGUDAS E CRÔNICAS</span><span>✦ PÉ DIABÉTICO</span><span>✦ CURATIVOS ESPECIALIZADOS</span><span>✦ LESÕES POR PRESSÃO</span><span>✦ ÚLCERAS VASCULARES</span><span>✦ ATENDIMENTO DOMICILIAR</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo photo-placeholder" role="img" aria-label="Espaço reservado para foto de Fátima"><span>FOTO</span><small>Imagem de Fátima</small></div><div className="intro-copy"><span className="eyebrow">PRAZER, SOU CLAUDIANE</span><h2>Seu corpo merece atenção, movimento e <em>cuidado individualizado.</em></h2><p>Sou Claudiane Geremias, fisioterapeuta, CREFITO 199192-F. Meu trabalho é compreender o que você sente, avaliar suas necessidades e construir um plano de cuidado alinhado aos seus objetivos.</p><p>Atendimento acolhedor e responsável, com foco em função, mobilidade e qualidade de vida — respeitando o ritmo e as particularidades de cada pessoa.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento de enfermagem")}><MessageCircle size={18}/> conhecer o atendimento</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO PROCURAR APOIO</span><h2>Feridas persistentes e alterações nos pés merecem <em>atenção especializada.</em></h2><p>Feridas que não cicatrizam, lesões nos pés de pessoas com diabetes e alterações na pele precisam de atenção. A avaliação profissional ajuda a orientar o cuidado e identificar quando é necessário encaminhamento ou atuação conjunta com outros profissionais.</p><div className="check-list centered-list"><div><Check size={17}/><span>Você ou alguém da família precisa de cuidado para uma ferida aguda ou crônica.</span></div><div><Check size={17}/><span>Você tem diabetes e percebeu uma lesão, fissura ou alteração nos pés.</span></div><div><Check size={17}/><span>A ferida persiste, apresenta mudanças ou precisa de curativos especializados.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre o cuidado de uma ferida")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

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
