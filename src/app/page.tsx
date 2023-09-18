import styles from "./page.module.css";
import MediaPlayer from "./components/mediaPlayer";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sarah's Playlist Machine</h1>
      <MediaPlayer />
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
