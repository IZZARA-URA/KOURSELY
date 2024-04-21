import {
    Button,
} from "@mui/material"

import React from 'react'


interface Props {
    isNonMobileScreens: boolean;

}


const ButtonContact = ({ isNonMobileScreens }: Props) => {
    return (
        <div>
            {
            isNonMobileScreens? (
                <div>
                    red
                </div>
            ) : (
                <Button 
                    sx={{ 
                        color: "black",
                        // backgroundColor: "#141414", 
                        // fontWeight: "bold", 
                        margin: "0.5rem",
                        // padding: "0.5rem",
                        textDecoration: "none",
                        border: "1px solid",
                        borderRadius: 2,
                        borderColor: "#7c7c7c",
                        textTransform: "none",
                    }}>
                    Contact
                </Button>
            )
        }
        </div>
        
  )
}

export default ButtonContact
