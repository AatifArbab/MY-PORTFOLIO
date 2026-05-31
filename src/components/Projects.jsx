export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>

        <h2 style={styles.title}>My Projects</h2>

        <p style={styles.subtitle}>
          Some of the work I have built
        </p>

        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Portfolio Website</h3>
            <p>A modern React portfolio website with clean UI design.</p>
            <button style={styles.button}>View Code</button>
          </div>

          <div style={styles.card}>
            <h3>Landing Page</h3>
            <p>Responsive landing page with modern UI and animations.</p>
            <button style={styles.button}>View Code</button>
          </div>

          <div style={styles.card}>
            <h3>Todo App</h3>
            <p>React todo app with add, delete and update features.</p>
            <button style={styles.button}>View Code</button>
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",   // 🔥 full screen like Skills
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "rgba(15, 23, 42, 0.9)",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    textAlign: "left",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  button: {
    marginTop: "15px",
    padding: "10px 15px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};