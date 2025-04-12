import ProductSection from "../components/ProductSection"
import CategoryPanel from "../components/CategoryPanel"

const ProductsPage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-screen-xl mx-auto">
            <CategoryPanel />
            <ProductSection />
        </div>
    )
}

export default ProductsPage
