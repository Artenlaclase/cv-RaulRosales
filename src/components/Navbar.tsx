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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import DescriptionIcon from "@mui/icons-material/Description"
import { GithubIcon, LinkedInIcon, MailIcon } from "../components/ui/Icons"

type NavLink = {
  name: string
  href: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navLinks: NavLink[] = [
    { name: "Sobre mí", href: "/#about" },
    { name: "Experiencia", href: "/#experience" },
    { name: "Habilidades", href: "/#skills" },
    { name: "Educación", href: "/#education" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Blog", href: "/blog" },
  ]

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen)

  const handleDownloadClick = () => setIsDialogOpen(true)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setEmailError("")
  }

  const handleDownloadConfirm = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Ingrese un correo válido");
      return;
    }

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // Descargar el CV
      const link = document.createElement("a");
      link.href = "/cv_raul_rosales2025.pdf";
      link.download = "CV_Raul_Rosales.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error al enviar el correo", error);
      setEmailError("Error al registrar el correo. Intente de nuevo.");
    }
  };

  return (
    <>
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
          <Toolbar disableGutters sx={{ height: 56, display: "flex", justifyContent: "space-between" }}>
            {isMobile && (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle} sx={{ mr: 1 }}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}

            <Typography variant="subtitle1" component="div" sx={{ fontWeight: "bold", flexGrow: 1 }}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                Raúl Rosales
              </Link>
            </Typography>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, "&:hover": { color: "text.secondary" } }}>
                      {link.name}
                    </Typography>
                  </Link>
                ))}

                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 24 }} />

                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DescriptionIcon />}
                    onClick={handleDownloadClick}
                  >
                    Descargar CV
                  </Button>
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
                  <Link href="mailto:raulrosales.dev@gmail.com" passHref>
                    <IconButton size="small" color="inherit" aria-label="Email">
                      <MailIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleMenuToggle}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding component="a" href={link.href}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ px: 3, py: 1.5, fontWeight: 500 }}>
                      {link.name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {/* Botón Descargar CV */}
            <ListItem component="button" onClick={handleDownloadClick}>
              <DescriptionIcon sx={{ mr: 2 }} />
              <ListItemText primary="Descargar CV" />
            </ListItem>

            {/* Enlaces sociales */}
            <ListItem
              component="a"
              href="https://github.com/artenlaclase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon sx={{ mr: 2 }} />
              <ListItemText primary="GitHub" />
            </ListItem>

            <ListItem
              component="a"
              href="https://linkedin.com/in/raulrosalesrebolledo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ mr: 2 }} />
              <ListItemText primary="LinkedIn" />
            </ListItem>

            <ListItem component="a" href="mailto:raulrosales.dev@gmail.com">
              <MailIcon sx={{ mr: 2 }} />
              <ListItemText primary="Correo" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Descargar CV</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Correo electrónico"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleDownloadConfirm} color="primary">
            Descargar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}