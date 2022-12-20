import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";
import { useLoginUserMutation, useRegisterUserMutation } from "../api/apiSlice";

const Register = () => {
  const [registerNewUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleRegister = () => {
    const { email, password } = form.values;

    registerNewUser({
      email,
      password,
    })
      .unwrap()
      .then(() => {
        form.reset();
        setSuccessMessage("User created");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      })
      .catch((e) => form.setErrors({ error: e.data }));
  };

  const handleLogIn = () => {
    const { email, password } = form.values;
    loginUser({
      email,
      password,
    })
      .unwrap()
      .then(() => {
        form.reset();
        navigate("/movies");
      })
      .catch((e) => form.setErrors({ error: e.data }));
  };

  return (
    <div style={{ maxWidth: 320, margin: "auto" }}>
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        required
        {...form.getInputProps("email")}
      />

      <TextInput
        label="Password"
        placeholder="Password"
        {...form.getInputProps("password")}
        required
        type="password"
        withAsterisk
      />

      {successMessage && <p>{successMessage}</p>}
      {form.errors && <span>{form.errors?.error}</span>}

      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() => {
            handleLogIn();
          }}
        >
          Log In
        </Button>
        <Button variant="outline" onClick={handleRegister}>
          Register
        </Button>
      </Group>
    </div>
  );
};

export default Register;
