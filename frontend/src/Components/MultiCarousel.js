import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const MultiCarousel = (content) => {
    const data = {content}
    return (
        <Carousel 
            additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
        >
            {data.map((product) => {
                return (
                    <Card key={product.id} className='product'>
                        <Card.Img variant='top' src={product.image} alt={product.name} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroupItem>Bs. {product.price}</ListGroupItem>
                            </ListGroup>
                            <Button className='btn' variant="primary">Me Interesa</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </Carousel>
    )
}

export default MultiCarousel