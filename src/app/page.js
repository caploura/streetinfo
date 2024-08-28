import styles from "./page.module.css";

const streetDiv = ({
  title,
  mapsLink,
  text,
}) => {
  return <div className={styles.streetDiv}>
    <h1>{ title }</h1>
    <a href={mapsLink} className={styles.mapsLink}>Ver no mapa</a>
    <p className={styles.streetText}>{ text }</p>
  </div>
}

const data = [
  {
    title: 'Wibautstraat',
    mapsLink: 'https://maps.app.goo.gl/DqFymgFQjeTVfJ7w7',
    text: `É nesta rua que vivemos actualmente. Mudamo-nos dia 31 de Dezembro de 2022, prontos para passar o ano e começar uma nova aventura numa nova cidade, numa nova casa, e para a Joana, num novo trabalho. Depois de 5 anos em Maastricht, decidimos mudar para uma cidade maior, mais activa e internacional. Foi uma mudança que queríamos há muito tempo e tal como esperávamos, tem sido uma viagem inesquecível.`
  },
  {
    title: 'Kleine Gracht',
    mapsLink: 'https://maps.app.goo.gl/HRLuX5ExVvupGQPj9',
    text: `Foi na Klein Gracht que o Carlos arranjou o seu primeiro apartamento quando chegou a Maastricht. Típico prédio holandês, com 3 andares, e o do Carlos era o último. Casa pequenina e acolhedora, mas perfeita para um solteirão. Já estava toda equipada e preparada para ele se instalar da melhor maneira. Tinha vista para o rio, e estava mesmo no centro da cidade. Foi sem dúvida um achado!`
  },
  {
    title: 'Steegstraat',
    mapsLink: 'https://maps.app.goo.gl/5mPBufZKU4d3fVT77',
    text: `Nesta pequena rua, um bocadinho mais fora do centro, foi onde a Joana partilhou casa com uma amiga durante 2 anos. Era uma vivenda holandesa com três andares e tinha um jardim lá fora. A casa era espectacular e foi palco de muitas festas e jantares para os nossos amigos. No ano de 2020, em pleno covid, era aqui que o nosso grupo se juntava para apanhar banhos de sol junto à piscina de plástico que compramos todos em conjunto. Foram tempos muitos divertidos e foi o período onde nos ficamos a conhecer melhor.`
  },
  {
    title: 'Avenue Ceramique',
    mapsLink: 'https://maps.app.goo.gl/inNTMdCczhMEj7Bv6',
    text: `Esta avenida foi a nossa primeira casa em conjunto. Foi aqui que decidimos juntar os nossos trapinhos. Ficava ao pé do rio Maas, e tinha um belo jardim para o Alpha poder passear. O apartamento era grande, com dois quartos e ainda uma pequena marquise onde fizemos o nosso escritório. Vivemos durante dois anos aqui e foi onde fizemos todos os nossos planos futuros.`
  },
  {
    title: 'Onzelievevrouw',
    mapsLink: 'https://maps.app.goo.gl/sCaALWQ4RixQnFhS7',
    text: `Esta pequena e bonita praceta estava sempre cheia de vida e de luzes. Estava rodeada de pequenos restaurantes e cafés e tinha uma Basilica com uma oração em português. Toda a esplanada era à prova de inverno, com aquecedores e mantas quentinhas. Era um sítio perfeito para o ‘people watiching’, uma vez que era um local de passagem para o centro de Maastricht.`
  },
  {
    title: 'Vrijthof',
    mapsLink: 'https://maps.app.goo.gl/Hzn27rGmX2bj6dNn9',
    text: `A famosa praça de Maastricht. Palco para os concertos de André Rieu que enchem a cidade durante duas semanas em Julho. Este ilustre maestro nasceu em Maastricht e como tal faz aqui os seus maiores concertos. Vêm pessoas de todo o mundo e há a hipótese de jantar enquanto ouvimos as belas canções. Nesta praça estão situadas umas das mais bonitas igrejas da cidade, caracterizadas pelas suas cores berrantes. Fizemos muitos planos nesta praça, desde festivais, concertos, apanhar sol, festejar o carnaval a simplesmente estar numa esplanada.`
  },
  {
    title: 'Sint Amorsplein',
    mapsLink: 'https://maps.app.goo.gl/8UYo3L9CLfAFPfzWA',
    text: `Esta praça é um ponto social de Maastricht, repleta de bares e esplanadas. Um espaço acolhedor e ótimo para começar o fim-de-semana. As cadeiras estão todas dispostas para o centro da rua, de modo a conseguirmos ver toda a multidão que por aqui passa. No verão os concertos ao ar livre são muito comuns e é impossivel ficar indiferente. Aqui havia o único bar em Maastricht que tinha amendoins com casca, tal como se faz em Portugal, e o bem que isso sabia!`
  },
  {
    title: 'Wycker Burgstraat',
    mapsLink: 'https://maps.app.goo.gl/rJuWEXtNe336LBXHA',
    text: `Uma das principais ruas de Maastricht, liga a estação central ao centro histórico. Aqui o que não falta são restaurantes, lojas e bares, entre eles o pub John Mullins onde nos começámos a conhecer melhor durante um Derbi Benfica vs Sporting. Entre festejos, brindes e muitas gargalhadas percebemos que temos bastante em comum. Este bar foi marcante para nós e voltámos muitas vezes. As pints de Guiness e os melhores nachos que ja comemos, eram o nosso prato do dia. Às terças feiras havia pub quizz e a nossa grupeta ganhou uma vez!`
  },
  {
    title: 'Sint Pietersberg',
    mapsLink: 'https://maps.app.goo.gl/XyQvjma9viKmdJry7',
    text: `O ponto mais alto de Maastricht e onde se situa o forte da cidade. Com uma vista maravilhosa, é um dos melhores sítios para ver o por do sol. Quando o tempo holandês permitia fazíamos aqui longas caminhadas, picnics e aproveitar o sol. Sem dúvida um dos sítios preferidos do Alpha, onde podia correr a vontade e tinha parques só para cães. No fundo deste gigante de pedra havia uma pequena capela, sempre bem cuidada e com velas acesas, intimista e acolhedora, onde tirávamos uns minutos para respirar.`
  },
  {
    title: 'Château Neercanne',
    mapsLink: 'https://maps.app.goo.gl/P4QKfb5W8sCFcLkV8',
    text: `Este castelo situa-se mesmo na fronteira entre a Holanda e a Bélgica, a 10 minutos de bicicleta da nossa casa. Famoso pelos seus jardins, trilhos e grutas o Château Nercanne permite-nos viajar no tempo especialmente durante a pandemia quando não tínhamos a liberdade para fazer o que quiséssemos. Tem também um restaurante com estrela Michellin, portanto era sempre um ótimo plano para experimentar novas iguarias! É um local escolhido por muitos para casar e ainda chegamos a imaginar como seria fazermos a nossa festa por lá.`
  },
  {
    title: 'Oude Lindestraat',
    mapsLink: 'https://maps.app.goo.gl/LVuHjsKs7Dn8ppSE6',
    text: `Esta pequena rua fica situada em Heerlen, uma pequena vila a 20 minutos de Maastricht. Foi aqui a primeira empresa onde o Carlos trabalhou na Holanda. Assim começou a sua aventura Holandesa, num escritório com mesas de ping-pong, snooker e matraquilhos a adaptação foi fácil! Nesta vila, pouco mais havia para fazer. Alguns restaurantes e lojas, um pequeno cinema e um jardim agradavel e familiar.`
  },
  {
    title: 'Koestraat',
    mapsLink: 'https://maps.app.goo.gl/53UT8K1jzrBrnC7J9',
    text: `A rua da vaca (Koestraat, traduzindo à letra). Muito estreita, bem decorada e acolhedora, é ainda hoje uma das ruas mais bonitas para nós. No natal é imperdível toda a iluminação característica. Esta rua pitoresca embora pequena, tem muita vida, e proporcionou-nos excelentes experiências como provas de queijos e vinhos, e também iguarias portuguesas no único restaurante português da cidade. Aqui podíamos ter um bocadinho de tudo, desde um brunch para um domingo de manha, a uma sessão de jazz a uma quinta à noite.`
  },
  {
    title: 'Brouwersgracht',
    mapsLink: 'https://maps.app.goo.gl/vd67jYdXT9ENvCeYA',
    text: `É uma tipica do centro de amesterdao que poderia ser apenas mais uma, não tivesse o Carlos escolhido o restaurante perfeito para fazer o pedido de casamento. O De Belhamel é considerado o restaurante mais romântico da cidade e foi palco de um dos momentos mais felizes para nós. Depois de uma refeição espetacular a Joana disse o “SIM” e hoje cá estamos nós todos em festa.`
  },
  {
    title: 'Bakkerstraat',
    mapsLink: 'https://maps.app.goo.gl/b7abAoyFYL1cnqWG8',
    text: `Um cantinho para matar saudades de Portugal. Desde os m cantinho para matar saudades de Portugal. Desde os azulejos, à pedra da calçada até ao fado, a Tasco Portugalia permite-nos voltar a casa por breves instantes. A super bock e o prego no bolo do caco são imperdíveis! Sempre que há jogos da seleção os Portugueses juntam-se aqui para mostrar o apoio. O conforto de ouvirmos a nossa língua e provarmos sabores familiares, é o que nos leva a voltar lá vezes sem conta!`
  },
  {
    title: 'Diepstraat',
    mapsLink: 'https://maps.app.goo.gl/CYafHqjMAP7BNaqt7',
    text: `Numa vila no norte de Limburgo, situa-se a primeira clinica dentária onde a Joana trabalhou. Ficou lá durante 5 anos e foi recebida de braços abertos. Uma clinica moderna e familiar, passou de geração em geração e está activa há mais de 75 anos. Os chefes deram todo o apoio necessário a uma excelente adaptação. Primeiro trabalho, país diferente, língua diferente, a ajuda deles foi imprescindível e ainda hoje lhes estou eternamente grata por tudo o que fizeram por mim e por tudo o que me ensinaram.`
  },
  {
    title: 'Theater Tuschinski',
    mapsLink: 'https://maps.app.goo.gl/qboVK7kDHbPuC3RCA',
    text: `Este deve ser um dos cinemas mais bonitos que alguma vez vimos nas nossas vidas! Fica localizado bem no centro de Amsterdão e quem passa na rua nunca pensaria que estaria ali uma sala tão grande. Fomos pela primeira vez ver o Napoleão e ficamos rendidos a toda a envolvência. Parece que estamos dentro de um teatro ou de uma sala de ópera, até fica difícil de nos focarmos apenas no ecrã. É um dos nossos sítios preferidos para irmos ver um filme a dois!`
  },
  {
    title: 'Henschotermeer',
    mapsLink: 'https://maps.app.goo.gl/Hsh5cYcprowb8qvX9',
    text: `Nos raros dias de verão da Holanda, todas as pessoas vão a correr para as praias (que não se comparam de todo às nossas). Filas intermináveis e parques de estacionamento completamente cheios, tudo para apanhar aqueles raios de sol tão preciosos. São dias impossíveis, mas felizmente descobrimos este mini paraíso no meio do país! É um lago muito grande, com espaço para todos os carros e pessoas, muito bem organizado e limpo, onde dá para passar um dia incrível de papo para o ar e com a geleira, como um bom português!! Os dias quentes passaram a ter outro gosto!`
  },
  {
    title: 'Zaanse Schans',
    mapsLink: 'https://maps.app.goo.gl/WtayaT6HFpXWyUbW6',
    text: `Não há ninguém que nos venha visitar e não passe por estes moinhos! Estão localizados estrategicamente numa das zonas mais ventosas do país. Parece uma mini aldeia com lojinhas, prova de queijos, museus, cafés, ideal para uma tarde bem passada. É um lugar que não nos cansamos de visitar e que sempre nos surpreende! Casinhas e moinhos de todas as cores e feitios. Para nós passou a ser um sítio onde estamos com amigos e família e, como tal, um lugar muito especial!`
  },
  {
    title: 'Keukenhof',
    mapsLink: 'https://maps.app.goo.gl/DiSb8PxosD3yPTQ37',
    text: `Uma das coisas que visualizamos quando pensamos nos Países Baixos é… túlipas! De todas as cores e mais algumas! E neste enorme jardim conseguimos perceber a quantidade de diferentes formas que podem ter. Um sítio cheio de cor, muito organizado, um banquete para os nossos olhos! Infelizmente nunca está durante muito tempo, mas sempre que temos oportunidade vamos lá ver a magia que as flores fazem! Ficamos sempre de boca aberta!`
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      { data.map(streetDiv) }
    </main>
  );
}
