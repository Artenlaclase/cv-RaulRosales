import { Box, Container, Typography, Grid, Paper, LinearProgress } from "@mui/material"

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "Material UI", level: 80 },
    { name: "Git", level: 85 },
  ]

  return (
    <Box component="section" id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Habilidades
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Tecnologías y herramientas con las que trabajo
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="subtitle1">{skill.name}</Typography>
                  <Typography variant="body2">{skill.level}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 4 }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

