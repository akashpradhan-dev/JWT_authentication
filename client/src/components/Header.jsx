import { FaShoppingCart } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
// import { CartState } from "../context/Context";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            type='search'
            placeholder='Search a product...'
            className='m-auto'
            aria-label='Search'
          />
        </Navbar.Text>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge>10</Badge>
            </Dropdown.Toggle>
            <span>Cart is Empty</span>
            {/* <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className='car`titem' key={prod.id}>
                      <img
                        src={prod.image}
                        className='cartItemImg'
                        alt={prod.name}
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu> */}
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
