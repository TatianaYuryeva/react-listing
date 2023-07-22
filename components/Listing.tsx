type AppProps = {
  data: any;
}

type Item = {
    listing_id: number;
    url: string;
    MainImage: {
      url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  }

export const Listing = ({data}: AppProps) => {

  const getCurrency = (code: string) => {
    if (code === 'USD') {
      return '$'
    } else if (code === 'EUR') {
      return '€'
    }
    return code
  }

  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) {
      return 'low'
    } else if (quantity <= 20) {
      return 'medium'
    }
    return 'high'
  }

  const items = data.map((item: Item) => 
    <div className="item" key={item.listing_id}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN}></img>
        </a>
      </div>
      <p className="item-title">{item.title.length < 50 ? item.title : item.title.slice(0, 50) + '...'}</p>
      <div className="item-details">
        <p className="item-price">{getCurrency(item.currency_code) + ' ' + item.price}</p>
        <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
    )

  return (
    <div className="item-list">
      {items}
    </div>
  )
}

export default Listing