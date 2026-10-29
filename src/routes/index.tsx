import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse, MessageCircle, ShieldCheck, Stethoscope,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Naamã | Cuidado Especializado com Feridas e Pé Diabético" },
      { name: "description", content: "Clínica Naamã: cuidado especializado com feridas, pé diabético e curativos, com opção de atendimento domiciliar." },
      { property: "og:title", content: "Clínica Naamã | Feridas e Pé Diabético" },
      { property: "og:description", content: "Cuidado especializado, acolhedor e individualizado para feridas e pé diabético." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://clinicanaama.lovable.app/image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://clinicanaama.lovable.app/image.png` },
      { name: "theme-color", content: "#142b45" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5512988298061";
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

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site da Clínica Naamã e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Clínica Naamã, cuidado especializado">
            <span className="brand-mark"><HeartPulse size={22}/></span>
            <span><strong>CLÍNICA NAAMÃ</strong><small>CUIDADO ESPECIALIZADO QUE TRANSFORMA</small></span>
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
            <div className="hero-profile-intro"><span className="hero-profile-name">CLÍNICA NAAMÃ</span><span className="hero-profile-role">CUIDADO ESPECIALIZADO • ATENDIMENTO DOMICILIAR</span></div>
            <h1>Feridas e pé diabético exigem <em>cuidado especializado.</em></h1>
            <p className="hero-lead">A Clínica Naamã oferece cuidado especializado para feridas e pé diabético, com avaliação individual, curativos e atenção às necessidades de cada pessoa — inclusive no conforto da sua casa.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Agendar uma avaliação</button>
              <a className="btn btn-outline" href="#tratamentos">Conhecer os atendimentos <ArrowRight size={17}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Avaliação individual</span><span><Check size={15}/> Atendimento humanizado</span><span><Check size={15}/> Cuidado especializado</span></div>
            <div className="hero-bottom-eyebrow">CLÍNICA NAAMÃ <span>•</span> CUIDADO QUE TRANSFORMA</div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ FERIDAS AGUDAS E CRÔNICAS</span><span>✦ PÉ DIABÉTICO</span><span>✦ CURATIVOS ESPECIALIZADOS</span><span>✦ LESÕES POR PRESSÃO</span><span>✦ ÚLCERAS VASCULARES</span><span>✦ ATENDIMENTO DOMICILIAR</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo"><img src="/prazer-sou-maria/TAI09386.jpg.jpeg" alt="Fátima, profissional da Clínica Naamã" /></div><div className="intro-copy"><span className="eyebrow">PRAZER, SOU FÁTIMA</span><h2>Cuidado especializado, com atenção à pessoa por <em>inteiro.</em></h2><p>Na Clínica Naamã, cada atendimento começa com escuta e avaliação cuidadosa. O plano de cuidado considera as características da ferida, o histórico de saúde e as necessidades individuais, com orientações claras para a pessoa e sua família.</p><p>Nosso compromisso é oferecer um cuidado acolhedor, responsável e individualizado, com atenção à segurança e à dignidade de cada pessoa.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento de enfermagem")}><MessageCircle size={18}/> conhecer o atendimento</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO PROCURAR APOIO</span><h2>Feridas persistentes e alterações nos pés merecem <em>atenção especializada.</em></h2><p>Feridas que não cicatrizam, lesões nos pés de pessoas com diabetes e alterações na pele precisam de atenção. A avaliação profissional ajuda a orientar o cuidado e identificar quando é necessário encaminhamento ou atuação conjunta com outros profissionais.</p><div className="check-list centered-list"><div><Check size={17}/><span>Você ou alguém da família precisa de cuidado para uma ferida aguda ou crônica.</span></div><div><Check size={17}/><span>Você tem diabetes e percebeu uma lesão, fissura ou alteração nos pés.</span></div><div><Check size={17}/><span>A ferida persiste, apresenta mudanças ou precisa de curativos especializados.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre o cuidado de uma ferida")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section procedures-section" id="tratamentos"><div className="container"><div className="section-heading center"><span className="eyebrow">CUIDADOS DA CLÍNICA NAAMÃ</span><h2>Atenção especializada para cuidar de feridas com responsabilidade.</h2><p>Conheça os cuidados oferecidos pela Clínica Naamã. A conduta é definida de forma individual, conforme a avaliação e as necessidades de cada pessoa.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,image,icon:Icon},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading={i<services.length?"eager":"lazy"}/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber qual atendimento pode ser adequado para mim")}><MessageCircle size={18}/> Consultar sobre meu caso</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Um caminho de cuidado em <em>quatro etapas.</em></h2><p>Da primeira conversa ao acompanhamento, cada etapa é conduzida com atenção, clareza e respeito.</p></div><div className="steps-grid">{[["01","Primeiro contato","Você explica brevemente o que está acontecendo e tira suas primeiras dúvidas."],["02","Avaliação","São consideradas a ferida, seu histórico e os fatores relevantes para o cuidado."],["03","Plano individual","As possibilidades de cuidado e orientações são explicadas com clareza."],["04","Acompanhamento","O cuidado é revisto conforme a evolução e a necessidade de cada caso."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("iniciar uma conversa sobre atendimento")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

<section className="section before-after-section" id="antes-depois">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">ACOMPANHAMENTO</span>
            <h2>Antes e depois: cada etapa merece <em>atenção.</em></h2>
            <p>Espaço reservado para registros de acompanhamento de feridas, que serão adicionados após o envio das novas imagens. Cada caso é único e os resultados variam conforme as condições individuais e o plano de cuidado.</p>
          </div>
          <div className="before-after-grid">
            {[
              { title: "Acompanhamento de feridas", description: "Espaço para registrar a evolução do cuidado ao longo do tempo." },
              { title: "Cuidados com o pé diabético", description: "Imagens para mostrar etapas do acompanhamento, quando autorizadas." },
              { title: "Outros casos acompanhados", description: "Adicione aqui outros registros relevantes e autorizados." },
            ].map((item) => (
              <article className="before-after-card" key={item.title}>
                <div className="before-after-images">
                  <div className="before-after-placeholder">
                    <span className="before-after-label">ANTES</span>
                    <div className="before-after-plus" aria-hidden="true">+</div>
                    <span className="before-after-hint">Adicionar imagem</span>
                  </div>
                  <div className="before-after-placeholder">
                    <span className="before-after-label after-label">DEPOIS</span>
                    <div className="before-after-plus" aria-hidden="true">+</div>
                    <span className="before-after-hint">Adicionar imagem</span>
                  </div>
                </div>
                <div className="before-after-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="before-after-disclaimer"><ShieldCheck size={16}/> As imagens devem ser publicadas somente com autorização expressa da pessoa atendida, preservando sua privacidade. Os registros têm caráter informativo e não garantem resultados semelhantes.</p>
          <div className="section-action center">
            <button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o acompanhamento e tirar dúvidas")}><MessageCircle size={18}/> Tirar dúvidas sobre o acompanhamento</button>
          </div>
        </div>
      </section>

      <section className="section maria-reviews-section" id="avaliacoes">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">AVALIAÇÕES</span>
            <h2>A confiança começa com <em>acolhimento.</em></h2>
            <p>Este espaço será atualizado com avaliações reais de pessoas atendidas, após confirmação e autorização para publicação.</p>
          </div>
          <div className="maria-reviews-window">
            <div className="maria-reviews-track">
              {[1,2,3,1,2,3].map((n,i)=><article className="maria-review-card" key={i}>
                <div className="review-stars" aria-hidden="true">★★★★★</div>
                <p>{n===1?"O depoimento real da pessoa atendida será incluído aqui após autorização.":n===2?"Este espaço está reservado para uma avaliação confirmada e autorizada.":"A avaliação será adicionada quando a clínica enviar o conteúdo aprovado."}</p>
                <div className="maria-review-author"><span className="maria-review-avatar" aria-hidden="true"></span><span>Avaliação a adicionar</span></div>
              </article>)}
            </div>
          </div>
          <p className="maria-reviews-note">Os depoimentos serão publicados somente com autorização. Não são exibidas avaliações fictícias.</p>
        </div>
      </section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Informação clara, acolhimento e <em>responsabilidade.</em></h2></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Olhar individualizado</h3><p>Cada pessoa e cada ferida têm características próprias que precisam ser consideradas.</p></article><article><span>02</span><ShieldCheck/><h3>Segurança em primeiro lugar</h3><p>As condutas consideram avaliação, critérios profissionais e necessidades clínicas.</p></article><article><span>03</span><Stethoscope/><h3>Orientação responsável</h3><p>Você recebe informações claras sobre cuidados, possibilidades e próximos passos.</p></article><article><span>04</span><CircleCheck/><h3>Cuidado em conjunto</h3><p>Quando necessário, o acompanhamento considera a atuação integrada com outros profissionais.</p></article></div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Vamos encontrar o melhor caminho para o seu <em>atendimento.</em></h2><p>Entre em contato para confirmar o endereço do consultório, a disponibilidade e as informações de atendimento.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Consultar localização pelo WhatsApp</button><p className="maria-map-note">Mapa provisório de Teresina–PI. O endereço correto será adicionado quando for confirmado.</p></div><div className="maria-map-frame"><iframe title="Mapa provisório de Teresina, Piauí" src="https://maps.google.com/maps?q=Teresina%2C%20Piau%C3%AD%2C%20Brasil&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>


      <section className="section faq-section" id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas também <em>fazem parte do cuidado.</em></h2><p>Se não encontrar sua pergunta aqui, fale diretamente comigo pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>O próximo passo começa com uma conversa.</h2><p>Entre em contato para compartilhar sua necessidade e receber informações sobre o atendimento de enfermagem dermatológica.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com a equipe pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><p>Cuidado especializado para feridas, pé diabético e curativos, com atenção individualizada.</p></div><div><h4>Navegação</h4><a href="#sobre">Sobre a clínica</a><a href="#tratamentos">Áreas de atuação</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 (12) 98829-8061</a><span><ShieldCheck size={14}/> Cuidado responsável e individualizado</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Clínica Naamã.</span><span>Feridas • Pé diabético • Curativos especializados</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
