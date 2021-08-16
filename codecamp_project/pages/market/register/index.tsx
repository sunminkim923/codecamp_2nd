import Register from "../../../src/components/units/market/register/register.container";
import withAuth from "../../../src/components/commons/hocs/withAuth";

function RegisterPage() {
  return <Register />;
}

export default withAuth(RegisterPage);
