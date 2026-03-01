import React from 'react';
import GlobalHeading from '../common/GlobalHeading';
import GlobalCard1 from '../common/GlobalCard1';
import { FaRocket, FaShieldAlt, FaLightbulb, FaUsers } from 'react-icons/fa';

const TeamValuesSection = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions for the digital age.',
      icon: <FaRocket />,
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Excellence',
      description:
        'Striving for the highest quality in every line of code we write.',
      icon: <FaLightbulb />,
    },
    {
      title: 'Collaboration',
      description:
        'Achieving more together through unified goals and teamwork.',
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <GlobalHeading
        badge="Foundations"
        title="Our Core"
        highlightText="Values"
        description="The principles that drive every decision and line of code we write."
        center={true}
        className="mb-16"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {values.map((value, index) => (
          <GlobalCard1 key={index} {...value} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TeamValuesSection;
