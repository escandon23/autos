import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"

interface FleetItemType {
  name: string
  image: string
  luggage: string
  passengers: string
}

const FleetItem: React.FC<FleetItemType> = ({ name, image, luggage, passengers }) => {
  return (
    <Card
      sx={{
        minWidth: 320,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%", // makes the card stretch inside carousel
      }}
    >
      {/* Aspect ratio wrapper */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography fontWeight="bold">{name}</Typography>
        <Stack direction="row" spacing={3} mt={1}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <PersonOutlineIcon fontSize="small" />
            <Typography variant="body2">{passengers}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <WorkOutlineIcon fontSize="small" />
            <Typography variant="body2">{luggage}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default FleetItem
