import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Image,
  Divider,
  Button,
  ButtonGroup,
  Flex,
  Link,
} from "@chakra-ui/react";
import WorldBank from "../assets/worldbank.jpg";

function WorldCard() {
  return (
    <Card maxW="ex">
      <CardBody>
        <Image src={WorldBank} alt="The World Bank" />
        <Stack mt="6" spacing="3">
          <Heading size="md">The World Bank</Heading>
          <Text>
            The World Bank tackles critical global challenges by focusing on
            food security, climate change, data accessibility, and institutional
            improvement. It ensures food security by promoting access to safe,
            nutritious food for all people at all times. As the largest
            multilateral funder of climate investments in developing countries,
            the World Bank addresses the interconnected issues of climate
            change, poverty, and inequality. Its Open Data site democratizes
            access to valuable data, enabling users to download and utilize
            information freely. Committed to building a better bank, the World
            Bank aims to be a more effective partner to governments, the private
            sector, and the people it serves by enhancing its speed, efficiency,
            and overall impact.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.worldbank.org/en/home" isExternal>
            <Button variant="solid" colorScheme="blue">
              worldbank
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default WorldCard;
