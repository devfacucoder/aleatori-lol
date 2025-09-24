# Aleatori LoL

Random generator of builds for *League of Legends*.

## Description

This project generates random League of Legends builds:

Its features are:
1. Select and return ***6 random items***  
2. Select and return 1 random champion  
3. You can also return the build and the champion at the same time  

## Project structure

- `src/`: Application source code.  
- `champions.json`: List of champions available for selection.  
- `itemsLegendarys.json`: List of legendary items for builds.  
- `frontend/`: Location of the web page files  

## Installing the API

1. Clone the repository:
   ```bash
   git clone https://github.com/devfacucoder/aleatori-lol.git
   cd aleatori-lol
   npm start
   ```

## Usage

Once installed, you can start the backend API server with:

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The API will run by default on [http://localhost:3000](http://localhost:3000).

## API Endpoints

- `GET /api/build`  
  Returns a random build of 6 legendary items.

- `GET /api/item`  
  Returns a single random legendary item.

- `GET /api/champion`  
  Returns a random champion.

- `GET /api/champion/:champ`  
  Returns the champion object for the given name.

- `GET /api/listachamps`  
  Returns a list of all available champions.

- `GET /api/all`  
  Returns both a random build and a random champion.

## Configuration

Environment variables can be set in a `.env` file.  
Example:

```
PORT=3000
```

## File Reference

- [src/app.js](src/app.js): Express app setup.
- [src/routes.js](src/routes.js): API routes.
- [src/controllers/builds.js](src/controllers/builds.js): Build/item logic.
- [src/controllers/champions.js](src/controllers/champions.js): Champion logic.
- [champions.json](champions.json): Champion data.
- [itemsLengendarys.json](itemsLengendarys.json): Legendary item data.

## License

MIT