const Kepala = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: " -30px",
    }}
  />
);
const Tubuh = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);
const TanganKanan = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: " -100px",
      rotate: "-20deg",
      transformOrigin: "left bottom",
    }}
  />
);
const TanganKiri = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: " 10px",
      rotate: "40deg",
      transformOrigin: "right bottom",
    }}
  />
);
const KakiKanan = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: " -90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const KakiKiri = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-40deg",
      transformOrigin: "right bottom",
    }}
  />
);
const BagianTubuh = [
  Kepala,
  Tubuh,
  TanganKanan,
  TanganKiri,
  KakiKanan,
  KakiKiri,
];
type HangmanDrawingProps = { jumlahTebakan: number };
export function HangmanDrawing({ jumlahTebakan }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BagianTubuh.slice(0, jumlahTebakan)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}