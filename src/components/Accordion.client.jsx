import { useState } from "react";

export default function Accordion({ heading, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-solid border-black mb-2">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="text-white bg-black p-2 cursor-pointer"
      >
        <span>{heading}</span>
        <span className="absolute right-8">{open ? "-" : "+"}</span>
      </div>
      {open && <div className="p-2 space-y-4 text-sm">{children}</div>}
    </div>
  );
}
