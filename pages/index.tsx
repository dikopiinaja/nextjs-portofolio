// import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div
      className="flex flex-col flex-grow px-8 pt-1"
      style={{ marginLeft: "-1,5rem", marginRight: "-1,5rem" }}
    >
      <h6 className="my-3 italic text-center font-sm font-roboto">
        I'am Freshgraduated of STMIK MIC CIKARANG Bacheleor of Technic
        Information, Learn life cycle in my intro alone
      </h6>

      <div
        className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide font-roboto">
          Skills
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-300 rounded-lg dark:bg-dark-100 lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getStaticProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
