import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Your Bio: {user.bio}</p>
      <p>Navigate at will!</p>
      <h1 className="word" data-animation="slide" id="welcome-title"> Welcome {user.fbUser.displayName}!</h1>

      <br />
      <Link passHref href="/items/itemsPage">
        <Button type="button" className="btn btn-success btn-lg btn-3" id="view-order">View Menu</Button>
      </Link>
      <br />
      <br />
      <Link passHref href="/orders/ordersPage">
        <Button type="button" className="btn btn-success btn-lg btn-3" id="view-order">View Orders</Button>
      </Link>
      <br />
      <br />
      <Link passHref href="/orders/new">
        <Button type="button" className="btn btn-success btn-lg btn-3" id="create-order-landing">Create an Order</Button>
      </Link>
      <br />
      <br />
      <Link passHref href="/revenue/revenuePage">
        <Button type="button" className="btn btn-success btn-lg btn-3" id="view-rev">View Revenue</Button>
      </Link>
      <br />
      <br />
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
