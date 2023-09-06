import ProductComponent from "./ProductComponent"

export default function AllProductComponent() {
    const product = {
        Name: 'product 1',
        Price: 100,
        Stock: 'InStock'
    }
    return (
        <>
            <div>AllProductComponent</div>
            <hr />
            <ProductComponent product={product} />
        </>

    )
}
