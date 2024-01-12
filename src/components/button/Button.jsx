import './Button.style.css';

const Button = ({text = "CLICK", onClick, className}) => {
  const wordStart = text?.substring(0, 1);
  const secondLetter = text?.substring(1, 2);
  const wordEnd = text?.substring(2);

  return (
      <>
        <button className={`glowing-btn ${className}`} onClick={onClick}>
          <span className='glowing-txt'>
            {wordStart}
            <span className='faulty-letter'>
              {secondLetter}
            </span>
            {wordEnd}
          </span>
        </button>
      </>
  )
};

export default Button;