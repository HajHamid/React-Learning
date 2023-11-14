import Button from '../components/Button'
import useCounter from '../hooks/use-counter'

function CounterPage({ initialCount }) {
    const { counter, increment } = useCounter(initialCount)

    return (
        <div>
            <div>{counter}</div>

            <Button onClick={increment} primary>Increment</Button>
        </div>
    )
}

export default CounterPage