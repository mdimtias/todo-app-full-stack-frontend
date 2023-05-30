import './App.css'
import Todo from './component/Todo'

function App() {
  const updateMode = ()=>{
      
  }
  const deleteMode = ()=>{

  }

  return (
    <>
      <div className="app">
        <div className="container mx-auto">
          <h1 className='text-center font-bold text-3xl py-5'>Todo App</h1>
          <div className="top text-center flex justify-center gap-5 py-5">
            <input className='py-2 px-5 outline-none text-xl font-medium border border-blue-400 rounded-lg' type="text" placeholder='add todo' />
            <div className="add">
              <button className='bg-black text-white py-3 px-5 rounded-md'>Add</button>
            </div>
            </div>
            <div className="list">
              <Todo text="Hello" updateMode={updateMode} deleteMode={deleteMode}></Todo>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
