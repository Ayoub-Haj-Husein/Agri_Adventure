import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function AddPlace() {
  const [formData, setFormData] = useState({
    owner: '',
    phone: '',
    email: '',
    locationName: '',
    price: '',
    description: '',
    location: '',
    openingHours: '',
    visitDate: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const token = Cookies.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataForUpload = new FormData();
    for (const key in formData) {
      formDataForUpload.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:4000/Add_New_Location', formDataForUpload, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post success:', response.data);
      // Handle success or redirect as needed
    } catch (error) {
      console.error('Post error:', error);
      // Handle error
    }
  };

  return (
    <div className="max-w-2xl p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Add Place</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="owner" className="text-sm font-medium">
            Owner:
          </label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="locationName" className="text-sm font-medium">
            Location Name:
          </label>
          <input
            type="text"
            id="locationName"
            name="locationName"
            value={formData.locationName}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.location}
            id="location"
            name="location"
            onChange={handleChange}
          >
            <option>Select Location</option>
            <option value="Zarqa" >Zarqa</option>
            <option value="Amman">Amman</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Madaba">Madaba</option>
            <option value="Irbid">Irbid</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="openingHours" className="text-sm font-medium">
          Opening Hours:
          </label>
          <input
            type="number"
            id="openingHours"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="visitDate" className="text-sm font-medium">
            Visit Date:
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-sm font-medium">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPlace;