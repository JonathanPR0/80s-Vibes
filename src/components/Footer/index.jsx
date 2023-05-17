import { InstagramLogo } from 'phosphor-react';
import { Logo } from '../Logo';

function Footer() {
  return (
    <footer className="flex text-center w-full px-6 py-[64px] bg-primaryColors-500 text-secondaryColors-400">
      <div className="lg:max-w-5xl md:max-w-4xl flex flex-col mx-auto">
        <Logo className="mb-6 h-14 w-14 mx-auto" />
        <p className="mb-3">
          ©2023{' '}
          <a
            href="https://github.com/JonathanPR0"
            className="text-primaryColor-300 hover:underline underline-offset-1 transition-all"
            target="_blank" rel="noreferrer"
          >
            JonathanPR0
          </a>
        </p>
        <p className="mb-3">Todos os direitos reservados.</p>
        <p className="mb-3">Turma: Mecatrônica 4M</p>

        <p className="self-center text-primaryColors-300">
          <a href="https://www.instagram.com/biotrend.meca/" className="flex flex-row" target="_blank" rel="noreferrer">
            <InstagramLogo size={24} className="mr-1" />
            <p className="hover:underline underline-offset-1">Instagram</p>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
