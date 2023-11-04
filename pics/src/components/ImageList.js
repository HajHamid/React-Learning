import ImageShow from "./ImageShow"
import '../ImageList.css'


function ImageList({ images }) {

    const rendererImage = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return (
        <div className="image-list">
            <div className="img">{rendererImage}</div>
        </div>
    )
}

export default ImageList