import { Nav, Button } from "react-bootstrap";
import {useState} from 'react'
import Flights from "./products/Flights";
import Hotels from "./products/Hotels";
import Trains from "./products/Trains";
import Cars from "./products/Cars";
import { FaHotel } from "react-icons/fa";


function Navigator() {

    const [productRender, setProductRender] = useState({
        flightsComp: false,
        hotelsComp: false,
        trainsComp: false,
        carRentalComp: false
    })

    console.log(productRender)

    // const handleClick = () => {
    //     console.log('piski')
    //     setProductRender({...productRender, flightsComp: !productRender.flightsComp})
    //     console.log(productRender)

    // }

  return (
      <>
          <Nav justify variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                  <Button

                      onClick={() => setProductRender({
                          flightsComp: true,
                          hotelsComp: false,
                          trainsComp: false,
                          carRentalComp: false
                      })}
                  >
                      Flights
                  </Button>
              </Nav.Item>

              <Nav.Item>
                  <Button
                      onClick={() => setProductRender({
                          flightsComp: false,
                          hotelsComp: true,
                          trainsComp: false,
                          carRentalComp: false
                      })}
                  >
                      Hotels
                  </Button>
              </Nav.Item>

              <Nav.Item>
                  <Button
                      onClick={() => setProductRender({
                          flightsComp: false,
                          hotelsComp: false,
                          trainsComp: true,
                          carRentalComp: false
                      })}
                  >
                      Trains
                  </Button>
              </Nav.Item>

              <Nav.Item>
                  <Button
                      onClick={() => setProductRender({
                          flightsComp: false,
                          hotelsComp: false,
                          trainsComp: false,
                          carRentalComp: true
                      })}
                  >
                      Car Rental
                  </Button>
              </Nav.Item>
              <Nav.Item>
                  <Button>
                      Last Minute Deals
                  </Button>
              </Nav.Item>
          </Nav>
          {productRender.flightsComp && <Flights />}
          {productRender.hotelsComp && <Hotels />}
          {productRender.trainsComp && <Trains />}
          {productRender.carRentalComp && <Cars/>}
      </>
     

      
  )
}

export default Navigator


// questions for this component:
//logic.
// i want that if i click on flights and the hotels is still rendering 