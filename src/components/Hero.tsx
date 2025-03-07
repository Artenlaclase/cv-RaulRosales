"use client";
import { Box, Container, Typography, Button, Stack, Grid, useTheme, useMediaQuery } from "@mui/material"
import { LinkedInIcon, GithubIcon, MailIcon } from "../components/ui/Icons"
import Image from "next/image"

export default function Hero() {
  const theme = useTheme()
  

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(to right, #1a1a2e, #16213e)"
            : "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Contenido de texto */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Stack spacing={3}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Raúl Rosales
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                color="text.secondary"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                Desarrollador Full Stack
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 2,
                }}
              >
                Especializado en crear aplicaciones web modernas con React, Next.js y Nestjs, Node.js. Enfocado en soluciones
                elegantes y eficientes para problemas complejos.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" size="large" href="#contact">
                  Contáctame
                </Button>
                <Button variant="outlined" color="primary" size="large" href="#projects">
                  Ver Proyectos
                </Button>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/raulrosalesrebolledo/"
                  target="_blank"
                  aria-label="LinkedIn"
                  variant="text"
                  color="inherit"
                  startIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
                <Button
                  component="a"
                  href="https://github.com/artenlaclase"
                  target="_blank"
                  aria-label="GitHub"
                  variant="text"
                  color="inherit"
                  startIcon={<GithubIcon />}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href="mailto:raul@example.com"
                  aria-label="Email"
                  variant="text"
                  color="inherit"
                  startIcon={<MailIcon />}
                >
                  Email
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Imagen */}
          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 1, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 220, sm: 280, md: 320 },
                height: { xs: 220, sm: 280, md: 320 },
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                border: "4px solid",
                borderColor: "background.paper",
              }}
            >
              <Image
                src="/assets/img/placeholder.jpg?height=400&width=400"
                alt="Raúl Rosales"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

