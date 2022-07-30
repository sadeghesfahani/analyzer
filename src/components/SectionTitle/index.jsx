import React from "react";

function SectionTitle({ title }) {
  return (
    <span className="absolute left-[12px] px-3 top-[-13px] section-title ">
      {title}
    </span>
  );
}

export default SectionTitle;
