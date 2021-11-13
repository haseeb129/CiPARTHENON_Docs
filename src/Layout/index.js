import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Documentation from "./components/mainMenu/Documentation";
import FAQ from "./components/mainMenu/FAQ";
import { getSearchBarSuggestions } from "../helper/search";

export const Layout = (props) => {
  const [searchBarSuggestions, setSearchBarSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchBarSuggestions(getSearchBarSuggestions());
  }, []);

  const handleSearch = async (e) => {
    const currentSearchValue = e.target.value;
    setSearchValue(currentSearchValue);

    if (!currentSearchValue) return setSearchResults([]);
    const currentSearchResult = await searchBarSuggestions.filter(
      (suggestion) => {
        return suggestion.title
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
    );
    setSearchResults(currentSearchResult);
  };

  const onOptionSelect = (option) => {
    setSearchResults([]);
    setSearchValue("");
    window.location = option.link;
  };

  return (
    <div>
      <Header
        style={{ height: "90px" }}
        handleSearch={handleSearch}
        searchResults={searchResults}
        onOptionSelect={onOptionSelect}
        searchValue={searchValue}
      />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Redirect to="documentation" {...props} />}
        />
        <Route path="/documentation" component={Documentation} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>

      <Footer />
    </div>
  );
};
