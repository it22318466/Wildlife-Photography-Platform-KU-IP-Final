import React, { useState } from "react";

export default function DataLegalSourcesSection({ className = "" }) {
  const [query, setQuery] = useState("");

  const sources = [
    {
      title:
        "Department of Wildlife Conservation (DWC) – National Parks (official)",
      url: "https://www.dwc.gov.lk/",
    },
    {
      title:
        "Department of Wildlife Conservation – General Info / Mission (Ministry of Environment)",
      url: "https://www.env.gov.lk/",
    },
    {
      title: "DWC Protected Areas / Boundaries (Sri Lanka NSDI)",
      url: "https://www.nsdi.gov.lk/",
    },
    {
      title: "Wildlife Park Permits e-Service (DWC)",
      url: "https://dwc.lankagate.gov.lk/DWCEpermitApp/homeAction.action",
    },
    {
      title:
        "Fauna and Flora Protection Ordinance (FFPO) No. 2 of 1937 (Sri Lanka Biodiversity)",
      url: "https://lk.chm-cbd.net/documents/fauna-and-flora-protection-ordinance-no-2-1937",
    },
    {
      title: "PDF version of FFPO - Legal Text (Sri Lanka Biodiversity)",
      url: "https://www.commonlii.org/lk/legis/consol_act/fafp567290.pdf",
    },
    {
      title:
        "CITES / Drone Operation Form – Civil Aviation Authority of Sri Lanka (Application for UAV) ",
      url: "https://www.caa.lk/en/drones",
    },
    {
      title:
        "CAASL Drone Regs Info Pamphlet / Drone Approval Portal (Procedure)",
      url: "https://portal.caa.lk/drone/apply-now/index.html",
    },
    {
      title: "Wildlife & Nature Protection Society, Sri Lanka (WNPS)",
      url: "https://www.wnpssl.org/",
    },
    {
      title: "National Parks overview (tourism / conservation) – TLC Sri Lanka",
      url: "https://www.tlc.lk/",
    },
    {
      title: "Civil Aviation Regulations – Drone Operation (CAA presentation)",
      url: "https://www.caa.lk/en/civil-aviation-regulations",
    },
    {
      title:
        "Wilpattu National Park – Official DWC page (Department of Wildlife Conservation)",
      url: "https://adventuretravel.aggressor.com/2023/05/30/sri-lanka-safari-wilpattu-national-park-wildlife-viewing/?gad_source=1&gad_campaignid=22406983421&gbraid=0AAAAAD-qIZ-4uRXLIByLHH4d2Iv9nfJoi&gclid=CjwKCAiA24XJBhBXEiwAXElO3yEAYawOPjBRliTppnJ_HCsa2ftQRspoDQunHs2Kt8-Lrt_r29YO3hoCGTEQAvD_BwE",
    },
  ];

  const filtered = sources.filter((s) =>
    (s.title + (s.url || "")).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      className={`prose lg:prose-xl p-6 bg-white rounded-2xl shadow-sm ${className}`}
    >
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">🌐 Data & Legal Sources</h2>
        <p className="text-sm text-gray-600 mt-1">
          Authoritative websites, legal texts and e-services related to wildlife
          conservation in Sri Lanka. Click any item to open the official page.
        </p>
        <div className="mt-3 p-3 bg-orange-100 rounded">
          <ul>
            <p className="text-sm text-amber-700 bg-orange-100 rounded">
              {" "}
              <strong>Tip:</strong> All links open in a new tab for user
              convenience.
            </p>
          </ul>
        </div>
      </header>

      <div className="mb-4 flex gap-3">
        <label htmlFor="search" className="sr-only">
          Search sources
        </label>
        <input
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search sources..."
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50"
        />
        <button
          onClick={() => setQuery("")}
          className="px-3 py-2 border-none rounded-md bg-green-50 btn-secondary rounded-full relative right-[0.33rem]"
          aria-label="Clear search"
        >
          Clear
        </button>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s, idx) => (
          <li key={idx} className="p-3 border rounded-lg hover:shadow">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-sm font-medium">{s.title}</h3>
              <p className="text-xs text-gray-500 mt-1 break-all">{s.url}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
