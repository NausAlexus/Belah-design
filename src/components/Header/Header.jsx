import './Header.css';

function Header() {

	return (
		<>
            <h1 className='header-name'>BELAH EXCLUSIVE DESIGN</h1>
            <div className="header-backgrounds">
                <img className='header-background' src="https://i.ibb.co/yhryTT4/image-asset.webp" alt="Background" />
                <a className='header-btn' href='https://www.flickr.com/photos/ivlualizeu/albums/72177720319105929/' target='_blank' rel='noopener noreferrer'>More</a>
            </div>
            <h2 className='header-title'>Belah Exclusive Design builds future-facing spaces for highly creative, considerate humans.</h2>
            <div className='header-about'>
                <div className='header-about-icon'>
                    <img className='about-icon' src="https://i.ibb.co/5n7L9Ny/alena-foto.webp" alt="Icon" />
                    <p className='about-name'>Alena Belahlavak, Founder</p>
                </div>
                <div className='header-about-text'>
                    <p className='about-text1'>Founded in 2016 by Alena Belahlavak.</p>
                    <p className='about-text2'>At the core of our design philosophy lies an unwavering commitment to exploring innovative approaches that prioritize the human connections. Convinced on the importance of constantly push the boundaries of conventional thinking, we aim to bring a fresh perspective to every project we undertake. By seamlessly integrating the needs of our clients and the essence of each subject, we constantly try to redefine conventional notions of architecture, landscape and design experience. Every project has a deep affiliation with nature. </p>
                    <p className='about-text3'>Recognizing the vital role it plays in our life, we embrace the natural world as a source of inspiration and harmony. Through a blend of natural and built elements, we design to seamlessly blur the boundaries between indoors and outdoors, resulting in captivating spaces that exude both serenity and dynamism.</p>
                    <p className='about-text4'>Through a harmonious fusion of creativity, human-centric focus, and a deep appreciation for nature, we aim to create spaces that resonate with the soul and express our commitment to the transformative power of design.</p>
                </div>
            </div>
		</>
	)
};

export default Header;