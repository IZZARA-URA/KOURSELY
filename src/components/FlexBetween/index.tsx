import { Box } from "@mui/material"
import { styled } from "@mui/material"

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}) as typeof Box

export default FlexBetween
