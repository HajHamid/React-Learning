import Button from "../components/Button"
import { AiOutlineShopping } from "react-icons/ai"
import { GoBell, GoDownload } from 'react-icons/go';


function ButtonPage() {
    const handleClick = () => {
    }
    return (
        <div>
            <div>
                <Button primary rounded className="mb-1" onClick={handleClick}>
                    <GoDownload />
                    Click me!</Button>
            </div>
            <div>
                <Button danger outline>
                    <GoBell />
                    Click me!</Button>
            </div>
            <div>
                <Button warning outline rounded>Click me!</Button>
            </div>
            <div>
                <Button secondary>
                    <AiOutlineShopping />
                    Click me!
                </Button>
            </div>
            <div>
                <Button success outline rounded>Click me!</Button>
            </div>
        </div>
    )
}

export default ButtonPage