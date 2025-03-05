"use client"

import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Paper, Snackbar, Alert } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"

import SendIcon from "@mui/icons-material/Send"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setOpen(true)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <Box component="section" id="contact" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Mensaje"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <Button type="submit" variant="contained" color="primary" size="large" endIcon={<SendIcon />} fullWidth>
                  Enviar Mensaje
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Paper>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            ¡Mensaje enviado con éxito!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}

