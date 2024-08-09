// src/components/ViewData.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const ViewData = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Hotel One",
      address: "123 Street, City",
      type: "Veg",
      Rent: 100,

      contact: "1234567890",
      location: "https://maps.google.com",
      roomType: "AC",
      facilities: ["WiFi", "Breakfast"],
      features: ["Parking", "Swimming Pool"],
      details: "Near beach",
      flagged: false,
    },
    // Add more hotel objects here as needed
  ]);

  const deleteHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  const editHotel = (id) => {
    // Add your edit logic here
    console.log("Edit hotel with id:", id);
  };

  return (
    <Container maxW="container.lg" py={8} centerContent>
      <Heading size="md" mb={4} textAlign="center">
        Hotels Registered
      </Heading>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={8}
        width="120%"
      >
        <div className="table-responsive flex justify-center items-center  ">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr bg={useColorModeValue("gray.100", "gray.700")}>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Type</Th>
                <Th>Rent</Th>
                <Th>Contact</Th>
                <Th>Location</Th>
                <Th>Room Type</Th>
                <Th>Facilities</Th>
                <Th>Features</Th>
                <Th>Details</Th>
                <Th>Flagged</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {hotels.map((hotel) => (
                <Tr key={hotel.id}>
                  <Td>{hotel.name}</Td>
                  <Td>{hotel.address}</Td>
                  <Td>{hotel.type}</Td>
                  <Td>{hotel.Rent}</Td>
                  <Td>{hotel.contact}</Td>
                  <Td>
                    <a
                      href={hotel.location}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </Td>
                  <Td>{hotel.roomType}</Td>
                  <Td>{hotel.facilities.join(", ")}</Td>
                  <Td>{hotel.features.join(", ")}</Td>
                  <Td>{hotel.details}</Td>
                  <Td>{hotel.flagged ? "Yes" : "No"}</Td>
                  <Td className="flex justify-center items-center">
                    <Button
                      colorScheme="blue"
                      size="xs"
                      mr={2}
                      onClick={() => editHotel(hotel.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={() => deleteHotel(hotel.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </Box>
    </Container>
  );
};

export default ViewData;
