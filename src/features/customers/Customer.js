import { useSelector } from "react-redux";

function Customer() {
  // reRenders if anything inside the Store changes.
const customer = useSelector(store=>store.customer.fullName)

  return <h2>👋 Welcome, "{customer}"🌹🪻</h2>;
}

export default Customer;
