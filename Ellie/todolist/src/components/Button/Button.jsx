import BtnStyle from "./Button.module.css";

const Button = ({ children, type, isActive, btnFor, onClick }) => {
  return (
    <>
      {
        {
          header: (
            <button className={`${BtnStyle.common} ${BtnStyle.headerBtn} ${isActive && BtnStyle.active}`} type={type}>
              {children}
            </button>
          ),
          lightmode: (
            <button className={`${BtnStyle.common} ${BtnStyle.lightmodeBtn}`} type={type}>
              {children}
            </button>
          ),
          darkmode: (
            <button className={`${BtnStyle.common} ${BtnStyle.darkmodeBtn}`} type={type}>
              {children}
            </button>
          ),
          trash: (
            <button className={`${BtnStyle.common} ${BtnStyle.trashBtn}`} type={type} onClick={(e) => onClick(e)}>
              {children}
            </button>
          ),
          add: (
            <button className={`${BtnStyle.common} ${BtnStyle.addBtn}`} type={type}>
              {children}
            </button>
          ),
        }[btnFor]
      }
    </>
  );
};

export default Button;
