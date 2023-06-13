import Login from "../components/login_components/SignIn";
import Footer from "../components/footer_components/Footer";
import NavbarLogin from "../components/navbar_components/navbar-login";
function LoginPage() {
  return (
    <>
      <NavbarLogin />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
