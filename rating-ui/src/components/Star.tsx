const Star = ({ star, rating, hover, ratingClick, hoverEnter, hoverLeave }) => {
    return (
    <span
        onClick={() =>ratingClick(star)}
        onMouseEnter={() => hoverEnter(star)}
        onMouseLeave={() => hoverLeave(star)}
        className={`star ${star <= (hover || rating) ? 'active' : ''}`}>
        {'\u2605'}
    </span>)
}

export default Star