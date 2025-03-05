import { Box, Container, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material"
import { GithubIcon, LinkedInIcon, MailIcon } from "../components/ui/Icons"

export default function Footer() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        py: isMobile ? 3 : 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            height: isMobile ? "auto" : "96px", // equivalente a md:h-24
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align={isMobile ? "center" : "left"}
            sx={{ lineHeight: 1.7 }}
          >
            © {new Date().getFullYear()} Raúl Rosales. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton size="small" color="inherit" aria-label="GitHub">
              <GithubIcon />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton size="small" color="inherit" aria-label="Email">
              <MailIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

