// create a new 

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDx27k_FEvi6jBunAZycInz_XNs7TPJONY';

const App = () => {
    return (<div>
            <SearchBar />
        </div>)
}

//AIzaSyDx27k_FEvi6jBunAZycInz_XNs7TPJONY
ReactDOM.render(<App />, document.querySelector('.container'));