import React from 'react'
import { useState, useEffect } from 'react'
import api from '../services/api'

const Orders = () => {
    const [Orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        customerName: '',
        emall: '',
        phone: '',
        totalAmount: ''
    })

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/orders')
            setOrders(response.data.data)
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

    const handleSunmit = async (e) => {
        e.preventDefault();

        setFormData({
            customerName: '',
            emall: '',
            phone: '',
            totalAmount: ''
        })

        try {
            await api.post('/orders', formData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="bi bi-cart-fill text-orange-600"></i>
                    จัดการคำสั่งซื้อ
                </h1>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700 flex items-center gap-2">
                        <i className="bi bi-info-circle-fill text-orange-600"></i>
                        หน้านี้จะใช้สำหรับแสดงและจัดการคำสั่งซื้อทั้งหมด
                    </p>
                    <p className="text-gray-600 text-sm mt-2 ml-6">
                        (ในส่วนของ Part 2 เราจะเพิ่มการเชื่อมต่อกับ API)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Orders
