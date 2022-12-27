import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./listKata.json";
// 33:36
function App() {
  const [kataTebak, setkataTebak] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [tertebakHurufs, setTertebakHurufs] = useState<string[]>([]);

  const incorrectHuruf = tertebakHurufs.filter(
    (huruf) => !kataTebak.includes(huruf)
  );

  const isKalah = incorrectHuruf.length >= 6;
  const isMenang = kataTebak
    .split("")
    .every((huruf) => tertebakHurufs.includes(huruf));
  const addTertebakHuruf = useCallback(
    (huruf: string) => {
      if (tertebakHurufs.includes(huruf) || isKalah || isMenang) return;

      setTertebakHurufs((currentHuruf) => [...currentHuruf, huruf]);
    },
    [tertebakHurufs, isMenang, isKalah]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addTertebakHuruf(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {" "}
        {isMenang && "Menang- refresh untuk memulai kembali"}
        {isKalah && "Mati dah lu tong - refresh untuk memulai kembali"}
      </div>
      <HangmanDrawing jumlahTebakan={incorrectHuruf.length} />
      <HangmanWord
        reveal={isKalah}
        tertebakHurufs={tertebakHurufs}
        kataTebak={kataTebak}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isMenang || isKalah}
          activeHuruf={tertebakHurufs.filter((huruf) =>
            kataTebak.includes(huruf)
          )}
          inactiveHuruf={incorrectHuruf}
          addTertebakHuruf={addTertebakHuruf}
        />
      </div>
    </div>
  );
  return <h1>hi</h1>;
}

export default App;
