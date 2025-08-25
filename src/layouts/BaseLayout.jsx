import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"    

const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-row flex-1">
                <Sidebar />
                <main className="flex-1 overflow-y-auto bg-gray-800">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}


export default BaseLayout;