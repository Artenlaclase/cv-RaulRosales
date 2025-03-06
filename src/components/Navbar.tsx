"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import DescriptionIcon from "@mui/icons-material/Description"
import { GithubIcon, LinkedInIcon, MailIcon } from "../components/ui/Icons"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navLinks = [
    { name: "Sobre mí", href: "/#about" },
    { name: "Experiencia", href: "/#experience" },
    { name: "Habilidades", href: "/#skills" },
    { name: "Educación", href: "/#education" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Blog", href: "/blog" },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.default",
        backdropFilter: "blur(10px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 56 }}>
          {/* Botón de menú móvil */}
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle} sx={{ mr: 1 }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}

          {/* Logo/Nombre - visible en desktop, centrado en móvil */}
          <Box
            sx={{
              display: "flex",
              flexGrow: isMobile ? 1 : 0,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="subtitle1" component="div" sx={{ fontWeight: "bold" }}>
                Raúl Rosales
              </Typography>
            </Link>
          </Box>

          {/* Enlaces de navegación - solo desktop */}
          {!isMobile && (
            <Box sx={{ ml: 4, display: "flex" }}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mx: 2,
                      fontWeight: 500,
                      "&:hover": { color: "text.secondary" },
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}

          {/* Botones de acción - derecha */}
          <Box sx={{ flexGrow: isMobile ? 0 : 1, display: "flex", justifyContent: "flex-end" }}>
            {!isMobile && (
              <Button variant="outlined" size="small" startIcon={<DescriptionIcon />} sx={{ mr: 2 }}>
                Descargar CV
              </Button>
            )}

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href="https://github.com/artenlaclase" passHref target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" color="inherit" aria-label="GitHub">
                    <GithubIcon />
                  </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/raulrosalesrebolledo/" passHref target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" color="inherit" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                </Link>
                <Link href="mailto:tuemail@example.com" passHref>
                  <IconButton size="small" color="inherit" aria-label="Email">
                    <MailIcon />
                  </IconButton>
                </Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Menú móvil */}
      <Drawer
        anchor="top"
        open={isMenuOpen && isMobile}
        onClose={handleMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            top: "56px",
            width: "100%",
            bgcolor: "background.paper",
          },
        }}
      >
        <List sx={{ py: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <Link
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
                onClick={handleNavLinkClick}
              >
                <ListItemText
                  primary={link.name}
                  sx={{
                    px: 3,
                    py: 1.5,
                    "&:hover": { color: "text.secondary" },
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="https://github.com/artenlaclase" passHref target="_blank" rel="noopener noreferrer">
              <IconButton size="small" color="inherit" aria-label="GitHub">
                <GithubIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/raulrosalesrebolledo/" passHref target="_blank" rel="noopener noreferrer">
              <IconButton size="small" color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Link href="mailto:tuemail@example.com" passHref>
              <IconButton size="small" color="inherit" aria-label="Email">
                <MailIcon />
              </IconButton>
            </Link>
          </Box>

          <Button variant="outlined" startIcon={<DescriptionIcon />} fullWidth>
            Descargar CV
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}

