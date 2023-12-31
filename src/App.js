import './App.css';
import CountDown from './components/CountDown';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='h-screen max-h-screen bg-slate-950 flex justify-start items-start flex-col overflow-hidden'>
      <NavBar/>
      <div className=' h-full flex justify-center items-center'>
      <CountDown/>
      </div>
    </div>
  );
}

export default App;
