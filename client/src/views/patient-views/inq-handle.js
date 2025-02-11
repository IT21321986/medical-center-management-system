import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:4000/inqData/');
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/deleteinq/${id}`);
      fetchInquiries();
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  return (
    <div>
      <h2>All Inquiries</h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry._id}>
              <td>{inquiry.name}</td>
              <td>{inquiry.subject}</td>
              <td>{inquiry.message}</td>
              <td>
                {/* <button onClick={() => handleDelete(inquiry._id)}>Delete</button> */}
                <Stack direction={'row'} spacing={2}>
                <Button
                  component={Link}
                  to="/editinq"
                  variant="contained"
                  // size="small"
                  style={{ width: '100%' }}

                  color="primary"
                >
                  Edit
                </Button>
                {/* <Link 
                  // to={{
                  //   pathname: `/editinq/`,
                  //   //state: { inquiryData: inquiry }, // Pass the inquiry object as state
                  // }}
                  
                >
                  
                </Link> */}
                {/* <button component={Link} to="/editinq" variant="contained" color="primary">Edit</button> */}
               
                <Button
                  component={Link}
                  to="/editinq"
                  variant="contained"
                  // size="small"
                  style={{ width: '100%' }}

                  color="primary"
                >
                  Delete
                </Button>
                </Stack>
                
                {/* <Link 
                  // to={{
                  //   pathname: `/editinq/`,
                  //   //state: { inquiryData: inquiry }, // Pass the inquiry object as state
                  // }}
                  
                >
                  
                </Link> */}
                {/* <button component={Link} to="/editinq" variant="contained" color="primary">Edit</button> */}
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryList;




////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const InquiryList = () => {
//   const [inquiries, setInquiries] = useState([]);

//   const fetchInquiries = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/inqData/'); // Fetch all inquiries
//       setInquiries(response.data);
//     } catch (error) {
//       console.error('Error fetching inquiries:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInquiries(); // Fetch inquiries when the component mounts
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       // Delete the inquiry with the specified ID
//       await axios.delete(`http://localhost:4000/deleteinq/${id}`);
//       // Refetch inquiries to update the list
//       fetchInquiries();
//     } catch (error) {
//       console.error('Error deleting inquiry:', error);
//     }
//   };

//   return (
//     <div>


         
//       <h2>All Inquiries</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Subject</th>
//             <th>Message</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inquiries.map((inquiry) => (
//             <tr key={inquiry._id}>
//               <td>{inquiry.name}</td>
//               <td>{inquiry.subject}</td>
//               <td>{inquiry.message}</td>
//               <td>
//                 <button onClick={() => handleDelete(inquiry._id)}>Delete</button>
//                 <button>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InquiryList;
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


//===========================================================

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function InquiryList() {
//   const [inquiries, setInquiries] = useState([]);
//   const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

//   useEffect(() => {
//     axios.get('/api/inquiries')
//       .then((response) => {
//         setInquiries(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching inquiries:', error);
//       });
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/inquiries', formData)
//       .then((response) => {
//         setInquiries([...inquiries, response.data]);
//         setFormData({ name: '', subject: '', message: '' });
//       })
//       .catch((error) => {
//         console.error('Error adding inquiry:', error);
//       });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`/api/inquiries/${id}`)
//       .then(() => {
//         setInquiries(inquiries.filter((inquiry) => inquiry._id !== id));
//       })
//       .catch((error) => {
//         console.error('Error deleting inquiry:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Inquiry Management</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Name:
//           <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//         </label>
//         <label>
//           Subject:
//           <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
//         </label>
//         <label>
//           Message:
//           <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
//         </label>
//         <button type="submit">Add Inquiry</button>
//       </form>
//       <h2>All Inquiries</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Subject</th>
//             <th>Message</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inquiries.map((inquiry) => (
//             <tr key={inquiry._id}>
//               <td>{inquiry.name}</td>
//               <td>{inquiry.subject}</td>
//               <td>{inquiry.message}</td>
//               <td>
//                 <button onClick={() => handleDelete(inquiry._id)}>Delete</button>
//                 <button>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default InquiryList;


// EditInquiry.js


// function EditInquiry({ match, history }) {
//   const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

//   useEffect(() => {
//     // Fetch the inquiry data to prepopulate the form
//     axios.get(`/api/inquiries/${match.params.id}`)
//       .then((response) => {
//         setFormData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching inquiry for editing:', error);
//       });
//   }, [match.params.id]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Send a PUT request to update the inquiry
//     axios.put(`/api/inquiries/${match.params.id}`, formData)
//       .then(() => {
//         history.push('/'); // Redirect to the inquiry list after editing
//       })
//       .catch((error) => {
//         console.error('Error updating inquiry:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Edit Inquiry</h2>
//       <form onSubmit={handleFormSubmit}>
//         {/* Create form fields to edit inquiry data */}
//         <label>
//           Name:
//           <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//         </label>
//         <label>
//           Subject:
//           <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
//         </label>
//         <label>
//           Message:
//           <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
//         </label>
//         <button type="submit">Update Inquiry</button>
//       </form>
//     </div>
//   );
// }

