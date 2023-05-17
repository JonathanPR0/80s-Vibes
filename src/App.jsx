import Header from './components/Header';
import Main from './components/Main';
import Introduction from './components/Sections/Introduction';
import TTD from './components/Sections/TTD';
import Card from './components/Sections/Card';
import AccordionList from './components/AccordionList';
import Footer from './components/Footer';
import template from './assets/template';
import { Music } from './components/Sections/Music';
import { Movie } from './components/Sections/Movie';

function App() {
  return (
    <>
      <Header links={template.links} />
      <Main body={template.main} />
      <Introduction body={template.introduction}>
        {template.cards.map((card) => (
          <Card body={card} key={card.title} cols={card.cols}>
            {card.imgs && card.imgs.map((img, i) => (
              <img src={img} key={i} className='rounded-xl h-full object-cover' />
            ))}
            {card.source ? <a
              href={card.source.src}
              className="text-[10px] px-10 py-2 bg-complementaryColors-500 rounded-md hover:bg-complementaryColors-501 transition-colors md:max-w-2xl md:self-center"
            >
              {card.source.title}
            </a> : null}
          </Card>
        ))}
      </Introduction>
      <TTD body={template.musicsSection}>
        <div className='grid sm:grid-cols-2 gap-4'>
          {template.musicsSection.musics.map((data, i) => (
            <Music img={data.img} name={data.name} releaseYear={data.releaseYear} singer={data.singer} description={data.description} key={i} />
          ))}
        </div>
      </TTD>
      <TTD body={template.audiovisualSection}>
        <div className="p-4">{template.audiovisualSection.movies.map((data, i) => (
          <AccordionList i={i} name={data.name} releaseYear={data.releaseYear} key={i}>
            <Movie img={data.img} gender={data.gender} releaseYear={data.releaseYear} director={data.director} cast={data.cast} description={data.description} />
          </AccordionList>
        ))}</div>
      </TTD>
      <TTD body={template.modaSection}>
        <div className="grid grid-cols-3 gap-2 pt-5">
          <img src={template.modaSection.imgs[0]} className='h-full object-cover' />
          <img src={template.modaSection.imgs[2]} className='h-full object-cover col-span-2' />
          <img src={template.modaSection.imgs[1]} className='h-full object-cover col-span-2' />
          <img src={template.modaSection.imgs[3]} className='h-full object-cover' />
        </div>
      </TTD>
      <Footer />
    </>
  );
}

export default App;
