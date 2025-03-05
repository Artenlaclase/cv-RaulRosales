import { Box, Container, Typography, Card, CardContent, Chip, Stack, useTheme, useMediaQuery } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

export default function Education() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      component="section"
      id="education"
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
            Educación
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
            Mi formación académica y certificaciones.
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
                      Licenciatura en Ciencias de la Computación
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Universidad Complutense de Madrid
                    </Typography>
                  </Box>
                  <Chip
                    icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                    label="2014 - 2018"
                    variant="outlined"
                    size="small"
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    Graduado con honores. Especializado en ingeniería de software y desarrollo web. Completé una tesis
                    sobre la optimización de aplicaciones React para mejorar el rendimiento.
                  </Typography>
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
                      AWS Certified Developer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amazon Web Services
                    </Typography>
                  </Box>
                  <Chip
                    icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                    label="2020"
                    variant="outlined"
                    size="small"
                  />
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    Certificación que demuestra competencia en el desarrollo, despliegue y depuración de aplicaciones
                    basadas en la nube utilizando AWS.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

