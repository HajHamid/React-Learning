import { useSelector } from "react-redux";

function CarValue() {
    const filteredCars = useSelector(({ cars: { carsList, searchTerm } }) => {
        return carsList.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    })


    const totalCost = filteredCars.reduce((acc, car) => {
        return acc + car.cost
    }, 0)

    return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue