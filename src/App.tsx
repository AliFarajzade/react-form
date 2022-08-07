import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout.component'
import Results from './components/results.component'
import Step1 from './components/step-1.component'
import Step2 from './components/step-2.component'
import Step3 from './components/step-3.component'

const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />} path="/">
                <Route index element={<Step1 />} />
                <Route path="step-2" element={<Step2 />} />
                <Route path="step-3" element={<Step3 />} />
                <Route path="results" element={<Results />} />
            </Route>
        </Routes>
    )
}

export default App
