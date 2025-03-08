"use client"
import { Box, Container, Typography, Grid, Paper, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"

interface BlogPost {
  title: string
  date: string
  summary: string
  slug: string
}

export default function BlogPage() {
  const theme = useTheme()

  // Simulación de datos de blog - en una aplicación real, estos datos vendrían de una API o CMS
  const posts: BlogPost[] = [
    {
      title: "Cómo optimizar el rendimiento en aplicaciones React",
      date: "15 de marzo de 2023",
      summary:
        "Aprende técnicas efectivas para mejorar el rendimiento de tus aplicaciones React y proporcionar una mejor experiencia de usuario.",
      slug: "optimizar-rendimiento-react",
    },
  ]

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 8,
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.100",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "common.white" : "grey.900",
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: theme.palette.mode === "dark" ? "grey.300" : "grey.600",
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Artículos sobre desarrollo web, React, Next.js y otras tecnologías modernas.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={post.slug}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    bgcolor: theme.palette.mode === "dark" ? "grey.700" : "common.white",
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)",
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.mode === "dark" ? "common.white" : "grey.900",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.mode === "dark" ? "grey.300" : "grey.500",
                      mb: 1,
                    }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.mode === "dark" ? "grey.300" : "grey.600",
                      flexGrow: 1,
                    }}
                  >
                    {post.summary}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

