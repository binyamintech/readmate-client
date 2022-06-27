import "./style.css";

export default function SubmitBtn({checkResults}) {
  return (
    <div className="submit">
      <div onClick={checkResults} type="button" className="word">
        
        submit
      </div>
    </div>
  );
}
