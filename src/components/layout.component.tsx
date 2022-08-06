import { Outlet } from 'react-router-dom'
import Header from './header.component'

const Layout: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
