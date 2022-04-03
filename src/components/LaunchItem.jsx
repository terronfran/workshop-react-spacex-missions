import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch) {
    return (
        <Box bg="gray.300" p={4} m={4} borderRadius="lg" >
          <Flex>
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong>(
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "Green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" />
            <Text fontSize="sm" ml={1} color="gray.500">
              {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
            </Text>
          </Flex>
         <Button colorScheme="purple" mt={2} >More Details</Button> 
        </Box>
    )
}