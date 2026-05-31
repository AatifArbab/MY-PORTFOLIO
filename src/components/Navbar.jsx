export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Aatif Arbab</h2>

        <div style={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

    </>
  );
}

/* STYLES */
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#111",
    color: "white",
    position: "sticky",
    top: 0
  },

  logo: {
    color: "#38bdf8"
  },

  links: {
    display: "flex",
    gap: "15px"
  },

  hero: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center"
  },

  section: {
    padding: "60px",
    background: "#1e293b",
    color: "white"
  },

  skills: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  card: {
    background: "#0f172a",
    padding: "20px",
    marginTop: "10px",
    borderRadius: "10px"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#111",
    color: "white"
  }
};