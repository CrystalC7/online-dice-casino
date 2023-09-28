import React from "preact/compat";
import { useRef, useEffect, useState, ChangeEvent } from "preact/compat";
import Indicator from "./indicator";

interface Props {
  enableSound: boolean;
  onChange: (value: number) => void | Function;
  rollUnder: boolean;
  updateValue: number;
  result: number;
  verdict: boolean;
  displayIndicator: boolean;
}

const InputRange: React.FC<Props> = ({
  onChange,
  rollUnder,
  result,
  verdict,
  displayIndicator,
}) => {
  const [rangeCurrentValue, setRangeCurrentValue] = useState<number | any>(50);
  const input = useRef<HTMLInputElement | any>(null);
  const container = useRef<HTMLDivElement>(null);
  const changeAudio = useRef<HTMLAudioElement>(null);
  var thumbWidth = 40;

  const updateValueIndicatorposition = () => {
    var off =
      (input.current.clientWidth - thumbWidth) /
      (parseInt(input.current.max) - parseInt(input.current.min));
    var px =
      (input.current.valueAsNumber - parseInt(input.current.min)) * off -
      container.current!.clientWidth / 2 +
      thumbWidth / 2;

    container.current!.style.left = px + "px";
  };

  useEffect(() => {
    updateValueIndicatorposition();
  }, []);

  useEffect(() => {
    console.log("changing");
    updateValueIndicatorposition();
    onChange(rangeCurrentValue);
    changeAudio.current?.play();
  }, [rangeCurrentValue]);

  return (
    <div
      style={{
        background: !rollUnder ? "#5162FF" : "#ED374A",
      }}
      className="w-full h-4 rounded-sm shadow-5xl max-w-[1000px]  flex items-center relative"
    >
      <div
        style={{
          width: rangeCurrentValue + "%",
          background: !rollUnder ? "#ED374A" : "#5162FF",
        }}
        className="absolute rounded-sm items-center justify-end top-0 flex left-0 w-6/12 z-0 h-4 shadow-5xl"
      ></div>

      <div
        style={{
          width: `calc(${result}% + 55px)`,
          opacity: displayIndicator === true ? "1" : "0",
        }}
        className={`ml-[-20px] duration-700 result-outuput absolute flex items-start h-10 justify-end `}
      >
        <div className="rounded-lg relative bottom-[7rem]">
          <Indicator verdict={verdict} resultIndicator={result} />
        </div>
      </div>

      <div
        ref={container}
        className="w-10 h-10 rounded-md flex items-center justify-center absolute shadow-4xl bg-[#323738]"
      >
        <h1 className="text-sm text-white font-bold">{rangeCurrentValue}</h1>
      </div>

      <div className="w-full h-full relative">
        <input
          ref={input}
          defaultValue={rangeCurrentValue}
          onChange={(event: ChangeEvent<HTMLInputElement> | any) =>
            setRangeCurrentValue(parseFloat(event.target!.value) as number)
          }
          max={100}
          min={1}
          className="appearance-none h-full outline-none z-10 range custom-range bg-transparent    w-full"
          type="range"
          name=""
          id=""
        />
      </div>
      <audio ref={changeAudio} src={"/range.wav"} />
    </div>
  );
};

export default InputRange;
