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
          "Este proyecto consiste en el desarrollo de una aplicación Fullstack para un negocio de comercio electrónico, que incluye un catálogo de productos, un carrito de compras, y una pasarela de pago segura. También se implementan funciones de autenticación y autorización de usuarios mediante JSON Web Tokens (JWT).",
        image: "/assets/img/e-commerce.png?height=200&width=400",
        tags: ["React", "Node.js", "MongoDB", "Material UI"],
        github: "https://github.com/Artenlaclase/Proyecto-7-Aplicaci-nFullStackCE",
        demo: "https://tiendatiktak.netlify.app/",
      },
      {
        title: "Proyecto ONG Centro Ecuménico Diego de Medellín",
        description:
          "Sitio web para la ong chilena Centro Ecuménico Diego de Medellín, con secciones para proyectos, noticias y contacto.",
        image: "/assets/img/cdemchile.png?height=200&width=400",
        tags: ["HTML", "JavaScript", "CSS", "Wordpress"],
        github: "https://github.com/artenlaclase",
        demo: "https://cedmchile.org/",
      },
      {
        title: "Proyecto Oceánica Web",
        description: "Sitio web de organización que desarrolla aplicaciones y sitios web.",
        image: "/assets/img/Oceanicaweb.png?height=200&width=400",
        tags: ["Nextjs", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/artenlaclase",
        demo: "https://oceanicaweb.cl/",
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
  
  