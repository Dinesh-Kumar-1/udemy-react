import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Recomend from './components/Recomend';
import Saleimage from './components/Saleimage';
import Topics from './components/Topics';
import Popular from './components/Popular';

function App() {
    return (<div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recomend></Recomend>
        <Topics></Topics>
        <Popular></Popular>
    </div>
    )
}


export default App