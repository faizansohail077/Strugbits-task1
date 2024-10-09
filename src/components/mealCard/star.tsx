
export const Star = ({ fillColor = 'currentColor' }) => {
    return (
        <svg
            className="star-svg"
            stroke={fillColor}
            fill={fillColor}
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
    );
};

export const HalfStar = () => {
    return (
        <svg
            className="half-star-svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 17.27L7.82 20.36L8.88 14.74L5.46 11.14L11.21 10.6L12 5L12.79 10.6L18.54 11.14L15.12 14.74L16.18 20.36L12 17.27Z"></path>
            <rect x="12" y="0" width="12" height="24" fill="white" />
        </svg>
    );
};

export const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    const emptyStars = 5 - Math.ceil(rating); 

    return (
        <div className="flex">
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={i} />
            ))}

            {hasHalfStar && <HalfStar />}

            {Array.from({ length: emptyStars }).map((_, i) => (
                <Star key={fullStars + i} fillColor="lightgray" />
            ))}
        </div>
    );
};
