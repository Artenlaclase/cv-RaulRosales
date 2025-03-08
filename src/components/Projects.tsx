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
        title: "Proyecto Oceánica Web",
        description:
          "Desarrollo del sitio web para Oceánica, una organización dedicada al diseño y desarrollo de aplicaciones y sitios web. El proyecto incluye una interfaz moderna y fluida, implementada con Next.js y Tailwind CSS, y cuenta con animaciones suaves gracias a Framer Motion. Este sitio refleja el enfoque innovador de la organización en el desarrollo de soluciones tecnológicas y su capacidad de adaptación a las necesidades del cliente.",
        image: "/assets/img/Oceanicaweb.png?height=200&width=400",
        tags: ["Nextjs", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/artenlaclase",
        demo: "https://oceanicaweb.cl/",
      },
      {
        title: "Proyecto ONG Centro Ecuménico Diego de Medellín",
      description:
        "Reestructuración y actualización del sitio web para la ONG Centro Ecuménico Diego de Medellín, con el objetivo de mejorar la accesibilidad y optimizar la experiencia del usuario. El proyecto incluye secciones dedicadas a los proyectos sociales de la ONG, noticias actualizadas, y una página de contacto, todo ello implementado sobre WordPress con una nueva plantilla y diseño adaptado a las necesidades de la organización.",
      image: "/assets/img/cdemchile.png?height=200&width=400",
      tags: ["HTML", "JavaScript", "CSS", "WordPress"],
      github: "https://github.com/artenlaclase",
      demo: "https://cedmchile.org/",
      },
      {
        title: "E-commerce Platform",
      description:
        "Desarrollo de una plataforma de comercio electrónico Fullstack, diseñada para gestionar productos, procesar pagos y ofrecer una experiencia de usuario fluida. El proyecto incluye un catálogo de productos, carrito de compras, y un sistema de autenticación y autorización de usuarios mediante JWT. Esta aplicación fue implementada utilizando tecnologías como React, Node.js y MongoDB, con una interfaz moderna desarrollada con Material UI.",
      image: "/assets/img/e-commerce.png?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB", "Material UI"],
      github: "https://github.com/Artenlaclase/Proyecto-7-Aplicaci-nFullStackCE",
      demo: "https://tiendatiktak.netlify.app/",
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
  
  