import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import Pic from './Pic';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setMode1('light');
      showAlert('Dark mode has been enabled', 'success')
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMode1('dark');
      showAlert('Light mode has been enabled', 'success')
    }

  }
  const togglecolor = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setMode1('light');
      showAlert('Dark mode has been enabled', 'success')
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMode1('dark');
      showAlert('Light mode has been enabled', 'success')
    }

  }
  const togglecolor1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b4b36';
      setMode1('light');
      showAlert('Dark mode has been enabled', 'success')
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMode1('dark');
      showAlert('Light mode has been enabled', 'success')
    }

  }
  const togglecolor2 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#9d2503';
      setMode1('light');
      showAlert('Dark mode has been enabled', 'success')
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setMode1('dark');
      showAlert('Light mode has been enabled', 'success')
    }

  }
  return (<>
  <div className='clc'>
  <p className='clock'>
      {date.toLocaleTimeString()}
    </p></div>
    <Navbar title="Photo Gallery" home="Explore" mode={mode} toggleMode={toggleMode} btnText={btnText} togglecolor={togglecolor} togglecolor1={togglecolor1} togglecolor2={togglecolor2} />
    
    <Alert alert={alert} />
    <Pic mode1={mode1} />
    <Footer mode1={mode1}/>
  </>
  );
}

export default App;
