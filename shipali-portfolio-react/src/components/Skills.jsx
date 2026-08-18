function Skills() {
  const skills = {
    "Web & Programming": [
      { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26", type: "img" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", type: "img" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", type: "img" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", type: "img" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", type: "img" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", type: "img" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4", type: "img" },
    ],

    Frontend: [
      { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB", type: "img" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000", type: "img" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", type: "img" },
      { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3", type: "img" }
    ],

    Backend: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", type: "img" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express/000000", type: "img" },
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20", type: "img" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/fastapi/009688", type: "img" }
    ],

    Database: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/00758F", type: "img" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248", type: "img" }
    ],
    
    "cloud & deployment":[
      { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4", type: "img" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000", type: "img" },
      { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify/00C7B7", type: "img" },
    ],

    Tools: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", type: "img" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717", type: "img" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", type: "img" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37", type: "img" }
    ]
  };

  return (
    <section id="skills" className="skills-section">
        <h2 className="skills-heading">Tech Stack</h2>      
        <p className="skills-sub">Technologies and Tools I use</p>

      <div className="skill-categories">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>

            <h3 className="skill-category-title">
              {category}
              <span> ( )</span>
            </h3>

            <div className="skills-grid">
              {items.map((skill) => (
                <div className="skill-card" key={skill.name}>

                  <div
                    className="skill-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.type === 'img' ? (
                      <img src={skill.logo} alt={skill.name} />
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                  </div>

                  <div className="skill-name">
                    {skill.name}
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;