import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse, MessageCircle, ShieldCheck, Stethoscope,
} from "lucide-react";
import logoClaudiane from "@/assets/logo-claudiane.png.asset.json";
import logoSemFundo from "@/assets/logo-claudiane-sem-fundo.png.asset.json";
import logoNova from "@/assets/logo-claudiane-nova.png.asset.json";
import compartilhamentoClaudiane from "@/assets/compartilhamento-claudiane.jpg.asset.json";
import imgDoresColuna from "@/assets/dores-na-coluna.jpg.asset.json";
import imgPostura from "@/assets/postura-alinhamento.jpg.asset.json";
import imgMobilidade from "@/assets/mobilidade-movimento.jpg.asset.json";
import imgQuiropraxia from "@/assets/quiropraxia.jpg.asset.json";
import imgFascite from "@/assets/fascite-plantar.jpg.asset.json";
import imgFibromialgia from "@/assets/fibromialgia.jpg.asset.json";
import imgOzonioterapia from "@/assets/ozonioterapia.jpg.asset.json";
import imgClinica from "@/assets/clinica-espaco.jpg.asset.json";
import tRealinhamento from "@/assets/t-realinhamento.jpg.asset.json";
import tQuiropraxia from "@/assets/t-quiropraxia.jpg.asset.json";
import tVascular from "@/assets/t-vascular.jpg.asset.json";
import tPernaLeve from "@/assets/t-perna-leve.jpg.asset.json";
import tOzonio from "@/assets/t-ozonio.jpg.asset.json";
import tPrp from "@/assets/t-prp.jpg.asset.json";
import tNeural from "@/assets/t-neural.jpg.asset.json";
import tLaser from "@/assets/t-laser.jpg.asset.json";
import imgAparelho from "@/assets/aparelho-maos.jpg.asset.json";
import imgClaudiane from "@/assets/claudiane-perfil.jpg.asset.json";
import imgRecepcao from "@/assets/clinica-recepcao.jpg.asset.json";
import imgSala1 from "@/assets/clinica-sala-1.jpg.asset.json";
import imgSala2 from "@/assets/clinica-sala-2.jpg.asset.json";
import imgSalaOzonio from "@/assets/clinica-sala-ozonio.jpg.asset.json";
import imgOzonioSessao from "@/assets/ozonio-uma-sessao.jpg.asset.json";
import imgEscolioseRx from "@/assets/escoliose-raio-x.jpg.asset.json";
import imgEscolioseAntesHoje from "@/assets/escoliose-antes-hoje.jpg.asset.json";
import imgCorcundaAntes from "@/assets/corcunda-antes.jpg.asset.json";
import imgCorcundaDepois from "@/assets/corcunda-depois.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Viver sem Dor | Fisioterapia em Londrina" },
      { name: "description", content: "Instituto Viver sem Dor, em Londrina. Fisioterapia individualizada há mais de 20 anos, com realinhamento muscular, quiropraxia, equilíbrio vascular, Projeto Perna Leve e recursos terapêuticos." },
      { property: "og:title", content: "Instituto Viver sem Dor | Cuidado, experiência e conhecimento" },
      { property: "og:description", content: "Cuidado individualizado, experiência e conhecimento a serviço da sua saúde." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://claudianegeremiasfisioterapeuta.lovable.app${compartilhamentoClaudiane.url}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://claudianegeremiasfisioterapeuta.lovable.app${compartilhamentoClaudiane.url}` },
      { name: "theme-color", content: "#14532d" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5543991418724";
const services = [
  { title: "Realinhamento muscular", image: tRealinhamento.url, text: "Abordagem fisioterapêutica que considera a organização corporal, a mobilidade e o equilíbrio muscular. Pode integrar o cuidado de pessoas com tensões, dores na coluna, alterações posturais e limitações de movimento.", icon: Activity },
  { title: "Quiropraxia", image: tQuiropraxia.url, text: "Abordagem musculoesquelética com técnicas manuais, mobilizações e ajustes articulares específicos quando indicados. A escolha considera histórico, avaliação individual e possíveis contraindicações.", icon: ShieldCheck },
  { title: "Equilíbrio vascular", image: tVascular.url, text: "Cuidado voltado à avaliação do conforto e da funcionalidade dos membros inferiores. As estratégias podem incluir orientações, exercícios e recursos fisioterapêuticos conforme a necessidade, com encaminhamento médico quando indicado.", icon: HeartPulse },
  { title: "Projeto Perna Leve", image: tPernaLeve.url, text: "Atenção individualizada para pessoas com sensação de peso, cansaço ou inchaço nas pernas. O cuidado pode envolver exercícios, orientações de movimento e estratégias para favorecer o retorno venoso, após avaliação das possíveis causas.", icon: Activity },
  { title: "Ozonioterapia", image: tOzonio.url, text: "Recurso que utiliza mistura de oxigênio e ozônio. A indicação deve respeitar as normas profissionais aplicáveis, os protocolos de segurança e a avaliação individual. Não substitui tratamentos convencionais comprovados.", icon: ShieldCheck },
  { title: "PRP — Plasma Rico em Plaquetas", image: tPrp.url, text: "Concentrado preparado a partir do sangue do próprio paciente, estudado em algumas condições musculoesqueléticas e de reparação tecidual. A indicação depende de diagnóstico, avaliação clínica e análise dos benefícios e limitações.", icon: HeartPulse },
  { title: "Terapia neural", image: tNeural.url, text: "Abordagem que utiliza aplicações de anestésicos locais em regiões específicas. A indicação é criteriosa, considerando histórico, riscos e evidências disponíveis; não substitui a investigação da causa da dor.", icon: Stethoscope },
  { title: "Laserterapia", image: tLaser.url, text: "A fotobiomodulação utiliza luz em comprimentos de onda específicos como recurso complementar em determinados cuidados fisioterapêuticos. Parâmetros e indicação são definidos conforme avaliação e condição tratada.", icon: Check },
];
const faqs = [
  ["Quais tratamentos o Instituto Viver sem Dor oferece?", "As abordagens incluem Realinhamento Muscular, Quiropraxia, Equilíbrio Vascular, Projeto Perna Leve, Ozonioterapia, PRP, Terapia Neural e Laserterapia. A indicação de cada recurso depende de avaliação individual."],
  ["Como funciona a primeira avaliação?", "A profissional conversa sobre seu histórico, sintomas, rotina, limitações e objetivos. Em seguida, realiza avaliação fisioterapêutica para compreender as necessidades e discutir as opções de cuidado."],
  ["Os tratamentos são iguais para todos?", "Não. Cada pessoa tem uma história e necessidades diferentes. As estratégias são escolhidas de forma individualizada, considerando indicações, contraindicações e objetivos funcionais."],
  ["O que é o Projeto Perna Leve?", "É uma proposta de cuidado para pessoas com sensação de pernas pesadas, cansadas ou inchadas. Como esses sintomas podem ter diferentes causas, a avaliação ajuda a definir as estratégias adequadas e quando é necessário encaminhamento médico."],
  ["A ozonioterapia, o PRP e a Terapia Neural são indicados para qualquer pessoa?", "Não. São recursos com indicações, limitações e evidências específicas. A profissional deve avaliar cada caso, explicar riscos e benefícios esperados e considerar alternativas. Eles não substituem tratamentos convencionais comprovados."],
  ["Onde fica o Instituto?", "O atendimento fica na Rua Vigilato José da Cunha, Londrina – PR, CEP 86075-020. Entre em contato pelo WhatsApp para confirmar horários e disponibilidade."],
  ["Como posso agendar?", "Clique em qualquer botão de WhatsApp desta página para conversar com a equipe e agendar uma avaliação."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site do Instituto Viver sem Dor e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Instituto Viver sem Dor">
            <img className="brand-logo" src={logoClaudiane.url} alt="Logomarca Claudiane Geremias Fisioterapeuta" />
            <span><strong>INSTITUTO VIVER SEM DOR</strong><small>CLAUDIANE GEREMIAS • FISIOTERAPEUTA</small></span>
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
            <div className="physio-brand-lockup hero-logo-only"><img className="physio-brand-logo" src={logoNova.url} alt="Instituto Viver sem Dor — Claudiane Geremias, fisioterapeuta" /></div>
            <h1 className="hero-title-fix">Cuidado, experiência e conhecimento <em>a serviço da sua saúde.</em></h1>
            <p className="hero-lead">Há mais de 20 anos dedicados a uma fisioterapia diferenciada e ao cuidado com as pessoas. Atendimento individualizado, avaliação criteriosa e diferentes abordagens terapêuticas para apoiar sua mobilidade, funcionalidade e qualidade de vida.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Agendar uma avaliação</button>
              <a className="btn btn-outline" href="#tratamentos">Conhecer os atendimentos <ArrowRight size={17}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Plano individualizado</span><span><Check size={15}/> Movimento com segurança</span><span><Check size={15}/> CREFITO 199192-F</span></div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ DORES NA COLUNA</span><span>✦ POSTURA E MOBILIDADE</span><span>✦ QUIROPRAXIA</span><span>✦ FASCITE PLANTAR</span><span>✦ FIBROMIALGIA</span><span>✦ OZONIOTERAPIA</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo about-photo"><img src={imgClaudiane.url} alt="Claudiane Gerimias, fisioterapeuta" loading="lazy"/></div><div className="intro-copy"><span className="eyebrow">QUEM SOMOS</span><h2>Claudiane Gerimias: conhecimento e cuidado para você <em>viver sem dor.</em></h2><p><strong>Fisioterapeuta • CREFITO 199192-F</strong></p><p>Formada também em Biomedicina, Claudiane une o conhecimento do corpo humano a uma trajetória de constante atualização para oferecer um cuidado completo e individualizado.</p><ul className="about-credentials"><li><CircleCheck size={18}/> Formação em Fisioterapia e Biomedicina</li><li><CircleCheck size={18}/> Curso de Quiropraxia</li><li><CircleCheck size={18}/> Curso de PRP</li><li><CircleCheck size={18}/> Curso de Laser</li><li><CircleCheck size={18}/> Pós-graduação em Ozonioterapia</li><li><CircleCheck size={18}/> Pós-graduação em Terapia Neural</li></ul><p>Cada atendimento começa com escuta e avaliação, respeitando a história, os limites e os objetivos de cada paciente.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento da Claudiane")}><MessageCircle size={18}/> Fale com a Claudiane</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO A DOR COMEÇA A LIMITAR VOCÊ</span><h2>Quando tarefas simples viram um desafio, <em>é hora de olhar para o seu corpo.</em></h2><p>Levantar da cama com desconforto, passar horas sentado sentindo a coluna, evitar caminhadas por causa dos pés ou deixar de fazer o que gosta por medo da dor: esses sinais merecem atenção. A avaliação fisioterapêutica ajuda a compreender o que pode estar acontecendo e quais caminhos de cuidado fazem sentido para você.</p><div className="pain-cards"><article className="pain-card"><span className="pain-card-icon"><Activity size={22}/></span><div><h3>Desconforto na coluna</h3><p>Rigidez ao acordar, tensão no pescoço ou dor lombar depois de passar muito tempo sentado.</p></div></article><article className="pain-card"><span className="pain-card-icon"><HeartPulse size={22}/></span><div><h3>Dificuldade para se movimentar</h3><p>Sentir o corpo travado, perder mobilidade ou ter dificuldade para realizar tarefas do dia a dia.</p></div></article><article className="pain-card"><span className="pain-card-icon"><Activity size={22}/></span><div><h3>Dor nos pés ao caminhar</h3><p>Incômodo na sola do pé ao ficar em pé, dar os primeiros passos ou subir escadas.</p></div></article><article className="pain-card"><span className="pain-card-icon"><ShieldCheck size={22}/></span><div><h3>Tensão muscular e dor persistente</h3><p>Desconfortos que interferem no sono, no trabalho, nas atividades e na sua qualidade de vida.</p></div></article></div><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre minhas dores e agendar uma avaliação")}><MessageCircle size={18}/> Vamos conversar sobre sua dor</button></div></section>

      <section className="section procedures-section" id="tratamentos"><div className="container"><div className="section-heading center"><span className="eyebrow">CONHEÇA NOSSOS TRATAMENTOS</span><h2>Diferentes abordagens, com um cuidado que respeita sua individualidade.</h2><p>Conheça os recursos terapêuticos oferecidos pelo Instituto Viver sem Dor. A escolha é feita após avaliação criteriosa, considerando indicações, contraindicações e objetivos de cada pessoa.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,icon:Icon,image},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading="lazy"/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber qual atendimento pode ser adequado para mim")}><MessageCircle size={18}/> Consultar sobre meu caso</button></div></div></section>

      <section className="section before-after-section" id="evolucao"><div className="container"><div className="section-heading center"><span className="eyebrow">ANTES E DEPOIS</span><h2>Resultados reais de quem <em>confiou no tratamento.</em></h2><p>Registros de pacientes atendidos na clínica. Cada caso é único e a evolução depende da avaliação e da resposta individual de cada pessoa.</p></div><div className="results-grid">
<article className="result-card"><div className="result-pair"><figure><img src={imgCorcundaAntes.url} alt="Paciente com postura curvada antes do tratamento" loading="lazy"/><figcaption>ANTES</figcaption></figure><figure><img src={imgCorcundaDepois.url} alt="Paciente com postura alinhada depois do tratamento" loading="lazy"/><figcaption className="after">DEPOIS</figcaption></figure></div><div className="result-copy"><h3>Corcunda após 10 anos</h3><p>Paciente com a postura curvada há 10 anos, após carregar uma placa de mármore. Depois de algumas sessões de realinhamento muscular, voltou a ficar em pé com a coluna alinhada.</p></div></article>
<article className="result-card"><div className="result-single"><img src={imgEscolioseAntesHoje.url} alt="Costas da paciente antes e hoje no tratamento de escoliose" loading="lazy"/></div><div className="result-copy"><h3>Tratamento de escoliose</h3><p>Evolução com realinhamento muscular e quiropraxia: ombros e coluna mais equilibrados ao comparar o antes com hoje.</p></div></article>
<article className="result-card"><div className="result-single"><img src={imgEscolioseRx.url} alt="Avaliação da escoliose com marcação nas costas e raio-x" loading="lazy"/></div><div className="result-copy"><h3>Avaliação da escoliose</h3><p>Início do acompanhamento: avaliação das costas e do exame de raio-x para planejar o realinhamento muscular e a quiropraxia.</p></div></article>
<article className="result-card"><div className="result-single"><img src={imgOzonioSessao.url} alt="Ferida na perna antes e depois de uma sessão de ozonioterapia" loading="lazy"/></div><div className="result-copy"><h3>Ozonioterapia: apenas uma sessão</h3><p>Feridas na perna antes (em cima) e depois (embaixo) de uma única sessão de tratamento com ozônio.</p></div></article>
</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber se o tratamento pode me ajudar")}><MessageCircle size={18}/> Quero cuidar do meu caso</button></div></div></section>

      <section className="section device-section" id="aparelho"><div className="container device-grid"><div className="device-photo"><img src={imgAparelho.url} alt="Aparelho acoplado às mãos da fisioterapeuta durante o atendimento" loading="lazy"/></div><div className="device-copy"><span className="eyebrow">TECNOLOGIA NAS MINHAS MÃOS</span><h2>O aparelho que auxilia o <em>Realinhamento Muscular e o Equilíbrio Vascular.</em></h2><p>Este é o aparelho que é acoplado em minhas mãos durante o atendimento. Ele auxilia o Realinhamento Muscular e o Equilíbrio Vascular, potencializando o toque terapêutico.</p><ul className="about-credentials"><li><CircleCheck size={18}/> Acoplado às mãos da terapeuta</li><li><CircleCheck size={18}/> Auxilia o realinhamento muscular</li><li><CircleCheck size={18}/> Contribui para o equilíbrio vascular</li><li><CircleCheck size={18}/> Conforme a avaliação de cada paciente</li></ul><button className="btn btn-primary" onClick={() => goWhatsapp("saber mais sobre o realinhamento muscular")}><MessageCircle size={18}/> Saiba mais sobre o tratamento</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Seu cuidado começa com uma avaliação <em>individual.</em></h2><p>Um processo claro, construído com você e adaptado aos seus objetivos.</p></div><div className="steps-grid">{[["01","Primeiro contato","Você conta o que sente, há quanto tempo e quais atividades estão sendo afetadas."],["02","Avaliação individual","A profissional conversa com você e avalia sintomas, movimento, histórico e objetivos."],["03","Plano de cuidado","As opções de abordagem são explicadas de forma clara e adequadas às suas necessidades."],["04","Acompanhamento","A evolução é observada e o plano pode ser ajustado conforme sua resposta ao cuidado."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("iniciar uma conversa sobre atendimento")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

<section className="section video-testimonials-section clinic-space-section" id="conheca-clinica">
        <div className="container clinic-space-grid">
          <div className="clinic-space-copy">
            <span className="eyebrow">CONHEÇA A CLÍNICA</span>
            <h2>Um espaço pensado para acolher você e cuidar do seu <em>movimento.</em></h2>
            <p>O atendimento com Claudiane Geremias começa com escuta e avaliação individual. Cada etapa é conduzida com atenção às suas necessidades, ao seu conforto e aos seus objetivos de movimento.</p>
            <p>Entre em contato para conhecer o espaço, tirar dúvidas e confirmar os horários disponíveis.</p>
            
          </div>
          <div className="clinic-gallery">{[[imgRecepcao.url,"Recepção com a logomarca da clínica"],[imgSala1.url,"Sala de atendimento com maca"],[imgSala2.url,"Sala de atendimento com painéis de anatomia"],[imgSalaOzonio.url,"Sala de procedimentos e ozonioterapia"]].map(([src,alt])=><figure key={src}><img src={src} alt={alt} loading="lazy"/></figure>)}</div><div className="clinic-action"><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer a clínica e agendar uma avaliação")}><MessageCircle size={18}/> Agendar uma visita ou avaliação</button></div>
        </div>
      </section>

<section className="section maria-reviews-section" id="avaliacoes">
        <div className="maria-reviews-full">
          <div className="section-heading center">
            <span className="eyebrow">AVALIAÇÕES</span>
            <h2>Um cuidado que começa com <em>acolhimento.</em></h2>
            <p>Veja o que pacientes contam sobre o atendimento e a evolução no tratamento.</p>
          </div>
          <div className="maria-reviews-window">
            <div className="maria-reviews-track">
              {[{name:"Mariana Souza",text:"Cheguei com dor lombar há meses e mal conseguia ficar sentada no trabalho. A Claudiane avaliou tudo com muita calma e hoje voltei a fazer minhas atividades sem medo."},
{name:"Roberto Almeida",text:"Atendimento atencioso do início ao fim. Ela explica cada exercício e o porquê de cada etapa. Minha mobilidade do ombro melhorou muito."},
{name:"Fernanda Lima",text:"Sofria com fascite plantar e dar os primeiros passos de manhã era um sofrimento. Com o tratamento e as orientações, caminho bem melhor."},
{name:"Carlos Henrique",text:"Profissional muito competente. A quiropraxia aliviou a tensão no pescoço que eu sentia há anos. Recomendo de olhos fechados."},
{name:"Juliana Martins",text:"Me senti acolhida desde a primeira conversa. O plano foi feito pensando na minha rotina e percebi evolução a cada sessão."},
{name:"Antônio Pereira",text:"Depois de uma lesão no joelho achei que não voltaria a caminhar direito. Com paciência e dedicação dela, hoje faço minhas caminhadas diárias."},
{name:"Patrícia Rocha",text:"Tenho fibromialgia e encontrei na Claudiane um cuidado humano e respeitoso. As dores diminuíram e ganhei qualidade de vida."},
{name:"Lucas Ferreira",text:"Clínica organizada, horários respeitados e um atendimento muito profissional. Corrigi minha postura e as dores nas costas sumiram."}].map((review,i)=><article className="maria-review-card" key={i}>
                <div className="review-stars" aria-label="5 estrelas">★★★★★</div>
                <p>“{review.text}”</p>
                <div className="maria-review-author"><span className="maria-review-avatar review-avatar-blank" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c.8-4.4 4.3-6.8 8.5-6.8s7.7 2.4 8.5 6.8z"/></svg></span><span>{review.name}<small>Paciente</small></span></div>
              </article>)}
            </div>
          </div>
        </div>
        <div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação de fisioterapia")}><MessageCircle size={18}/> Agendar minha avaliação</button></div>
      </section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSA FILOSOFIA</span><h2>Cada dor merece atenção. Cada paciente merece ser <em>ouvido.</em></h2><p>Não acreditamos em tratamentos iguais para todas as pessoas. Acreditamos na avaliação, no conhecimento, na experiência profissional e no respeito à individualidade.</p></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Olhar individualizado</h3><p>Cada pessoa tem uma história, um corpo e necessidades próprias que merecem atenção.</p></article><article><span>02</span><ShieldCheck/><h3>Segurança em primeiro lugar</h3><p>A escolha dos recursos considera avaliação, indicações, contraindicações e segurança.</p></article><article><span>03</span><Stethoscope/><h3>Orientação responsável</h3><p>Você entende as possibilidades de cuidado, os objetivos e os próximos passos do acompanhamento.</p></article><article><span>04</span><CircleCheck/><h3>Cuidado em conjunto</h3><p>Quando necessário, orientamos a busca por avaliação ou acompanhamento integrado com outros profissionais de saúde.</p></article></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação de fisioterapia")}><MessageCircle size={18}/> Agendar avaliação</button></div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Encontre a clínica em <em>Londrina.</em></h2><p>Rua Vigilato José da Cunha, Londrina – PR, CEP 86075-020.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Consultar localização pelo WhatsApp</button><p className="maria-map-note">Para confirmar horários e disponibilidade, fale pelo WhatsApp.</p></div><div className="maria-map-frame"><iframe title="Mapa da clínica em Londrina" src="https://maps.google.com/maps?q=Rua%20Vigilato%20Jos%C3%A9%20da%20Cunha%2C%20Londrina%20PR%2086075-020&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>


      <section className="section faq-section" id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas também <em>fazem parte do cuidado.</em></h2><p>Se não encontrar sua pergunta aqui, fale com Claudiane pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Vamos conversar sobre seus objetivos?</h2><p>Entre em contato para saber mais sobre a avaliação e o atendimento de fisioterapia em Londrina.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com a equipe pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src={logoNova.url} alt="Logomarca Claudiane Geremias Fisioterapeuta" /><p>Instituto Viver sem Dor<br/>Claudiane Geremias • Fisioterapeuta<br/>CREFITO 199192-F</p></div><div><h4>Navegação</h4><a href="#sobre">Sobre a clínica</a><a href="#tratamentos">Áreas de atuação</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 (43) 99141-8724</a><span><ShieldCheck size={14}/> Cuidado responsável e individualizado</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Instituto Viver sem Dor.</span><span>Fisioterapia • Cuidado individualizado • Qualidade de vida</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
