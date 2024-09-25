
import { PacmanLoader } from 'react-spinners';

const override = {
    display: "flex",
    margin: "0 auto",
    marginTop:"100px"
  };

function Loader({  loading, setLoading }) {
    // const [loading, setLoading] = useState(false);

  return (
    <PacmanLoader
      cssOverride={override}
      setLoading={setLoading}
      loading={loading}
      size={30}
      color="#F37A24"
    />
  )
}

export default Loader