import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Address = () => {
  const [customerName, setCustomerName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [saveForFuture, setSaveForFuture] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Load saved addresses from local storage on component mount
  useEffect(() => {
    const savedAddressesJson = localStorage.getItem('savedAddresses');
    if (savedAddressesJson) {
      setSavedAddresses(JSON.parse(savedAddressesJson));
      if (savedAddresses.length > 0) {
        setSelectedAddress(savedAddresses[0]); // You can modify this logic based on your use case
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

      if (saveForFuture) {
        // Save address to local storage for future orders
        setSavedAddresses([...savedAddresses, addressData]);
        localStorage.setItem('savedAddresses', JSON.stringify([...savedAddresses, addressData]));
      }
      setSelectedAddress(addressData);
    }
    // You can also handle the form submission logic here
    console.log('Customer Name:', customerName);
    console.log('Street Address:', streetAddress);
    console.log('City:', city);
  };

  const handleAddressSelection = (index) => {
    setSelectedAddress(savedAddresses[index]);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '1rem' }}>Shipping Address</h2>
      {selectedAddress != null ? (
        <div>
          <h5>Selected Address:</h5>
          <p>{`${selectedAddress.customerName}, ${selectedAddress.streetAddress}, ${selectedAddress.city}`}</p>
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
          {savedAddresses.length > 0 && (
            <div className="mb-3">
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
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Next
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => setSelectedAddress(null)}
          >
            Add New Address
          </button>
        </form>
      )}
    </div>
  );
};

export default Address;
