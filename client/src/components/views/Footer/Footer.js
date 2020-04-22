import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>  <Icon type="heart" style={{ color: '#08c' }} /> Love Movie <Icon type="heart" style={{ color: '#08c' }}  /></p>
        </div>
    )
}

export default Footer
