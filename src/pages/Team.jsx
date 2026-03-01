import React from 'react';
import MeetOurTeam from '../components/team/MeetOurTeam';
import TeamValuesSection from '../components/team/TeamValuesSection';
import TeamBenefitsSection from '../components/team/TeamBenefitsSection';
import TeamCTA from '../components/team/TeamCTA';

const Team = () => {
    return (
        <main className="pt-20 bg-white">
            <TeamValuesSection />
            <MeetOurTeam />
            <TeamBenefitsSection />
            <TeamCTA />
        </main>
    );
};

export default Team;
