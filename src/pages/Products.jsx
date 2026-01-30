import React from 'react'

const Products = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i className="bi bi-box-seam-fill text-green-600"></i>
                    จัดการข้อมูลสินค้า
                </h1>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-gray-700 flex items-center gap-2">
                        <i className="bi bi-info-circle-fill text-green-600"></i>
                        หน้านี้จะใช้สำหรับแสดงและจัดการข้อมูลสินค้าทั้งหมด
                    </p>
                    <p className="text-gray-600 text-sm mt-2 ml-6">
                        (ในส่วนของ Part 2 เราจะเพิ่มการเชื่อมต่อกับ API)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Products