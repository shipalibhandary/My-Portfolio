import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Telegram-Dashboard',
      image: '/images/project-screenshots/telegram.png',
      description: 'An interactive dashboard for analyzing Telegram channel data.',
      github: 'https://github.com/shipalibhandary/telegram_channel_dashboard',
      live: 'https://telegramchanneldashboard.streamlit.app/',
      colorClass: 'beige'
    },

    {
      title: 'Personality-Prediction',
      image: 'images/project-screenshots/persoPred.png',
      description: 'A personality prediction application built using machine learning.',
      github: 'https://github.com/shipalibhandary/Personality-Prediction',
      live: 'https://shipalibhandary-personalitypred-app-szsxhl.streamlit.app/',
      colorClass: 'dark'
    },

    {
      title: 'ElectraNexa',
      image: 'images/project-screenshots/Electranexa.png',
      description: 'An e-commerce website for a seamless shopping experience.',
      github: 'https://github.com/shipalibhandary/ElectraNexa',
      live: '',
      colorClass: 'brown'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            live={project.live}
            colorClass={project.colorClass}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;