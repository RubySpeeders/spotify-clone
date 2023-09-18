import styles from "./page.module.css";
import MediaPlayer from "./components/mediaPlayer";
import { CreatePlaylist } from "./components/createPlaylist";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sarah's Playlist Machine</h1>
      <MediaPlayer />
      <CreatePlaylist />
    </main>
  );
}
