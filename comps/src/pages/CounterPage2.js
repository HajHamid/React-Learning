import { useReducer } from 'react'
import Button from "../components/Button"
import Panel from "../components/Panel"

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_TO_VALUE = 'add_to_value'
const ADD_TO_COUNT = 'add_to_count'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_TO_VALUE:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            throw Error
    }
}

function CounterPage2({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: INCREMENT
        })
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT
        })
    }

    const hanldeChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: ADD_TO_VALUE,
            payload: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: ADD_TO_COUNT
        })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">{state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add number</label>
                <input
                    type="number"
                    onChange={hanldeChange}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd || ''} />
                <Button>Add</Button>
            </form>
        </Panel>
    )
}

export default CounterPage2