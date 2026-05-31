export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>

        {/* Left Image */}
        <div style={styles.imageContainer}>
          <img
            src="/Atif.jpg"
            alt="Aatif Arbab"
            style={styles.image}
          />
        </div>

        {/* Right Content */}
        <div style={styles.content}>
          <h2 style={styles.title}>About Me</h2>

          <p style={styles.subtitle}>Get to know who I am</p>

          <p style={styles.text}>
            I am a passionate <span style={styles.highlight}>Frontend React Developer</span>
            who is learning modern web development technologies to build responsive websites.
          </p>

       

            <p style={styles.text}>

         My name is Aatif Arbab, and I am currently pursuing a degree in Computer Science. I am passionate about web development and specialize in building responsive and visually appealing websites using React.js, JavaScript, HTML, and CSS. I enjoy learning new technologies, solving problems, and creating digital solutions that provide a great user experience. My goal is to grow as a professional software developer, work on impactful projects, and continuously improve my technical and creative skills. I believe that dedication, consistency, and continuous learning are the keys to success in the technology industry.



              My goal is to become a professional Full Stack Developer.

            </p>

          <div style={styles.infoBox}>
            <div style={styles.infoItem}>
              <h3>🎓 Education</h3>
              <p>Computer Science</p>
            </div>

            <div style={styles.infoItem}>
              <h3>💻 Focus</h3>
              <p>React JS</p>
            </div>

            <div style={styles.infoItem}>
              <h3>🚀 Goal</h3>
              <p>Full Stack Dev</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
        minHeight: "100vh",   // 🔥 full screen like Skills
    padding: "80px 20px",
    background: "#0f172a",
    color: "white",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    flexWrap: "wrap",
  },

  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8",
    boxShadow: "0 0 25px rgba(56,189,248,0.4)",
  },

  content: {
    flex: 2,
    minWidth: "300px",
  },

  title: {
    fontSize: "40px",
    color: "#38bdf8",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  text: {
    color: "#cbd5e1",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "15px",
  },

  highlight: {
    color: "#38bdf8",
    fontWeight: "bold",
  },

  infoBox: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  infoItem: {
    flex: 1,
    minWidth: "150px",
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
};