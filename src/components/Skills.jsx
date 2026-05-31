export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>

        <h2 style={styles.title}>My Skills</h2>

        <p style={styles.subtitle}>
          Technologies I work with
        </p>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div style={styles.card}>
            <h3>Styling</h3>
            <p>CSS, Flexbox, Grid, Responsive Design</p>
          </div>

          <div style={styles.card}>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>

          <div style={styles.card}>
            <h3>Learning</h3>
            <p>Node.js, Express, APIs</p>
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",          // 🔥 full laptop screen
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  },

  container: {
    maxWidth: "1100px",
    width: "100%",
    textAlign: "center",
  },

  title: {
    fontSize: "48px",
    fontWeight: "800",
    color: "#38bdf8",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "50px",
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "rgba(15, 23, 42, 0.9)",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    transition: "0.3s ease",
    cursor: "pointer",
  },
};