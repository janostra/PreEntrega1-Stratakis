import Item from './Item'
import './ItemList.css'

const ItemList = ({productos, setTotalQuantity}) => {
  return (
    <div className='itemcontainer'>
        {productos.map(producto => 
          <Item key={producto.id} {...producto} setTotalQuantity={setTotalQuantity} />
        )}
    </div>
  )
}
 export default ItemList