import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Chip,
    Stack,
  } from "@mui/material"
  import GitHubIcon from "@mui/icons-material/GitHub"
  import LaunchIcon from "@mui/icons-material/Launch"
  
  export default function Projects() {
    const projects = [
      {
        title: "E-commerce Platform",
        description:
          "Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/username/ecommerce",
        demo: "https://ecommerce-demo.com",
      },
      {
        title: "Task Management App",
        description:
          "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas y colaboración en tiempo real.",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["Next.js", "TypeScript", "Firebase", "Material UI"],
        github: "https://github.com/username/taskapp",
        demo: "https://taskapp-demo.com",
      },
      {
        title: "Portfolio Website",
        description: "Sitio web de portafolio personal con secciones para proyectos, habilidades y contacto.",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["React", "Material UI", "Framer Motion"],
        github: "https://github.com/username/portfolio",
        demo: "https://portfolio-demo.com",
      },
    ]
  
    return (
      <Box component="section" id="projects" sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            Proyectos
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Algunos de mis trabajos recientes
          </Typography>
  
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ mb: 1 }} />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<GitHubIcon />} href={project.github} target="_blank">
                      Código
                    </Button>
                    <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    )
  }
  
  