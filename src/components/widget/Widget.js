import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type, length }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">{length}</span>
        <span className="link">LINK</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon />
          {diff}% */}
        </div>
        <p>icon</p>
      </div>
    </div>
  );
};

export default Widget;
