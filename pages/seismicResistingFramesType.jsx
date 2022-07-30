import React from "react";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";

function SeismicResistingFramesType() {
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="border border-black px-2 py-8 relative">
        <SectionTitle title={"Seismic resisting frames type"} />
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex items-center">
            <input
              type="radio"
              id="braced-frame"
              name="seismic-resisting-frames-type"
              value={"Braced frame"}
            />
            <label htmlFor="braced-frame">Braced frame</label>
          </div>
          <div>
            <input
              type="radio"
              id="moment-frame"
              name="seismic-resisting-frames-type"
              value={"Moment frame"}
            />
            <label htmlFor="moment-frame">Moment frame</label>
          </div>
        </div>
      </div>
      <div className="border border-black self-center py-3 px-4">
        <Button title='OK' className={'border border-black w-[100px] py-0'}/>
      </div>
    </div>
  );
}

export default SeismicResistingFramesType;
