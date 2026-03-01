import React from 'react';
import ProjectHero from '../components/project/ProjectHero';
import ProjectOverviewCards from '../components/project/ProjectOverviewCards';
import ProjectPortfolio from '../components/project/ProjectPortfolio';
import ProjectBenefits from '../components/project/ProjectBenefits';
import ProjectExpertise from '../components/project/ProjectExpertise';
import ProjectCTA from '../components/project/ProjectCTA';


const Project = () => {
    return (
        <main>
          <ProjectHero />
          <ProjectOverviewCards />
          <ProjectPortfolio />
          <ProjectExpertise />
          <ProjectBenefits />
          <ProjectCTA />
        </main>
    );
};

export default Project;
