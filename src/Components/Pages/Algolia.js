import React, { Components, useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import MultiSelect from "react-multi-select-component";
import 'instantsearch.css/themes/algolia.css';

const searchClient = algoliasearch('NHXM9XB7XM', '453f08b261f2bb3cfae5dbd0505f5627');

function Algolia() {
  const options = [
    { id: 1, label: "Nationwide", value: "dev_brand" },
    { id: 2, label: "Server....", value: "dev_logstash"}
  ];

  const [selected, setSelected] = useState('');
  const Aindex = JSON.stringify(selected).slice(39, 51)
  

  return (
    <div>
     <a>Please select an Index...{Aindex}</a>
     <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        hasSelectAll={false}
        overrideStrings={{"selectSomeItems": "Select Index..."}} />
      <p></p>
        <InstantSearch searchClient={searchClient} indexName={Aindex}>
        <SearchBox translations={{ placeholder: 'Please enter key word'}}/>
        <p></p>
        <Hits />
        <Stats translations={{ stats(nbHits) { return `${nbHits}`}}} />
        </InstantSearch>
        <pre>{JSON.stringify(selected)}</pre>
      </div>
    </div>
  );
}

export default Algolia;