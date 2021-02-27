import { Box, Button, Heading, Input, Stack,Checkbox,Link,Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
type Form_data = { email: string; password: string };

export default function Login() {
  const [data, setData] = useState<Form_data>({ email: "", password: "" });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    setData({
      ...data,
      [name]: event.target.value,
    });
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(data);
  }
  return (
    <Box m="90px" h="full">
      <form onSubmit={handleSubmit}>
        <Stack spacing="3">
          <Heading fontSize="5xl">Park{" "}<Text color="yellow.500">hound</Text></Heading>
          <Text fontSize="lg" height="20px" >Sign in to continue</Text>

          <Input
            variant="flushed"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            size="60px"
            height="90px"
          />
          <Input
            variant="flushed"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            size="60px"
            height="90px"
          />
          <Checkbox defaultIsChecked height="100px">Remember Me</Checkbox>
          <Button type="submit" colorScheme="yellow" size="40px" height="70px">
            Sign In
          </Button>

          <Text alignitem="center" fontSize="sm">Don't have an account?{" "} <Link color="blue.500">Sign Up</Link> </Text> 
        </Stack>
      </form>
    </Box>
  );
}
