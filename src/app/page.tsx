import MainCaraousal from "~/components/pages/Home/Caraousal";
import RecentlyViewed from "~/components/pages/Home/RecentlyViewed";
import SchemeCard from "~/components/pages/Home/SchemeCard";
import TopBar from "~/components/pages/shared/TopBar";
import { SchemeInsert } from "~/server/db/schema";
import { api } from "~/trpc/server";

const scheme: SchemeInsert[] = [
  {
    name: "Mid-Day Meal Scheme",
    details:
      "A school meal program to improve the nutritional status of children.",
    benefits: "Free and nutritious meals to school children.",
    eligibility: "All students in government and government-aided schools.",
    lastDate: new Date(),
    applicationProcess:
      "Automatically enrolled for students in eligible schools.",
    requiredDocs: "None",
    portalLink: "https://mdm.nic.in/",
    gender: "all",
    maritalStatus: "unmarried",
    category: "SC",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
  {
    name: "Digital India",

    details:
      "A program to transform India into a digitally empowered society and knowledge economy.",
    benefits:
      "Improved access to digital services, infrastructure, and e-governance.",
    eligibility: "All Indian citizens and businesses.",
    lastDate: new Date(1625155200),
    applicationProcess:
      "Access digital services and contribute to the digital ecosystem.",
    requiredDocs: "None",
    portalLink: "https://digitalindia.gov.in/",
    gender: "all",
    maritalStatus: "married",
    category: "SC",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
  {
    name: "National Rural Employment Guarantee Act (NREGA)",

    details:
      "A rural employment program that provides a legal guarantee of 100 days of wage employment.",
    benefits:
      "Guaranteed employment and livelihood opportunities for rural households.",
    eligibility: "Rural households in India.",
    lastDate: new Date(1590883200),
    applicationProcess: "Apply through local panchayats and Gram Sabhas.",
    requiredDocs: "Job card and identity proof.",
    portalLink: "https://nrega.nic.in/",
    gender: "all",
    maritalStatus: "married",
    category: "ST",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
  {
    name: "Beti Bachao, Beti Padhao",
    details:
      "A campaign to promote the welfare of the girl child and address gender bias.",
    benefits: "Promotion of girl child education and gender equality.",
    eligibility: "All Indian citizens with a focus on gender equality.",
    lastDate: new Date(1541030400),
    applicationProcess:
      "Support gender equality and girls' education in society.",
    requiredDocs: "None",
    portalLink: "https://wcd.nic.in/bbbp-schemes",
    gender: "female",
    maritalStatus: "unmarried",
    category: "ST",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
  {
    name: "Pradhan Mantri Awas Yojana",
    details:
      "A housing scheme to provide affordable housing to all urban and rural poor.",
    benefits:
      "Subsidized home loans and affordable housing for eligible beneficiaries.",
    eligibility:
      "Economically weaker sections (EWS), lower-income groups (LIG), and others.",
    lastDate: new Date(),
    applicationProcess:
      "Apply through Common Service Centers or Housing societies.",
    requiredDocs: "Income proof, identity proof, and address proof.",
    portalLink: "https://pmaymis.gov.in/",
    gender: "all",
    maritalStatus: "married",
    category: "OBC",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
  {
    name: "Swachh Bharat Abhiyan",
    details:
      "A sanitation and cleanliness program to make India open defecation free.",
    benefits:
      "Improved sanitation, health, and hygiene in rural and urban areas.",
    eligibility: "All Indian citizens and local governments.",
    lastDate: new Date(),
    applicationProcess:
      "Participate in cleanliness drives and promote sanitation.",
    requiredDocs: "None",
    portalLink: "https://swachhbharat.mygov.in/",
    gender: "all",
    maritalStatus: "unmarried",
    category: "SC",
    schemeImage:
      "https://source.unsplash.com/random/300x300?government+schemes",
  },
];

export default async function Home() {
  // const createScheme = api.scheme.create.useMutation({
  //   onSuccess(data, variables, context) {
  //     console.log(variables);
  //   },
  // });
  const schemes = await api.scheme.getAll.query();

  return (
    <div>
      <TopBar />
      <MainCaraousal />
      <RecentlyViewed />
      {/* <Button
        onClick={() => {
          for (let i = 0; i < scheme.length; i++) {
            const element = scheme[i];
            if (!element) return;
            createScheme.mutate(element);
          }
        }}
      >
        Create Data
      </Button> */}
      <div className="container mt-3">
        <p className="text-lg font-bold">All Schemes</p>
        {schemes.map((scheme) => {
          return (
            <div className="mb-2">
              <SchemeCard schemeData={scheme} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
