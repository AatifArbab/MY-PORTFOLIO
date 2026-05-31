export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>

        <h2 style={styles.title}>Contact Me</h2>

        <p style={styles.subtitle}>
          Feel free to reach out to me
        </p>

        <div style={styles.card}>

          <input style={styles.input} type="text" placeholder="Your Name" />

          <input style={styles.input} type="email" placeholder="Your Email" />

          <textarea
            style={styles.textarea}
            placeholder="Your Message"
          />

          <button style={styles.button}>Send Message</button>

        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "80vh",   // 🔥 full screen
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  },

  container: {
    maxWidth: "700px",
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
    marginBottom: "40px",
    fontSize: "18px",
  },

  card: {
    background: "rgba(15, 23, 42, 0.9)",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    minHeight: "120px",
    outline: "none",
    resize: "none",
  },

  button: {
    padding: "12px",
    background: "#38bdf8",
    color: "#0f172a",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};