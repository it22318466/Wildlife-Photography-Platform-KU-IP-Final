import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import { validateString } from "../utils/common";
import { Box, Button, Group, TextInput, Textarea } from "@mantine/core";
import { format } from "date-fns";
import { TimeInput } from "@mantine/dates";

const BasicDetails = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title || "",
      description: propertyDetails.description || "",
      startTime: propertyDetails.startTime || format(new Date(), "HH:mm"),
      endTime: propertyDetails.endTime || "",
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      endTime: (value) => {
        if (!value) return "End time is required";
        const start = new Date(`2000-01-01T${form.values.startTime}`);
        const end = new Date(`2000-01-01T${value}`);
        return end > start ? null : "End time must be after start time";
      },
    },
  });

  const { title, description, startTime, endTime } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        title: form.values.title,
        description: form.values.description,
        startTime: form.values.startTime,
        endTime: form.values.endTime,
      }));
      nextStep();
    }
  };

  // Update start time to current time when component mounts
  useEffect(() => {
    const currentTime = format(new Date(), "HH:mm");
    form.setFieldValue("startTime", currentTime);
  }, [form]);

  return (
    <Box maw={"50%"} mx={"auto"} my={"md"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Description"
          placeholder="Description"
          {...form.getInputProps("description")}
        />
        <TimeInput
          withAsterisk
          label="Start Time"
          description="Automatically set to current time"
          value={form.values.startTime}
          onChange={(e) => {
            const time = e.target.value;
            form.setFieldValue("startTime", time);
          }}
          mb="md"
          disabled
        />
        <TimeInput
          withAsterisk
          label="End Time"
          placeholder="Select end time"
          value={form.values.endTime}
          onChange={(e) => {
            const time = e.target.value;
            form.setFieldValue("endTime", time);
          }}
          error={form.errors.endTime}
        />
        <Group position="center" mt={"xl"}>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
