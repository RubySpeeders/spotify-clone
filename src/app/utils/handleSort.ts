import { Song } from "../interfaces/song";

export const handleSort = (songs: Song[], selection: keyof Song) => {
  //I would like this function to take in the dropdown selection the user has selected and sort by that selection. Currently getting an error; if I had time, I would look more in to this :)
  songs?.sort((a, b) =>
    a[selection].toLowerCase().localeCompare(b[selection].toLowerCase())
  );
};
