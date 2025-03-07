import { Box, Container, Typography, Card, CardContent, Chip, Stack, useTheme, useMediaQuery } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

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
                xs: "1.875rem",
                sm: "1.875rem",
                md: "3rem",
              },
            }}
          >
            Experiencia Profesional
          </Typography>
        </Box>

        <Box sx={{ mx: "auto", maxWidth: "5xl", py: 6, mt: 6 }}>
          <Stack spacing={4}>
            <Card elevation={1}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                  Desarrollo Web y Tecnología Educativa
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Software Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Digital Wave (Remoto)
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Chip icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />} label="Dic. 2024 - Actualidad" variant="outlined" size="small" />
                    <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label="Santiago, Chile" variant="outlined" size="small" />
                  </Stack>
                  <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    ● Desarrollo Backend con NestJS y ORM Prisma, con contribuciones en Frontend utilizando Next.js.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Implementación de soluciones tecnológicas para el ERP TideLaw.
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Software Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Oceánica Web (Remoto)
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Chip icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />} label="Dic. 2022 - Actualidad" variant="outlined" size="small" />
                    <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label="Navidad, Chile" variant="outlined" size="small" />
                  </Stack>
                  <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                    ● Desarrollo Full Stack de aplicaciones y sitios web utilizando WordPress y Frameworks de JavaScript.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Implementación de capacitaciones en soluciones tecnológicas.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Administración y actualización de sitios web.
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Administrador de Plataformas Educativas y TIC
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Implementación y gestión de LMS Moodle en diversas instituciones educativas.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Coordinación de laboratorios de computación en colegios.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ● Capacitación docente en herramientas digitales y metodologías activas con TIC.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card elevation={1}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                  Docencia y Coordinación Educativa
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Profesor de Artes Visuales
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Liceo Municipal Pablo Neruda, DAEM Navidad
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Chip icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />} label="2024 - Actualidad" variant="outlined" size="small" />
                    <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label="Navidad, Chile" variant="outlined" size="small" />
                  </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Profesor de Artes Visuales y Tecnología
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Colegio María Griselda Valle, El Bosque
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Chip icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />} label="2020 - 2024" variant="outlined" size="small" />
                    <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label="El Bosque, Chile" variant="outlined" size="small" />
                  </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Coordinador de Enlaces (MINEDUC) y Profesor de Tecnología
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Colegio Nova Terra, La Florida
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Chip icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />} label="2014 - 2016" variant="outlined" size="small" />
                    <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label="La Florida, Chile" variant="outlined" size="small" />
                  </Stack>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                    Profesor de Educación Tecnológica y Artes Visuales
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Diferentes instituciones educativas entre 2005 y 2019.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
