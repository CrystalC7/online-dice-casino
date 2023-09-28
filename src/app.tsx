import InputRange from "./components/range";
import "./index.css";
import Input from "./components/input";
import { CgArrowsExchangeV } from "react-icons/cg";
import { useEffect, useRef, useState } from "preact/hooks";

export function App() {
  const [rollUnder, setRollUnder] = useState<boolean>(true);
  const [rangeValue, setRangeValue] = useState<number>(50);
  const [result, setResult] = useState<number>(0);
  const dice = useRef<HTMLDivElement | any>();
  const [isBetting, setIsbetting] = useState<boolean>(false);
  const [outputMode, setOuputMode] = useState<boolean>(false);
  const [verdictResult, setVerdictResult] = useState<boolean>(false);
  const [displayIndicator, setDisplayIndicator] = useState<boolean>(false);

  const verdict = () => {
    if (rollUnder === false && result > parseFloat(rangeValue as any)) {
      setVerdictResult(true);
    } else if (rollUnder === false && result < parseFloat(rangeValue as any)) {
      setVerdictResult(false);
    } else if (rollUnder === true && result < parseFloat(rangeValue as any)) {
      setVerdictResult(true);
    } else if (rollUnder === true && result > parseFloat(rangeValue as any)) {
      setVerdictResult(false);
    }
  };

  const bet = () => {
    dice.current.style.animation = "rolling 4s";
    setIsbetting(true);

    const timer = setTimeout(() => {
      const randomBet: any | number = Math.random() * 100;
      clearTimeout(timer);
      setIsbetting(false);
      dice.current!.style.animation = "none";
      setResult(randomBet.toFixed(4));
      setOuputMode(true);
    }, 4000);
  };

  useEffect(() => {
    setDisplayIndicator(true);
    setTimeout(() => {
      setDisplayIndicator(false);
    }, 2000);
    verdict();
  }, [result]);

  return (
    <div className="mx-10 w-full min-h-screen">
      <div className="max-w-[800px] w-full m-auto flex justify-center my-20">
        <InputRange
          displayIndicator={displayIndicator}
          verdict={verdictResult}
          result={result}
          updateValue={rangeValue}
          rollUnder={rollUnder}
          enableSound
          onChange={(e) => {
            setRangeValue(e);
          }}
        />
      </div>

      <div className="w-full mb-40 h-[100px] flex justify-center pt-5">
        {!outputMode && (
          <div class="dice" ref={(el) => (dice.current = el)}>
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
            <div class="face right"></div>
            <div class="face left"></div>
          </div>
        )}

        {outputMode && (
          <div className="">
            <h1
              style={{ color: verdictResult ? "#5162FF" : "#ED374A" }}
              className="text-4xl font-bold select-none"
            >
              {result}
            </h1>
            <button
              style={{ background: verdictResult ? "#5162FF" : "#ED374A" }}
              onClick={() => setOuputMode(false)}
              class="px-10 py-3 bg-primary mt-4 rounded-md text-slate-100  shadow-5xl font-bold"
            >
              try again
            </button>
          </div>
        )}
      </div>

      <div className="max-w-[800px]  p-4 bg-white rounded-md border-slate-100 m-auto">
        <div className="flex gap-5 w-full">
          <div className="w-full text-right">
            <h3 className="text-slate-500 mb-2 uppercase font-bold ">
              {rollUnder ? "roll under" : "roll over"}
            </h3>

            <Input
              defaultValue={rangeValue.toFixed(4)}
              readonly
              Icon={
                <button
                  onClick={() => setRollUnder(!rollUnder)}
                  className="bg-slate-800 rounded-md w-16 cursor-pointer shadow-5xl active:bg-slate-700 flex justify-center items-center h-full"
                >
                  <CgArrowsExchangeV className="text-2xl text-white text-center" />
                </button>
              }
            />
          </div>
        </div>

        <button
          disabled={isBetting || outputMode}
          onClick={() => bet()}
          class="bg-primary disabled:bg-blue-400 disabled:cursor-not-allowed active:bg-primary-hard shadow-5xl rounded-lg mt-7 text-white font-bold text-2xl w-full py-4 px-4"
        >
          Bet
        </button>
      </div>
    </div>
  );
}
