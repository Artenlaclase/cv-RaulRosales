"use client";
import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material"

export default function About() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: isMobile ? 6 : isTablet ? 12 : 16,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            maxWidth: "58rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.1,
              fontSize: {
                xs: "1.875rem", // text-3xl
                sm: "1.875rem", // text-3xl
                md: "3rem", // text-5xl
              },
            }}
          >
            Sobre Mí
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "85%",
              fontSize: { sm: "1.125rem" },
              lineHeight: { sm: 1.75 },
            }}
          >
            Conoce más sobre mi trayectoria y pasión por el desarrollo web.
          </Typography>
        </Box>

        <Box sx={{ mx: "auto", maxWidth: "48rem", py: 6 }}>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
            Soy un desarrollador Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web
            modernas. Mi pasión por la tecnología comenzó desde temprana edad, y he dedicado mi carrera profesional a
            perfeccionar mis habilidades en el desarrollo frontend y backend.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
            Me especializo en la creación de interfaces de usuario intuitivas y atractivas utilizando React y Next.js,
            así como en el desarrollo de APIs robustas con Node.js. Siempre estoy buscando aprender nuevas tecnologías y
            mejorar mis habilidades para ofrecer soluciones de alta calidad.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
            Además del desarrollo web, me apasiona compartir conocimientos a través de mi blog y participar en la
            comunidad de desarrolladores. Creo firmemente en el código limpio, las buenas prácticas y la importancia de
            la accesibilidad en la web.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
            Cuando no estoy programando, disfruto de la fotografía, el senderismo y explorar nuevos lugares. Estas
            actividades me ayudan a mantener un equilibrio y a encontrar inspiración para mis proyectos.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

