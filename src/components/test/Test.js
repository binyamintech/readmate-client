import Clock from "../../components/Common/Clock";

function Test() {
  const testFuncs = {
    rapid: (rapid) => {
      console.log(rapid);
    },
    onPlay: () => {
      console.log("play");
    },
    onPause: () => {
      console.log("pause");
    },
    onComplete: () => {
      console.log("complete");
    },
  };

  return (
    <>
      <Clock
        freeStyle={true}
        time={180}
        funcs={testFuncs}
        rapidValue={10}
      ></Clock>
    </>
  );
}

export default Test;
