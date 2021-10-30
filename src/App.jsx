import React, { useEffect, useState } from "react";
import { ColorMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");

  const [num, setNum] = useState(0);
  const [faceFlg, setFaceFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickON = () => {
    setFaceFlg(!faceFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceFlg || setFaceFlg(true);
      } else {
        faceFlg && setFaceFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorMessage color="blue">お元気ですか</ColorMessage>
      <ColorMessage color="pink">元気ざますか</ColorMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickON}>ON?OFF?</button>
      <p>{num}</p>
      {faceFlg && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
