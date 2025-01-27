import React, { Suspense } from 'react';
import BrowseByProduct from './brands/page';
import Responsive from '../components/home/responsive';
import Testimonials from './testonomial/page';
import HeroSection from './hero/page';
import SlugPage from './newArrivalS/[slug]/page';
import OnSale from './onSale/page';
import NewArrival from './newArrival/page';

const Home = () => {
  return (
    <div>
      {/* Suspense is only needed for dynamic imports */}
      <Suspense >
        <Responsive />
      </Suspense>
      
      <Suspense>
        <HeroSection />
      </Suspense>

      <Suspense >
        <NewArrival />
      </Suspense>

      <Suspense >
        <OnSale />
      </Suspense>

      <Suspense>
        <BrowseByProduct />
      </Suspense>

      <Suspense>
        <Testimonials />
      </Suspense>

      {/* Dynamically rendered SlugPage is handled by Next.js routing */}
      {/* You do not need to manually invoke it */}
    </div>
  );
};

export default Home;
