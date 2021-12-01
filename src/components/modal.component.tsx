import { ICONS } from "assets/icons";
import React from "react";
import Modal from "react-modal";

const CustomModal = {

    Button: () => (
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
        </button>
    ),
    openModal: (id: string) => {
    },
    closeModal: (id: string) => {
    },
    View: ({ label, children, closeModal, afterOpenModal, modalIsOpen }: any) => {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#008A81',
                borderRadius: "20px"
            },
        };
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={label}
            >
                <div className="custom-modal-wrapper">
                    <img src={ICONS.CLOSE} style={{
                        width: 20,
                        height: 20,
                        float: "right",
                        top: "-20px",
                        left: "20px",
                        position: "relative",
                    }} />
                    <div className="custom-modal-content">
                        {children}
                    </div>
                </div>
            </Modal >
        )
    }
}

export default CustomModal;