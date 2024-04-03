import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut as Logout } from "react-icons/fi";
import smallLogo from "../../assets/images/brand.png";
import bigLogo from "../../assets/images/logo_brand.png";
import { LabelText, Small } from "../../assets/styles/typography";

import { LayoutProps } from "./types";
import {
  BlueHeader,
  Box,
  ChildrenContainer,
  Container,
  FirstChildren,
  Footer,
  IconBox,
  LastChildren,
  LogoBox,
  LogoutBtn,
  Menu,
  UserName,
  UserPhoto,
} from "./styles";
import { routesSideBar } from "./routes/routes";
import { IRoute } from "./routes/types";

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Container>
        <motion.div
          className="sidebar"
          animate={{
            width: isOpen ? "300px" : "81px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 13,
            },
          }}
        >
          <FirstChildren>
            <LogoBox $isOpen={isOpen}>
              <img
                src={isOpen ? bigLogo : smallLogo}
                alt="Logo"
                onClick={toggleSidebar}
              />
            </LogoBox>

            <Menu>
              {routesSideBar.map((route: IRoute) => {
                {
                  return (
                    <NavLink
                      key={route.path}
                      className={({ isActive }) =>
                        isActive ? "link active" : "link"
                      }
                      to={route.path ? route.path : ""}
                    >
                      <Box $isOpen={isOpen}>
                        <IconBox>{route.icon}</IconBox>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              className="link-text"
                              variants={showAnimation}
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                            >
                              {route.breadcrumb}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                    </NavLink>
                  );
                }
              })}
            </Menu>
          </FirstChildren>

          <LastChildren>
            <Footer $isOpen={isOpen}>
              <UserPhoto>{"U"}</UserPhoto>
              <UserName>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="text-name"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <LabelText>Usuário</LabelText>
                      <Small>ADMIN</Small>
                    </motion.div>
                  )}
                </AnimatePresence>
              </UserName>
            </Footer>

            <LogoutBtn
              onClick={() => {
                navigate("/");
              }}
            >
              <AnimatePresence>
                <Box $isOpen={isOpen}>
                  <IconBox>
                    <Logout />
                  </IconBox>
                  {isOpen && (
                    <motion.div
                      className="link-text"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {"Sair"}
                    </motion.div>
                  )}
                </Box>
              </AnimatePresence>
            </LogoutBtn>
          </LastChildren>
        </motion.div>

        <motion.div
          className="content"
          animate={{
            width: isOpen ? "93%" : "100%",
          }}
        >
          <BlueHeader />

          <ChildrenContainer>{children}</ChildrenContainer>
        </motion.div>
      </Container>
    </>
  );
}
