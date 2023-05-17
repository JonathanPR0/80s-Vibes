/* eslint-disable react/jsx-key */
import wallpaper from './wallpaper.jpg';
import magicCube from './introduction/magicCube.jpg';
import walkman from './introduction/walkman.jpg';
import vinil1 from './introduction/vinil1.jpg';
import vinil2 from './introduction/vinil2.jpg';
import pacman from './introduction/pacman.jpg';
import polaroid from './introduction/polaroid.jpg';
import beatit from './musics/beatit.jpg';
import brasil from './musics/brasil.jpg';
import thriller from './musics/thriller.jpeg';
import timeofmylife from './musics/timeofmylife.jpg';
import finalcountdown from './musics/finalcountdown.jpg';
import canttouch from './musics/canttouch.jpg';
import karate from './movies/karate.jpg';
import future from './movies/future.jpg';
import terminator from './movies/terminator.jpg';
import estrela from './movies/estrela.jpg';
import trapalhoes from './movies/trapalhoes.jpg';
import moda1 from './moda/moda1.jpg';
import moda2 from './moda/moda2.webp';
import moda3 from './moda/moda3.webp';
import moda4 from './moda/moda4.jpg';

const template = {
  links: [
    { name: 'Introdução', href: '#introduction' },
    { name: 'Música', href: '#music' },
    { name: 'Audiovisual', href: '#audiovisual' },
    { name: 'Moda', href: '#moda' },
    { name: 'Literatura', href: '#literature' },

  ],
  main: {
    img: {
      src: wallpaper,
    },
    title: 'Anos 80, uma década de muitas mudanças, agitações e novidades',
    text: 'Estes anos deixaram saudades em muitas pessoas, então venha com a gente conhecer um pouco sobre essa época de ouro.',
  },
  introduction: {
    sectionName: 'Introdução',
    title: 'Uma Explosão de Cores, Música e Estilo',
    content: [
      <p className="text-base">Os anos 80 foram uma década vibrante e emocionante, marcada por uma explosão de criatividade e expressão cultural. Foi um período de rápidas mudanças, onde a música, a moda e a arte evoluíram de maneira extraordinária.  </p>,
      <p className="text-base">A década testemunhou o surgimento de gêneros musicais inovadores, como o new wave, o hip hop e o rock alternativo, que trouxeram novos sons e estilos para o cenário musical. Além disso, a moda nos anos 80 ficou conhecida por sua ousadia e extravagância, com roupas brilhantes, ombreiras exageradas e penteados icônicos. Agora, veja um pouco mais sobre essa década de ouro.
      </p>,
    ],
    img: {
      src: wallpaper,
      alt: 'vista de um entardecer próxima às áreas alagadas do Pantanal',
    },
    id: '#introduction',
  },
  musicsSection: {
    sectionName: 'Música',
    title: 'A Diversidade Musical dos Anos 80',
    content: [
      <p className="text-base">As Músicas dos anos 80 marcaram uma época de grandes mudanças na cultura e na sociedade. Elas refletiam os estilos musicais, as tendências da moda, as questões políticas e os sentimentos das pessoas. Conheça agora algumas das músicas mais famosas dessa década.</p>,
    ],

    musics: [
      {
        img: beatit,
        name: "Beat It",
        releaseYear: "1982",
        singer: "Michael Jackson",
        description: "As Músicas dos anos 80 marcaram uma época de grandes mudanças na cultura e na sociedade. Elas refletiam os estilos musicais, as tendências da moda, as questões políticas e os sentimentos das pessoas. Conheça agora algumas das músicas mais famosas dessa década."
      },
      {
        img: canttouch,
        name: "U Can't Touch This",
        releaseYear: "1990",
        singer: "MC Hammer",
        description: 'Hit ganhou vários prêmios, incluindo dois Grammys, e foi usada em diversos filmes, comerciais e paródias. Além disso, também popularizou a expressão "Hammer time", que se refere ao momento em que Hammer começa a dançar com seus passos característicos.'
      },
      {
        img: thriller,
        name: "Thriller",
        releaseYear: "1983",
        singer: "Michael Jackson",
        description: "Essa música era uma verdadeira ode aos filmes de terror, apresentando um clipe icônico que retratava o cantor se metamorfoseando em um lobisomem e um zumbi. A direção do clipe ficou a cargo de John Landis e contou com uma coreografia memorável."
      },
      {
        img: timeofmylife,
        name: "Time of My Life",
        releaseYear: "1987",
        singer: "Bill Medley e Jennifer Warnes",
        description: "Essa música era a trilha sonora do filme Dirty Dancing, que foi um sucesso de bilheteria e de crítica. Ela expressava o amor e a paixão entre os personagens principais, interpretados por Patrick Swayze e Jennifer Grey."
      },
      {
        img: finalcountdown,
        name: "The Final Countdown",
        releaseYear: "1986",
        singer: "Banda Europe",
        description: "Essa música era uma mistura de rock e metal, e tinha um riff de teclado marcante. Ela falava sobre uma viagem espacial para outro planeta, e foi usada em vários filmes, séries e eventos esportivos."
      },
      {
        img: brasil,
        name: "Que País É Esse",
        releaseYear: "1987",
        singer: "Legião Urbana",
        description: "Essa música era um protesto contra a corrupção, a violência e a desigualdade social no Brasil. Ela fazia parte do álbum homônimo, que foi um dos mais vendidos da história do rock nacional."
      },

    ],

    background: 'bg-customGreen',
    id: '#music',
  },
  audiovisualSection: {
    sectionName: 'Audiovisual',
    title: 'Uma Era de Blockbusters e Ícones',
    content: [
      <p className="text-base">Os filmes dos anos 80 foram marcados por uma grande diversidade de gêneros, estilos e diretores. As bilheterias bateram recordes para a época, e muitos dos filmes produzidos são ovacionados até os dias de hoje. A seguir, temos um pouco sobre os principais marcos do audiovisual desta época.</p>,
    ],

    movies: [
      {
        img: karate,
        name: "The Karate Kid",
        releaseYear: "1984",
        gender: " Ação e drama",
        director: " John G. Avildsen",
        cast: " Ralph Macchio, Noriyuki Morita e William Zabka",
        description: "Esse filme de artes marciais americano foi um enorme sucesso comercial, arrecadando mais de $130 milhões em todo o mundo e se tornando um dos filmes de maior bilheteria de 1984. A trama acompanha a história de um adolescente chamado Daniel LaRusso, que se envolve com a ex-namorada do valentão da escola e enfrenta a perseguição de sua gangue. Com a orientação do mestre de karatê, o senhor Miyagi, ele se prepara para autodefesa e para um importante campeonato."
      },
      {
        img: estrela,
        name: "A hora da estrela",
        releaseYear: "1986",
        gender: " Comédia dramática",
        director: " Suzana Amaral",
        cast: " Marcelia Cartaxo, José Dumont, Tamara Taxman",
        description: 'O longa é uma adaptação de um dos romances homônimos de Clarisse Lispector. O filme é considerado um clássico do cinema nacional e no ano de 2015 entrou para a lista dos 100 melhores filmes brasileiros de todos os tempos, pela Associação brasileiras de críticos de cinema.'
      },
      {
        img: trapalhoes,
        name: "Os Saltimbancos trapalhões",
        releaseYear: "1981",
        gender: " Comédia",
        director: " J.B. Tanko",
        cast: " Renato Aragão, Mussum, Dedé Santana",
        description: "Esta é uma produção brasileira baseada na peça “Os Saltimbancos” e foi considerado pelas críticas com o melhor filme em grupo. Além disso, em 2015 foi adicionado a lista de melhores filmes brasileiros de todos os tempos pela associação brasileira de críticos de cinema."
      },
      {
        img: future,
        name: "De Volta Para o Futuro",
        releaseYear: "1985",
        gender: " Comédia e Ficção Científica",
        director: " Steven Spielberg",
        cast: " Michael J. Fox e Christopher Lloyd",
        description: "A trama segue Marty enquanto ele acidentalmente viaja para o passado em um carro modificado pelo excêntrico Dr. Emmett Brown, interpretado por Christopher Lloyd. Com a ajuda do DeLorean e do Dr. Brown, Marty precisa garantir que seus pais se apaixonem no passado para evitar alterações drásticas no futuro. O filme se tornou um clássico amado pelo seu enredo inteligente, personagens carismáticos e trilha sonora cativante."
      },
      {
        img: terminator,
        name: "O Exterminador do Futuro",
        releaseYear: "1984",
        gender: " Ação e Ficção Científica",
        director: " James Cameron",
        cast: " Arnold Schwarzenegger e Linda Hamilton",
        description: '"O Exterminador do Futuro" é um filme que narra a luta entre humanos e máquinas. Após a rebelião da inteligência artificial Skynet, as máquinas enviam um android assassino chamado Exterminador para o passado com a missão de eliminar Sarah Connor, a mãe do futuro líder humano. Em resposta, os humanos enviam Kyle Reese para proteger Sarah. O filme é repleto de cenas de ação frenéticas, enquanto Sarah e Kyle lutam para escapar do Exterminador e garantir a sobrevivência da humanidade.'
      },
    ],

    background: 'bg-primaryColors-200',
    id: '#audiovisual',
  },
  modaSection: {
    sectionName: 'Moda',
    title: 'Extravagância e Ousadia',
    content: [
      <p className="text-base">A moda dos anos 80 foi marcada pela diversidade, pela ousadia e pela expressão da individualidade. Foi uma década de muitas mudanças políticas, sociais e culturais, que se refletiram na forma de se vestir e agir. Conheça agora algumas das tendências que mais se destacaram nesta época.</p>,
      <ul className='ml-4 list-disc'><li><strong className='font-bold'>Cores vibrantes</strong>, os estampados geométricos e os tecidos brilhantes, que davam um toque de alegria e irreverência aos looks.</li>
        <li><strong className='font-bold'>Ombreiras</strong>, os blazers e as calças de cintura alta, que conferiam um ar de poder e sofisticação às mulheres.</li>
        <li><strong className='font-bold'>Os jeans rasgados</strong>, as camisetas de bandas e os coturnos, que representavam o estilo rebelde e alternativo dos jovens roqueiros.</li>
        <li><strong className='font-bold'>Os moletons</strong>, as leggings e as polainas, que eram confortáveis e práticos para a prática de atividades físicas e para o dia a dia.</li><li><strong className='font-bold'>Os acessórios exagerados</strong>, como os brincos grandes, os colares de pérolas, os óculos escuros e as luvas sem dedos, que complementavam os visuais com personalidade.</li></ul>,
      <p>A moda dos anos 80 foi influenciada por ícones da música, do cinema e da televisão, como Madonna, Michael Jackson, Cindy Lauper, David Bowie, Prince,entre outros ícones da cultura pop. Esses artistas lançaram modismos que foram copiados pelo público em geral. A moda dos anos 80 também foi inspirada por movimentos culturais como o new wave, o punk rock, o heavy metal, o hip hop e a disco music, marcando toda uma geração de jovens e adultos.</p>
    ],
    imgs: [
      moda1, moda2, moda3, moda4
    ],
    background: 'bg-complementaryColors-600',
    id: '#moda',
  },
  cards: [
    {
      title: 'Cubo Mágico',
      content:
        <p className="text-base text-left text-secondaryColors-400">O cubo mágico, inventado em 1974 por Ernő Rubik, alcançou seu auge nos anos 80. Trata-se de um quebra-cabeça tridimensional composto por um cubo dividido em seis faces coloridas, cada uma com nove quadrados menores. Seu objetivo é girar as faces até que cada uma contenha apenas uma cor. Nos anos 80, o cubo mágico se tornou um fenômeno global, símbolo da cultura pop da época e estimulando o interesse por matemática, lógica e arte.</p>,
      imgs: [magicCube],
      cols: 1,
    },
    {
      title: 'Fita K7 e Walkman',
      content:
        <p className="text-base text-left text-secondaryColors-400">A fita k7 foi criada em 1963 pelo engenheiro holandês Lodewijk Frederik Ottens, tornando o armazenamento de informações portátil. O auge da fita k7 ocorreu nos anos 80 nos Estados Unidos, com o lançamento do Walkman, um aparelho portátil para ouvir músicas em fitas cassete.</p>,
      imgs: [walkman],
      cols: 1,
    },
    {
      title: 'Disco de Vinil',
      content:
        <p className="text-base text-left text-secondaryColors-400">O disco de vinil simboliza a cultura musical dos anos 80, sendo um formato de mídia que proporcionava alta fidelidade sonora e um apelo estético encantador. Ele era amplamente utilizado para lançamentos de álbuns de artistas renomados e novos talentos, abrangendo diversos gêneros musicais. Além de sua função musical, o vinil era valorizado como objeto de coleção e troca, refletindo a expressão e identidade dos jovens da época.</p>,
      imgs: [vinil1, vinil2],
      cols: 2,
    },
    {
      title: 'Pac-Man',
      content:
        <p className="text-base text-left text-secondaryColors-400">O icônico jogo Pac-Man foi criado por Toru Iwatani e lançado em 22 de maio de 1980 pela Namco. Iwatani tinha o objetivo de atrair o público feminino aos fliperamas, onde as mulheres não mostravam tanto interesse na época. O jogo foi um enorme sucesso nos anos 80, tornando-se uma verdadeira febre presente em todos os fliperamas e com campeonatos televisados. </p>,
      imgs: [pacman],
      cols: 1,
    },
    {
      title: 'Tecnologia',
      content:
        <p className="text-base text-left text-secondaryColors-400">Lançado em 20 de novembro de 1985, o Windows 1.0 representa o começo daquilo que nós conhecemos como Windows. O software era uma interface gráfica (e não um sistema operacional) que rodava sobre o MS-DOS, e não tinha um “desktop” como conhecemos hoje: o principal elemento da interface era um gerenciador de arquivos. </p>,
      imgs: [],
      cols: 1,
    },
    {
      title: 'Polaroid',
      content:
        <p className="text-base text-left text-secondaryColors-400">Em 1981, as câmeras Polaroid chegaram ao mercado. Sua proposta era oferecer aos usuários uma maneira fácil e prática de registrar momentos importantes de sua vida, uma vez que a foto era impressa pela própria máquina, logo após a fotografia ser feita, sem a necessidade de produtos químicos ou algo semelhante.
        </p>,
      imgs: [polaroid],
      cols: 1,
    },
  ],
};

export default template;
