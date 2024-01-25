import './Properties.css'

const Properties = ({imageUrl,title,description,price,id,properties}) => {
  return (
          <>
          <div key={id} className="property-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            {/* Add more details or buttons for individual properties if needed */}
          </div>
           <div className="properties">
           <h2>Properties</h2>
           <div className="property-list">
             
           </div>
         </div>
          </>
        );
      };

     

export default Properties