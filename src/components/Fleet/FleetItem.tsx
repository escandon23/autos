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
        display: "flex",
        flexDirection: "column",
        maxWidth: 340,
        height: 340,
        boxShadow: "none",
         margin: "0 auto",
   
      }}
    >
      <div style={{ position: "relative", width: "100%" , height : "80%"}}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            position: "absolute",
             inset: 0,
              width: "100%",
              height: "100%",
            top: 0,
            left: 0,
            objectFit: "contain",
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
