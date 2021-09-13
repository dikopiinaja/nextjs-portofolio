import { languages, tools } from "../data";
import Bar from "../components/Bar";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-sm font-bold">STMIK MIC Cikarang</h5>
            <p className="text-sm font-semibold">
              Academy of Technology (2017-2021)
            </p>
            <p className="my-3 text-sm text-center font-roboto">
              I am currently pursuing B.Tech in STMIK MIC Cikarng from
              Technology Information
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-sm font-bold">Freshgraduate</h5>
          </div>
        </div>
      </div>
      {/* Languages & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Languages & Frameworks</h5>
          <div className="my-1 font-roboto">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">Tools & Software</h5>
          <div className="my-1 font-roboto">
            {tools.map((tooL) => (
              <Bar data={tooL} key={tooL.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
