import Register from "../../../src/components/units/market/write/market-write.container";
import withAuth from "../../../src/components/commons/hocs/withAuth";

function RegisterPage() {
  return <Register />;
}

export default withAuth(RegisterPage);
