'use client'

import React from 'react';
import { Icon } from '@iconify/react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

interface SkillSet {
  [key: string]: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <div className="bg-[#13111f] rounded-2xl p-8 mb-6 border-2 border-violet-800 flex justify-start items-center space-x-8">
    <h3 className="text-3xl font-bold">{title}</h3>
    <div className="flex flex-wrap gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Corrigido para utilizar o ícone dinamicamente */}
          {skill.icon && <Icon icon={skill.icon} className="w-20 h-20 bg-gray-200 rounded-full mb-2" />}
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const skillSets: SkillSet = {
    Frontend: [
      { name: 'React', icon: 'skill-icons:react-dark' },
      { name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
      { name: 'Typescript', icon: 'devicon:typescript' },
      { name: 'Astro', icon: 'skill-icons:astro' },
      { name: 'Next.js', icon: 'skill-icons:nextjs-light' },
      { name: 'Sass', icon: 'skill-icons:sass' },
      // { name: 'javascript', icon: 'skill-icons:javascript' },
      // { name: 'html', icon: 'skill-icons:html' },
      // { name: 'css', icon: 'skill-icons:css' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
      { name: 'Express', icon: 'skill-icons:expressjs-light' },
      { name: 'Fast Api', icon: 'skill-icons:fastapi' },
      { name: 'MySQL', icon: 'skill-icons:mysql-light' },
      { name: 'MongoDB', icon: 'skill-icons:mongodb' },
      { name: 'PHP', icon: 'skill-icons:php-light' },
    ],
    Design: [
      { name: 'Figma', icon: 'skill-icons:figma-dark' },
      { name: 'Photoshop', icon: 'skill-icons:photoshop' },
      { name: 'Illustrator', icon: 'skill-icons:illustrator' },
      { name: 'Canva', icon: 'devicon:canva' },
      { name: 'Miro', icon: 'logos:miro-icon' },
    ],
    Devops:[
      { name: 'Scrum', icon: 'skill-icons:devto-dark' },
      { name: 'Jira', icon: 'devicon:jira' },
      { name: 'Git', icon: 'skill-icons:git' },
      { name: 'Docker', icon: 'skill-icons:docker' },      
      { name: 'pnpm', icon: 'skill-icons:pnpm-light' },
      { name: 'npm', icon: 'skill-icons:npm-light' },

    ],

    Others: [
      // { name: 'FileZilla', icon: 'devicon:filezilla-wordmark' },
      // { name: 'Notion', icon: 'skill-icons:notion-light' },
      { name: 'Monday', icon: 'logos:monday-icon' },
      // { name: 'Excel', icon: 'catppuccin:ms-excel' },
      { name: 'GraphQl', icon: 'skill-icons:graphql-dark' },
      { name: 'Claude', icon: 'logos:claude-icon' },
      { name: 'V0 - Vercel', icon: 'skill-icons:vercel-light'},
      { name: 'Netlify', icon: 'vscode-icons:file-type-light-netlify' },

    ],
  };

  return (
    <section className="min-h-screen bg-[#1a1625] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">About me</h2>

        <div className="text-center mb-16 space-y-4">
          <p className="text-xl">Hi, I'm Cloves Neto!</p>
          <p className="text-lg">Freelancer, Web Designer and Full Stack Web Developer.</p>
          <p className="text-lg">Come and see the solutions I develop and follow my work.</p>
          <p className="text-lg">Do you want to carry out a project? Contact me to ask any questions you may have.</p>
        </div>

        {Object.entries(skillSets).map(([category, skills]) => (
          <SkillCard key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
