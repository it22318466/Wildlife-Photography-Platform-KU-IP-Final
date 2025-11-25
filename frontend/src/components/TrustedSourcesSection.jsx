import React from "react";
import { 
  Book as BookIcon,
  Shield as ShieldIcon,
  World as WorldIcon,
  FileText as FileTextIcon,
  AlertTriangle as AlertTriangleIcon,
  CloudRain as CloudRainIcon,
  Drone as DroneIcon,
  Database as DatabaseIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  FileDescription as FileDescriptionIcon,
  Tree as TreeIcon
} from "tabler-icons-react";

const TrustedSourcesSection = () => {
  const sources = [
    {
      category: "Official Sri Lankan Institutions",
      items: [
        {
          title: "Department of Wildlife Conservation (DWC)",
          description: "Protected areas, permit authority, species lists",
          url: "https://www.dwc.gov.lk/",
          icon: <ShieldIcon size={20} className="text-green-600" />
        },
        {
          title: "Department of Forest Conservation",
          description: "Forest reserves & rules",
          url: "http://www.forestdept.gov.lk/index.php/en/",
          icon: <TreeIcon size={20} className="text-green-600" />
        },
        {
          title: "Disaster Management Centre (DMC)",
          description: "Hazard & disaster alerts",
          url: "http://www.dmc.gov.lk/",
          icon: <AlertTriangleIcon size={20} className="text-orange-500" />
        },
        {
          title: "Department of Meteorology",
          description: "Weather forecasts & advisories",
          url: "https://www.meteo.gov.lk/",
          icon: <CloudRainIcon size={20} className="text-blue-500" />
        },
        {
          title: "Civil Aviation Authority of Sri Lanka (CAASL)",
          description: "Drone regulations",
          url: "https://www.caa.lk/",
          icon: <DroneIcon size={20} className="text-gray-600" />
        }
      ]
    },
    {
      category: "International & Scientific Sources",
      items: [
        {
          title: "GBIF",
          description: "Species occurrence and biodiversity datasets (Use with license notice)",
          url: "https://www.gbif.org/",
          icon: <DatabaseIcon size={20} className="text-purple-600" />
        },
        {
          title: "iNaturalist / eBird",
          description: "Crowd sourced observational data with geoprivacy protocols (Use respecting API terms)",
          url: "https://www.inaturalist.org/",
          icon: <UsersIcon size={20} className="text-green-500" />
        },
        {
          title: "IUCN Red List",
          description: "Conservation status and species level assessments (Academic Literature) + GBIF Data (Verified Sources)",
          url: "https://www.iucnredlist.org/",
          icon: <AwardIcon size={20} className="text-red-500" />
        }
      ]
    },
    {
      category: "Partnerships & Data Agreements",
      items: [
        {
          title: "Research Collaboration Guidelines",
          description: "For precise or sensitive data needs (for research), Formal MoUs or data sharing agreements with DWC, universities or NGOs may be required.",
          icon: <FileDescriptionIcon size={20} className="text-blue-600" />,
          note: "Requires justification, NDAs and audit trails"
        }
      ]
    }
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm my-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <ShieldIcon className="mr-2 text-green-600" size={24} />
        Trusted Data Sources & Approved Institutions
      </h2>
      
      {sources.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">
            {section.category}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    {item.url ? (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline flex items-center"
                      >
                        {item.title}
                        <svg 
                          className="w-4 h-4 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-medium text-gray-800">{item.title}</span>
                    )}
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    {item.note && (
                      <p className="text-xs text-amber-700 mt-2 bg-orange-100 p-2 rounded">
                        <strong>Note:</strong> {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-2">Data Usage Guidelines</h4>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Always verify data with primary sources when used for research or publications.</li>
          <li>Respect data licensing and attribution requirements.</li>
          <li>Be mindful of sensitive species location data.</li>
          <li>Contact institutions directly for official datasets and research collaborations.</li>
        </ul>
      </div>
    </section>
  );
};

export default TrustedSourcesSection;