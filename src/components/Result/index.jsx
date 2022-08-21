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
  seismicResistingFramesType,
  report,
  rho
}) {
  let ELFimg = "";
  let boundaryImg = "";
  if(seismicResistingFramesType === "Braced Frame"){
    if(report === "rigid") {ELFimg = "Braced Frame/Rigid/ELF.png"; boundaryImg = "Braced Frame/Rigid/Rigid Boundary.png"}
    else if(rho < 0.2) {ELFimg = "Braced Frame/Rho = 0.01/ELF.png"; boundaryImg = "Braced Frame/Rho = 0.01/Rigid Boundary.png"}
    else {ELFimg = "Braced Frame/Rho = 0.2/ELF.png"; boundaryImg = "Braced Frame/Rho = 0.2/Rigid Boundary.png"}
  }else {
    if(analyze1){
      if(report === "rigid") {ELFimg = "Moment Frame/Ultimate/Rigid/ELF.png"; boundaryImg = "Moment Frame/Ultimate/Rigid/Rigid Boundary.png"}
      else if(rho < 0.05) {ELFimg = "Moment Frame/Ultimate/Rho = 0.01/ELF.png"; boundaryImg = "Moment Frame/Ultimate/Rho = 0.01/Rigid Boundary.png"}
      else if(rho < 0.1) {ELFimg = "Moment Frame/Ultimate/Rho = 0.05/ELF.png"; boundaryImg = "Moment Frame/Ultimate/Rho = 0.05/Rigid Boundary.png"}
      else {ELFimg = "Moment Frame/Ultimate/Rho = 0.10/ELF.png"; boundaryImg = "Moment Frame/Ultimate/Rho = 0.10/Rigid Boundary.png"}
    }else {
      if(report === "rigid") {ELFimg = "Moment Frame/Ultimate/Rigid/ELF.png"; boundaryImg = "Moment Frame/Drift/Rigid/Boundary.png"}
      else if(rho < 0.05) {ELFimg = "Moment Frame/Ultimate/Rho = 0.01/ELF.png"; boundaryImg = "Moment Frame/Drift/Rho = 0.01/Rigid Boundary.png"}
      else if(rho < 0.1) {ELFimg = "Moment Frame/Ultimate/Rho = 0.05/ELF.png"; boundaryImg = "Moment Frame/Drift/Rho = 0.05/Rigid Boundary.png"}
      else {ELFimg = "Moment Frame/Ultimate/Rho = 0.10/ELF.png"; boundaryImg = "Moment Frame/Drift/Rho = 0.1/Rigid Boundary.png"}
    }
  }
  return (
    <div className="flex h-full">
      <div className="flex-1 h-full border">
        <img src={ELFimg} alt="" className="h-full" />
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
          Gpi=({coMe}*{coI33}/{heightOfStorey}) / ({fMe}*{fI33}/{lengthOfSpan}) = {gpi}
        </p>
        <Line />
        <p>
          Gpe=(Material_ Ecolumn*Section_I33column/Lcolumn) / (Material_
          Eceiling beam*Section_I33 ceiling beam/Lceilingbeam)
        </p>
        <p>
          Gpe=({coMe}*{coI33}/{heightOfStorey}) / ({ceMe}*{ceI33}/{lengthOfSpan}) = {gpe}
        </p>
        <Line />
        <p>Lcolumn {heightOfStorey}: </p>
        <p>Lfloor_beam : {lengthOfSpan}</p>
        <p>Lceiling_beam : {lengthOfSpan}</p>
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
      <div className="flex-1 h-full relative border">
        <img src={boundaryImg} alt="" className="h-full" />
        <div
          style={{ bottom: bottom, left: left }}
          className={`text-red-600 absolute text-4xl font-bold`}
        >*</div>
      </div>
    </div>
  );
}

export default Result;
