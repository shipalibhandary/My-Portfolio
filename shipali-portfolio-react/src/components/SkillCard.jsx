function SkillCard({icon, name, color }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <i className={icon} style={{ color }}></i>
            </div>
            <div className="skill-name">{name}</div>
        </div>
    );
}

export default SkillCard;