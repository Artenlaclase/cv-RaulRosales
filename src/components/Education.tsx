import { Box, Container, Typography, Card, CardContent, Chip, Stack, Avatar, useTheme, useMediaQuery } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const educationData = [
    {
      title: "Bootcamp en Desarrollo Web Full Stack (280 horas)",
      institution: "Universidad del Desarrollo",
      year: "2024",
      logo: "/assets/img/udd.png",
    },
    {
      title: "Curso Python y la Web (75 horas)",
      institution: "Pontificia Universidad Católica de Chile",
      year: "2024",
      logo: "/assets/img/uc.png",
    },
    {
      title: "Programa Formativo Docentes Para el Siglo XXI",
      institution: "Kodea",
      year: "2024",
      logo: "/assets/img/kodea.png",
    },
    {
      title: "Curso Metodología con uso de TICs",
      institution: "Universidad de la Frontera",
      year: "2022",
      logo: "/assets/img/ufro.png",
    },
    {
      title: "Curso Introducción al Diseño Web",
      institution: "Desafío Latam",
      year: "2022",
      logo: "/assets/img/desafio_latam.png",
    },
    {
      title: "Magíster en Innovación Curricular y Evaluación Educativa",
      institution: "Universidad del Desarrollo",
      year: "2013",
      logo: "/assets/img/udd.png",
    },
    {
      title: "Licenciatura en Educación y Pedagogía en Artes Plásticas",
      institution: "Universidad Metropolitana de Ciencias de la Educación (UMCE)",
      year: "2005",
      logo: "/assets/img/umce.png",
    },
    {
      title: "Postítulo: Profesor Especialista en Educación Tecnológica",
      institution: "Universidad Viña del Mar (UVM)",
      year: "2009",
      logo: "/assets/img/uvm.png",
    },
    {
      title: "Curso Neuroeducación",
      institution: "ACHNAP",
      year: "2019",
      logo: "/assets/img/achnap.png",
    },
  ];

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
                xs: "1.875rem",
                sm: "1.875rem",
                md: "3rem",
              },
            }}
          >
            Formación Académica
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
            {educationData.map((item, index) => (
              <Card key={index} elevation={1}>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar src={item.logo} alt={item.institution} sx={{ width: 40, height: 40 }} />
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.institution}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip
                      icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                      label={item.year}
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
