import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

//<pre>{JSON.stringify(selected)}</pre>

export default function DropDown() {
  const options = [
    { label: "Nationwide", value: "grapes" },
    { label: "Server", value: "servers"}
  ];

  const [selected, setSelected] = useState();

  let dom = JSON.stringify(selected)

  return (
    
    <div>
     <a>Please select an Index... {dom}</a>
     <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        hasSelectAll={false}
        overrideStrings={{"selectSomeItems": "Select Index..."}}
      />
      </div>
    </div>
  );
}