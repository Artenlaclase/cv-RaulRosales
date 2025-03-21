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
          Soy Desarrollador Full Stack con más de tres años de experiencia en el desarrollo de aplicaciones web modernas. En 2024, cursé un Bootcamp de Desarrollo Web Full Stack en la Universidad del Desarrollo, lo que me permitió fortalecer mis habilidades en tecnologías actuales. Mi pasión por la tecnología comenzó desde temprana edad, explorando herramientas como Dreamweaver, WordPress y Joomla. A lo largo de mi carrera, he perfeccionado mis habilidades en desarrollo frontend y backend.   </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
            Cuento con un Magíster en Educación y soy Profesor de Artes Visuales, titulado
            en la Universidad Metropolitana de Ciencias de la Educación (UMCE), además de tener un postítulo como Profesor
            Especialista en Educación Tecnológica. Con 20 años de experiencia en centros educativos, he diseñado e
            implementado asignaturas como Artes Visuales, Tecnología, y talleres de Audiovisual, Proyectos Tecnológicos y Programación.          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
            Mi trayectoria incluye la administración y programación de sitios web para instituciones educativas, enfocándome en la optimización de su funcionalidad y accesibilidad. Durante tres años, fui responsable del proyecto Enlaces del Ministerio de Educación en el colegio donde trabajaba, configurando y administrando laboratorios de computación e integrando tecnología educativa para mejorar la enseñanza y el aprendizaje.          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
            Mi enfoque profesional se basa en la integración de plataformas de aprendizaje virtual (LMS) y el diseño instruccional para entornos digitales. Mis competencias abarcan la capacitación docente y el liderazgo en la implementación de proyectos tecnológicos, gestionando la modernización de espacios educativos mediante TIC y metodologías innovadoras para la enseñanza y el aprendizaje.          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

