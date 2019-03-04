import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: "grey",
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
          <img src={this.props.displayImg} alt="" />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Modal title goes here
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              discription goes here
            </Typography>

            {this.props.imagesArr.map(item => {
              return (
                <React.Fragment>
                  <input
                    //class="diceDot"
                    // id="tac1"
                    class="modalListImage"
                    type="image"
                    src={item}
                    alt=""
                    onClick={e => {
                      this.props.passedData(item, this.props.id);

                      this.handleClose();
                    }}
                  />
                </React.Fragment>
              );
            })}

            {/* <SimpleModalWrapped /> */}
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
