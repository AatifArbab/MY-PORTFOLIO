export default function Hero()
{
  return (
    <section style={styles.hero} id="home">

      <div style={styles.imageContainer}>
  <img
    src="/image.png"
    alt="Aatif Arbab"
    style={styles.image}
  />
</div>

      {/* Right Side Content */}
      <div style={styles.content}>
        <p style={styles.tag}>WELCOME TO MY PORTFOLIO</p>

        <h1 style={styles.title}>
          Hi, I'm <span style={styles.name}>Aatif Arbab</span>
        </h1>

        <h3 style={styles.subtitle}>
          Frontend Developer • React Developer • UI/UX Enthusiast
        </h3>

             <p style={styles.desc}>
          I specialize in building modern, responsive, and user-friendly
          web applications using React.js, JavaScript, HTML, and CSS.
          My goal is to create visually appealing interfaces with smooth
          user experiences and clean, maintainable code.
          <br /><br />
          As a Computer Science student and passionate developer, I am
          constantly learning new technologies and improving my skills
          to build innovative digital solutions that make an impact.
        </p>
      </div>
    </section>
  );
}



const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "70px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    padding: "40px",
    flexWrap: "wrap",
  },


  image: {
  width: "450px",
  height: "450px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "5px solid #38bdf8",
  boxShadow: "0 0 40px rgba(56, 189, 248, 0.6)",
},

  image: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #38bdf8",
    boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)",
  },

  content: {
    flex: 1,
    maxWidth: "600px",
  },

  tag: {
    color: "#38bdf8",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "3px",
    marginBottom: "15px",
  },

  title: {
    fontSize: "65px",
    fontWeight: "800",
    marginBottom: "10px",
    lineHeight: "1.1",
  },

  name: {
    color: "#38bdf8",
  },

  subtitle: {
    fontSize: "24px",
    color: "#cbd5e1",
    marginBottom: "20px",
  },

  desc: {
    fontSize: "18px",
    color: "#94a3b8",
    lineHeight: "1.8",
  },
};