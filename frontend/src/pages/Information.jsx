import {
  CloudStorm,
  Paw,
  Checklist,
  ClipboardList,
  Shield,
  X,
} from "tabler-icons-react";
import {
  Container,
  Title,
  Text,
  Image,
  SimpleGrid,
  Card,
  TextInput,
  Group,
  Tabs,
  Box,
  List,
  Paper,
  Space,
  Anchor,
  Divider,
  Alert,
  Table,
  Badge,
  ThemeIcon,
  ActionIcon,
} from "@mantine/core";
import {
  Search,
  Tree,
  InfoCircle,
  Photo,
  Camera,
  AlertTriangle,
  ShieldLock,
  Book2,
  ArrowUpRight,
  MapPin,
  Calendar as CalendarIcon,
  AlertCircle,
  FirstAidKit,
  Phone,
  Mail,
  Globe,
  Clock,
  GripVertical,
  Leaf,
  Mountain,
  Droplet,
  Sun,
  CloudRain,
  Wind,
  Flame,
  MedicalCross,
  PhoneCall,
  Map2,
  MapPin as MapPinIcon,
  CalendarEvent,
  Clock as ClockIcon,
  AlertOctagon,
  AlertCircle as AlertCircleIcon,
  InfoCircle as InfoCircleIcon,
  Shield as ShieldIcon,
  Camera as CameraIcon,
  Sun as SunIcon,
  Droplet as DropletIcon,
  Wind as WindIcon,
  Flame as FlameIcon,
  MedicalCross as MedicalCrossIcon,
  PhoneCall as PhoneCallIcon,
  MapPin as MapPinIcon2,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  AlertOctagon as AlertOctagonIcon,
} from "tabler-icons-react";
import React, { useState, useEffect } from "react";
import { parkData } from "../data/parkData";
import ParkDetails from "../components/ParkDetails";
import DataLegalSourcesSection from "../components/DataLegalSourcesSection";
import TrustedSourcesSection from "../components/TrustedSourcesSection";
import { FaLink, FaPhone } from "react-icons/fa6";

const Information = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filteredParks, setFilteredParks] = useState(parkData);

  useEffect(() => {
    let results = [...parkData];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (park) =>
          park.name.toLowerCase().includes(query) ||
          park.location.toLowerCase().includes(query) ||
          park.habitat.toLowerCase().includes(query) ||
          park.keyWildlife.some((animal) =>
            animal.name.toLowerCase().includes(query)
          ) ||
          park.endemicSpecies.some((species) =>
            species.name.toLowerCase().includes(query)
          )
      );
    }

    if (activeTab === "popular") {
      const popularityOrder = { yala: 1, wilpattu: 2, "horton-plains": 3 };
      results.sort(
        (a, b) => (popularityOrder[a.id] || 99) - (popularityOrder[b.id] || 99)
      );
    } else if (activeTab === "endemic") {
      results.sort((a, b) => b.endemicSpecies.length - a.endemicSpecies.length);
    }

    setFilteredParks(results);
  }, [searchQuery, activeTab]);

  return (
    <Container size="xl" px={0} py="xl">
      <Box mb="xl">
        <Title
          order={1}
          align="center"
          className="flex items-center justify-center text-4xl font-bold text-gray-800"
          style={{ paddingTop: "80px", paddingLeft: "50px" }}
        >
          WILDLIFE PHOTOGRAPHY IN SRI LANKA
        </Title>
        <Text
          size="13px"
          color="dimmed"
          align="center"
          style={{ paddingTop: "1px" }}
        >
          Explore the rich biodiversity of one of the world's most important
          biodiversity hotspots !
        </Text>
      </Box>

      <Paper p="xl" mb="xl" radius="md" withBorder>
        <Title
          order={2}
          mb="lg"
          id="introduction"
          className="flex items-center text-2xl font-semibold mt-8 mb-4"
        >
          <InfoCircle size={28} className="mr-2 text-red-600" />
          Introduction to Wildlife Photography in Sri Lanka
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Text size="md">
              Sri Lanka a teardrop shaped island in the Indian Ocean is one of
              the world's most important biodiversity hotspots. Despite its
              small size (65,610 km²) the island boasts an extraordinary range
              of ecosystems from lush rainforests and misty montane grasslands
              to arid scrublands, extensive wetlands and pristine coastal areas.
              Sri Lanka is a globally important biodiversity hotspot with a
              remarkable range of ecosystems rainforests, montane grasslands,
              dry zone bush, wetlands and coastal areas home to many endemic
              species. For wildlife photographers the island offers unique
              opportunities to document elephants, leopards, endemic birds,
              amphibians, reptiles and rich plant life but it also demands a
              strong commitment to legal compliance and ethical behaviour.
            </Text>
            <br></br>
            <Text mb="md">
              This ecological diversity supports an incredible array of wildlife
              including:
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                26 endemic bird species found nowhere else on Earth
              </List.Item>
              <List.Item>16% of the world's wild elephant population</List.Item>
              <List.Item>
                One of the highest densities of leopards globally
              </List.Item>
              <List.Item>
                Over 240 species of butterflies (26 endemic)
              </List.Item>
              <List.Item>
                More than 100 species of mammals (16 endemic)
              </List.Item>
              <List.Item>Over 400 species of birds (33 endemic)</List.Item>
            </List>
          </div>
          <div>
            <Text size="md" mb="md">
              For wildlife photographers Sri Lanka offers unparalleled
              opportunities to capture:
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item icon={<Camera size={16} />}>
                The world famous leopard gatherings in Yala National Park.
              </List.Item>
              <List.Item icon={<Camera size={16} />}>
                The largest Asian elephant gathering at Minneriya National Park.
              </List.Item>
              <List.Item icon={<Camera size={16} />}>
                Rare endemic species like the Sri Lankan leopard and purple
                faced langur.
              </List.Item>
              <List.Item icon={<Camera size={16} />}>
                Spectacular bird migrations and resident endemics.
              </List.Item>
              <List.Item icon={<Camera size={16} />}>
                Marine life including blue whales and sea turtles.
              </List.Item>
            </List>
            <Alert color="red" icon={<AlertCircle size={20} />}>
              <Text weight={600}>Important:</Text> All visitors must comply with
              local wildlife protection laws and ethical photography guidelines
              to minimize disturbance to wildlife and their habitats.
            </Alert>
            <br></br>
            <Alert color="red" icon={<AlertCircle size={20} />}>
              <Text weight={600}>Note:</Text> Geofence Filter - Go to Search{" "}
              <br></br>
              Eg: → If a user selects “Yala”, Check system information.
              <br></br> DMC + Weather + Wildlife Data
              <br></br> Shows warnings and other information for that area only.
            </Alert>
          </div>
        </SimpleGrid>
        {/* Search Bar */}
        <TextInput
          placeholder="Search Parks, Wildlife or Locations..."
          icon={<Search size={18} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          rightSection={
            searchQuery && (
              <ActionIcon
                onClick={() => setSearchQuery("")}
                variant="light"
                color="red"
                size="md"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <X size={18} />
              </ActionIcon>
            )
          }
          style={{ maxWidth: 1300, margin: "0 auto" }}
          size="lg"
          mb="xl"
        />
      </Paper>

      <Box id="national-parks" mb="xl">
        <Title
          order={2}
          mb="md"
          className="flex items-center text-3xl font-semibold mb-6"
        >
          <Tree size={28} className="mr-3 text-green-700" />
          National Parks & Key Wildlife
        </Title>

        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          variant="outline"
          radius="md"
          mb="xl"
        >
          <Tabs.List>
            <Tabs.Tab value="all">All Parks</Tabs.Tab>
            <Tabs.Tab value="popular">Most Popular</Tabs.Tab>
            <Tabs.Tab value="endemic">Best for Endemic Species</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab} pt="xl">
            {filteredParks.length === 0 ? (
              <Text color="dimmed" align="center" py="xl">
                No parks match your search. Try a different term.
              </Text>
            ) : (
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                {filteredParks.map((park) => (
                  <Card
                    key={park.id}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    component="a"
                    href={`#park-${park.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Section>
                      <Image
                        src={park.imageUrl}
                        height={180}
                        alt={park.name}
                        fit="cover"
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          aspectRatio: "16/9",
                        }}
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={700} size="lg">
                        {park.name}
                      </Text>
                      <Group spacing={4}>
                        <MapPin size={16} />
                        <Text size="sm" color="dimmed">
                          {park.location.split("(")[0].trim()}
                        </Text>
                      </Group>
                    </Group>

                    <Text size="sm" color="dimmed" lineClamp={3} mb="md">
                      {park.description}
                    </Text>

                    <Text size="sm" weight={600} mb={4}>
                      Key Wildlife:
                    </Text>
                    <Group spacing={4} mb="md">
                      {park.keyWildlife.slice(0, 3).map((animal, index) => (
                        <Text key={index} size="xs" color="blue">
                          • {animal.name.split("(")[0].trim()}
                        </Text>
                      ))}
                      {park.keyWildlife.length > 3 && (
                        <Text size="xs" color="dimmed">
                          +{park.keyWildlife.length - 3} more
                        </Text>
                      )}
                    </Group>

                    <Group position="apart" mt="auto">
                      <Group spacing={4}>
                        <CalendarIcon size={16} />
                        <Text size="sm">
                          Best: {park.bestSeason.split("(")[0].trim()}
                        </Text>
                      </Group>
                      <Text size="sm" color="blue">
                        View details ↓
                      </Text>
                    </Group>
                  </Card>
                ))}
              </SimpleGrid>
            )}
          </Tabs.Panel>
        </Tabs>
      </Box>

      {filteredParks.length > 0 && (
        <Box
          id="park-details"
          mt="xl"
          pt="xl"
          style={{ borderTop: "1px solid #eee" }}
        >
          <Title
            order={2}
            mb="xl"
            className="flex items-center text-2xl font-semibold mt-8 mb-4"
          >
            <Photo size={28} className="mr-2 text-blue-600" />
            Park Details & Photography Guide
          </Title>
          {filteredParks.map((park) => (
            <ParkDetails key={park.id} park={park} />
          ))}
        </Box>
      )}

      <Paper id="ethical-guidelines" p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          mb="lg"
          className="flex items-center text-2xl font-semibold mt-12 mb-6 border-t pt-6"
        >
          <ShieldLock size={28} className="mr-3 text-green-600" />
          Ethical Guidelines for Wildlife Photography (Must agree rules)
        </Title>

        <Alert color="red" mb="xl" icon={<AlertTriangle size={24} />}>
          <Text weight={600}>Warning:</Text> Violations of wildlife protection
          laws can result in heavy fines, equipment confiscation, and legal
          action. Always prioritize animal welfare and habitat protection over
          getting the perfect shot.
        </Alert>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Title order={3} mb="md" style={{ color: "#3779b3ff" }}>
              Core Ethical Principles
            </Title>
            <List
              size="md"
              spacing="md"
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <ShieldLock size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text weight={600}>
                  <b>Respect Wildlife</b>
                </Text>{" "}
                Maintain safe distances avoid disturbing animals and never bait
                or lure wildlife.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Habitat Protection</b>
                </Text>{" "}
                Stay on designated paths and respect restricted areas to
                minimize environmental impact.
                <br></br> Stay on designated tracks avoid trampling vegetation
                and minimize your footprint.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Legal Compliance</b>
                </Text>{" "}
                Obtain all required permits and follow park regulations
                regarding photography equipment and access.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Responsible Sharing</b>
                </Text>{" "}
                Avoid sharing locations of sensitive species that could be
                targeted by poachers.
                <br></br> Provide accurate metadata (date, time, device) be
                honest about manipulations (e.g. heavy post processing).
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Cultural Sensitivity</b>
                </Text>{" "}
                Respect local communities and their relationship with wildlife.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Do No Harm</b>
                </Text>{" "}
                Never chase, harass, bait or otherwise disturb animals for a
                shot. Animal welfare takes priority over photography.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Obey Rules & Permits</b>
                </Text>{" "}
                Follow park rules and show permits when required. Uploads from
                protected areas should reference permit IDs if required.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Protect Sensitive Data</b>
                </Text>{" "}
                Never post precise locations of nests, dens or roosts for
                sensitive species enable geoprivacy & obscured location where
                appropriate (the platform will auto obfuscate for flagged
                species).
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>No Baiting or Lure</b>
                </Text>{" "}
                Avoid feeding or using calls & lures to attract wildlife.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Respect Local Communities</b>
                </Text>{" "}
                Obtain consent before photographing people follow cultural norms
                and support local guides.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Report Illegal Activity </b>
                </Text>{" "}
                Use platform reporting tools to notify admins about poaching,
                illegal trade or dangerous behaviour.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Support Conservation</b>
                </Text>{" "}
                When possible use your imagery for education and conservation
                outreach.
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  <b>Follow Drone Regulations</b>
                </Text>{" "}
                Drones require explicit permits and strict no fly compliance
                inside many protected areas (see Civil Aviation Authority
                rules).
              </List.Item>
              <br></br>
              <Alert color="orange" mb="md">
                <Text weight={600}>Important:</Text> (For an academic treatment
                of local ethics see the Sri Lanka ethical model research and
                university repositories.)
              </Alert>
            </List>
          </div>

          <div>
            <Title order={3} mb="md" style={{ color: "#3779b3ff" }}>
              Photography Best Practices
            </Title>
            <List
              size="md"
              spacing="md"
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <Camera size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                Use telephoto lenses (minimum 300mm recommended) to maintain
                safe distances.
              </List.Item>
              <List.Item>
                Avoid using flash photography as it can disorient or stress
                animals.
              </List.Item>
              <List.Item>
                Be patient and let wildlife approach you rather than chasing
                them.
              </List.Item>
              <List.Item>
                Shoot during golden hours (early morning/late afternoon) for
                best light and animal activity.
              </List.Item>
              <List.Item>
                Learn animal behavior to anticipate actions without influencing
                them.
              </List.Item>
            </List>

            <Title order={4} mt="xl" mb="sm" style={{ color: "#ca463dff" }}>
              Drone Regulations
            </Title>
            <Alert color="orange" mb="md">
              <Text weight={600}>Important:</Text> Drone use is heavily
              restricted in Sri Lanka's protected areas and requires special
              permits from multiple authorities.
            </Alert>
            <List size="sm" spacing="xs">
              <List.Item icon={<AlertCircle size={16} />}>
                Requires approval from Civil Aviation Authority and Department
                of Wildlife Conservation.
              </List.Item>
              <List.Item icon={<AlertCircle size={16} />}>
                Strictly prohibited in most national parks and sensitive areas.
              </List.Item>
              <List.Item icon={<AlertCircle size={16} />}>
                Maximum altitude: 150ft (45m) where permitted.
              </List.Item>
              <List.Item icon={<AlertCircle size={16} />}>
                Must maintain visual line of sight at all times.
              </List.Item>
              <List.Item icon={<AlertCircle size={16} />}>
                No flying near airports, military zones or urban areas.
              </List.Item>
            </List>
          </div>
        </SimpleGrid>

        <Divider my="xl" />

        <Title order={3} mb="md" style={{ color: "#3779b3ff" }}>
          Legal Framework
        </Title>
        <Text mb="md">
          Sri Lanka has strict wildlife protection laws under the following
          legislation:
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Title order={4} mb="sm">
              Key Legislation
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                Fauna and Flora Protection Ordinance (FFPO) - 1937 (Amended
                2009)
              </List.Item>
              <List.Item>Forest Ordinance - 1907 (Amended 2009)</List.Item>
              <List.Item>
                National Environmental Act - 1980 (Amended 2000)
              </List.Item>
              <List.Item>
                Convention on International Trade in Endangered Species (CITES)
              </List.Item>
            </List>
          </div>
          <div>
            <Title order={4} mb="sm" style={{ color: "#ca463dff" }}>
              Penalties for Violations
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <b>Hunting & poaching:</b> 2-5 years imprisonment and or fine up
                to LKR 500,000.
              </List.Item>
              <List.Item>
                <b>Illegal possession of wildlife:</b> 1-5 years imprisonment
                and or fine up to LKR 500,000.
              </List.Item>
              <List.Item>
                <b>Damage to habitats:</b> 5 years imprisonment and or fine up
                to LKR 50,000.
              </List.Item>
              <List.Item>
                <b>Illegal photography (where restricted):</b> Fine up to LKR
                50,000 and equipment confiscation.
              </List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Paper>

      <Paper id="emergency-contacts" p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          mb="lg"
          className="flex items-center text-2xl font-semibold mt-12 mb-6 border-t pt-6"
        >
          <FirstAidKit size={28} className="mr-3 text-red-600" />
          Emergency Contacts & Safety Information
        </Title>

        <Alert color="red" mb="xl" icon={<AlertOctagon size={24} />}>
          <Text weight={600}>
            In case of emergency dial 119 for police or 1990 for ambulance
            services.
          </Text>
        </Alert>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Title order={3} mb="md" style={{ color: "#228be6" }}>
              Emergency Contacts
            </Title>
            <Table striped highlightOnHover>
              <tbody>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>1912 / +94 11 242 1052</td>
                  </Group>
                  <td>
                    <Text weight={600}>Tourist Police</Text>
                  </td>
                </tr>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>1990 / +94 11 269 1111</td>
                  </Group>
                  <td>
                    <Text weight={600}>Ambulance</Text>
                  </td>
                </tr>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>119 / +94 11 243 3333</td>
                  </Group>
                  <td>
                    <Text weight={600}>Police Emergency</Text>
                  </td>
                </tr>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>+94 71 044 7722</td>
                  </Group>
                  <td>
                    <Text weight={600}>Wildlife Emergency</Text>
                  </td>
                </tr>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>+94 11 286 6631</td>
                  </Group>
                  <td>
                    <Text weight={600}>Forest Department</Text>
                  </td>
                </tr>
                <tr>
                  <Group spacing="1">
                    <FaPhone size={12} />
                    <td>1912</td>
                  </Group>
                  <td>
                    <Text weight={600}>Tourism Hotline</Text>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Title order={4} mt="xl" mb="md">
              Medical Facilities
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <Text weight={600}>Colombo National Hospital</Text>
                <Group spacing="2">
                  <FaPhone size={13} />
                  <Text size="sm" color="dimmed">
                    +94 11 269 1111 | Colombo 10
                  </Text>
                </Group>
              </List.Item>
              <List.Item>
                <Text weight={600}>Asiri Hospital (Private)</Text>
                <Group spacing="2">
                  <FaPhone size={13} />
                  <Text size="sm" color="dimmed">
                    +94 11 230 3300 | Colombo 5
                  </Text>
                </Group>
              </List.Item>
              <List.Item>
                <Text weight={600}>Durdans Hospital (Private)</Text>
                <Group spacing="2">
                  <FaPhone size={13} />
                  <Text size="sm" color="dimmed">
                    +94 11 214 0000 | Colombo 3
                  </Text>
                </Group>
              </List.Item>
            </List>

            <Title order={4} mt="xl" mb="md">
              Quick Links (Sri Lanka)
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <Text weight={600}>National alerts and warnings</Text>
                <Anchor
                  href="https://www.dmc.gov.lk/index.php?lang=en"
                  target="_blank"
                >
                  <Group spacing="2">
                    <FaLink size={15} />
                    <Text size="sm" color="dimmed">
                      Disaster Management Centre (DMC)
                    </Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Text weight={600}>Drone rules and permits</Text>
                <Anchor href="https://www.caa.lk/en/" target="_blank">
                  <Group spacing="2">
                    <FaLink size={15} />
                    <Text size="sm" color="dimmed">
                      Civil Aviation Authority (CAASL)
                    </Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Text weight={600}>Weather forecasts</Text>
                <Anchor href="https://meteo.gov.lk/" target="_blank">
                  <Group spacing="2">
                    <FaLink size={15} />
                    <Text size="sm" color="dimmed">
                      Department of Meteorology
                    </Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Text weight={600}>Official website & contact page</Text>
                <Anchor href="https://www.dwc.gov.lk/" target="_blank">
                  <Group spacing="2">
                    <FaLink size={15} />
                    <Text size="sm" color="dimmed">
                      Department of Wildlife Conservation (DWC)
                    </Text>
                  </Group>
                </Anchor>
              </List.Item>
            </List>
            <br></br>
            <Alert color="orange" mb="md">
              <Text weight={600}>Important:</Text> If available, obtain local
              ranger station phone numbers for each park. Obtain from the
              Department of Wildlife Conservation (DWC) or park offices.
            </Alert>
          </div>

          <div>
            <Title order={3} mb="md" style={{ color: "#228be6" }}>
              Safety Guidelines
            </Title>
            <List
              size="md"
              spacing="md"
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <AlertTriangle size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text weight={300}>
                  <b>Wildlife Encounters:</b>
                </Text>{" "}
                Maintain safe distances from all animals, especially elephants,
                leopards and crocodiles.
              </List.Item>
              <List.Item>
                <Text weight={300}>
                  <b>Weather Awareness:</b>
                </Text>{" "}
                Be prepared for sudden weather changes, especially in hill
                country and during monsoon seasons.
              </List.Item>
              <List.Item>
                <Text weight={300}>
                  <b>Water Safety:</b>
                </Text>{" "}
                Only swim in designated safe areas due to strong currents and
                dangerous marine life.
              </List.Item>
              <List.Item>
                <Text weight={300}>
                  <b>Health Precautions:</b>
                </Text>{" "}
                Stay hydrated, use sun protection and be aware of tropical
                diseases like dengue fever.
              </List.Item>
              <List.Item>
                <Text weight={300}>
                  <b>Local Customs:</b>
                </Text>{" "}
                Dress modestly when visiting religious sites and always ask
                permission before photographing people.
              </List.Item>
            </List>

            <Title order={4} mt="xl" mb="md" style={{ color: "#ca463dff" }}>
              Emergency Preparedness
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                Carry a first aid kit and any necessary medications.
              </List.Item>
              <List.Item>
                Keep emergency numbers saved in your phone and written down.
              </List.Item>
              <List.Item>
                Inform someone of your itinerary and expected return time.
              </List.Item>
              <List.Item>Carry sufficient water and sun protection.</List.Item>
              <List.Item>
                Have travel insurance that covers medical evacuation.
              </List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Paper>

      <Paper id="additional-resources" p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          mb="lg"
          className="flex items-center text-2xl font-semibold mt-12 mb-6 border-t pt-6"
        >
          <Book2 size={28} className="mr-3 text-purple-600" />
          Additional Resources & References
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Title order={3} mb="md" style={{ color: "#228be6" }}>
              Official Websites
            </Title>
            <List size="md" spacing="sm">
              <List.Item>
                <Anchor href="https://www.dwc.gov.lk/" target="_blank">
                  <Group spacing={2}>
                    <Globe size={16} />
                    <Text>Department of Wildlife Conservation (DWC) </Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.sltda.gov.lk/" target="_blank">
                  <Group spacing={2}>
                    <Globe size={16} />
                    <Text>Sri Lanka Tourism Development Authority</Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.srilanka.travel/" target="_blank">
                  <Group spacing={2}>
                    <Globe size={16} />
                    <Text>Sri Lanka Tourism</Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.meteo.gov.lk/" target="_blank">
                  <Group spacing={2}>
                    <Globe size={16} />
                    <Text>Department of Meteorology (Weather Updates)</Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor
                  href="https://www.dmc.gov.lk/index.php?lang=en"
                  target="_blank"
                >
                  <Group spacing={2}>
                    <Globe size={16} />
                    <Text>Disaster Management Centre - DMC (Hazard Feeds)</Text>
                  </Group>
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.caa.lk/en/" target="_blank">
                  <Group spacing="2">
                    <Globe size={16} />
                    <Text>
                      Civil Aviation Authority - CAASL (Drone Guidance &
                      Standards)
                    </Text>
                  </Group>
                </Anchor>
              </List.Item>
            </List>

            <Title order={4} mt="xl" mb="md">
              Mobile Apps
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <Text weight={600}>Sri Lanka Tourism App</Text>
                <Text size="sm" color="dimmed">
                  Official tourism information and emergency contacts
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>SLWILD</Text>
                <Text size="sm" color="dimmed">
                  Wildlife sightings and park information
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>PickMe</Text>
                <Text size="sm" color="dimmed">
                  Local ride hailing service (like Uber)
                </Text>
              </List.Item>
            </List>

            <Title order={5} mt="xl" mb="md">
              Where to get Images & Data (Practical Links)
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <Text weight={600}>
                  Department of Wildlife Conservation (DWC)
                </Text>
                <Text size="sm" color="dimmed">
                  Official imagery & park data and contact for permissions.
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>GBIF / iNaturalist / eBird</Text>
                <Text size="sm" color="dimmed">
                  Biodiversity data and occurrence records. review license and
                  geoprivacy rules.
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>Local Universities & Conservation NGOs</Text>
                <Text size="sm" color="dimmed">
                  For validated species lists, curated images and training
                  datasets (seek MoU).
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  The Wildlife & Nature Protection Society, Sri Lanka (WNPS)
                </Text>
                <Text size="sm" color="dimmed">
                  The WNPS is 131 years old and set up Wilpattu & Yala National
                  Parks and the Department of Wildlife Conservation.
                </Text>
              </List.Item>
            </List>
          </div>

          <div>
            <Title order={3} mb="md" style={{ color: "#228be6" }}>
              Recommended Further Reading
            </Title>
            <List size="md" spacing="sm">
              <List.Item>
                <Text weight={600}>
                  A Photographic Guide to the Birds of Sri Lanka
                </Text>
                <Text size="sm" color="dimmed">
                  By Gehan de Silva Wijeyeratne
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  A Naturalist's Guide to the Mammals of Sri Lanka
                </Text>
                <Text size="sm" color="dimmed">
                  By Gehan de Silva Wijeyeratne
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>Wild Sri Lanka</Text>
                <Text size="sm" color="dimmed">
                  By Gehan de Silva Wijeyeratne
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>The Leopard's Tale</Text>
                <Text size="sm" color="dimmed">
                  By Jonathan and Angela Scott
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  Fauna and Flora Protection Ordinance (FFPO)
                </Text>
                <Text size="sm" color="dimmed">
                  From Legislative Text
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  Academic: An ethical model for the wildlife photography of Sri
                  Lanka
                </Text>
                <Text size="sm" color="dimmed">
                  By University of Kelaniya Repository
                </Text>
              </List.Item>
              <List.Item>
                <Text weight={600}>
                  Community Geoprivacy Guidance & Ethics References
                </Text>
                <Text size="sm" color="dimmed">
                  By iNaturalist
                </Text>
              </List.Item>
            </List>

            <Title order={4} mt="xl" mb="md">
              Conservation Organizations
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <Anchor href="https://www.wwct.org/" target="_blank">
                  Wildlife and Nature Protection Society (WNPS)
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.wwct.org/" target="_blank">
                  Wildlife Conservation Society (WCS) Sri Lanka
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.wwct.org/" target="_blank">
                  Sri Lanka Wildlife Conservation Society
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="https://www.wwct.org/" target="_blank">
                  Field Ornithology Group of Sri Lanka (FOGSL)
                </Anchor>
              </List.Item>
            </List>
          </div>
        </SimpleGrid>

        <Divider my="xl" />

        <Title order={3} mb="md" style={{ color: "#228be6" }}>
          Weather & Best Times to Visit
        </Title>
        <Text mb="md">
          Sri Lanka's weather varies by region and is influenced by two
          monsoons. The best time for wildlife photography depends on what you
          want to see:
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mb="xl">
          <Paper p="md" withBorder>
            <Group mb="sm">
              <Sun color="#ffd43b" size={24} />
              <Text weight={600}>Yala & South Coast</Text>
            </Group>
            <Text size="sm">
              Best: Jan-Apr (dry season, water sources attract wildlife)
            </Text>
            <Text size="xs" color="dimmed">
              Avoid: Sep-Dec (monsoon season)
            </Text>
          </Paper>

          <Paper p="md" withBorder>
            <Group mb="sm">
              <Droplet color="#4dabf7" size={24} />
              <Text weight={600}>Wilpattu & North</Text>
            </Group>
            <Text size="sm">Best: May-Sep (dry season, best for leopards)</Text>
            <Text size="xs" color="dimmed">
              Wet: Oct-Jan (some areas may be inaccessible)
            </Text>
          </Paper>

          <Paper p="md" withBorder>
            <Group mb="sm">
              <CloudRain color="#74b9ff" size={24} />
              <Text weight={600}>Horton Plains & Hill Country</Text>
            </Group>
            <Text size="sm">Best: Jan-Mar (driest months, clear views)</Text>
            <Text size="xs" color="dimmed">
              Wettest: May-Jul & Oct-Dec
            </Text>
          </Paper>

          <Paper p="md" withBorder>
            <Group mb="sm">
              <Wind color="#74c0fc" size={24} />
              <Text weight={600}>East Coast (Kumana, Gal Oya)</Text>
            </Group>
            <Text size="sm">Best: May-Sep (dry season, bird migrations)</Text>
            <Text size="xs" color="dimmed">
              Wettest: Nov-Jan (monsoon season)
            </Text>
          </Paper>
        </SimpleGrid>
      </Paper>

      <Paper p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          mb="lg"
          className="flex items-center text-2xl font-semibold mt-12 mb-6 border-t pt-6"
        >
          <AlertTriangle size={28} className="mr-3 text-orange-600" />
          Important Disclaimers & Legal Notices
        </Title>

        <Alert color="orange" mb="xl" icon={<AlertCircle size={24} />}>
          <Text weight={600}>Disclaimer:</Text> The information provided on this
          page is for general guidance only and is subject to change. Always
          verify current regulations and conditions before traveling.
        </Alert>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={4} mb="sm">
              Legal Notice
            </Title>
            <Text size="sm" mb="md">
              All wildlife photography must comply with Sri Lankan laws and
              regulations. The website owners and content creators are not
              responsible for any violations of local laws or any consequences
              arising from the use of this information.
            </Text>

            <Title order={4} mb="sm">
              Terms of Use
            </Title>
            <Text size="sm" mb="md">
              By using the information on this website you agree to conduct
              yourself in an ethical and responsible manner, respecting both
              wildlife and local communities. Commercial use of any content from
              this site requires prior written permission.
            </Text>
          </div>

          <div>
            <Title order={4} mb="sm">
              Copyright Notice
            </Title>
            <Text size="sm" mb="md">
              All text, images and content on this website are protected by
              copyright. Unauthorized use, reproduction or distribution without
              express written permission is strictly prohibited.
            </Text>

            <Title order={4} mb="sm">
              Contact Information
            </Title>
            <Text size="sm">
              For inquiries, corrections or permissions please contact us at:
            </Text>
            <Text size="sm" weight={600}>
              Email: info@srilankawildlifephotography.com
            </Text>
            <Text size="sm" weight={600}>
              Phone: +94 75 7836 574
            </Text>
          </div>
        </SimpleGrid>
      </Paper>
      <Paper p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          className="flex items-center text-2xl font-semibold mb-6"
        >
          <AlertTriangle size={28} className="mr-3 text-red-600" />
          Risks & Problems Photographers May Face
        </Title>
        <br></br>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb="xl">
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <CloudStorm size={20} className="mr-2 text-blue-600" />
              Environmental & Natural Hazards
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>Floods, landslides, storms (monsoon season):</b> Check{" "}
                <Anchor href="https://www.dmc.gov.lk/" target="_blank">
                  Disaster Management Centre (DMC)
                </Anchor>{" "}
                and{" "}
                <Anchor href="https://www.meteo.gov.lk/" target="_blank">
                  Meteorology Department
                </Anchor>{" "}
                alerts before visiting.
              </List.Item>
              <List.Item>
                <b>Heat & dehydration:</b> Plan for early morning / late
                afternoon shoots. Carry sufficient water.
              </List.Item>
              <List.Item>
                <b>Poor communications:</b> Many reserves have patchy mobile
                coverage. Carry offline maps & inform someone of your itinerary.
              </List.Item>
            </List>

            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center mt-6"
            >
              <Paw size={20} className="mr-2 text-green-600" />
              Wildlife-related Risks
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>Elephant encounters:</b> Elephants are large and can be
                unpredictable. maintain distance and avoid blocking escape
                routes.
                <Text
                  component="span"
                  size="xs"
                  color="dimmed"
                  display="block"
                  mt={4}
                  pl={20}
                >
                  Note: News reports show increasing human elephant conflict in
                  some areas be cautious near elephant corridors.{" "}
                  <Anchor href="https://apnews.com/" target="_blank">
                    AP News
                  </Anchor>
                </Text>
              </List.Item>
              <List.Item>
                <b>Predators & snakes:</b> Some park areas have venomous snakes
                or large predators. Avoid walking alone off track.
              </List.Item>
              <List.Item>
                <b>Insect borne disease:</b> Wear repellents, consider
                prophylaxis if advised.
              </List.Item>
            </List>
          </div>

          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Camera size={20} className="mr-2 text-black-600" />
              Equipment & Logistical Issues
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>Theft or damage to equipment (expensive gear):</b> Always use
                reliable transportation and security for your gear (equipment).
              </List.Item>
              <List.Item>
                <b>Battery failures in remote areas:</b> Carry spares and
                consider solar chargers for remote areas.
              </List.Item>
              <List.Item>
                <b>Dust and moisture:</b> Protect your equipment with
                appropriate covers and cleaning kits.
              </List.Item>
            </List>

            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center mt-6"
            >
              <MapPin size={20} className="mr-2 text-red-600" />
              General Safety Tips
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                Always hire experienced local guides in national parks.
              </List.Item>
              <List.Item>
                Carry a basic first aid kit and know basic first aid.
              </List.Item>
              <List.Item>
                Stay on designated paths and follow park rules.
              </List.Item>
              <List.Item>Keep emergency numbers saved in your phone.</List.Item>
            </List>
          </div>
        </SimpleGrid>

        <Alert
          color="yellow"
          variant="light"
          icon={<InfoCircle size={20} />}
          mt="md"
        >
          <Text size="sm">
            <b>Important:</b> Always check current conditions and regulations
            with local authorities before your visit. Weather and wildlife
            patterns can change rapidly.
          </Text>
        </Alert>
      </Paper>

      <Paper p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          className="flex items-center text-2xl font-semibold mb-6"
        >
          <AlertTriangle size={28} className="mr-3 text-red-600" />
          Natural-Hazard Zones in National Parks
        </Title>
        <br></br>
        <Text mb="md">
          Wildlife photography in Sri Lanka's national parks involves various
          natural and environmental risks. These hazards can change rapidly due
          to climate patterns, animal movements and seasonal weather conditions.
          These hazards are not always predictable and can change rapidly due to
          weather patterns. Therefore the wildlife photography platform informs
          users about potential risk zones, seasonal risks and real time alerts
          to improve photographer safety and promote ethical wildlife
          interactions.
        </Text>

        <Alert
          color="yellow"
          variant="light"
          icon={<InfoCircle size={20} />}
          mb="xl"
        >
          <Text size="sm">
            <b>Official Data Sources:</b> Information is sourced from the
            Disaster Management Centre (DMC) Sri Lanka, Department of
            Meteorology Sri Lanka, Department of Wildlife Conservation (DWC) and
            National Building Research Organisation (NBRO) for landslides,
            Survey Department of Sri Lanka (for topographic data). These data
            sources are legally recognised and reliable making them appropriate
            for academic and field based use.
          </Text>
        </Alert>

        <SimpleGrid cols={{ base: 1 }} spacing="xs" mb="xl">
          {/* Seasonal Flood Risk Zones */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Droplet size={20} className="mr-2 text-blue-600" />
              Seasonal Flood Risk Zones
            </Title>
            <Text mb="sm">
              Many national parks are near rivers, tanks, and wetlands
              susceptible to flooding during monsoon seasons. Many Sri Lankan
              national parks are located near rivers, tanks and wetlands which
              are highly susceptible to flooding during the South West Monsoon
              (May-September) and North East Monsoon (October-January) periods.
              “High flood risk during Nov–Jan due to monsoon conditions”.
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>Commonly affected parks:</b> Yala, Udawalawe, Wilpattu,
                Minneriya & Kaudulla Parks
              </List.Item>
              <List.Item>
                <b>Risks:</b> Inundation of jeep roads, isolated vehicles,
                equipment damage, Crocodile migration into flooded roads,
                Drowning risk in fast flowing water.
              </List.Item>
              <List.Item>
                <b>Data source:</b>{" "}
                <Anchor href="https://www.dmc.gov.lk/" target="_blank">
                  Disaster Management Centre (DMC) Flood Maps
                </Anchor>
                ,{" "}
                <Anchor href="https://www.meteo.gov.lk/" target="_blank">
                  Department of Meteorology Rainfall Forecasts
                </Anchor>
                ,{" "}
                <Anchor href="https://www.irrigation.gov.lk/" target="_blank">
                  Irrigation Department Rain Gauge Data
                </Anchor>
              </List.Item>
              <br></br>
              <Alert
                color="yellow"
                variant="light"
                icon={<InfoCircle size={20} />}
                mb="xl"
              >
                <Text size="sm">
                  <b>Warn:</b> “🔴 ALERT – Flood Warning”<br></br> Timestamp:
                  Last updated issued by DMC: 08:20 AM – 10/12/2025 <br></br>
                  Areas affected: Yala, Udawalawe <br></br>Recommendation: Avoid
                  low lying tracks
                </Text>
              </Alert>
            </List>
          </div>

          {/* Landslide Risk Areas */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Mountain size={20} className="mr-2 text-amber-900" />
              Landslide Risk Areas (Hill Country)
            </Title>
            <Text mb="sm">
              Parks in central highlands are prone to landslides during heavy
              rainfall. Parks in the central highlands such as Horton Plains are
              prone to landslides during heavy rainfall.
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>At-risk areas:</b> Horton Plains, Knuckles Conservation
                Forest, Forests near Nuwara Eliya & Badulla regions
              </List.Item>
              <List.Item>
                <b>Risks:</b> Collapsing trails (Collapse of walking trails),
                unstable cliffs (Cliff instability at World’s End), rock falls
                on access roads, Risk to life during solo photography.
              </List.Item>
              <List.Item>
                <b>Data source:</b>{" "}
                <Anchor href="http://www.nbro.gov.lk/" target="_blank">
                  NBRO Landslide Risk Maps / NBRO Landslide prone area (Avoid
                  during heavy rain, Historically recorded landslides)
                </Anchor>
                ,{" "}
                <Anchor
                  href="https://www.dmc.gov.lk/index.php?lang=en"
                  target="_blank"
                >
                  Disaster Management Centre (DMC) Hazard Profiles
                </Anchor>
              </List.Item>
            </List>
          </div>
          {/* Elephant Corridors */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Paw size={20} className="mr-2 text-orange-600" />
              Elephant Corridors (High Conflict Zones)
            </Title>
            <Text mb="sm">
              Natural migration paths connecting forests and water sources that
              can be dangerous for photographers. Elephant corridors are natural
              migration paths connecting forests and water sources. These areas
              are extremely dangerous for photographers especially at night.
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>High risk corridors:</b> Minneriya – Kaudulla – Hurulu
                Corridor, Udawalawe Buffer Zone, Yala B and C Blocks, Wilpattu
                Southern Border
              </List.Item>
              <List.Item>
                <b>Risks:</b> Sudden elephant charges, vehicle damage, fatal
                attacks, Human wildlife conflict incidents
              </List.Item>
              <List.Item>
                <b>Data source:</b>{" "}
                <Anchor href="https://www.dwc.gov.lk/" target="_blank">
                  Department of Wildlife Conservation (DWC)
                </Anchor>
                ,{" "}
                <Anchor
                  href="https://www.agrimin.gov.lk/web/index.php/news-scroll/1880-06-12-2022-1e?lang=en"
                  target="_blank"
                >
                  Elephant corridor mapping programme sri lanka
                </Anchor>
              </List.Item>
              <br></br>
              <Alert
                color="yellow"
                variant="light"
                icon={<InfoCircle size={20} />}
                mb="xl"
              >
                <Text size="sm">
                  <b>Warn:</b> “⚠️ High Elephant Movement Area – No walking
                  allowed. You are entering an elephant corridor. Maintain
                  distance and remain inside your vehicle”
                </Text>
              </Alert>
            </List>
          </div>
          {/* Wildfire and Drought Zones */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Flame size={20} className="mr-2 text-red-600" />
              Wildfire and Drought Zones
            </Title>
            <Text mb="sm">
              Parks experience forest fires during dry periods especially from
              August to October. During dry periods parks like Yala and Wilpattu
              experience forest fires sometimes caused by high heat or illegal
              activity.
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>High fire risk months:</b> August–October, February–March
              </List.Item>
              <List.Item>
                <b>Risks:</b> Sudden fires, Smoke inhalation, Animal stampedes,
                Sudden forest fires, Desert like conditions. (High Fire Risk –
                Extreme Heat Advisory)
              </List.Item>
              <List.Item>
                <b>Data source:</b>{" "}
                <Anchor
                  href="https://www.dmc.gov.lk/index.php?lang=en"
                  target="_blank"
                >
                  Disaster Management Centre (DMC) Fire Alerts
                </Anchor>
                ,{" "}
                <Anchor
                  href="https://www.env.gov.lk/web/index.php/en/department-of-forest-conservation"
                  target="_blank"
                >
                  Forest Department Sri lanka
                </Anchor>
                ,{" "}
                <Anchor
                  href="https://visibleearth.nasa.gov/images/59293/sri-lanka/59296l"
                  target="_blank"
                >
                  MODIS Satellite Images (optional academic use)
                </Anchor>
              </List.Item>
            </List>
          </div>
          {/* Severe Weather & Storm Warnings */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <CloudStorm size={20} className="mr-2 text-purple-600" />
              Severe Weather & Storm (Affects) Warnings
            </Title>
            <Text mb="sm">
              Sudden storms, lightning and strong winds impact coastal and
              central parks.
            </Text>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                <b>Affected areas:</b> Yala coastal blocks, Horton Plains,
                Sinharaja Rainforest, Purple shaded map zones
              </List.Item>
              <List.Item>
                <b>Risks:</b> Sudden storms, Lightning, Strong winds
              </List.Item>
              <List.Item>
                <b>Data source:</b>{" "}
                <Anchor href="https://www.meteo.gov.lk/" target="_blank">
                  Department of Meteorology Sri Lanka (Rainfall Forecasts)
                </Anchor>
                ,{" "}
                <Anchor href="https://www.dmc.gov.lk/" target="_blank">
                  Disaster Management Centre (DMC) Early Warning System
                </Anchor>
              </List.Item>
              <br></br>
              <Alert
                color="yellow"
                variant="light"
                icon={<InfoCircle size={20} />}
                mb="xl"
              >
                <Text size="sm">
                  <b>Warn:</b> “⚠️ Severe weather warning issued for Southern
                  Province”<br></br> Timestamp: Last updated: 08:15 AM –
                  10/12/2025
                </Text>
              </Alert>
            </List>
          </div>
          {/* Safety Recommendations */}
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Shield size={20} className="mr-2 text-green-600" />
              Safety Recommendations for Photographers
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                Always check{" "}
                <Anchor href="https://www.dmc.gov.lk/" target="_blank">
                  DMC alerts
                </Anchor>{" "}
                before visiting
              </List.Item>
              <List.Item>
                Hire experienced local guides in national parks
              </List.Item>
              <List.Item>Carry emergency supplies and first-aid kit</List.Item>
              <List.Item>Maintain safe distances from wildlife</List.Item>
              <List.Item>Follow park rules and guide instructions</List.Item>
            </List>
          </div>
        </SimpleGrid>

        <Alert
          color="blue"
          variant="light"
          icon={<InfoCircle size={20} />}
          mt="md"
        >
          <Text size="sm">
            <b>Note:</b> Hazard conditions can change rapidly. Always verify
            current conditions with local authorities before your visit.
          </Text>
        </Alert>
      </Paper>

      <Paper p="xl" mt="xl" radius="md" withBorder>
        <Title
          order={2}
          className="flex items-center text-2xl font-semibold mb-6"
        >
          <Checklist size={28} className="mr-1 text-green-600" />
          Practical Field Guidelines & Survival Tips
          <Text component="span" size="md" color="dimmed" ml="xs" weight={400}>
            (for photographers)
          </Text>
        </Title>
        <br></br>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <ClipboardList size={20} className="mr-2 text-blue-600" />
              Before You Go
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                Check park status, recent weather and alerts:{" "}
                <Anchor href="https://www.dmc.gov.lk/" target="_blank">
                  DMC
                </Anchor>{" "}
                +{" "}
                <Anchor href="https://www.meteo.gov.lk/" target="_blank">
                  Dept of Meteorology
                </Anchor>
                .
              </List.Item>
              <List.Item>
                Carry printed permit copies, ID, and emergency numbers.
              </List.Item>
              <List.Item>
                Pack a first-aid kit, torch/headlamp, drinking water, sun
                protection, insect repellent, and a basic survival whistle.
              </List.Item>
              <List.Item>
                Bring communications: mobile with local SIM, power bank, and
                offline maps (download map tiles).
              </List.Item>
              <List.Item>
                <b>Camera gear:</b> Sturdy tripod/beanbag, lens cleaning kit,
                rain cover, spare batteries & memory cards, GPS-enabled camera
                or GPS logger for accurate metadata.
              </List.Item>
            </List>

            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center mt-6"
            >
              <Shield size={20} className="mr-2 text-amber-600" />
              Survival Skills
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                Know basic first aid (snakebite, cuts, heat stroke).
              </List.Item>
              <List.Item>
                Learn to use topographic maps and compass or keep an offline
                navigation app.
              </List.Item>
              <List.Item>
                Work with experienced local guides — they know animal behaviour
                and hazard zones.
              </List.Item>
            </List>
          </div>

          <div>
            <Title
              order={3}
              className="text-xl font-semibold mb-4 flex items-center"
            >
              <Camera size={20} className="mr-2 text-purple-600" />
              In the Field
            </Title>
            <List size="sm" spacing="xs" mb="md">
              <List.Item>
                Keep a respectful distance — use longer focal lengths (300mm+)
                rather than approaching animals.
              </List.Item>
              <List.Item>
                Avoid sudden movements, loud noises, or blocking escape routes.
              </List.Item>
              <List.Item>
                Never position yourself between a mother and her young or an
                animal and its escape route.
              </List.Item>
              <List.Item>
                If a large mammal (elephant, buffalo, leopard) shows signs of
                agitation, back away slowly and leave the area — do not run.
              </List.Item>
              <List.Item>
                Stay in vehicle when recommended; many parks require visitors to
                remain inside vehicles except in designated areas.{" "}
                <Anchor href="https://www.dwc.gov.lk/" target="_blank">
                  Department of Wildlife Conservation
                </Anchor>
              </List.Item>
            </List>

            <Alert
              color="blue"
              variant="light"
              icon={<InfoCircle size={20} />}
              mt="md"
            >
              <Text size="sm">
                <b>Remember:</b> Your safety and the well-being of wildlife
                should always come before getting the perfect shot.
              </Text>
            </Alert>
          </div>
        </SimpleGrid>
      </Paper>
      <TrustedSourcesSection />
      <DataLegalSourcesSection className="mt-8" />
      <Space h="xl" />
    </Container>
  );
};

export default Information;
