import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART, PRODUCT } from '../../redux/actions/action-types';
import { productSelector } from '../../redux/selectors/productSelectors';
const { Meta } = Card;


function ProductCard({ id }) {
    const dispatch = useDispatch()

    let [product, isPresentInCart, cartQuantity] = useSelector((state) => productSelector(state.productState, state.cartState, id))
    const { imageURL, name, price, quantity } = product
    const addToCartHandler = () => {
        dispatch({
            type: PRODUCT.DECREASE_QUANTITY,
            payload: id
        })
        dispatch({
            type: CART.ADD_ITEM,
            payload: id
        })
    }
    const decreaseCartQuantityHandler = () => {
        dispatch({
            type: PRODUCT.INCREASE_QUANTITY,
            payload: id
        })
        dispatch({
            type: CART.DECREASE_CART_ITEM_QUANTITY,
            payload: id
        })
    }
    return (
        <Card
            hoverable
            style={{
                width: '15em',
                height: '28em'
            }}
            cover={<img alt={name} src={imageURL} width={200} />}
        >
            <Meta title={name} />
            <div className='pc-price-add-container'>
                <h3>{'RS ' + price}</h3>
                {quantity > 0 ? <h3>{`quantity: ` + quantity}</h3> : <h3>Out of stock</h3>}

                <div className='pc-operations-button'>
                    {!isPresentInCart && <Button className='pc-add-to-cart-button' onClick={() => { addToCartHandler() }} disabled={quantity === 0}>Add to cart</Button>}

                    {isPresentInCart &&
                        (
                            <div className='pc-increase-decrease-buttons'>
                                <Button
                                    className='decrease-cart-quantity'
                                    disabled={cartQuantity === 0}
                                    onClick={() => {
                                        decreaseCartQuantityHandler()
                                    }}
                                >
                                    -
                                </Button>
                                <span> {cartQuantity}</span>
                                <Button
                                    className='increase-cart-quantity'
                                    onClick={() => {
                                        addToCartHandler()
                                    }}
                                    disabled={quantity === 0}>
                                    +
                                </Button>

                            </div>)
                    }
                </div>
            </div>
        </Card>
    )
}

export default ProductCard




