import React, { useState, useEffect } from 'react';
import customerApi from '../../../api/customerApi';

const AddCustomer = ({ onUpdate, onClose ,user_id  }) => {

  const [FullName, setFullName] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Address, setAddress] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        UserID:user_id,
        FullName,
        PhoneNumber,
        Address,
    }
    customerApi.create(data)
        .then(response=>{
            alert('đã thêm người đặt thành công')
            onUpdate();
            onClose();
        })
        .catch(error=>console.error('có lỗi khi thêm người đặt '+error))
    
  };

  return (
    <div className="modal-overlay">
            <div className="modal-content">
                <h4>Thêm dữ liệu</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" style={{color:'black'}}>Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e=>setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{color:'black'}}>Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e=>setPhoneNumber(e.target.value)}
                            required
                        />
                    <div className="mb-3">
                        <label className="form-label" style={{color:'black'}}>Địa chỉ</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={e=>setAddress(e.target.value)}
                            required
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-success me-2">Lưu</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>onClose()}>Hủy</button>
                </form>
            </div>
        </div>

  );
}
export default AddCustomer;