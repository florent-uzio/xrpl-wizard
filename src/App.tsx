import { Wizard, WizardContainer } from "./components"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <>
      <Navbar />
      <WizardContainer>
        <div className="shadow-lg rounded-lg p-4 bg-white">
          <Wizard />
        </div>
      </WizardContainer>
    </>
  )
}

export default App
