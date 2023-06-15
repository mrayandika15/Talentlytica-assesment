import "./App.css";

import { ScoreForm } from "./features";

function App() {
  return (
    <div className="container-app">
      <div className="header-container">
        <h1>Aplikasi Penilaian Mahasiswa</h1>
      </div>

      <ScoreForm />
    </div>
  );
}

export default App;
