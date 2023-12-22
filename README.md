# Pokedex Application

This project is a Pokedex application developed using React.js and Tailwind CSS. It allows users to search, filter, and view details of their favorite Pokemon using the Pokemon API.

## Features

- **Search Functionality**: Users can search for Pokemon using the search bar.
- **Infinite Scrolling**: The application supports infinite scrolling, loading more Pokemon as the user scrolls.
- **Interactive Pokemon Cards**: Each Pokemon card has hover and click interactions.
- **Detailed Modal View**: Clicking on a Pokemon card opens a modal with detailed information.
- **Type Filtering**: Users can filter Pokemon by type using a dropdown menu.

## Installation

To run this project locally, clone the repository and install the dependencies:

```
git clone https://github.com/your-repository/pokedex-app.git
cd pokedex-app
npm install
```

## Usage

After installing, you can start the application by running:

```
npm start
```

The application will open in your default web browser at `http://localhost:3000`.

## Structure

The application is structured as follows:

- `src/index.js`: The entry point of the React application.
- `src/App.js`: The main application component.
- `src/api/pokemonAPI.js`: Contains functions to call the Pokemon API.
- `src/components/`: Directory containing all the React components.
- `src/hooks/`: Custom hooks for fetching and displaying Pokemon data.
- `src/context/`: Context API for global state management.
- `src/redux/`: Redux store configuration and slices.
- `src/styles/`: Contains Tailwind CSS and custom styles.

## Contributing

Contributions are welcome! Please read the `CONTRIBUTING.md` for instructions on how to contribute to the project.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.