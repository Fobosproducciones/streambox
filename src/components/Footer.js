import "../styles/Footerstyles.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Footer() {
  return (
    <AppBar position="static" color="secondary" className="footer">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body2" color="primary">
            © 2021 by Taffarel Emilio
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
