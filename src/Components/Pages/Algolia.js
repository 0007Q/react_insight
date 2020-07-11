import React, { Components } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

const searchClient = algoliasearch('NHXM9XB7XM', '453f08b261f2bb3cfae5dbd0505f5627');

function Algolia() {
  return (
    <div>
        <InstantSearch searchClient={searchClient} indexName="dev_brand">
        <SearchBox translations={{ placeholder: 'Dominic'}}/>
        <p></p>
        <Hits />
        <Stats translations={{ stats(nbHits) { return `${nbHits}`}}} />
        </InstantSearch>
      </div>
  );
}

export default Algolia;