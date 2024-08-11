import './Otros.css';
import { Link } from 'react-router-dom';

const Otros = ({ data, currentIndex }) => {
    const filteredData = data.filter(item => item.index !== currentIndex);
    const currentItem = data.find(item => item.index === currentIndex); // Find the current item

    const getRoutePath = (index) => {
        switch (index) {
            case 0:
                return '/crossfit';
            case 1:
                return '/360';
            case 2:
                return '/strong';
            case 3:
                return '/inconformista';
            default:
                return '/';
        }
    };

    return (
        <div className='Otros-container'>
            <div className='Otros-title-container'>
                <h1 className='Otros-title stroke-text-black-title'>OTROS BUNKGYM</h1>
            </div>

            <div className='Otros-text-container parrafo2'>
                <p>Si {currentItem.title} no se adapta 100% a tus necesidades o las de tu municipio, te presentamos otros 3, haz click en el que más te interese y descubre todo sobre él.</p>
            </div>

            <div className='Otros-img-container'>
                {filteredData.map((item, index) => (
                    <div className='Otros-img-wrapper' key={index}>
                        <Link to={getRoutePath(item.index)} style={{ textDecoration: 'none', color: 'inherit' }} className="Otros-link">
                            <img src={item.image} alt={`Otros ${index}`} className='Otros-img' />
                            <h4 className='Otros-img-title'>{item.title}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Otros;
