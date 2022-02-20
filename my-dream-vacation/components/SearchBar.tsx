import {FaSearch} from 'react-icons/fa'
import {Form, Button} from 'react-bootstrap'
function SearchBar() {
  return (
      <>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control type="email" placeholder="Destination, attraction, experience" />
                  <Form.Text className="text-muted">
                      
                  </Form.Text>
              </Form.Group>
          </Form>

          <FaSearch size={35} />
      
      </>
   
    
  )
}

export default SearchBar