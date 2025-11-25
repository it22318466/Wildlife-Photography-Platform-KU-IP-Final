import {
  Box,
  Title,
  Text,
  Image,
  SimpleGrid,
  Group,
  Badge,
  Alert,
  List,
  Anchor,
  Divider,
  Paper,
  Space,
} from "@mantine/core";
import {
  MapPin,
  Calendar as CalendarIcon,
  AlertTriangle,
  Camera,
  ArrowUpRight,
} from "tabler-icons-react";

const defaultPark = {
  id: "unknown",
  name: "Unknown Park",
  location: "Location not specified",
  habitat: "Habitat not specified",
  description: "No description available",
  bestSeason: "Not specified",
  keyWildlife: [],
  endemicSpecies: [],
  safetyNotes: "",
  imageUrl: "https://via.placeholder.com/800x500?text=Park+Image+Not+Available",
  detailImageUrl:
    "https://via.placeholder.com/800x500?text=Park+Image+Not+Available",
  hazards: [],
  permits: { managedBy: "", rules: [] },
  sources: [],
  photographyTips: [],
};

const ParkDetails = ({ park: parkProp }) => {
  const park = { ...defaultPark, ...parkProp };

  return (
    <Box
      id={`park-${park.id}`}
      mb="xl"
      pb="xl"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <Title order={2} mb="md" style={{ color: "#2b6cb0" }}>
        {park.name}
      </Title>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
        <div>
          <Group spacing="xs" mb="md">
            <MapPin size={20} />
            <Text weight={600}>{park.location}</Text>
            <Badge color="teal" variant="light">
              {park.habitat}
            </Badge>
          </Group>

          <Text mb="md">{park.detailedDescription || park.description}</Text>

          <Group spacing="md" mb="md">
            <Group spacing={4}>
              <CalendarIcon size={18} />
              <Text weight={600}>Best Time: </Text>
              <Text>{park.bestSeason}</Text>
            </Group>
          </Group>

          <Title order={4} mb="sm">
            Key Wildlife
          </Title>
          <SimpleGrid cols={2} spacing="xs" mb="md">
            {park.keyWildlife.map((animal, index) => (
              <Text key={index} size="sm">
                • {animal.name}
              </Text>
            ))}
          </SimpleGrid>

          {park.endemicSpecies.length > 0 && (
            <>
              <Title order={4} mb="sm">
                Endemic Species
              </Title>
              <SimpleGrid cols={2} spacing="xs" mb="md">
                {park.endemicSpecies.map((species, index) => (
                  <Text key={index} size="sm" color="green">
                    • {species.name}
                  </Text>
                ))}
              </SimpleGrid>
            </>
          )}

          {park.safetyNotes && (
            <Alert
              icon={<AlertTriangle size={16} />}
              title="Safety Notes"
              color="yellow"
              variant="outline"
              mb="md"
            >
              {park.safetyNotes}
            </Alert>
          )}

          {park.hazards.length > 0 && (
            <Alert
              icon={<AlertTriangle size={16} />}
              title="Hazards & Warnings"
              color="red"
              variant="outline"
              mb="md"
            >
              <List size="sm" spacing={4}>
                {park.hazards.map((hazard, index) => (
                  <List.Item key={index}>
                    <Text weight={600}>{hazard.type}:</Text>{" "}
                    {hazard.description}
                  </List.Item>
                ))}
              </List>
            </Alert>
          )}

          {park.permits && (
            <Paper p="md" withBorder mb="md">
              <Title order={4} mb="sm">
                Permits & Regulations
              </Title>
              <Text size="sm" mb="sm" weight={500}>
                Managed by: {park.permits.managedBy}
              </Text>
              <List size="sm" spacing={4}>
                {park.permits.rules.map((rule, index) => (
                  <List.Item key={index}>{rule}</List.Item>
                ))}
              </List>
            </Paper>
          )}

          {park.sources.length > 0 && (
            <Box>
              <Text size="sm" mb="sm" color="dimmed">
                Sources:
              </Text>
              <List size="sm" spacing={4}>
                {park.sources.map((source, index) => (
                  <List.Item key={index}>
                    <Anchor
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.name}{" "}
                      <ArrowUpRight
                        size={12}
                        style={{ verticalAlign: "middle" }}
                      />
                    </Anchor>
                  </List.Item>
                ))}
              </List>
            </Box>
          )}
        </div>

        <Box>
          <Image
            src={park.detailImageUrl || park.imageUrl}
            alt={park.name}
            height={400} // Match the height from Information.jsx
            style={{
              width: "100%",
              objectFit: "fill",
              aspectRatio: "13/9",
            }}
            mb="md"
          />
          {park.photographyTips && park.photographyTips.length > 0 && (
            <Paper p="md" withBorder>
              <Title order={4} mb="sm">
                <Camera
                  size={20}
                  style={{ marginRight: 8, verticalAlign: "middle" }}
                />
                Photography Tips
              </Title>
              <List size="sm" spacing={4}>
                {park.photographyTips.map((tip, index) => (
                  <List.Item key={index}>{tip}</List.Item>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      </SimpleGrid>
      <Divider my="xl" />
    </Box>
  );
};

export default ParkDetails;
