import Button from "./Button.tsx";

const Modal =({isOpen, onClose, rating}) => {
    if (!isOpen) return null

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>thx</h2>
                <p>Your rating {rating} star{rating >1 ? 's': ''}</p>
                <button className='close-btn' onClick={onClose}>
                    close
                </button>
            </div>
        </div>)
}

export default Modal