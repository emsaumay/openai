# React Pokedex

This project is a modern Pokedex application built with React.js and Tailwind CSS. It allows users to search, retrieve, and analyze different Pokemon by their statistics, integrating with the Pokemon API for data retrieval.

## Features

- **Search Bar**: Users can search for Pokemon by name or id.
- **Infinite Scroll**: A scrollable list of Pokemon that loads more items as you scroll.
- **Interactive Pokemon Cards**: Displays Pokemon name, image, type, and id with engaging micro-interactions.
- **Pokemon Detail Modal**: Shows detailed statistics in a modal upon clicking a Pokemon card.
- **Real-time Type Filter**: A dropdown that filters Pokemon by type in real-time.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/react-pokedex.git
cd react-pokedex
npm install
```

## Usage

To run the application in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Structure

The application's codebase is organized into several directories:

- `src/api`: Contains the API utility functions.
- `src/components`: Reusable components like `SearchBar`, `PokemonCard`, `PokemonList`, `PokemonModal`, and `TypeFilterDropdown`.
- `src/hooks`: Custom hooks like `usePokemonList`, `usePokemon`, `useDebounce`, and `useInfiniteScroll`.
- `src/context`: Context API files like `PokemonContext`.
- `src/redux`: Redux related files for state management.
- `src/styles`: CSS files for styling components.
- `src/utils`: Utility files like constants and helpers.

## Dependencies

- React & ReactDOM
- Redux & React-Redux
- Redux Toolkit
- Axios (for API calls)
- Tailwind CSS
- React Router (for routing)
- PropTypes (for type-checking)

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Pokemon API for providing the data used in this project.
- All contributors who helped in building this application.

Happy coding!