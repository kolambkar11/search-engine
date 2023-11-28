import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://reactstrap.github.io/logo-white.svg"
            style={{
              height: 40,
              width: 40,
            }}
          />
          Search Engine
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Navigation;
