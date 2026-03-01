import React from 'react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalCard2 from '../common/GlobalCard2';
import { FaUsers, FaLaptopCode, FaCoffee, FaRocket } from 'react-icons/fa';

const TeamBenefitsSection = () => {
  const benefits = [
    {
      title: 'Team Collaboration',
      description: 'Work with the best minds in the industry on challenging projects.',
      icon: <FaUsers />,
    },
    {
      title: 'Flexible Work',
      description: 'Balance your life with our flexible remote-first work culture.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Modern Office',
      description: 'Access to state-of-the-art facilities and a vibrant community.',
      icon: <FaCoffee />,
    },
    {
      title: 'Growth Path',
      description: 'Continuous learning and clear career advancement opportunities.',
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gray-50 rounded-[3rem] my-20">
      <GlobalHeading
        badge="Culture"
        title="Why Join"
        highlightText="Us?"
        description="Be part of a collaborative, innovative, and growth-oriented work environment."
        center={true}
        className="mb-16"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <GlobalCard2 {...benefit} index={index} compact={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamBenefitsSection;

