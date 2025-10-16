import {useState} from "react";
import Star from "./Star.tsx";
import Modal from "./Modal.tsx";

const Rating = ({heading,
                 feedbackMessages= ['Terrible', 'Poor', 'Fine', 'Good', 'Above Expectations!']}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const stars = Array.from({length: 5}, (_,i) => i+1)
    const handleSubmit = () => {
        if (rating > 0 ){
            setSubmitted(true)
        }
    }
    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
    }

    return (
    <div className='rating-container'>
        <h2>{heading}</h2>
        <div className="stars">
            { stars.map((star) => (
                <Star
                    key={star}
                    star={star}
                    rating={rating}
                    hover={hover}
                    ratingClick={setRating}
                    hoverEnter={setHover}
                    hoverLeave={() => setHover(null)} />
            ))}
        </div>
        {rating > 0 && <p className={'feedback'}>{feedbackMessages[rating-1]}</p>}

        <button
            className='submit-btn'
            onClick={handleSubmit}
            disabled={rating ===0}>
            Submit
        </button>
        <Modal
            isOpen={submitted}
            onClose={closeModal}
            rating={rating}>
        </Modal>
    </div>)
}

// export default Rating