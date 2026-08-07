import Footer from '@/app/footer';
import Contact from '@/app/contact';
import ServiceHero from './serviceHero';
import CollectionCards from './collectionCards';


export default function Products() {
    
    return <div className="w-full overflow-hidden">
       <ServiceHero />
       <CollectionCards />
       <Contact />
       <Footer />
    </div>
}