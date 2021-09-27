import React from 'react';
import m from './myModal.module.css'


const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [m.myModal]

    if (visible) {
        rootClasses.push(m.active)
    }

    return (
       <div className={rootClasses.join(' ')} onClick={() => setVisible(false) }>
           <div className={m.content} onClick={event => event.stopPropagation()}>
               {children}
           </div>
       </div>
    );
};

export default MyModal;