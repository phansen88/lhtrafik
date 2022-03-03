function Footer() {
  return (
    <footer className="container mx-auto pt-6 px-4 sm:px-6 lg:px-8 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:py-2 sm:mt-0 mt-4">
          © 2022 LH Trafik — Lh Trafik v/Lene Hansen — 27 21 23 97 -{' '}
          <a
            className="text-indigo-600 font-bold"
            href="mailto:lene@lhtrafik.dk"
            target="_blank"
          >
            Send en mail
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://linkedin.com/in/lene-hansen-54442311"
            target="_blank"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
