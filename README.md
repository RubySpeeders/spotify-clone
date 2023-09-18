This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Documentation for Sarah's Playlist Machine

Please explain your choices and reasoning for the set of functions you implemented in an included README. Optionally, if you'd like, you may include a list of engineering optimizations you would’ve implemented had you had more time (e.g. tests)

### Reasoning

- Create playlist
  - I used a simple form. Could be nice to use Formik with more time and use Yup for validation! In the form, I added a randomly generated uuid for the playlist.
- Shuffle songs
  - I used the `shuffle` function from lodash, one of my fave libraries!
- Sort songs
  - I used the .sort() function built into JS, but was getting a bit of a type error.
- Filter songs
  - I used the .filter() function built into JS.
- Album art
  - I used the `<Image/>` component from Next.js and used a picture from Unsplash.

### Engineering Optimizations

Tests of course would be great!

- My experience for unit testing is using Jest , which I would use for the functions such as sortBy to ensure that the correct sorting was happening.
- My experience for e2e testing is using Cypress, and I would have several user flows.
  - Create a new playlist: User can type a playlist name, click the Create button, and see the correct named playlist show up in the list of playlists
  - If time permitted, I would have liked to show different playlists instead of the whole library, and in this case, I would have a test for user clicking the playlist and seeing the songs in that playlist

### If I Had More Time!

- Of course, the most important thing I would like to do with more time is to be able to add songs to playlists. The choices I made with componentizing a little early led me to some prop-handling issues. :
- My idea for adding to the new playlist would be to click the "Add to Playlist" button next to the song, which would pull up a modal (using useState and isModalOpen, setIsModalOpen) and the user would be able to check which songs would be added to the playlist. There would be a "Add Songs" button at the bottom.
- I would like have used the `uniq` from lodash to map through all the songs and get all the artists in the `filterBy` component, instead of having a hardcoded array of the artists.
- It would also be nice to have a modal for creating a new playlist with a form in the modal!
- I also had a style idea of having a NavBar on the side with "All Songs" and then the Playlists listed under that; then what was shown on the main part of the page would be a `tab` and would click through the Playlists using the id.
