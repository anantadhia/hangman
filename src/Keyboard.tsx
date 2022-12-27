import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  disabled?: boolean;
  activeHuruf: string[];
  inactiveHuruf: string[];
  addTertebakHuruf: (letterString: string) => void;
};
export function Keyboard({
  activeHuruf,
  disabled = false,
  inactiveHuruf,
  addTertebakHuruf,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeHuruf.includes(key);
        const isInActive = inactiveHuruf.includes(key);
        return (
          <button
            onClick={() => addTertebakHuruf(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
