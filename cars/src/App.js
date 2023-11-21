import CarForm from "./components/carForm"
import CarList from "./components/carList"
import CarSearch from "./components/carSearch"
import CarValue from "./components/carValue"

function App() {
    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    )
}

export default App