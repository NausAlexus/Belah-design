import './Location.css';

function Location() {

	return (
		<div className='location-container'>
            <h3 className='location-title'>Locations</h3>
            <div className='location-img'>
                <a className='dubai-link' href="https://www.google.com/maps/@25.2008838,55.2705189,13z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel="noopener noreferrer">
                    <img className='dubai-img' src="https://i.ibb.co/sg5Qdcp/dubai.webp" alt="Dubai" />
                </a>
                <a className='madrid-link' href="https://www.google.com/maps/@40.414293,-3.7055047,13.75z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"  target='_blank' rel="noopener noreferrer">
                    <img className='madrid-img' src="https://i.ibb.co/2dj8KNb/madrid.webp" alt="Madrid"/>
                </a>
            </div>
        </div>
	)
};

export default Location;