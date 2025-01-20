'use client';

import React from 'react';
import { Icon } from '@iconify/react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  skills: Skill[];
}

interface SkillSet {
  [key: string]: {
    description: string;
    skills: Skill[];
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, skills }) => (
  <div className="bg-[#0a051a] flex flex-col w-full p-6 space-y-2 border-2 mb-4 border-dashed transition-all hover:bg-black/30 hover:border-purple-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/50 group">
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <p className="text-lg text-gray-300">{description}</p>
    <div className="w-full overflow-hidden h-auto gap-4 flex flex-wrap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white rounded-full flex items-center justify-center gap-4 h-6 p-4 o verflow-hidden"
        >
          {skill.icon && <Icon icon={skill.icon} className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0" />}
          <span className="text-sm font-medium text-gray-900">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const skillSets: SkillSet = {
    Development: {
      description: 'Technologies and frameworks I use to build powerful web applications.',
      skills: [
        { name: 'React', icon: 'skill-icons:react-dark' },
        { name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
        { name: 'Typescript', icon: 'devicon:typescript' },
        { name: 'Astro', icon: 'skill-icons:astro' },
        { name: 'Next.js', icon: 'skill-icons:nextjs-light' },        
        { name: 'Sass', icon: 'skill-icons:sass' },
        { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
        { name: 'Express', icon: 'skill-icons:expressjs-light' },
        { name: 'Fast Api', icon: 'skill-icons:fastapi' },
        { name: 'MySQL', icon: 'skill-icons:mysql-light' },
        { name: 'MongoDB', icon: 'skill-icons:mongodb' },
        { name: 'PHP', icon: 'skill-icons:php-light' },
      ],
    },
    Design: {
      description: 'Tools and platforms for designing attractive and user-friendly interfaces.',
      skills: [
        { name: 'Figma', icon: 'skill-icons:figma-dark' },
        { name: 'Photoshop', icon: 'skill-icons:photoshop' },
        { name: 'Illustrator', icon: 'skill-icons:illustrator' },
        { name: 'Canva', icon: 'devicon:canva' },
        { name: 'Miro', icon: 'logos:miro-icon' },
      ],
    },
    DevOps: {
      description: 'Technologies and tools I use to ensure smooth development workflows and deployments.',
      skills: [
        { name: 'Scrum', icon: 'skill-icons:devto-dark' },
        { name: 'Jira', icon: 'devicon:jira' },
        { name: 'Git', icon: 'skill-icons:git' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'pnpm', icon: 'skill-icons:pnpm-light' },
        { name: 'npm', icon: 'skill-icons:npm-light' },
      ],
    },
  };

  return (
    <section className="w-full max-w-screen-2xl h-auto overflow-hidden bg-[#0a051a] text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">About me</h2>

        <div className="text-center mb-16 space-y-2">
          <h3 className="text-xl text-purple-500">Hi, I'm Cloves Neto!</h3>
          <p className="text-lg">
            Freelancer, Web Designer and Full Stack Web Developer.
            Come and see the solutions I develop and follow my work.
            Do you want to carry out a project? Contact me to ask any questions you may have.
          </p>
        </div>

        {Object.entries(skillSets).map(([category, { description, skills }]) => (
          <SkillCard key={category} title={category} description={description} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
