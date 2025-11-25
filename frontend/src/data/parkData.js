// Comprehensive data for national parks in Sri Lanka
export const parkData = [
  {
    id: "yala",
    name: "Yala National Park (Block I & II)",
    location: "Southern and Uva Provinces, Sri Lanka",
    habitat:
      "Dry monsoon forest, coastal lagoons, scrubland, grasslands, rocky outcrops",
    description:
      "Sri Lanka's most visited wildlife reserve, known for its high leopard density and diverse ecosystems.",
    detailedDescription:
      "Yala National Park, located in the Southern and Uva provinces, is Sri Lanka's most visited wildlife reserve. It features dry monsoon forest, coastal lagoons, scrubland, grasslands, and rocky outcrops. Known for its high leopard density, it is one of the top wildlife photography destinations in Asia. The park consists of five blocks, with two open to the public, and is home to 44 mammal species and 215 bird species.",
    bestSeason: "June–September (Dry season)",
    keyWildlife: [
      {
        name: "Sri Lankan Leopard (Panthera pardus kotiya)",
        status: "Endemic, Endangered",
      },
      {
        name: "Sri Lankan Elephant (Elephas maximus maximus)",
        status: "Endangered",
      },
      { name: "Sloth Bear (Melursus ursinus inornatus)", status: "Vulnerable" },
      { name: "Spotted Deer" },
      { name: "Sambar Deer" },
      { name: "Wild Boar" },
      { name: "Water Buffalo" },
      { name: "Crested Serpent Eagle" },
      { name: "Malabar Pied Hornbill" },
      { name: "Lesser Adjutant" },
      { name: "Mugger Crocodile" },
      { name: "Estuarine Crocodile" },
    ],
    endemicSpecies: [
      { name: "Sri Lankan Leopard (subspecies)" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Woodshrike" },
      { name: "Sri Lanka Spurfowl" },
      { name: "Sri Lanka Hanging Parrot" },
    ],
    safetyNotes:
      "High presence of elephants and sloth bears; maintain safe distance. Flooding possible during monsoon (Nov–Jan). Do not exit vehicles except at designated areas. Sudden storms possible near coastline.",
    imageUrl:
      "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/wildlife-safaris-sri-lanka/wildlife-safaris-yala-national-park-sri-lanka/01.jpg",
    detailImageUrl:
      "https://www.srilankaecotourism.lk/images/itineraries/slider/afternoon-safari-in-yala-national-park/afternoon-safari-in-yala-national-park.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "High density of leopards, elephants, and crocodiles. Maintain safe distance at all times.",
      },
      {
        type: "Weather",
        description:
          "Extremely hot during midday. Carry sufficient water and sun protection.",
      },
      {
        type: "Terrain",
        description:
          "Rough terrain with dense undergrowth. Wear appropriate clothing and footwear.",
      },
      {
        type: "Monsoon",
        description:
          "Flooding possible during monsoon season (November to January)",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required (different rates for locals/foreigners)",
        "Only registered safari jeeps allowed with approved guides",
        "No off-road driving to protect sensitive habitats",
        "Strict no-feeding policy for wildlife",
        "Maximum 6 people per safari jeep",
        "No flash photography near animals",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      { name: "UNESCO World Heritage", url: "https://whc.unesco.org/" },
    ],
    photographyTips: [
      "Optimal photography hours: 6 AM–8 AM and 4 PM–6 PM for best light and animal activity",
      "Use a telephoto lens (minimum 300mm) for leopard photography",
      "Early morning provides best lighting for waterhole activity",
      "Use a bean bag or monopod for stability during jeep safaris",
      "Carry extra batteries and memory cards as charging facilities are limited",
      "Be prepared for changing light conditions throughout the day",
      "Focus on capturing behavior shots at waterholes during dry season",
    ],
    practicalNotes: {
      nearestTowns: "Tissamaharama, Kirinda",
      accommodation: "Hotels, safari camps, eco-lodges",
      fuelAvailability: "Available in Tissamaharama",
      mobileCoverage: "Good in some areas, weak in interior blocks",
      foodWater: "Bring enough, no shops inside park",
    },
    gallerySuggestions: [
      "Leopard resting on rocks",
      "Elephants near waterholes",
      "Painted storks & marsh birds at lagoons",
      "Sunset over coastal areas",
      "Sloth bear sightings in fruiting trees",
    ],
  },
  {
    id: "wilpattu",
    name: "Wilpattu National Park",
    location: "Northwestern Sri Lanka",
    habitat: "Dense forest, scrub, open plains, wetlands (Willus)",
    description:
      "Famous for its scenic Willu lakes, high density of leopards and sloth bears in a pristine wilderness setting.",
    detailedDescription:
      "Wilpattu National Park is the largest national park in Sri Lanka, known for its unique Willus (natural lakes) that attract abundant wildlife. The park features a mix of dense forest, open plains, and wetlands, creating diverse habitats for numerous species. It has one of the highest densities of leopards and sloth bears in Asia, along with significant populations of elephants and endemic birds.",
    bestSeason: "February to October (especially during dry months)",
    keyWildlife: [
      { name: "Sri Lankan Leopard" },
      { name: "Sloth Bear" },
      { name: "Asian Elephant" },
      { name: "Spotted Deer" },
      { name: "Sambar Deer" },
      { name: "Mugger Crocodile" },
      { name: "Water Monitor" },
      { name: "Crested Hawk-Eagle" },
      { name: "Painted Stork" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Brown-capped Babbler" },
      { name: "Sri Lanka Crested Drongo" },
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Grey Hornbill" },
    ],
    safetyNotes:
      "Be especially cautious of sloth bears and leopards. Stay in vehicles during safaris. The terrain can be challenging with dense undergrowth. Carry sufficient water and sun protection.",
    imageUrl: "https://www.srilankaecotourism.lk/location_img/6975.jpg",
    detailImageUrl:
      "https://duqjpivknq39s.cloudfront.net/2018/12/wilpattu-800x750.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "High density of leopards and sloth bears. Maintain safe distance.",
      },
      {
        type: "Terrain",
        description:
          "Dense undergrowth and uneven terrain. Can be challenging to navigate.",
      },
      {
        type: "Water",
        description: "Be cautious near water bodies due to crocodiles.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Only registered safari vehicles allowed",
        "Strictly no off-road driving",
        "No loud noises that may disturb wildlife",
        "No plastic bottles allowed in the park",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      {
        name: "Wilpattu National Park Official",
        url: "https://www.wilpattunationalpark.com/",
      },
    ],
    photographyTips: [
      "Early mornings provide best lighting for photography",
      "Use a telephoto lens (300mm or longer recommended)",
      "Look for wildlife near waterholes especially during dry season",
      "Be patient and use silent mode on your camera",
      "Carry extra batteries and memory cards",
    ],
  },
  {
    id: "horton-plains",
    name: "Horton Plains National Park",
    location: "Central Highlands, Sri Lanka",
    habitat: "Montane cloud forests, grasslands, dramatic escarpments",
    description:
      "Famous for World's End viewpoint and endemic highland species in a unique montane ecosystem.",
    detailedDescription:
      "Horton Plains National Park is a protected area in the central highlands of Sri Lanka, covered by montane grassland and cloud forest. The park is home to many species endemic to the region, including several endangered birds and mammals. The dramatic escarpment known as World's End offers breathtaking views across the southern plains of Sri Lanka, dropping nearly 1,000 meters.",
    bestSeason: "December to April (dry months)",
    keyWildlife: [
      { name: "Sambar Deer" },
      { name: "Purple-faced Langur (Montane subspecies)" },
      { name: "Sri Lanka Whistling Thrush" },
      { name: "Sri Lanka Bush Warbler" },
      { name: "Sri Lanka Wood Pigeon" },
      { name: "Dull-blue Flycatcher" },
      { name: "Yellow-eared Bulbul" },
      { name: "Sri Lanka White-eye" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Whistling Thrush" },
      { name: "Sri Lanka Bush Warbler" },
      { name: "Sri Lanka Wood Pigeon" },
      { name: "Dull-blue Flycatcher" },
      { name: "Yellow-eared Bulbul" },
      { name: "Sri Lanka White-eye" },
      { name: "Sri Lanka Spur Fowl" },
      { name: "Sri Lanka Junglefowl" },
    ],
    safetyNotes:
      "Weather can change rapidly; carry warm clothing and rain gear. Stay on marked trails, especially near World's End where there are steep drops. Be prepared for cool temperatures, especially in the early morning.",
    imageUrl: "https://duqjpivknq39s.cloudfront.net/2018/12/800x750-95.jpg",
    detailImageUrl:
      "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/wildlife-safaris-sri-lanka/wildlife-safaris-horton-plains-national-park-sri-lanka/01.jpg",
    hazards: [
      {
        type: "Weather",
        description:
          "Rapid weather changes with frequent mist and rain. Temperature can drop significantly.",
      },
      {
        type: "Terrain",
        description:
          "Slippery paths and steep drops, especially near World's End and Baker's Falls.",
      },
      {
        type: "Altitude",
        description: "High altitude (2,100-2,300m) may affect some visitors.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "No plastic allowed in the park",
        "Strictly no littering",
        "Stay on marked trails",
        "No feeding of animals",
        "Park opens at 6:00 AM, last entry at 4:00 PM",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      { name: "UNESCO World Heritage", url: "https://whc.unesco.org/" },
    ],
    photographyTips: [
      "Arrive early (before 10 AM) for best light and visibility",
      "Use a polarizing filter to reduce glare and enhance colors",
      "Wide-angle lens recommended for landscapes",
      "Macro lenses are great for endemic orchids and small wildlife",
      "Be prepared for misty conditions - protect your equipment",
      "Use a tripod for low-light conditions in the forest",
    ],
  },
  {
    id: "minneriya-kaudulla",
    name: "Minneriya / Kaudulla / Hurulu Eco-Park Complex",
    location: "North Central Sri Lanka",
    habitat: "Grasslands, scrub, tank (reservoir) systems",
    description:
      "Famous for 'The Gathering' - the world's largest seasonal gathering of Asian elephants.",
    detailedDescription:
      "The Minneriya-Kaudulla-Hurulu complex forms an important elephant corridor in Sri Lanka's dry zone. The area is most famous for 'The Gathering' where up to 300 elephants congregate around the Minneriya tank during the dry season (July-October), creating one of the most spectacular wildlife phenomena in Asia. The three parks together provide a year-round habitat for elephants and other wildlife.",
    bestSeason: "July to October (for The Gathering)",
    keyWildlife: [
      { name: "Asian Elephant (large herds)" },
      { name: "Toque Macaque" },
      { name: "Grey Langur" },
      { name: "Sambar Deer" },
      { name: "Spotted Deer" },
      { name: "Wild Boar" },
      { name: "Painted Stork" },
      { name: "Spoonbill" },
      { name: "Grey Heron" },
      { name: "Crested Hawk-Eagle" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Sri Lanka Woodshrike" },
      { name: "Crimson-fronted Barbet" },
    ],
    safetyNotes:
      "Maintain safe distance from elephants, especially during musth season. Follow guide instructions strictly. Be prepared for hot and dry conditions with plenty of water and sun protection.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/32/ee/32/kaudulla-national-park.jpg?w=700&h=-1&s=1",
    detailImageUrl:
      "https://duqjpivknq39s.cloudfront.net/2019/03/1920x570-35.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "Large elephant herds can be unpredictable, especially during musth season.",
      },
      {
        type: "Weather",
        description:
          "Extremely hot and dry conditions. Risk of dehydration and heat exhaustion.",
      },
      {
        type: "Terrain",
        description:
          "Dusty conditions during dry season. Water crossings may be required.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required for each park",
        "Only registered safari vehicles allowed",
        "Maintain safe distance from elephants",
        "No feeding or disturbing wildlife",
        "No off-road driving",
        "Strictly no plastic bottles",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      {
        name: "Elephant Research and Conservation",
        url: "https://www.elephantresearch.org/",
      },
    ],
    photographyTips: [
      "Use a zoom lens (100-400mm recommended) for elephant behavior shots",
      "Early morning and late afternoon provide best lighting",
      "Look for interesting interactions between elephants",
      "Use a polarizing filter to reduce glare from water",
      "Shoot in burst mode to capture action sequences",
      "Include the scenic tank (reservoir) in your compositions",
    ],
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    location: "South-Central Sri Lanka",
    habitat: "Grasslands and shrub forests, open landscapes",
    description:
      "Famous for guaranteed elephant sightings year-round in open grasslands.",
    detailedDescription:
      "Udawalawe National Park is one of the best places in the world to observe wild Asian elephants throughout the year. The park's open grasslands and shrub forests make wildlife viewing particularly rewarding. The Udawalawe Reservoir provides a permanent water source that attracts large numbers of elephants and other wildlife. The park is also home to a successful elephant transit home that rehabilitates orphaned elephant calves.",
    bestSeason: "Year-round (best November-April)",
    keyWildlife: [
      { name: "Asian Elephant (large herds)" },
      { name: "Spotted Deer" },
      { name: "Sambar Deer" },
      { name: "Wild Boar" },
      { name: "Water Buffalo" },
      { name: "Mugger Crocodile" },
      { name: "Grey Langur" },
      { name: "Jackal" },
      { name: "Crested Hawk-Eagle" },
      { name: "Painted Stork" },
      { name: "Cormorants" },
      { name: "Herons" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Spurfowl" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Crimson-fronted Barbet" },
    ],
    safetyNotes:
      "Maintain safe distance from elephants, especially during musth season. Follow guide instructions. The park can be very hot; bring sun protection and plenty of water.",
    imageUrl:
      "https://cdn.kimkim.com/files/a/content_articles/featured_photos/603c8b1f4520ffe62de040bb0f6c3b9dbaef8e14/medium-57a71ec19d57ee2467312d706e7b191f.jpg",
    detailImageUrl:
      "https://duqjpivknq39s.cloudfront.net/2019/01/800x750-29.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "Elephants can be aggressive, especially during musth and when with calves.",
      },
      {
        type: "Weather",
        description:
          "Extremely hot during the day. Risk of dehydration and heat stroke.",
      },
      {
        type: "Terrain",
        description: "Dusty conditions, especially during dry season.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Only registered safari vehicles allowed",
        "No off-road driving",
        "Maintain safe distance from wildlife",
        "No feeding of animals",
        "No plastic bottles allowed in the park",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      {
        name: "Udawalawe Elephant Transit Home",
        url: "https://www.defcopea.org/",
      },
    ],
    photographyTips: [
      "Use a telephoto lens (100-400mm recommended)",
      "Early morning and late afternoon provide best lighting",
      "Look for interesting elephant behaviors like mud-bathing",
      "Include the scenic Udawalawe Reservoir in your shots",
      "Use a polarizing filter to reduce glare",
      "Shoot in burst mode to capture action sequences",
    ],
  },
  {
    id: "sinharaja",
    name: "Sinharaja Forest Reserve",
    location: "South-Western Sri Lanka",
    habitat:
      "Primary and secondary lowland rainforest (UNESCO World Heritage site)",
    description:
      "UNESCO World Heritage Site famous for its endemic birds, mixed-species bird flocks, and rich biodiversity.",
    detailedDescription:
      "Sinharaja Forest Reserve is a UNESCO World Heritage Site and one of the last remaining primary tropical rainforests in Sri Lanka. This biodiversity hotspot is home to over 50% of Sri Lanka's endemic species of mammals and butterflies, as well as many kinds of insects, reptiles, and rare amphibians. The forest is particularly famous for its spectacular mixed-species bird flocks, making it a paradise for birdwatchers and wildlife photographers.",
    bestSeason: "January to April (driest months)",
    keyWildlife: [
      { name: "Red-faced Malkoha" },
      { name: "Sri Lanka Blue Magpie" },
      { name: "Green-billed Coucal" },
      { name: "Sri Lanka Spurfowl" },
      { name: "Purple-faced Langur" },
      { name: "Giant Squirrel" },
      { name: "Purple-faced Leaf Monkey" },
      { name: "Green Pit Viper" },
      { name: "Hump-nosed Lizard" },
      { name: "Sinharaja Tree Frog" },
    ],
    endemicSpecies: [
      { name: "Red-faced Malkoha" },
      { name: "Sri Lanka Blue Magpie" },
      { name: "Green-billed Coucal" },
      { name: "Sri Lanka Spurfowl" },
      { name: "Sri Lanka Hanging Parrot" },
      { name: "Sri Lanka Scimitar Babbler" },
      { name: "White-faced Starling" },
      { name: "Legge's Flowerpecker" },
      { name: "Sri Lanka White-headed Starling" },
      { name: "Purple-faced Leaf Monkey (subspecies)" },
    ],
    safetyNotes:
      "Wear leech socks (provided by most guides). Stay on marked trails. Be prepared for leeches, especially during and after rain. Carry rain gear as showers are frequent. Inform someone of your trekking plans.",
    imageUrl:
      "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/wildlife-safaris-sri-lanka/wildlife-safaris-sinharaja-forest-reserve-sri-lanka/01.jpg",
    detailImageUrl:
      "https://ceylontoday.lk/wp-content/uploads/2022/11/1-10-696x522.jpg",
    hazards: [
      {
        type: "Leeches",
        description:
          "Abundant in the rainforest, especially during and after rain.",
      },
      {
        type: "Slippery Trails",
        description: "Trails can be muddy and slippery, especially after rain.",
      },
      {
        type: "Weather",
        description:
          "Frequent rain showers. High humidity. Can be cool in the early morning.",
      },
      {
        type: "Wildlife",
        description:
          "Snakes and other potentially dangerous wildlife are present.",
      },
    ],
    permits: {
      managedBy: "Department of Forest Conservation",
      rules: [
        "Entry ticket required (different rates for locals/foreigners)",
        "Mandatory to be accompanied by an approved guide",
        "No collection of plants, animals, or other natural objects",
        "Stay on designated trails",
        "No loud noises that may disturb wildlife",
        "No smoking or open flames",
        "All litter must be carried out",
        "No plastic bottles allowed in the forest",
      ],
    },
    sources: [
      {
        name: "UNESCO World Heritage",
        url: "https://whc.unesco.org/en/list/405",
      },
      {
        name: "Department of Forest Conservation",
        url: "http://www.forestdept.gov.lk/",
      },
      {
        name: "Field Ornithology Group of Sri Lanka",
        url: "http://fogsl.net/",
      },
    ],
    photographyTips: [
      "Use a fast lens (f/2.8 or faster) due to low light conditions",
      "Carry a macro lens for insects, frogs, and plant details",
      "Use a telephoto lens (200-400mm) for birds",
      "Bring a tripod or monopod for stability in low light",
      "Use a polarizing filter to reduce glare on leaves",
      "Shoot in RAW format for better post-processing",
      "Be patient and move slowly to photograph birds and mammals",
      "Early morning (6-9 AM) is best for bird activity and photography",
    ],
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    location: "Southern Sri Lanka",
    habitat: "Lagoons, scrublands, sand dunes (Ramsar Wetland site)",
    description:
      "Ramsar Wetland famous for migratory waterbirds, especially flamingos, in a coastal ecosystem.",
    detailedDescription:
      "Bundala National Park is a UNESCO Biosphere Reserve and Ramsar Wetland that provides important habitat for migratory waterbirds. The park's complex system of lagoons, salt pans, and scrub jungle supports a rich biodiversity, including 197 bird species, 32 mammal species, and 48 reptile species. It is particularly important for migratory shorebirds that travel along the Central Asian Flyway.",
    bestSeason: "September to March (migratory bird season)",
    keyWildlife: [
      { name: "Greater Flamingo (seasonal)" },
      { name: "Lesser Flamingo (seasonal)" },
      { name: "Painted Stork" },
      { name: "Spot-billed Pelican" },
      { name: "Asian Elephant" },
      { name: "Marsh Crocodile" },
      { name: "Mugger Crocodile" },
      { name: "Grey Heron" },
      { name: "Black-headed Ibis" },
      { name: "Crested Hawk-Eagle" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Brown-capped Babbler" },
      { name: "Crimson-fronted Barbet" },
    ],
    safetyNotes:
      "Be cautious around water bodies due to crocodiles. The park can be extremely hot; bring sun protection and plenty of water. Follow guide instructions, especially when approaching water birds to avoid disturbing them.",
    imageUrl: "https://duqjpivknq39s.cloudfront.net/2019/03/800x750-88.jpg",
    detailImageUrl:
      "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/wildlife-safaris-sri-lanka/wildlife-safaris-bundala-national-park-sri-lanka/01.jpg",
    hazards: [
      {
        type: "Wildlife",
        description: "Crocodiles in water bodies. Elephants can be aggressive.",
      },
      {
        type: "Weather",
        description: "Extremely hot during the day. High UV exposure.",
      },
      {
        type: "Terrain",
        description:
          "Sandy and uneven terrain. Can be difficult to walk in some areas.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Only registered safari vehicles allowed",
        "No off-road driving",
        "No feeding or disturbing wildlife",
        "No loud noises",
        "No plastic bottles allowed in the park",
      ],
    },
    sources: [
      {
        name: "Ramsar Sites Information Service",
        url: "https://rsis.ramsar.org/",
      },
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      {
        name: "UNESCO Man and Biosphere Programme",
        url: "https://en.unesco.org/biosphere/aspac/bundala",
      },
    ],
    photographyTips: [
      "Use a telephoto lens (400mm or longer recommended for birds)",
      "Early morning and late afternoon provide best lighting",
      "Use a polarizing filter to reduce glare on water",
      "Shoot in RAW format for better post-processing",
      "Look for reflections in the water",
      "Be patient and wait for bird behavior shots",
      "Use a bean bag or tripod for stability",
    ],
  },
  {
    id: "kumana",
    name: "Kumana National Park (Yala East)",
    location: "Southeastern Sri Lanka",
    habitat: "Lagoons, mangroves, forests, coastal areas",
    description:
      "Famous for its birdlife, especially waterbirds, and coastal wildlife in a less-visited setting.",
    detailedDescription:
      "Kumana National Park, also known as Yala East, is a lesser-visited gem that offers excellent birdwatching opportunities, particularly during the nesting season from April to July. The park features a mix of coastal lagoons, mangrove swamps, and dry forests. Kumana is particularly important for its birdlife, with over 255 bird species recorded, including many migratory waterfowl that nest in the mangroves and on the shores of the park's many water bodies.",
    bestSeason: "April to July (nesting season)",
    keyWildlife: [
      { name: "Painted Stork" },
      { name: "Spoonbill" },
      { name: "Black-necked Stork" },
      { name: "Asian Openbill" },
      { name: "Lesser Adjutant" },
      { name: "Asian Elephant" },
      { name: "Leopard" },
      { name: "Sloth Bear" },
      { name: "Mugger Crocodile" },
      { name: "Sea Turtles (nesting on nearby beaches)" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Brown-capped Babbler" },
      { name: "Crimson-fronted Barbet" },
    ],
    safetyNotes:
      "Be cautious of elephants and leopards. The park is remote with limited facilities; bring all necessary supplies including water and food. Follow guide instructions at all times. Be prepared for hot and humid conditions.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/44/80/d7/leopard-at-kumana.jpg?w=1200&h=-1&s=1",
    detailImageUrl:
      "https://duqjpivknq39s.cloudfront.net/2019/01/800x750-33.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "Elephants and leopards can be dangerous. Maintain safe distance.",
      },
      {
        type: "Weather",
        description:
          "Extremely hot and humid. High risk of dehydration and heat exhaustion.",
      },
      {
        type: "Terrain",
        description:
          "Remote area with limited facilities and medical assistance.",
      },
      {
        type: "Marine",
        description:
          "Strong currents in coastal areas. Be cautious when near the ocean.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Only registered safari vehicles allowed",
        "No off-road driving",
        "No feeding or disturbing wildlife",
        "No loud noises",
        "No plastic bottles allowed in the park",
        "No overnight stays in the park",
        "No drones without special permission",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      { name: "BirdLife International", url: "https://www.birdlife.org/" },
    ],
    photographyTips: [
      "Use a telephoto lens (400-600mm recommended for birds)",
      "Early morning provides best lighting and bird activity",
      "Use a polarizing filter to reduce glare on water",
      "Shoot in RAW format for better post-processing",
      "Look for interesting bird behaviors like feeding and nesting",
      "Include the scenic lagoons and mangroves in your compositions",
      "Be patient and use a tripod or bean bag for stability",
    ],
  },
  {
    id: "wasgamuwa",
    name: "Wasgamuwa National Park",
    location: "Central-North Sri Lanka",
    habitat: "Dry mixed evergreen forest, grasslands",
    description:
      "Known for large elephant herds and diverse birdlife in a less-visited park.",
    detailedDescription:
      "Wasgamuwa National Park is one of the most important protected areas in Sri Lanka, known for its large elephant population and rich biodiversity. The park features a mix of dry mixed evergreen forest, riverine forest, and grasslands. It serves as an important corridor for elephants moving between Wasgamuwa and other protected areas. The park is less visited than Yala or Udawalawe, offering a more exclusive wildlife experience.",
    bestSeason: "July to September (dry season)",
    keyWildlife: [
      { name: "Asian Elephant (large herds)" },
      { name: "Sloth Bear" },
      { name: "Sambar Deer" },
      { name: "Spotted Deer" },
      { name: "Wild Boar" },
      { name: "Water Buffalo" },
      { name: "Mugger Crocodile" },
      { name: "Toque Macaque" },
      { name: "Grey Langur" },
      { name: "Crested Hawk-Eagle" },
      { name: "Painted Stork" },
      { name: "Peafowl" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Grey Hornbill" },
      { name: "Crimson-fronted Barbet" },
      { name: "Brown-capped Babbler" },
      { name: "Sri Lanka Spurfowl" },
    ],
    safetyNotes:
      "Be cautious around elephants, especially during musth season. The park is remote with limited facilities. Bring all necessary supplies including water, food, and first aid. Follow guide instructions at all times.",
    imageUrl:
      "https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2014/02/DSC_7368.jpg?ssl=1",
    detailImageUrl:
      "https://duqjpivknq39s.cloudfront.net/2019/03/800x750-91.jpg",
    hazards: [
      {
        type: "Wildlife",
        description:
          "Elephants can be aggressive, especially during musth and when with calves.",
      },
      {
        type: "Weather",
        description:
          "Extremely hot during the day. Risk of dehydration and heat stroke.",
      },
      {
        type: "Terrain",
        description:
          "Rough and dusty tracks. Can be difficult to navigate in some areas.",
      },
      {
        type: "Remoteness",
        description: "Limited facilities and medical assistance available.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Only registered safari vehicles allowed",
        "No off-road driving",
        "Maintain safe distance from wildlife",
        "No feeding of animals",
        "No plastic bottles allowed in the park",
        "No loud music or noises that may disturb wildlife",
        "No drones without special permission",
      ],
    },
    sources: [
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "Sri Lanka Tourism", url: "https://srilanka.travel/" },
      { name: "IUCN Red List", url: "https://www.iucnredlist.org/" },
    ],
    photographyTips: [
      "Use a telephoto lens (100-400mm recommended)",
      "Early morning and late afternoon provide best lighting",
      "Look for interesting elephant behaviors like mud-bathing",
      "Include the scenic landscapes in your shots",
      "Use a polarizing filter to reduce glare",
      "Shoot in burst mode to capture action sequences",
      "Be patient and wait for natural behaviors",
    ],
  },
  {
    id: "peak-wilderness",
    name: "Peak Wilderness Sanctuary",
    location: "Central Sri Lanka (Sri Pada/Adam's Peak region)",
    habitat: "Montane rainforest, cloud forest",
    description:
      "UNESCO World Heritage Site known for its endemic species and unique montane ecosystems.",
    detailedDescription:
      "The Peak Wilderness Sanctuary is a UNESCO World Heritage Site that encompasses the area around Sri Pada (Adam's Peak). This important watershed area features pristine montane rainforests and cloud forests that are home to an exceptional array of endemic species. The sanctuary is part of the Central Highlands of Sri Lanka World Heritage Site and is crucial for the conservation of the island's unique montane biodiversity.",
    bestSeason: "December to April (dry season)",
    keyWildlife: [
      { name: "Purple-faced Langur (Highland subspecies)" },
      { name: "Sri Lanka Leopard" },
      { name: "Sambar Deer" },
      { name: "Giant Squirrel" },
      { name: "Sri Lanka Whistling Thrush" },
      { name: "Sri Lanka Bush Warbler" },
      { name: "Sri Lanka White-eye" },
      { name: "Yellow-eared Bulbul" },
      { name: "Sri Lanka Wood Pigeon" },
      { name: "Sri Lanka Spurfowl" },
    ],
    endemicSpecies: [
      { name: "Sri Lanka Whistling Thrush" },
      { name: "Sri Lanka Bush Warbler" },
      { name: "Sri Lanka White-eye" },
      { name: "Yellow-eared Bulbul" },
      { name: "Sri Lanka Wood Pigeon" },
      { name: "Sri Lanka Spurfowl" },
      { name: "Sri Lanka Junglefowl" },
      { name: "Sri Lanka Hanging Parrot" },
      { name: "Sri Lanka Blue Magpie" },
      { name: "Sri Lanka Scimitar Babbler" },
      { name: "Sri Lanka Hill Myna" },
    ],
    safetyNotes:
      "Be prepared for cool and wet conditions. Trails can be steep and slippery. Carry warm clothing and rain gear. Start hikes early to avoid afternoon mists. Be cautious of leeches. Inform someone of your trekking plans.",
    imageUrl:
      "https://touristdirectory.lk/assets/img/article/cover/nawadankulama-tank-sanctuary-cover.jpg",
    detailImageUrl:
      "https://touristdirectory.lk/assets/img/article/cover/horton-plains-cover.jpg",
    hazards: [
      {
        type: "Weather",
        description:
          "Rapid weather changes with frequent mist, rain, and cold temperatures.",
      },
      {
        type: "Terrain",
        description:
          "Steep, slippery trails with uneven surfaces. Risk of falls.",
      },
      {
        type: "Altitude",
        description: "High altitude (up to 2,243m) may affect some visitors.",
      },
      {
        type: "Leeches",
        description:
          "Abundant in the rainforest, especially during and after rain.",
      },
      {
        type: "Wildlife",
        description:
          "Snakes and other potentially dangerous wildlife are present.",
      },
    ],
    permits: {
      managedBy: "Department of Wildlife Conservation (DWC)",
      rules: [
        "Entry ticket required",
        "Recommended to hire a local guide",
        "No collection of plants, animals, or other natural objects",
        "Stay on designated trails",
        "No loud noises that may disturb wildlife",
        "No smoking or open flames",
        "All litter must be carried out",
        "No plastic bottles allowed in the sanctuary",
        "No camping except in designated areas",
        "No drones without special permission",
      ],
    },
    sources: [
      {
        name: "UNESCO World Heritage",
        url: "https://whc.unesco.org/en/list/1203",
      },
      {
        name: "Department of Wildlife Conservation",
        url: "https://www.dwc.gov.lk/",
      },
      { name: "BirdLife International", url: "https://www.birdlife.org/" },
    ],
    photographyTips: [
      "Use a fast lens (f/2.8 or faster) due to low light conditions in the forest",
      "Carry a macro lens for insects, frogs, and plant details",
      "Use a telephoto lens (200-400mm) for birds and mammals",
      "Bring a tripod for low-light conditions and landscapes",
      "Use a polarizing filter to reduce glare on leaves and enhance colors",
      "Shoot in RAW format for better post-processing",
      "Be patient and move slowly to photograph birds and mammals",
      "Early morning (6-9 AM) is best for bird activity and photography",
      "Look for interesting compositions with mist and light beams in the forest",
      "Be prepared for rain - protect your equipment with appropriate covers",
    ],
  },
];

export default parkData;
