import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: 70,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (window.location.href.toString().includes("feedback")) {
      setValue(2);
    } else if (window.location.href.toString().includes("current")) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, []);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="새 시나리오"
        icon={<CreateIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/current"
        label="진행중 거래"
        icon={<ShowChartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="feedback"
        label="사후평가"
        icon={<MenuBookIcon />}
      />
    </BottomNavigation>
  );
}
