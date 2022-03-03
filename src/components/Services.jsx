import fodgaengerfelt from './../img/fodgængerfelt.jpg';
import vej from './../img/vej.jpg';
function Services() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-8 py-12 mx-auto">
          <div className="mx-auto flex flex-wrap">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Ydelser</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-5xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                LH Trafik tilbyder primært at gennemføre
                trafiksikkerhedsrevisioner og tilgængelighedsrevisioner.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-5xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Trafiksikkerheds- og tilgængelighedsrevisioner af projekter
                bidrager til at vejene indrettes efter den bedste viden om
                trafiksikkerhed, så vejene er så sikre som muligt. Hvis der
                samtidigt gennemføres en tilgængelighedsrevision bliver vejene
                også indrettet så der tages bedst muligt hensyn til alle typer
                af trafikanter. Det kan være dårligt gående, kørestolsbrugere
                eller blinde, men også så det bliver lettere at komme rundt med
                barnevogne og lignende.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-5xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Kontakt mig for at få at vide hvordan LH Trafik kan hjælpe dig i
                gang med at forbedre trafiksikkerheden.
              </p>
              {/*
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/home"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Kontakt
                  </a>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 flex flex-col">
          <div className="flex flex-wrap  sm:max-w-5xl">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={vej}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Trafiksikkerhedsrevision
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Hvad er en trafiksikkerhedsrevision?
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Trafiksikkerhedsrevision skal medvirke til at gøre nye vej- og
                  trafikprojekter så sikre som muligt inden anlæg og
                  ibrugtagning.{' '}
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Ved en trafiksikkerhedsrevision granskes projektets
                  trafiksikkerhedsmæssige kvalitet og eventuelle
                  uhensigtsmæssige løsninger afdækkes inden de udføres i marken.
                  Trafiksikkerhedsrevisionen foretages med udgangspunkt i
                  Vejdirektoratets håndbog i trafiksikkerhedsrevision.
                  Trafiksikkerhedsrevision kan foretages på forskellige trin af
                  projektforløbet alt efter hvor stort projektet er.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  <ul className="list-inside list-disc leading-relaxed text-lg mb-4">
                    <li>Trin 1 Forprojekt</li>
                    <li>Trin 2 Skitseprojekt</li>
                    <li>Trin 3 Detailprojekt</li>
                    <li>Trin 4 Ibrugtagning</li>
                    <li>Trin 5 Overvågning</li>
                  </ul>
                  Der udarbejdes et udkast til en revisionsrapport, som
                  kommenteres af den projekterende. Eventuelle
                  uoverensstemmelser afklares af bygherren og den projekterende
                  beskriver herefter skriftligt ændringer i projektet overfor
                  revisoren, som herefter afslutter revisionsrapporten.
                </p>
                {/*
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 flex flex-col">
          <div className="flex flex-wrap  sm:max-w-5xl">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={fodgaengerfelt}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Tilgængelighedsrevision
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Hvad er en tilgængelighedsrevision?
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Tilgængelighedsrevision skal medvirke til at skabe
                  færdselsarealer for alle med eller uden handicap. Ved at gøre
                  arealerne tilgængelige for alle, gøres det lettere for syns-
                  og bevægelseshandicappede, børn og ældre at bevæge sig rundt
                  mellem rejsemålene, som kan være defineret i en brugeranalyse
                  af rejsemålene. Små ændringer i projektet kan medvirke til, at
                  det bliver lettere at orientere sig og kan have stor betydning
                  for den enkeltes livskvalitet og anvendelsen af det offentlige
                  rum
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Tilgængelighedsrevisionen foretages med udgangspunkt i
                  Vejdirektoratets håndbog i Færdselsarealer for alle -
                  Universelt design og tilgængelighed.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Tilgængelighedsrevision kan foretages på forskellige trin af
                  projektforløbet alt efter hvor stort projektet er.
                  <ul className="list-inside list-disc leading-relaxed text-lg mb-4">
                    <li>Trin 1 Plan- og idéoplæg</li>
                    <li>Trin 2 Skitseprojekt</li>
                    <li>Trin 3 Detailprojekt</li>
                    <li>Trin 4 Ibrugtagning</li>
                    <li>Trin 5 Overvågning</li>
                  </ul>
                  Der udarbejdes et udkast til en revisionsrapport, som
                  kommenteres af den projekterende og bygherren. Eventuelle
                  uoverensstemmelser afklares med bygherren og den projekterende
                  beskriver herefter skriftligt ændringer i projektet overfor
                  revisoren, som herefter afslutter revisionsrapporten.
                </p>
                {/*
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
