import { ClientSideVars } from "./components/ClientSideVars";
import styles from "./page.module.css";

export default async function Home() {
  const { searchResult } = await getProps();

  return (
    <main className={styles.main}>
      <div>
        <h2>Client-side env</h2>
        <ClientSideVars />
      </div>
      <div>
        <h2>Server data</h2>
        <div className={styles.description}>{searchResult}</div>
      </div>
    </main>
  );
}

export const getProps = async () => {
  const result = await (
    await fetch(`https://www.google.com/search?q=${process.env.MY_SECRET_KEY}`)
  ).text();

  return {
    searchResult: result.substring(0, 50) + "...",
  };
};
