import classes from './App.module.css';
import {useState} from "react";
import LISA from "../src/back.png"

function App() {
    const [anl, getAnl] = useState("")
    const [env, getEnv] = useState("null")
    const [envApp, getEnvApp] = useState(1)

    function openInNewTab() {
        envApp == 2 && window.open(`https://lisa2-${env}.cpas.cz/?state=roboAdvisoryClientAnalysisId%3D${anl}%26action%3DcreateLife`).focus();
        envApp == 1 && window.open(`https://lisa-${env}.cpas.cz/sso?state=roboAdvisoryClientAnalysisId%3D${anl}%26action%3DcreateLife`).focus();
    }

    const getApp = () => {
        envApp == 1 ? getEnvApp(2) : getEnvApp(1)
    }
    const updateAnl = (event) => {
        getAnl(event.target.value)
    }
    const updateEnv = (event) => {
        getEnv(event.target.value)
    }
    return <>
        <div className={classes.lisa}>
            <img src={LISA} alt="LISA" />
        </div>
        <div className={classes.App}>
            <div className={classes.container}>
                <div className={classes.appcont}>
                    <button
                        className={`${classes.buttonEnv} ${envApp === 1 && classes.buttonEnvActive}`}
                        onClick={() => getApp()}
                    >
                        LISA<sup>(24)</sup>
                    </button>
                    <button
                        className={`${classes.buttonEnv} ${envApp === 2 && classes.buttonEnvActive}`}
                        onClick={() => getApp()}
                    >
                        OG LISA<sup>2</sup>
                    </button>
                </div>
                <div className={classes.ContTxt}>
                    <input type={"text"} className={classes.txt} value={anl} onChange={updateAnl}/>
                    <select className={classes.combac} defaultValue={env} onChange={updateEnv}>
                        <option key={"0"} value={"null"}></option>
                        <option key={"1"} value={"at"}>AT</option>
                        <option key={"2"} value={"st"}>ST</option>
                        <option key={"3"} value={"at2"}>AT2</option>
                        <option key={"4"} value={"st2"}>ST2</option>
                    </select>
                </div>
                {env === "null" || anl === "" ? null :
                    <input type={"button"} className={classes.button} value={"CREATE URL"} onClick={openInNewTab}/>}

            </div>
        </div>
    </>
}

export default App;
