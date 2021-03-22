import "../styles/Avatarstyles.css";

const Avatar = ({ alt, src, text }) => {
  return (
    <div className="avatar-container">
      <img className="avatar" alt={alt} src={src} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  );
};

export default Avatar;
