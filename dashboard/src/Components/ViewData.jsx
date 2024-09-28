// src/components/ViewData.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
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
  TableCaption,
  TableContainer,
  Button,
  Stack,
} from "@chakra-ui/react";
import { deleteHotel, getAllHotelData } from "../../Services/services";
import { useHotelRegistrationContext } from "../Context/HotelRegistrationPageContext";
import toast from "react-hot-toast";
import { databases } from "../../appwrite";
import { Link, Router } from "react-router-dom";

function ViewData({
  hotelDBDataResponse,
  handleSubmit,
  handleDeleteHotel,
  handleClearAllHotels,
  clearForm,
  editHotel,
}) {
  function convertToGoogleMapsUrl(coordinates) {
    // Split the coordinates string by the comma
    const [latitude, longitude] = coordinates.split(",");

    // Generate the Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude.trim()},${longitude.trim()}`;

    return googleMapsUrl;
  }

  return (
    <Container maxW="container" centerContent>
      <Heading size="md" mb={4} textAlign="center">
        Hotels Registered
      </Heading>

      <TableContainer>
        <Table
          variant="striped"
          size="sm"
          maxW="60%"
          align="center"
          cellSpacing={0}
        >
          <TableCaption>Hotel Data</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Room Type</Th>
              <Th>Min Rent</Th>
              <Th>Max Rent</Th>
              <Th>Contact</Th>
              <Th>Location</Th>
              <Th>Food </Th>
              <Th>Parking</Th>
              <Th>Details</Th>
              <Th>Flagged</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {hotelDBDataResponse.map((hotel) => (
              <Tr key={hotel.$id}>
                <Td>{hotel.HotelName}</Td>
                <Td>{hotel.HotelAddress}</Td>
                <Td>{hotel.HotelRoomType}</Td>
                <Td>{hotel.HotelRentMin}</Td>
                <Td>{hotel.HotelRentMax}</Td>
                <Td>{hotel.HotelContact}</Td>
                <Td className="text-blue-600">
                  <a
                    href={convertToGoogleMapsUrl(hotel.HotelLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {convertToGoogleMapsUrl(hotel.HotelLocation)}
                  </a>
                </Td>
                <Td>{hotel.HotelFoodFacility}</Td>
                <Td>{hotel.HotelParking}</Td>
                <Td>{hotel.HotelDetails}</Td>
                <Td>{hotel.isHotelFlagged ? "Yes" : "No"}</Td>
                <Td>
                  <Stack direction="row" spacing={2}>
                    <Link to={`/edithotel/${hotel.$id}`}>
                      <Button
                        colorScheme="blue"
                        size="xs"
                        onClick={() => editHotel()}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      colorScheme="red"
                      size="xs"
                      onClick={() => handleDeleteHotel(hotel.$id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ViewData;
