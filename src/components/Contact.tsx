"use client";

import { useState } from "react";
import { 
  Box, Container, Typography, TextField, Button, Paper, Snackbar, Alert 
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      setOpen(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
    setError(false);
  };

  return (
    <Box component="section" id="contact" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  endIcon={<SendIcon />} 
                  fullWidth
                >
                  Enviar Mensaje
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        {/* Mensaje de éxito */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            ¡Mensaje enviado con éxito!
          </Alert>
        </Snackbar>

        {/* Mensaje de error */}
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Hubo un problema al enviar el mensaje. Inténtalo de nuevo.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
