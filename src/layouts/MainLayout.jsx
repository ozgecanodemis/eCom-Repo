import Footer from "../components/Footer"
import Header from "../components/Header"


export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <Footer />
            <main className="flex-grow">{children}</main>
        </div>
    )
}
