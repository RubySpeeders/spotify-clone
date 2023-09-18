import Image from "next/image";
import styles from "./page.module.css";
import Library from "./components/library";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sarah's Playlist Machine</h1>
      <Library />
      <form>
        <p>Create a playlist</p>
        <label>
          Playlist Name: <input name="playlistName" />
        </label>
        <button>Create</button>
      </form>
    </main>
  );
}
