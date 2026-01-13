import './App.css'
import BasicButtons from './lab/BasicButtons'
import ColorSwitches from './lab/ColorSwitches'
import BasicTable from './lab/BasicTable'
import TestMUI from './lab/TestMUI'

function App() {

  return (
    <>
      <BasicButtons/>
      <ColorSwitches/>
      <BasicTable/>
      <TestMUI/>
      <Route path="post/:id" element={<PostDetail />} />
    </>
  )
}

export default App