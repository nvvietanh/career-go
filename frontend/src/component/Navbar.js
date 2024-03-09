import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box
  // Link,
} from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "../styles/navBarStyles.css";
import { useState } from "react";

import isAuth, { userType } from "../lib/isAuth";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from  "@material-ui/icons/MenuIcon";
// import CloseIcon from  "@material-ui/icons/CloseIcon";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Height } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    text_decoration: "none",
  },
  mobile: {
    '& i': {
      color: "#fff",
    }
  },
  theme: {
    background: {
      default: "green",
    }
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  const [clicked, setClicked] = useState(false);
  const handleClickState = () => {
    setClicked(!clicked);
  }

  return (
    <AppBar position="fixed" theme={useStyles.theme}> {/* <header> */}

      <Toolbar> {/* <div> */}
        <Box zIndex={3} width={200}>
          {/* <div> */}
          <Link to="/" underline="none" textDecoration="none" boxShadow="none" className="link_title">
            {/* Job Portal */}

            <div className="title">
              <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMzIuOTUxIiB5MT0iMi43NSIgeDI9IjMyLjk1MSIgeTI9IjYxLjAwOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xX05DUGRNSEd0NGlaNV9ncjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZTFlYSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIzMi45NTEiIHkxPSIzLjAzNiIgeDI9IjMyLjk1MSIgeTI9IjYwLjk5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yX05DUGRNSEd0NGlaNV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZTI5ZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmNzE5YSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNCw0KSI+PHBhdGggZD0iTTM4Ljc3MiwzLjA2MWMtMi4xODMsLTAuMTQ2IC00LjQyMSwwLjM1NCAtNi40NDgsMS40MjZjLTUuODk3LDMuMTE3IC05LjI5OCw5LjIzNCAtMTIuMDk1LDE1LjAwOWMxLjMwMSwtMy42NjggMS4zMDEsLTQuMzEyIDQuNTA0LC0xMC4yNTNjLTcuODM5LDkuMjQ0IC0xMS42NiwyMS44NDIgLTEwLjIyOCwzMy44ODNjMC42MTIsNS4xNDggMi40MzIsMTAuMjc3IDYuMTAxLDE0LjA0OWMwLjEwOSwwLjExMiAwLjIxOSwwLjIyMiAwLjMzMSwwLjMzMWMyLjcyMiwyLjY1MSA2LjU3NCw0LjAzMiAxMC4zNTEsMy4yODljNC42ODEsLTAuOTIxIDguMzg2LC00LjYxOCAxMS4wODYsLTguMzM2YzYuOTUzLC05LjU3NSAxMC45MjQsLTIzLjIwNiA4LjcwMSwtMzQuOTU0Yy0wLjg2LC00LjU0OSAtMi43NzMsLTkuMzg0IC02LjU1NiwtMTIuMjg3Yy0xLjcyNSwtMS4zMjIgLTMuNzEyLC0yLjAyMSAtNS43NDcsLTIuMTU3ek00Ni43NTQsMzEuNzU2Yy0wLjQyNCw0LjA4MSAtMS45NjUsOS4xNjkgLTIuOTQ3LDExLjA1MWMtMC45ODIsMS44ODMgLTIuMzc0LDQuNzQ4IC0zLjY4NCw2LjQ2N2MtMS45NDcsMi41NTUgLTUuNjM3LDUuNDQzIC05LjAzOSw0LjkxMWMtMi42NDksLTAuNDE0IC00LjcxMiwtMi40MjggLTYuMTEsLTQuNTk4Yy0xLjAwNiwtMS41NjMgLTIuNDM2LC00LjEzNiAtMi40NTIsLTYuMDQzYzAuMDU3LDYuOTc1IDQuNDYzLDE0LjQzIDEyLjI3OSwxMy4xNzljMCwwIC0xLjIyOCwxLjM5MiAtMy4wMjksMS41NTVjLTEuODAxLDAuMTY0IC00LjU4NCwtMC40MDkgLTYuMTQsLTEuNTU1Yy0xLjU1NSwtMS4xNDYgLTQuNTAyLC00LjMzOSAtNS40MDMsLTkuMjVjLTAuOTAxLC00LjkxMSAtMC41MzgsLTExLjA2NSAwLjAzNCwtMTQuNTMzYzAuNTQ2LC0zLjMxMiAyLjI1OCwtMTAuMjcxIDMuODk1LC0xMy4yMThjMS42MzcsLTIuOTQ3IDQuMjQ4LC02Ljk2OSA2LjIyMiwtOC42NzdjMy41NzcsLTMuMDk3IDUuMzA2LC0zLjA0MyA3LjA0LC0zLjAyOWMxLjc0LDAuMDE0IDQuNDk4LDEuNzcgNS43MjYsNS4wNDVjMi4wNiw1LjQ5NSAyLjY4NCwxMi4xNjcgMC44MDMsMTcuODAyYzEuNzE1LC00LjMxIDIuMjU1LC04LjMyOCAxLjk4NCwtMTIuOTQyYy0wLjA4MiwtMS4zOTIgLTAuMjQ2LC0yLjYyIC0wLjI0NiwtMi42MmMwLDAgMS4yODQsMy4xOTQgMS40NzQsNi4zMDNjMC4xOTEsMy4xMDYgLTAuMTM2LDcuNTM1IC0wLjQwNywxMC4xNTJ6IiBmaWxsPSJ1cmwoI2NvbG9yLTFfTkNQZE1IR3Q0aVo1X2dyMSkiPjwvcGF0aD48cGF0aCBkPSJNNTEuMDc1LDE3LjUwNmMtMC44NiwtNC41NDkgLTIuNzczLC05LjM4NCAtNi41NTYsLTEyLjI4N2MtMS43MjUsLTEuMzIzIC0zLjcxMiwtMi4wMjIgLTUuNzQ3LC0yLjE1OWMtMC4yNDgsLTAuMDE3IC0wLjQ5OCwtMC4wMjUgLTAuNzQ3LC0wLjAyNWMtMS45NDIsMCAtMy45MDQsMC41MDEgLTUuNzAxLDEuNDUxYy01Ljg5NywzLjExNyAtOS4yOTgsOS4yMzQgLTEyLjA5NSwxNS4wMDljMS4zMDEsLTMuNjY4IDEuMzAxLC00LjMxMiA0LjUwNCwtMTAuMjUzYy03LjgzOSw5LjI0NCAtMTEuNjYsMjEuODQyIC0xMC4yMjgsMzMuODgzYzAuNjEyLDUuMTQ4IDIuNDMyLDEwLjI3NyA2LjEwMSwxNC4wNDljMC4xMDksMC4xMTIgMC4yMTksMC4yMjIgMC4zMzEsMC4zMzFjMi4yMjgsMi4xNyA1LjIxMywzLjQ4OSA4LjI5NCwzLjQ4OWMwLjY4MywwIDEuMzcxLC0wLjA2NSAyLjA1NywtMC4yYzQuNjgxLC0wLjkyMSA4LjM4NiwtNC42MTggMTEuMDg2LC04LjMzNmM2Ljk1MiwtOS41NzIgMTAuOTIzLC0yMy4yMDMgOC43MDEsLTM0Ljk1MnpNMTYuNDksNDIuODljLTAuNTExLC00LjMwMiAtMC4zMTUsLTguNjk1IDAuNTI4LC0xMi45NzJjMC4zMzksLTEuNzIgMS4xNzksLTMuNjE0IDEuODM0LC01LjI0M2MwLjc3NCwtMS45MjUgMi44NDgsLTQuNDQ0IDIuODQ4LC00LjQ0NGMtMS41NjYsMy42NzggLTIuOTUsOS42MDIgLTMuNDA5LDEyLjM4NGMtMC42NjQsNC4wMjggLTAuOTMxLDEwLjI5NSAtMC4wMjgsMTUuMjE5YzAuNDk1LDIuNzAxIDEuNTczLDUuMDI5IDIuODE1LDYuODY4Yy0zLjA1MiwtMy43NDQgLTQuMTg0LC04LjQxMyAtNC41ODgsLTExLjgxMnpNNDYuNzU0LDMxLjc1NmMtMC40MjQsNC4wODEgLTEuOTY1LDkuMTY5IC0yLjk0NywxMS4wNTFjLTAuOTgyLDEuODgzIC0yLjM3NCw0Ljc0OCAtMy42ODQsNi40NjdjLTEuNzg4LDIuMzQ3IC01LjA0OCw0Ljk3NSAtOC4yMDMsNC45NzVjLTAuMjgsMCAtMC41NTksLTAuMDIxIC0wLjgzNiwtMC4wNjRjLTIuNjQ4LC0wLjQxNCAtNC43MTIsLTIuNDI4IC02LjExLC00LjU5OGMtMS4wMDYsLTEuNTYzIC0yLjQzNiwtNC4xMzYgLTIuNDUyLC02LjA0M2MwLjA1Miw2LjQ1MyAzLjgyOSwxMy4zMTggMTAuNTgzLDEzLjMxOGMwLjU0NiwwIDEuMTExLC0wLjA0NSAxLjY5NiwtMC4xMzhjMCwwIC0xLjIyOCwxLjM5MiAtMy4wMjksMS41NTVjLTAuMjAzLDAuMDE4IC0wLjQxOCwwLjAyOCAtMC42NDIsMC4wMjhjLTEuNzcsMCAtNC4xMTcsLTAuNTY2IC01LjQ5OCwtMS41ODNjLTEuNTU1LC0xLjE0NiAtNC41MDIsLTQuMzM5IC01LjQwMywtOS4yNWMtMC45MDEsLTQuOTEyIC0wLjUzOCwtMTEuMDY1IDAuMDM0LC0xNC41MzNjMC41NDYsLTMuMzEyIDIuMjU4LC0xMC4yNzEgMy44OTUsLTEzLjIxOGMxLjYzNywtMi45NDcgNC4yNDgsLTYuOTY5IDYuMjIyLC04LjY3N2MzLjI4OSwtMi44NDggNS4wMTUsLTMuMDMxIDYuNjIsLTMuMDMxYzAuMTQxLDAgMC4yOCwwLjAwMSAwLjQyLDAuMDAzYzEuNzQsMC4wMTQgNC40OTgsMS43NyA1LjcyNiw1LjA0NWMyLjA2LDUuNDk1IDIuNjg0LDEyLjE2NyAwLjgwMywxNy44MDJjMS43MTUsLTQuMzEgMi4yNTUsLTguMzI4IDEuOTg0LC0xMi45NDJjLTAuMDgyLC0xLjM5MiAtMC4yNDYsLTIuNjIgLTAuMjQ2LC0yLjYyYzAsMCAxLjA2OCwzLjEyNyAxLjI1Nyw2LjIzN2MwLjE5MSwzLjEwMyAwLjA4MSw3LjU5OSAtMC4xOSwxMC4yMTZ6TTQ4LjE4NCwzNS40NzFjMC4yNDcsLTEuMTk4IDAuNDQ0LC0yLjM5NSAwLjU1OSwtMy41MDhjMC4xNTYsLTEuNTAyIDAuNjQ3LC02LjY5NiAwLjQxNiwtMTAuNDc5Yy0wLjEwMiwtMS42NzkgLTAuNDg0LC0zLjM1NSAtMC44NTEsLTQuNjRjLTAuMTM2LC0wLjQ0MyAtMC4yODksLTAuODk3IC0wLjQ2NiwtMS4zNTRjLTEuMzk2LC0zLjYwNSAtMy41MjYsLTUuNzQyIC01LjA1MSwtNi45NjhsMC4wMDYsMC4wNDFjLTAuMDgzLC0wLjA4OSAtMC4xNjksLTAuMTYyIC0wLjI1NCwtMC4yMzhjLTAuMjk4LC0wLjIzMSAtMC41NjUsLTAuNDI0IC0wLjc5NSwtMC41ODZjLTAuMTQyLC0wLjA5MyAtMC4yODYsLTAuMTg3IC0wLjQzMSwtMC4yOTFjLTEuMzA3LC0wLjkzNCAtMi43MDEsLTEuNDIzIC0zLjg4LC0xLjQzM2wtMC4wNjUsLTAuMDAxbC0wLjM3MSwtMC4wMDJjLTEuOTU1LDAgLTQuMTc4LDAuMjcyIC03LjkyOSwzLjUxOWMtMC40MTQsMC4zNTggLTAuODM3LDAuNzg2IC0xLjI1OCwxLjI1OGMxLjUzOCwtMS44MyAzLjMyMSwtMy40MTMgNS40NDQsLTQuNTM2YzEuNTA5LC0wLjc5OCAzLjE1OCwtMS4yMTkgNC43NjcsLTEuMjE5YzAuMjA1LDAgMC40MSwwLjAwNyAwLjYxNCwwLjAyYzEuMzExLDAuMDg4IDIuNTYyLDAuNDcyIDMuNjgxLDEuMTA4bDAuMDA5LC0wLjAwOGMwLjAyOSwwLjAxNyAwLjA1OSwwLjA0IDAuMDg4LDAuMDU4YzAuMDE1LDAuMDA5IDAuMDMyLDAuMDE1IDAuMDQ3LDAuMDI0bDAuMDAxLDAuMDA4YzEuMDcsMC42NjQgMi4yMTIsMS42MDIgMy4xOTIsMi44OTRjMC4xMDQsMC4xMzcgMC4yMzYsMC4zNjkgMC4zODIsMC42NTNjMS43MSwyLjU2NSAyLjYwNyw1LjYyNyAzLjA3MSw4LjA4NGMxLjAzMiw1LjQ1NyAwLjY1NSwxMS41OTQgLTAuOTI2LDE3LjU5NnoiIGZpbGw9InVybCgjY29sb3ItMl9OQ1BkTUhHdDRpWjVfZ3IyKSI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==" />
              <p className="tilte_text">CareerGo</p>
            </div>
          </Link>
          {/* </div> */}
        </Box>
        {/* <Link to="/"> */}

        {/* </Link> */}
        <div justifyContent="right" id="menuBar" className={clicked ? "menuBar active" : "menuBar"}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}> {/* <button> */}
                  Trang chủ
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Thêm việc làm
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  Việc làm của tôi
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Nhân viên
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Hồ sơ
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Trang chủ
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Đơn ứng tuyển
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Hồ sơ
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Đăng xuất
                </Button>
              </>
            )
          ) : (
            <div>
              <Button color="inherit" className="button-29" onClick={() => handleClick("/login")}>
                Đăng nhập
              </Button>
              <Button color="inherit" className="button-29" onClick={() => handleClick("/signup")}>
                Đăng ký
              </Button>
            </div>
          )}
        </div>
        <div id="mobile" onClick={handleClickState}>
          <i>
            {
              clicked ? <CloseIcon /> : <MenuIcon />
            }
          </i>
        </div>
      </Toolbar>
    </AppBar >
  );
};

export default Navbar;
