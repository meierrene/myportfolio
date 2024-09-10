import { Fragment } from 'react';
import Greetings from './main/Greetings';
import Aboutme from './main/Aboutme';
import Myprojects from './main/MyProjects';
import Gallery from './main/Gallery';
import Cta from './main/Cta';
import WhatsAppIcon from './UI/WhatsAppIcon';
import Donation from './main/Donation';
import { sections } from './utils/projectData';

const Main = () => {
  return (
    <>
      <Greetings />
      <hr id={sections[0].ref} />
      <Aboutme />
      <hr id={sections[1].ref} />
      <Myprojects />
      <Gallery />
      <hr id={sections[2].ref} />
      <Donation />
      <hr id={sections[3].ref} />
      <Cta />
      <hr />
      <WhatsAppIcon />
    </>
  );
};

export default Main;
