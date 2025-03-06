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
          Soy desarrollador Full Stack con más de 3 años de experiencia en el desarrollo de aplicaciones web modernas, iniciando con WordPress y Joomla. Mi pasión por la tecnología comenzó desde temprana edad, y he dedicado mi carrera profesional a perfeccionar mis habilidades en el desarrollo frontend y backend.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
          Además, soy Magíster en Educación y Profesor de Artes Visuales, titulado en la Universidad Metropolitana de Ciencias de la Educación (UMCE), con un postítulo como Profesor Especialista en Educación Tecnológica. Cuento con 20 años de experiencia en centros educativos, donde he diseñado e implementado asignaturas como Artes Visuales, Tecnología, y talleres de Audiovisual, Proyectos Tecnológicos y Programación.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: "1.125rem" }}>
          Tengo experiencia como administrador y programador de sitios web para instituciones educativas, optimizando su funcionalidad y accesibilidad. Durante tres años, fui responsable del proyecto Enlaces del Ministerio de Educación en el colegio donde realizaba clases, configurando y administrando laboratorios de computación e integrando tecnología educativa para mejorar la enseñanza y el aprendizaje.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
          Soy un profesional con amplia experiencia en educación y tecnología educativa, especializado en la integración de plataformas de aprendizaje virtual (LMS) y en el diseño instruccional para entornos digitales. Mis habilidades incluyen la capacitación docente y el liderazgo en la implementación de proyectos tecnológicos, gestionando la modernización de espacios educativos mediante TIC y metodologías innovadoras para la enseñanza y el aprendizaje.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

