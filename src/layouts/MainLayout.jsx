import Footer from "./Footer";
import Header from "./Header";



export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />

        </div>
    )
}
