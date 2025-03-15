import { Box, Container, Typography, Grid, Paper, LinearProgress } from "@mui/material"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMaterialdesign,
  SiGit,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDjango,
  SiNestjs,
  SiWordpress,
  SiTailwindcss,
  SiMoodle
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "NestJS", level: 90, icon: <SiNestjs size={24} color="#E0234E" /> },
    { name: "React", level: 90, icon: <SiReact size={24} color="#61DAFB" /> },
    { name: "Next.js", level: 85, icon: <SiNextdotjs size={24} color="#000000" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript size={24} color="#F7DF1E" /> },
    { name: "TypeScript", level: 80, icon: <SiTypescript size={24} color="#3178C6" /> },
    { name: "Node.js", level: 90, icon: <SiNodedotjs size={24} color="#339933" /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss size={24} color="#38BDF8" /> },
    { 
      name: "HTML/CSS", 
      level: 95, 
      icon: (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <SiHtml5 size={24} color="#E34F26" />
          <SiCss3 size={24} color="#1572B6" />
        </Box>
      )
    },
    { name: "Material UI", level: 80, icon: <SiMaterialdesign size={24} color="#0081CB" /> },
    { name: "WordPress", level: 95, icon: <SiWordpress size={24} color="#21759B" /> },
    { name: "Git", level: 85, icon: <SiGit size={24} color="#F05032" /> },
    { name: "Django", level: 80, icon: <SiDjango size={24} color="#092E20" /> },
    { name: "Python", level: 65, icon: <SiPython size={24} color="#3776AB" /> },
    { name: "PHP", level: 80, icon: <SiPhp size={24} color="#777BB4" /> },
    { name: "Laravel Artisan", level: 75, icon: <SiLaravel size={24} color="#FF2D20" /> },
    { name: "Moodle", level: 90, icon: <SiMoodle size={24} color="#E31B23" /> },
    
    
   
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
                <Box sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  mb: 1,
                  alignItems: "center"
                }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {skill.icon}
                    <Typography variant="subtitle1">{skill.name}</Typography>
                  </Box>
                  <Typography variant="body2">{skill.level}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={skill.level} sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "primary.main"
                  }
                }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
