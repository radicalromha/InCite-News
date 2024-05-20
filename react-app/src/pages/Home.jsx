import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 text-center">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shawow-lg">
        <i>A</i>
        <i>B</i>
        <i>C</i>
        <i>D</i>
        <i>E</i>
      </div>
      <h1 className="text-4xl mb-4 text-black font">InCite</h1>
      <h1 className="text-center text-red-500 font-bold">
        In the age of digital uproar. Where everyone's patience is short, so is
        the news.
      </h1>

      <nav>
        <Link to="/about" className="button-link">
          About
        </Link>
        <Link
          to="/world"
          className="inline-block m-4 py-2 px-4 bg-blue-500 text-black no-underline rounded hover:bg-blue-700"
        >
          World
        </Link>
        <Link
          to="/breaking"
          className="inline-block m-4 p-2 bg-blue-500 text-black no-underline rounded hover:bg-blue-700"
        >
          Breaking
        </Link>
        <Link
          to="/business"
          className="inline-block m-4 p-2 bg-blue-500 text-black no-underline rounded hover:bg-blue-700"
        >
          Business
        </Link>
        <Link
          to="/tech"
          className="inline-block m-4 p-2 bg-blue-500 text-black no-underline rounded hover:bg-blue-700"
        >
          Tech
        </Link>
        <Link
          to="/legal"
          className="inline-block m-4 p-2 bg-blue-500 text-black no-underline rounded hover:bg-blue-700"
        >
          Legal
        </Link>
      </nav>
    </div>
  );
};

export default Home;
