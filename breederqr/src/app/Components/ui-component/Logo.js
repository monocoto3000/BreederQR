// material-ui
import logo from 'assets/images/logo-medidocs-png.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     */
      <img src={logo} alt="MediDocs" width="100" />
    
  );
};

export default Logo;
