// import React from 'react'
import Modal from "../components/Modal";

import { useState } from "react";

const ModalPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }
    
    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <button onClick={handleClose}>I Accept</button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            GPay 2000₹ to 8866566356 right now. Or else you will die.
        </p>
    </Modal>


  return (
    <div className="bg-black pt-10 pb-96">
        <div className="bg-red-500 text-center py-4 rounded border-8 border-red-700 mx-20">
            <h1 className="text-red-900 font-extrabold text-4xl">Yamraaj Here!!!</h1>
        </div>
        <div className="bg-fuchsia-500 my-10 py-4 px-10 text-xl font-bold rounded mx-40">
            <p>
                You have made a huge mistake by clicking on that button. Your Death is inevitable. On next full moon day you will die a painful death.
            </p>
            <p>
                If you don't want to die then click on the button at bottom.
            </p>
        </div>
        <div className="text-center py-4 px-10">
            <button onClick={handleClick} className="bg-green-500 text-white font-bold py-4 px-10 rounded-full border-4 border-green-700">Save your life</button>
            {showModal && modal}
        </div>
    </div>
  )
}

export default ModalPage;