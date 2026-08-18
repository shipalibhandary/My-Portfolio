function About() {
    return (
        <section id="about" className="about-id">
            <div className="id-card">
                <div className="lanyard"></div>
                    <div className="badge">
                        <img src="/images/About-Me.png" alt="Shipali" />
                    </div>
                </div>
                
                <div className="about-text">
                    <h2> <span className="typing-effect">Hi, I’m Shipali 👋</span> </h2> 
                    
                    <p>Hi, I'm Shipali, a passionate and detail-oriented developer with a strong interest in building meaningful 
                        digital experiences. I enjoy turning ideas into functional, user-friendly solutions—whether it’s a 
                        data-driven dashboard, an AI/ML project, or a simple clean interface that solves a real problem.
                    </p>

                    <p>I’m currently focused on strengthening my skills in Python, Machine Learning, Data Analysis,
                            JavaScript, and Web Development, while actively building projects that help me learn by doing.
                    </p>

                    <p>Outside the IDE, I’m someone who enjoys learning new tools, discovering better ways to solve 
                        problems, and constantly improving myself. I like creating things that make people say, “Wow, 
                        this actually works!”
                    </p>
                    
                    <a href="#contact" className="btn">Let’s Connect</a>
                </div>
        </section>
    )
}

export default About;