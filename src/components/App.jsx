import Footer from './Footer/footer';
import Header from './Header/header';
import Modal from './Modal/modal';
import Section2 from './Section-2/section-2';
import Section4 from './Section-4/section-4';
import Section5 from './Section-5/section-5';
export const App = () => {
  return (
    <div>
      <Header />
      <Section2 />
      <Section4 />
      <Section5 />
      <Footer />
      <Modal></Modal>
    </div>
  );
};
