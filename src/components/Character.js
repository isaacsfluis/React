import './Character.css'; // Asegúrate de que la ruta sea correcta


function Character({ name, origin, image }) {  // Destructuramos directamente las props
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-lg rounded-3 hover-card">
                <img src={image} className="card-img-top" alt={name} width="100%" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{`Origin: ${origin && origin.name}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Character;


