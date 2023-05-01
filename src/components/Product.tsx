
type ProductProps = {
  product: object
}
function Product( {product } : ProductProps) {
  const { id, image, price, title } = product
  return (
    <div>
      <div className=" w-full h-[300px] border group">
        <div className=" h-full flex justify-center items-center">
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default Product;