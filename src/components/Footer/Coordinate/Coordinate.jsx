import './Coordinate.css';
import Location from './Location/Location';
import Contact from './Contact/Contact';

function Coordinate() {

	return (
        <div className='coordinate-container'>
            <Location/>
            <Contact/>
        </div>
	)
};

export default Coordinate;