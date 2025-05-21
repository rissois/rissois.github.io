import { Box, Typography } from "@mui/material";

function Hero({ name, description, children }) {
  if (typeof description === "string") {
    description = [description];
  }
  return (
    <Box sx={{ marginTop: 8, marginBottom: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 100 }}>
        {name}
      </Typography>
      {description.map((line) => (
        <div style={{ marginTop: "8px" }}>
          <Typography variant="p" sx={{ fontWeight: 100 }}>
            {line}
          </Typography>
        </div>
      ))}
      {children}
    </Box>
  );
}

export default Hero;
