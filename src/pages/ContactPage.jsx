
import ContactHero from '../components/contact/ContactHero';
import GetInTouch from '../components/contact/GetInTouch';
import LocationSection from '../components/contact/LocationSection';
import ContactCTA from '../components/contact/ContactCTA';


const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#fafbfc]">
      <ContactHero />
      <GetInTouch />
      <LocationSection />
      <ContactCTA />
    </main>
  );
};

export default ContactPage;
