import { Outlet } from 'react-router-dom'
import Header from './header.component'

const Layout: React.FC = () => {
    return (
        <div className="container py-4 lg:py-20 space-y-5">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
