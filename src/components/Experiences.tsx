import { Box, Container, Typography, Card, CardContent, Chip, Stack, useTheme, useMediaQuery } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export default function Experience() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      component="section"
      id="experience"
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
            Experiencia Profesional
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
            Mi trayectoria en desarrollo de software a través de diferentes roles y empresas.
          </Typography>
        </Box>

        <Box sx={{ mx: "auto", maxWidth: "5xl", py: 6, mt: 6 }}>
          <Stack spacing={4}>
            <Card elevation={1}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "flex-start" },
                    justifyContent: { md: "space-between" },
                    gap: 2,
                  }}
                >
                  <Box sx={{ mb: { xs: 2, md: 0 } }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 0.5 }}>
                      Desarrollador Frontend Senior
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      TechCorp Inc.
                    </Typography>
                  </Box>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Chip
                      icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                      label="2021 - Presente"
                      variant="outlined"
                      size="small"
                    />
                    <Chip
                      icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                      label="Madrid, España"
                      variant="outlined"
                      size="small"
                    />
                  </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" paragraph>
                    Lideré el equipo de desarrollo frontend en la construcción de una aplicación web moderna utilizando
                    React y Next.js. Implementé diseños responsivos, optimicé el rendimiento y garanticé el cumplimiento
                    de accesibilidad.
                  </Typography>
                  <Box component="ul" sx={{ pl: 4, color: "text.secondary" }}>
                    <Typography component="li" variant="body2">
                      Reduje el tiempo de carga de la página en un 40% mediante la división de código y la carga
                      diferida
                    </Typography>
                    <Typography component="li" variant="body2">
                      Implementé pipelines de CI/CD para pruebas y despliegue automatizados
                    </Typography>
                    <Typography component="li" variant="body2">
                      Mentoría a desarrolladores junior y realización de revisiones de código
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card elevation={1}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "flex-start" },
                    justifyContent: { md: "space-between" },
                    gap: 2,
                  }}
                >
                  <Box sx={{ mb: { xs: 2, md: 0 } }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 0.5 }}>
                      Desarrollador Full Stack
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      WebSolutions Ltd.
                    </Typography>
                  </Box>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Chip
                      icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                      label="2018 - 2021"
                      variant="outlined"
                      size="small"
                    />
                    <Chip
                      icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                      label="Barcelona, España"
                      variant="outlined"
                      size="small"
                    />
                  </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" paragraph>
                    Desarrollé y mantuve múltiples proyectos de clientes utilizando React, Node.js y MongoDB. Colaboré
                    con diseñadores y gerentes de producto para entregar aplicaciones web de alta calidad.
                  </Typography>
                  <Box component="ul" sx={{ pl: 4, color: "text.secondary" }}>
                    <Typography component="li" variant="body2">
                      Construí APIs RESTful e integré servicios de terceros
                    </Typography>
                    <Typography component="li" variant="body2">
                      Implementé sistemas de autenticación y autorización
                    </Typography>
                    <Typography component="li" variant="body2">
                      Optimicé consultas de base de datos para mejorar el rendimiento
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

