import Clock from "../../components/Common/Clock";

function Test() {
  const testFuncs = {
    rapid: (rapid) => {
      console.log(rapid);
    },
  };
  return (
    <>
      <Clock funcs={testFuncs}></Clock>
    </>
  );
}

export default Test;
