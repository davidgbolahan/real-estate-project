import React, { useState } from 'react';

          const PropertyForm = () => {
            const [property, setProperty] = useState({
              name: '',
              price: '',
              description: '',
              image: null,
            });

            const handleChange = (e) => {
              const { name, value } = e.target;
              setProperty({ ...property, [name]: value });
            };

            const handleImageChange = (e) => {
              setProperty({ ...property, image: e.target.files[0] });
            };

            const handleSubmit = (e) => {
              e.preventDefault();
              // Code to handle form submission (e.g., API call to save property details)
              console.log('Submitted property:', property);
              // Reset form fields after submission
              setProperty({ name: '', price: '', description: '', image: null });
            };

            return (
                  <div className="property-form">
                  <h2>List Your Property</h2>
                  <form onSubmit={handleSubmit}>
                      <input
                      type="text"
                      name="name"
                      placeholder="Property Name"
                      value={property.name}
                      onChange={handleChange}
                      required
                      />
                      <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      value={property.price}
                      onChange={handleChange}
                      required
                      />
                      <textarea
                      name="description"
                      placeholder="Description"
                      value={property.description}
                      onChange={handleChange}
                      required
                      ></textarea>
                      <input type="file" name="image" onChange={handleImageChange} required />
                      <button type="submit">Submit</button>
                  </form>
                  </div>
              );
              };

                const Properties = () => {
                // Render PropertyForm component
                return (
                    <div className="properties">
                    <PropertyForm />
                    </div>
              );
            };

export default Properties;
