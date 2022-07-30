import React from "react";

function SectionTitle({ title , className=""}) {
  return (
    <span className={`absolute left-[12px] px-3 top-[-13px] section-title ${className}`}>
      {title}
    </span>
  );
}

export default SectionTitle;
