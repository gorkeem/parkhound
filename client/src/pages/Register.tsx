import { Box, Button, Heading, Input, Stack, Text, Link } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

type Form_data = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  rpt_password: string;
};

export default function Register() {
  const [data, setData] = useState<Form_data>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rpt_password: "",
  });

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

    //
  }

  return (
    <Box m="50px" h="full">
      <form onSubmit={handleSubmit}>
        <Stack spacing="3" alignItems="center">
        <Heading fontSize="5xl">Park{" "}<Text color="yellow.500">hound</Text></Heading>
          <Text fontSize="lg">Create an account!</Text>

          <Input
            variant="flushed"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
            placeholder="First Name"
            size="lg"
            height="60px"
          />
          <Input
            variant="flushed"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
            placeholder="Last Name"
            size="lg"
            height="60px"
          />
          <Input
            variant="flushed"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email"
            size="lg"
            height="60px"
          />
          <Input
            variant="flushed"
            name="password"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            size="lg"
            height="60px"
          />
          <Input
            variant="flushed"
            name="rpt_password"
            onChange={handleChange}
            value={data.rpt_password}
            placeholder="Repeat Password"
            size="lg"
            height="60px"
          />

          <Button type="submit" colorScheme="yellow" size="lg">
            Sign Up
          </Button>
          <Text alignitem="center" fontSize="sm">Already have an account?{" "} <Link color="blue.500">Sign In</Link> </Text> 
        </Stack>
      </form>
    </Box>
  );
}
