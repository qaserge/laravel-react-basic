export default function ProductComponent(props) {

    const { product } = props;

    return (
        <>
            <div>ProductComponent</div>

            <hr />
            <b>Product Details:</b>
            <p>Name:{product.Name}</p>
            <p>Price:{product.Price}</p>
            <p>Stock:{product.Stock}</p>

        </>

    )
}
