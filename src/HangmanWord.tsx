type HangmanWordProps = {
  tertebakHurufs: string[];
  kataTebak: string;
  reveal?: boolean;
};

export function HangmanWord({
  tertebakHurufs,
  kataTebak,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {kataTebak.split("").map((huruf, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                tertebakHurufs.includes(huruf) || reveal ? "visible" : "hidden",
              color:
                !tertebakHurufs.includes(huruf) && reveal ? "red" : "black",
            }}
          >
            {huruf}
          </span>
        </span>
      ))}
    </div>
  );
}
