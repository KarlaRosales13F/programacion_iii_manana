import React from "react";
import {
  Alert,
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function round2(n: number) {
  return Number(n.toFixed(2));
}

export default function ParkingCalculator() {
  const [hours, setHours] = React.useState<string>("1");
  const [rate, setRate] = React.useState<string>("1");
  const [discountPct, setDiscountPct] = React.useState<string>("0");

  const h = Number(hours);
  const r = Number(rate);
  const d = Number(discountPct);

  const errors: string[] = [];
  if (!Number.isFinite(h) || h < 1) errors.push("Horas debe ser >= 1");
  if (!Number.isFinite(r) || r <= 0) errors.push("Tarifa por hora debe ser > 0");
  if (!Number.isFinite(d) || d < 0 || d > 50) errors.push("Descuento debe estar entre 0 y 50");

  const isValid = errors.length === 0;

  const subtotal = isValid ? h * r : 0;


  const baseDiscount = isValid ? subtotal * (d / 100) : 0;

  const extraDiscount = isValid && h >= 5 ? subtotal * 0.10 : 0;

  const totalDiscount = baseDiscount + extraDiscount;
  const totalFinal = subtotal - totalDiscount;

  const subtotal2 = round2(subtotal);
  const totalDiscount2 = round2(totalDiscount);
  const totalFinal2 = round2(totalFinal);

  return (
    <Box>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 1 }}>
        Calculadora de Estacionamiento
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Ingresa horas, tarifa por hora y descuento (%). Si horas ≥ 5, aplica 10% extra.
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Horas"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          inputProps={{ min: 1, step: 1 }}
          helperText="Debe ser >= 1"
          fullWidth
        />

        <TextField
          label="Tarifa por hora"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          inputProps={{ min: 0.01, step: 0.01 }}
          helperText="Debe ser > 0"
          fullWidth
        />

        <TextField
          label="Descuento (%)"
          type="number"
          value={discountPct}
          onChange={(e) => setDiscountPct(e.target.value)}
          inputProps={{ min: 0, max: 50, step: 1 }}
          helperText="Debe estar entre 0 y 50"
          fullWidth
        />

        {!isValid && (
          <Alert severity="error">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {errors.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          </Alert>
        )}

        <Divider />

        <Stack spacing={1}>
          <Typography>
            <b>Subtotal:</b> ${subtotal2.toFixed(2)}
          </Typography>
          <Typography>
            <b>Descuento total:</b> ${totalDiscount2.toFixed(2)}
            {isValid && h >= 5 ? (
              <span style={{ color: "rgba(0,0,0,.6)" }}>
                {" "}
                (incluye 10% adicional)
              </span>
            ) : null}
          </Typography>
          <Typography variant="h6" fontWeight={900}>
            Total final: ${totalFinal2.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
