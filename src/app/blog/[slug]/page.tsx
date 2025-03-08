"use client"
import { Box, Container, Typography, Paper, useTheme } from "@mui/material"
import { motion } from "framer-motion"

interface BlogPost {
  title: string
  date: string
  summary: string
}

interface BlogProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogProps) {
  const theme = useTheme()
  const { slug } = params

  // Simulación de datos de blog - en una aplicación real, estos datos vendrían de una API o CMS
  const post = {
    title: "Cómo optimizar el rendimiento en aplicaciones React",
    date: "15 de marzo de 2023",
    content: `
      <p>Las aplicaciones React modernas pueden volverse lentas si no se optimizan correctamente. En este artículo, exploraremos varias técnicas para mejorar el rendimiento de tus aplicaciones React.</p>
      
      <h2>1. Uso de React.memo para componentes funcionales</h2>
      <p>React.memo es una función de orden superior que memoriza el resultado del renderizado de un componente. Esto significa que React saltará el renderizado del componente y reutilizará el último resultado renderizado si las props no han cambiado.</p>
      
      <h2>2. Implementación de useCallback y useMemo</h2>
      <p>Estos hooks te permiten memorizar funciones y valores calculados, respectivamente. Son útiles para evitar cálculos innecesarios y prevenir renderizados en componentes hijos.</p>
      
      <h2>3. Code Splitting con React.lazy</h2>
      <p>Divide tu código en chunks más pequeños que se cargan solo cuando son necesarios, reduciendo el tamaño inicial del bundle y mejorando los tiempos de carga.</p>
      
      <h2>4. Virtualización de listas largas</h2>
      <p>Para listas con muchos elementos, considera usar bibliotecas como react-window o react-virtualized para renderizar solo los elementos visibles en la pantalla.</p>
      
      <h2>Conclusión</h2>
      <p>La optimización del rendimiento es crucial para proporcionar una buena experiencia de usuario. Implementando estas técnicas, puedes mejorar significativamente la velocidad y eficiencia de tus aplicaciones React.</p>
    `,
  }

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
      <Container maxWidth="md">
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
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: theme.palette.mode === "dark" ? "grey.300" : "grey.600",
              mb: 4,
            }}
          >
            {post.date}
          </Typography>
        </Box>

        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          elevation={2}
          sx={{
            p: 4,
            bgcolor: theme.palette.mode === "dark" ? "grey.700" : "common.white",
            borderRadius: 2,
          }}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
              "& h2": {
                fontSize: "1.5rem",
                fontWeight: "bold",
                mt: 4,
                mb: 2,
                color: theme.palette.mode === "dark" ? "common.white" : "grey.900",
              },
              "& p": {
                mb: 2,
                color: theme.palette.mode === "dark" ? "grey.300" : "grey.700",
                lineHeight: 1.7,
              },
            }}
          />
        </Paper>
      </Container>
    </Box>
  )
}

