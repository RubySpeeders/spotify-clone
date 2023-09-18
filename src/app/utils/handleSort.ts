import { Song } from "../interfaces/song";

export const handleSort = (songs: Song[], selection: keyof Song) => {
  songs?.sort((a, b) =>
    a[selection].toLowerCase().localeCompare(b[selection].toLowerCase())
  );
};
