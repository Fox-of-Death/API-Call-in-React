import React from 'react'
import { useState, useEffect } from 'react'
import api from '../services/api'

const Members = () => {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    // ดึงข้อมูล
    const fetchMembers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/members')
            setMembers(response.data.data)
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // เพิ่มข้อมูล
    const handleSunmit = async (e) => {
        e.preventDefault();
        
        setFormData({
            firstName: '',
            lastName: '',
            email: ''
        })
        
        try{
            await api.post('/members', formData);
        } catch (err) {
            console.error(err);
        }
    }

    // เรียกใช้ฟังชัน
    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i className="bi bi-people-fill text-blue-600"></i>
                        จัดการข้อมูลสมาชิก
                    </h1>

                    <form onSubmit={handleSunmit}>
                        <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' required />
                        <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' required />
                        <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />
                        <button type="submit">ส่งข้อมูล</button>
                    </form>

                    {loading && <p>Loading....</p>}

                    {error && (
                        <p className='text-red-600'>{error}</p>
                    )}

                    {!loading && !error && (
                        <table className="min-w-full border">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">ID</th>
                                    <th className="border px-4 py-2">ชื่อ</th>
                                    <th className="border px-4 py-2">นามสกุล</th>
                                    <th className="border px-4 py-2">อีเมล</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr key={member.id}>
                                        <td className="border px-4 py-2">{member.id}</td>
                                        <td className="border px-4 py-2">{member.firstName}</td>
                                        <td className="border px-4 py-2">{member.lastName}</td>
                                        <td className="border px-4 py-2">{member.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Members