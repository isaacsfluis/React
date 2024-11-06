import ReactDOM from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className='container'>
            <nav className="navbar sticky-top navbar-dark bg-dark d-flex justify-content-center">
                <h1 className="navbar-brand text-light font-weight-bold display-3 my-4">Rick and Morty</h1>
            </nav>
            <List />
        </div>
    );
}

const container = document.getElementById('root'); // Coloca esta línea primero
const root = ReactDOM.createRoot(container);
root.render(<App />);

console.log('Rick and Morty');
