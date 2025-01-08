import logo from './logo.svg';
import './App.css';
import EvalAttack from './xss-attacks/EvalAttack';
import UrlParamAttack from './xss-attacks/UrlParamAttack';
import DangerouslySetInnerHTMLAttack from './xss-attacks/DangerouslySetInnerHTMLAttack';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClickJaking from './ClickJaking';
import { useState } from 'react';


function App() {
  const [attackType, setAttackType] = useState('');
  const currentUrl = new URL(window.location.href); // Get the current URL

  return (
    <Router>
      <div style={{display:'flex', flexDirection:'column'}}>
        <h1 style={{fontSize:42, display:'flex', justifyContent:'center'}}>Welcome to Cyber attacks</h1>
        <header style={{display:'flex', justifyContent:'center'}}>
          <ShowAttackHeaders attackType={attackType} setAttackType={setAttackType} currentUrl={currentUrl} />
          {/* {!(attackType === 'xss' || currentUrl.href.includes('xss')) && <button onClick={()=>{setAttackType('xss')}}>Show XSS Attacks</button> } */}
          {
            attackType === 'xss' &&
            <div style={{marginTop:10}}>
              <a style={{marginRight:10}} href='/xss/eval-attack'>Eval Attack</a>
              <a style={{marginRight:10}} href='/xss/url-param-attack'>Url Param Attack</a>
              <a style={{marginRight:10}} href='/xss/dangerouslySetInnerHTML-attack'>Dangerous HTML Attack</a>

            </div>
          }
        </header>
      </div>
          <Routes>
            <Route path="/xss/eval-attack" element={<EvalAttack />} />
            <Route path="/xss/url-param-attack" element={<UrlParamAttack />} />
            <Route path="/xss/dangerouslySetInnerHTML-attack" element={<DangerouslySetInnerHTMLAttack />} />
            <Route path="/clickjaking-attack" element={<ClickJaking />} />
          </Routes>
    </Router>
  )
}

const ShowAttackHeaders = (props)=>{
  const {attackType, currentUrl:{pathname, href}, setAttackType} = props;
  console.log('props----------', props, pathname === '/');
  if(pathname === '/'){
    return (
      <>
        <button onClick={()=>{setAttackType('xss')}}>Show XSS Attacks</button>
        <button id='clickJaking' onClick={()=>{window.location.pathname= '/clickjaking-attack'}}>Show ClickJaking Attacks</button>
      </>
    )
  }
  else return <></>
}

export default App;
