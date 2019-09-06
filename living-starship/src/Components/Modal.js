import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";


function getModalStyle() {
  const top = 50;
  const left = 50;
  const backgroundColor = "rgba(143, 141, 141)";

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    background: `${backgroundColor}`,
    overflow: "scroll",
    height: "75%",
    width: "55%",
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 75,
    // backgroundColor: "grey",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  HandleClick(img) {
    console.log(img);
  }

  handelPassedData() {
    this.props.passedData();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom />
        <Button onClick={this.handleOpen}>
          {}
          <img src={this.props.displayImg} alt="" class="modal-display-image"/>
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              discription goes here
            </Typography>
            
            {this.props.imagesArr.map(item => {
              return (
                <Button 
                  onClick={e => {
                    this.props.passedData(item.src, this.props.id);
                    this.handleClose();
                  }
                }><div>
                  <img src={item.src} alt="Standard Button" class="modal-icon"
                  ></img>
                  <p>{item.description}</p>
                  </div>
                </Button>
              )
            })}
            
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;

