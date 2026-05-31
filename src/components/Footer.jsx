export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>


        <div style={styles.links}>

         
          {/* 🔥 LinkedIn Logo Link */}
          <a
href="https://www.linkedin.com/in/YOUR-USERNAME"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <img
              src="/download.png"
              alt="LinkedIn"
              style={styles.icon}
            />
          </a>

        </div>

        <p style={styles.copy}>
          © 2026 Aatif Arbab Portfolio. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f172a",
    color: "white",
    padding: "5px",
    borderTop: "1px solid rgba(56, 189, 248, 0.2)",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center",
  },

  logo: {
    color: "#38bdf8",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  text: {
    color: "#94a3b8",
    marginBottom: "20px",
    fontSize: "14px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "25px",
  },

  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px",
  },

  iconLink: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
    transition: "0.3s",
  },

  copy: {
    fontSize: "13px",
    color: "#64748b",
  },
};