import { Box, Heading, Input, Button } from "@chakra-ui/react";
import React from "react";

function Login() {
  return (
    <Box background=' white'
      boxShadow=' rgb(0 0 0 / 12%) 0px 2px 5px 0px'
      boxSizing=' border-box'
      borderRadius=' 0.5rem'
      padding=' 5rem 1rem'
      width=' 50%'
      maxWidth=' 360px'
      margin=' auto' >
      <Heading>Login</Heading>
      <Box margin='2.5rem 1.5rem'>
        <Input background=' none'
          border=' 1px solid rgb(234, 234, 234)'
          borderRadius=' 0.25rem'
          boxSizing=' border-box'
          display=' block'
          fontSize=' 1rem'
          padding=' 0.5rem'
          color=' rgb(52, 73, 94)'
          width=' 100%' placeholder='Enter your UserName'
          outline='none'

          _focus={{
            outline: 'none !important',
            boxShadow: 'none',
            borderColor: 'rgba(255, 102, 0, 0.5)'
          }}

        />
      </Box>
      <Box margin='2.5rem 1.5rem'>
        <Input background=' none'
          border=' 1px solid rgb(234, 234, 234)'
          borderRadius=' 0.25rem'
          boxSizing=' border-box'
          display=' block'
          fontSize=' 1rem'
          padding=' 0.5rem'
          color=' rgb(52, 73, 94)'
          width=' 100%' placeholder='Enter your Email'
          outline='none'

          _focus={{
            outline: 'none !important',
            boxShadow: 'none',
            borderColor: 'rgba(255, 102, 0, 0.5)'
          }}

        />
      </Box>

      <Button backgroundColor=' rgb(255, 102, 0)'
        border=' 1px solid rgb(255, 102, 0)'
        borderRadius=' 0.25rem'
        color=' white'
        cursor=' pointer'
        fontSize=' 0.8rem'
        padding=' 0.75rem 0px'
        transition=' all 200ms ease 0s'
        textAlign=' center'
        textTransform=' uppercase'
        width=' 100%'

        _hover={{
          background: 'rgb(255 255 255 / 16%)',
          color: 'orange'

        }}

      > ENTER</Button>
    </Box >
  );

}

export default Login;
