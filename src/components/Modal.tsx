// import React from 'react'

const Modal = ({onClose, children, actionBar}) => {


  return (
    <div>
        <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
        <div className="fixed inset-40 p-10 bg-white">
            <div className="flex flex-col justify-between h-full">
                {children}
                <div className="flex justify-end">
                    {actionBar}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal;