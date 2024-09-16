import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-yellow-500 mt-12 pt-8 border-t-4 text-center">
      <p>
        Star Wars and all associated names and/or images are copyright{" "}
        <Link
          href="https://www.lucasfilm.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Lucasfilm Ltd.
        </Link>
      </p>
      <p className="mt-2 text-sm">
        © {currentYear}{" "}
        <Link
          href="https://jeanpierrecarvalho.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Jean-Pierre Carvalho
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
