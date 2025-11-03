import React from "react";

const Ranges = [
  { title: "Single Origins", img: "/images/SingleOrigins.jpg" },
  { title: "Signature Blends", img: "/images/SignatureBlends.jpg" },
  { title: "Gifting Collection", img: "/images/GiftCollection.jpg" },
  { title: "Drip Bags", img: "/images/DripBags.jpg" },
];

const Range = () => (
  // Wide rectangle bar under the navbar/sidebar
  <div className="flex-1 flex items-center justify-center">
    <div className="w-[90vw] max-w-[1800px] h-[32vh] min-h-[350px] rounded-3xl border-2 border-[#b49e94]
     shadow-[0_0_40px_rgba(180,158,148,0.2)] flex flex-col justify-start items-center px-8 relative">
      {/* Heading */}
      <h2 className="range text-[#b49e94] text-4xl italic mb-4 tracking-widest text-center">
        Ranges
      </h2>
      {/* Ranges Cards Row */}
      <div className="flex flex-row gap-12 justify-center items-center w-full">
        {Ranges.map((range, idx) => (
          <div
            key={idx}
            className="bg-[#2e1c18] p-4 rounded-2xl shadow-[0_0_16px_rgba(0,0,0,0.5)] border
             border-[#b49e94]/40 flex flex-col items-center hover:scale-105"
            style={{ minWidth: "210px" }}
          >
            <div className="p-2 mb-3 flex items-center justify-center">
              <img
                src={range.img}
                alt={range.title}
                className="w-48 h-48 object-cover rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)] bg-transparent"
              />
            </div>

            <p className="text-[#f5e0c6] text-lg font-medium italic mt-1">
              {range.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Range;
