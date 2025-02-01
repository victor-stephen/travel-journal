import "./styles.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="container">{entryElements}</main>
    </div>
  );
}
