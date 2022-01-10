import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-200">
      <header className=" h-full text-center flex-1 flex flex-col items-center justify-center">
        <p className="text-lg mb-4 ">
          Vite + React! + Typescript + Eslint + Prettier setup
        </p>
        <button
          className="px-2 py-1  bg-violet-600 rounded hover:bg-violet-500 transition-all"
          type="button"
          onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </header>
      <footer className="p-4">
        <a
          className="hover:underline"
          href="https://github.com/ashirbad29/vite-ts-eslint-prettier-starter">
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
