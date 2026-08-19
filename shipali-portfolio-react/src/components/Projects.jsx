import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title:'Case Velora- Airbnb Clone',
      image:'/images/project-screenshots/Airbnb.png',
      description:'A clone of Airbnb website built using React + vite. Includes static property data, multiple property images, scroll locking, responsive design, and smooth user interactions.',
      github:'https://github.com/shipalibhandary/Airbnb/tree/main/airbnb',
      live :'https://airbnb-seven-bice.vercel.app/',
      colorClass:'dark'
    },

    {
      title:"PassBill - Pastry Billing",
      image:'/images/project-screenshots/Passbill.png',
      description:"A billing application for a pastry shop built using React + vite. Features include product management, bill generation, and a user-friendly interface for efficient billing operations.",
      github:'https://github.com/shipalibhandary/PasBil',
      colorClass:'beige'

    },

    {
      title: 'Telegram-Dashboard',
      image: '/images/project-screenshots/telegram.png',
      description: 'An interactive dashboard for analyzing Telegram channel data built using Python + Streamlit. . Features data visualization, chat analysis, and an interactive dashboard for exploring communication patterns and personality-related results.',
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
      colorClass: 'brown'
    },

    {
      title: 'ElectraNexa',
      image: 'images/project-screenshots/Electranexa.png',
      description: 'An e-commerce website for a seamless shopping experience. Implemented filtering and responsive layouts using JavaScript and Bootstrap. ',
      github: 'https://github.com/shipalibhandary/ElectraNexa',
      live: '',
      colorClass: 'dark'
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