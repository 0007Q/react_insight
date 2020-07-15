import React, { Components, useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import MultiSelect from "react-multi-select-component";
import 'instantsearch.css/themes/algolia.css';

const searchClient = algoliasearch('NHXM9XB7XM', '453f08b261f2bb3cfae5dbd0505f5627');

function DropDown() {
  const options = [
    { label: "Nationwide", value: "dev_drand" },
    { label: "Server", value: "servers"}
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
     <a>Please select an Index... {JSON.stringify(selected)}</a>
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

function Algolia({selected}) {
  
  return (
    <div>
        <DropDown />
        <InstantSearch searchClient={searchClient} indexName={selected}>
        <SearchBox translations={{ placeholder: 'Please enter key word'}}/>
        <p></p>
        <Hits />
        <Stats translations={{ stats(nbHits) { return `${nbHits}`}}} />
        </InstantSearch>
        <pre>{JSON.stringify(selected)}</pre>
      </div>
  );
}

export default Algolia;