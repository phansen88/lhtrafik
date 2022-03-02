import frederiksberg from '../img/frederiksberg.jpg'; // with import
function Landingpage() {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-8 py-24 mx-auto">
        <div class="mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Velkommen til </span>
                <br />
                <span className="block text-indigo-600 xl:inline">
                  LH Trafik
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                LH Trafik er en enkelt-mands-virksomhed, som drives af
                teknikumingeniør Lene Hansen. <br />
                Lene fokuserer på at gennemføre trafiksikkerheds- og
                tilgængelighedsrevisioner for at vedligeholde uddannelserne ved
                side af arbejdet som teamkoordinator i Furesø Kommune.
              </p>
              {/*<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Kontakt
                  </a>
                </div>
              </div>*/}
            </div>
          </div>
          <img
            alt="frederiksberg"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={frederiksberg}
          />
        </div>
      </div>
    </section>
  );
}
export default Landingpage;
