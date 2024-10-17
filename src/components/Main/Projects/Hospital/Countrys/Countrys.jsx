const Countrys = (props) => {
    return (
      <>
        <div className="country-hotels">
          <div className="content-country">
            <p>{props.title}</p>
            <a
              className="hospital-btn"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              More
            </a>
          </div>
          <div className="content-info">
            {props.text.split("\n\n").map((paragraph, index) => (
                <div key={index}>
                    <p>{paragraph.trim()}</p>
                    {index < props.text.split("\n\n").length - 1 && (
                        <p>&nbsp;</p>
                    )}
                </div>
            ))}
          </div>
          <img src={props.img} alt={props.title} className="country-hotels-img"/>
        </div>
      </>
    );
  };
  
export default Countrys;