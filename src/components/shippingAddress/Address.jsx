import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../ContextApi';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const {selectedAddress, setSelectedAddress} = useCart()
  const [customerName, setCustomerName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [saveForFuture, setSaveForFuture] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  // const [selectedAddress, setSelectedAddress] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/cart");
  };

  const handleNext = () => {
    navigate("/confirm");
  };

  // Load saved addresses from local storage on component mount
  useEffect(() => {
    const savedAddressesJson = localStorage.getItem('savedAddresses');
    if (savedAddressesJson) {
      const parsedAddresses = JSON.parse(savedAddressesJson);
      setSavedAddresses(parsedAddresses);
      if (parsedAddresses.length > 0) {
        setSelectedAddress(parsedAddresses[0]); // You can modify this logic based on your use case
      }
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add additional validation logic here if needed
    if (customerName && streetAddress && city) {
      const addressData = {
        customerName,
        streetAddress,
        city,
      };

      setSelectedAddress(addressData);

      if (saveForFuture) {
        // Save address to local storage for future orders only if the checkbox is checked
        setSavedAddresses([...savedAddresses, addressData]);
        localStorage.setItem('savedAddresses', JSON.stringify([...savedAddresses, addressData]));
      }
    }
    handleNext();
  };

  const handleAddressSelection = (index) => {
    setSelectedAddress(savedAddresses[index]);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '1rem' }}>Shipping Address</h2>
      {savedAddresses.length > 0 ? (
        <div>
          <h5>Saved Addresses:</h5>
          {savedAddresses.map((address, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id={`savedAddress${index}`}
                name="savedAddress"
                checked={selectedAddress === address}
                onChange={() => handleAddressSelection(index)}
              />
              <label className="form-check-label" htmlFor={`savedAddress${index}`}>
                {`${address.customerName}, ${address.streetAddress}, ${address.city}`}
              </label>
            </div>
          ))}
           <div className="cart-navigation-buttons">
              <button className="back-btn" onClick={() => handleBack()}>Back</button>
              <button className="next-btn" onClick={() => handleNext()}>Next</button>
            </div>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
   <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder='Full Name...'
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={streetAddress}
              placeholder='Address...'
              onChange={(e) => setStreetAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder='Phone Number...'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="saveForFuture"
              checked={saveForFuture}
              onChange={() => setSaveForFuture(!saveForFuture)}
            />
            <label className="form-check-label" htmlFor="saveForFuture">
              Use this address for future orders
            </label>
          </div>        
            <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;
