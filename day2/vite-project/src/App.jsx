
import './App.css'
import Counter from './component/Counter'
import ReducerHook from './component/Reducerhook'
import Transitionhook from './component/Transitionhook'

function App() {


  return (
    <>
   <Counter value={109}/>
   <ReducerHook/>
    <Transitionhook/>
    </>
  )
}

export default App
