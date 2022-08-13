import React from "react";
import Image from "next/image";

const Line = () => "-------------------------------------------------------";

function Result({
  bottom,
  left,
  coI33,
  coMe,
  fI33,
  fMe,
  ceI33,
  ceMe,
  gpi,
  gpe,
  u1,
  u2,
  u3,
  r1,
  r2,
  r3,
  intraU1,
  intraU2,
  intraU3,
  intraR1,
  intraR2,
  intraR3,
  analyze1,
  analyze2,
  analyze3,
  heightOfStorey,
  lengthOfSpan,
  seismicResistingFramesType
}) {
  return (
    <div className="flex h-full">
      <div className="flex-1 h-full">
        <img src="result2.png" alt="" className="h-full" />
      </div>
      <div className="flex-1 border h-full text-xs overflow-y-auto px-1">
        <Line />
        <p>Project_Name : untitled</p>
        <Line />
        <p>
          Gpi =(Material_Ecolumn*Section_I33column/Lcolumn) / (Material_Efloor
          beam*Section_I33 floor beam/Lfloorbeam)
        </p>
        <p>
          Gpi=({coMe}*{coI33}/3.00) / ({fMe}*{fI33}/6.00) = {gpi}
        </p>
        <Line />
        <p>
          Gpe=(Material_ Ecolumn*Section_I33column/Lcolumn) / (Material_
          Eceiling beam*Section_I33 ceiling beam/Lceilingbeam)
        </p>
        <p>
          Gpe=({coMe}*{coI33}/3.00) / ({ceMe}*{ceI33}/6.00) = {gpe}
        </p>
        <Line />
        <p>Lcolumn : 3</p>
        <p>Lfloor_beam : 6</p>
        <p>Lceiling_beam : 6</p>
        <Line />
        <p>Section - Columns - i33 : {coI33}</p>
        <p>Section - Floor - i33 : {fI33}</p>
        <p>Section - Ceiling - i33 : {ceI33}</p>
        <p>Material - Columns - Me : {coMe}</p>
        <p>Material - Floor - Me : {fMe}</p>
        <p>Material - Ceiling - Me : {ceMe}</p>
        <Line />
        <p>inter - U1 : {u1}</p>
        <p>inter - U2 : {u2}</p>
        <p>inter - U3 : {u3}</p>
        <p>inter - R1 : {r1}</p>
        <p>inter - R2 : {r2}</p>
        <p>inter - R3 : {r3}</p>
        <Line />
        <p>intra - U1 : {intraU1}</p>
        <p>intra - U2 : {intraU2}</p>
        <p>intra - U3 : {intraU3}</p>
        <p>intra - R1 : {intraR1}</p>
        <p>intra - R2 : {intraR2}</p>
        <p>intra - R3 : {intraR3}</p>
        <Line />
        <p>
          Analyze: Design_For_Ultimate_Limit_State :{" "}
          {analyze1 ? "True" : "False"}
        </p>
        <p>
          Analyze: Design_For_Service_Ability : {analyze2 ? "True" : "False"}
        </p>
        <p>
          Analyze: Seismic_Performance_Factors : {analyze3 ? "True" : "False"}
        </p>
        <Line />
        <p>Structure__Height_of_storey : {heightOfStorey}</p>
        <p>Structure__Length_of_span : {lengthOfSpan}</p>
        <Line />
        <p>Seismic_resisting_frames_type : {seismicResistingFramesType}</p>
        <Line />
      </div>
      <div className="flex-1 h-full relative">
        <img src="result-1.png" alt="" className="h-full" />
        <div
          style={{ bottom: bottom, left: left }}
          className={`text-blue-500 absolute text-3xl font-bold`}
        >*</div>
      </div>
    </div>
  );
}

export default Result;
