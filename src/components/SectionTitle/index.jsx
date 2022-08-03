import React from "react";

function SectionTitle({ title , className=""}) {
  return (
    <span className={`absolute left-[12px] px-3 py-0.5 top-[-13px] bg-primary-500 rounded-md text-white ${className}`}>
      {title}
    </span>
  );
}

export default SectionTitle;
