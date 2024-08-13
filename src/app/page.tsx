import ContactSection from '@/app/components/ContactSection/ContactSection'
import DoubtsSection from '@/app/components/DoubtsSection/DoubtsSection'
import DoYouNeedTherapySection from '@/app/components/DoYouNeedTherapySection/DoYouNeedTherapySection'
import EvaluationsSection from '@/app/components/EvaluationsSection/EvaluationsSection'
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import InstagramSection from '@/app/components/InstagramSection/InstagramSection'
import OurServicesSection from '@/app/components/OurServicesSection/OurServicesSection'
import StartSection from '@/app/components/StartSection/StartSection'
import WhoIAmSection from '@/app/components/WhoIAmSection/WhoIAmSection'

export default function Home() {
  return (
    <main>
      <Header />
      <StartSection />
      <WhoIAmSection />
      <DoYouNeedTherapySection />
      <OurServicesSection />
      <EvaluationsSection />
      <InstagramSection />
      <DoubtsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
