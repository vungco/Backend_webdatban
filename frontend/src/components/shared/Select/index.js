import React from 'react'

const Select = ({ title }) => {
    return (
        <div className='position-relative p-2 mt-4' style={{ border: '1px solid #fff', borderRadius: '3px' }}>
            <select
                style={{
                    width: '100%',
                    outline: 'none',
                    border: 'none',
                    height: '50px,',
                    background: '#10302c',
                    color: '#fff'
                }}
            >
                <option>1</option>

            </select>
            <p style={{ position: 'absolute', top: '-30%', background: '#10302c', padding: '0 4px', color: '#d69c52' }}>{title}</p>
        </div>
    )
}

export default Select