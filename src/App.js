import "./styles.css";
import React from 'react';
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import SearchBar from "./searchBar.tsx";
import Results from "./results.tsx";
import { answersHeadlessConfig } from "./config.tsx";

export default function App() {
  return (
    <AnswersHeadlessProvider {...answersHeadlessConfig}>
      <div className="App">
        <SearchBar />
        <Results />
      </div>
    </AnswersHeadlessProvider>
  );
}