import React from 'react';
import ServiceHero from '../components/service/ServiceHero';
import ServiceOverviewCards from '../components/service/ServiceOverviewCards';
import OurServices from '../components/service/OurServices';
import WorkingProcess from '../components/service/WorkingProcess';
import ServiceCTA from '../components/service/ServiceCTA';

const Service = () => {
    return (
        <main>
            <ServiceHero />
            <ServiceOverviewCards />
            <OurServices />
            <WorkingProcess />
            <ServiceCTA />
        </main>
    );
};

export default Service;
