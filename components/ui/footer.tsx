export default function Footer() {
  return (
    <footer className="w-full bg-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm">
          Website powered by Sahaas <br></br>
          <a
            href="https://sahaas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300"
          >
            Get your organisation's website for free
          </a>
        </p>
      </div>
    </footer>
  );
}
