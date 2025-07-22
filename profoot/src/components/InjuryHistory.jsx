import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const InjuryHistory = () => {
  const [injuryRecords, setInjuryRecords] = useState([]);
  const [newInjury, setNewInjury] = useState({
    date: '',
    name: '',
    description: '',
    doctor: '',
    recommendations: '',
    severity: '',
    treatment: '',
    status: 'Recovering',
  });
  useEffect(()=>{
    const getHistory=async ()=>{
      const token =sessionStorage.getItem("profoot-token")
      const decoded = jwtDecode(token)
      const userId = decoded.id
      try {
        const response = await axios.get(`http://localhost:5500/player/injury/${userId}`)
        setInjuryRecords(response.data.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getHistory()
  },[])
  const previousInjury = {
    date: '2023-09-15',
    name: 'Ankle Sprain',
    description: 'Moderate sprain sustained during a soccer match.',
    doctor: 'Dr. Saikiran',
    recommendations: 'Rest, ice, compression, and elevation.',
    severity: 'Moderate',
    treatment: 'Physical therapy sessions for 4 weeks.',
    status: 'Recovered',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInjury({ ...newInjury, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token=sessionStorage.getItem("profoot-token")
    const tok=jwtDecode(token)
    const id=tok.id
    setInjuryRecords([...injuryRecords, { ...newInjury, id: id }]);
    try{
      const response = await axios.post(`http://localhost:5500/player/injury`, {newInjury,id:id})
      // console.log(newInjury)
      console.log(response.data);
    }catch(err){
      console.log(error?.response)
    }
    setNewInjury({
      date: '',
      name: '',
      description: '',
      doctor: '',
      recommendations: '',
      severity: '',
      treatment: '',
      status: 'Recovering',
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Injury History</h2>
      
      {/* Previous Injury Display */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-white">
        <h3 className="font-semibold text-xl">Previous Injury</h3>
        <p><strong>Date:</strong> {previousInjury.date}</p>
        <p><strong>Name:</strong> {previousInjury.name}</p>
        <p><strong>Description:</strong> {previousInjury.description}</p>
        <p><strong>Doctor:</strong> {previousInjury.doctor}</p>
        <p><strong>Recommendations:</strong> {previousInjury.recommendations}</p>
        <p><strong>Severity:</strong> {previousInjury.severity}</p>
        <p><strong>Treatment:</strong> {previousInjury.treatment}</p>
        <p><strong>Status:</strong> {previousInjury.status}</p>
      </div>

      {/* New Injury Form */}
      <h3 className="font-semibold text-xl mb-4">Add New Injury</h3>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg border border-white mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newInjury.date}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="injury">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newInjury.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newInjury.description}
              onChange={handleChange}
              required
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              rows="2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="doctor">Doctor</label>
            <input
              type="text"
              id="doctor"
              name="doctor"
              value={newInjury.doctor}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="recommendations">Recommendations</label>
            <input
              type="text"
              id="recommendations"
              name="recommendations"
              value={newInjury.recommendations}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="severity">Severity</label>
            <select
              type="text"
              id="severity"
              name="severity"
              value={newInjury.severity}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white">
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
            </select>
          </div>
          <div>
            <label className="block mb-1" htmlFor="treatment">Treatment</label>
            <input
              type="text"
              id="treatment"
              name="treatment"
              value={newInjury.treatment}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={newInjury.status}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            >
              <option value="Recovering">Recovering</option>
              <option value="Recovered">Recovered</option>
              <option value="Not Recovered">Not Recovered</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition"
        >
          Add Injury
        </button>
      </form>

      {/* Display Added Injuries */}
      <h3 className="font-semibold text-xl mb-4">Injury Records</h3>
      <div className="bg-gray-800 p-4 rounded-lg border border-white">
        {injuryRecords.length > 0 ? (
          injuryRecords.map((record, index) => (
            <div key={index} className="mb-4 border-b border-gray-700 pb-2">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Name:</strong> {record.name}</p>
              <p><strong>Description:</strong> {record.description}</p>
              <p><strong>Doctor:</strong> {record.doctor}</p>
              <p><strong>Recommendations:</strong> {record.recommendations}</p>
              <p><strong>Severity:</strong> {record.severity}</p>
              <p><strong>Treatment:</strong> {record.treatment}</p>
              <p><strong>Status:</strong> {record.status}</p>
            </div>
          ))
        ) : (
          <p>No injuries recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default InjuryHistory;
