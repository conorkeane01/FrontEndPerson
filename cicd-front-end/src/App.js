import React, { useState } from 'react';
import './App.css';
import classes from './App.css';

const apiURL = 'http://create_person:8081';
const deleteURL = 'http://delete_person:8083'

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        title: '',
        employeeId: '',
        position: '',
        department: '',
    });

    const [deleteId, setDeleteId] = useState('');
    const handleDeletePerson = async () => {
        try {
            const response = await fetch(`http://localhost:8083/person/remove/${deleteId}`, {
                method: 'DELETE',
            });
            console.log('Response: ', response);
            if (response.ok) {
                console.log('Person deleted successfully!');
                setDeleteId('');
            } else {
                console.error('Error deleting person:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting person:', error.message);
        }
    };

    const handleCreatePerson = async () => {
        try {
            const response = await fetch('http://localhost:8081/person/createPerson', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                  'Content-Type': 'application/json',
              },
            });

            console.log('Response: ', response);

            if (response.ok) {
                console.log('Person created successfully!');
            } else {
                console.error('Error creating person:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating person:', error.message);
        }
    };

    return (
        <div style={{color: 'fff', backgroundColor: '#fff'}}>
            <div className={classes.body}>
                <h1>Manage Employees </h1>
                <h2 className={classes.h2}>Create Person</h2>
                <label className={classes.label}>Name:</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                <label className={classes.label}>Age:</label>
                <input type="text" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />

                <label className={classes.label}>Email:</label>
                <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                <label className={classes.label}>Title:</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

                <label className={classes.label}>EmployeeId:</label>
                <input type="text" value={formData.employeeId} onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })} />

                <label className={classes.label}>Position:</label>
                <input type="text" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} />

                <label className={classes.label}>Department:</label>
                <input type="text" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
                
                <button onClick={handleCreatePerson}>Create Person</button>
            </div>

            <div style={{color: 'fff', backgroundColor: '#fff'}}>
                <h2>Delete Person</h2>
                <label>Person ID:</label>
                <input type="text" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
                <button onClick={handleDeletePerson}>Delete Person</button>
            </div>
        </div>
    );
};

//test

export default App;

