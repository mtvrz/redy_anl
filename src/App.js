import classes from './App.module.css';
import {useState} from "react";

function App() {
    const [anl, getAnl] = useState("")
    const [env, getEnv] = useState("null")
    function openInNewTab() {
        window.open(`https://lisa2-${env}.cpas.cz/?state=roboAdvisoryClientAnalysisId%3D${anl}%26action%3DcreateLife`).focus();
    }

    const updateAnl = (event) =>{
        getAnl(event.target.value)
    }
    const updateEnv = (event) =>{
        getEnv(event.target.value)
    }
  return (
    <div className={classes.App}>
        <div className={classes.ContTxt}>
            <input type={"text"} className={classes.txt} value={anl} onChange={updateAnl}/>
            <select  className={classes.combac} defaultValue={env} onChange={updateEnv}>
                <option key={"0"} value={"null"}></option>
                <option key={"1"} value={"at"}>AT</option>
                <option key={"2"} value={"st"}>ST</option>
                <option key={"3"} value={"at2"}>AT2</option>
                <option key={"4"} value={"st2"}>ST2</option>
            </select>
        </div>
      <input type={"button"} className={classes.button} value={"generate >"} onClick={openInNewTab} disabled={env === "null"? true:false}/>
    </div>
  );
}

export default App;
