import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl mb-4 text-black font">InCite</h1>
      <p className="text-enter leading-8 text-black-600">
        <h1 className="text-center text-red-500 font-bold">
          In the age of digital uproar. Where everyone's patience is short, so
          is the news.
        </h1>
      </p>
      <nav>
        <Link
          to="/about"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded no-underline"
        >
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
