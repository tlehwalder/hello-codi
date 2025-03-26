import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>hello codi 👋</h1>
      <div className={styles.container}>
        <span className={styles.title}>Suche 🔍</span>
        <input />
      </div>
      <div className={styles.container}>
        <span className={styles.title}>Produkte 📦</span>
      </div>
    </div>
  );
};

export default Home;
