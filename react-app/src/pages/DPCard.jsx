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
import HumanRights from "../assets/humanrights.jpg";
import DevelopmentProgram from "../assets/devlopmentprogram.jpg";

function DevCard() {
  return (
    <Card maxW="ex">
      <CardBody>
        <Image
          src={DevelopmentProgram}
          alt="United Nations Development Programme"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            The United Nations Development Programme (UNDP)
          </Heading>
          <Text>
            The UNDP tackles a wide range of global challenges by focusing on
            interconnected strategies. It addresses poverty and inequality by
            investing in people’s capabilities to move above the poverty line
            and sustain progress. To enhance governance, UNDP helps countries
            manage risk and adapt to emerging complexities with future-proofing
            strategies. It supports building resilience against shocks such as
            conflict, climate change, and epidemics. UNDP prioritizes
            environmental sustainability by integrating nature into national
            planning and management. It works to increase energy access and
            promote a just transition to sustainable energy systems. The
            organization also champions gender equality by transforming
            economic, political, and social structures that perpetuate
            discrimination. In the digital realm, UNDP supports the creation of
            inclusive, ethical, and sustainable digital societies. It drives
            strategic innovation to make systems adaptive and resilient and
            partners with various sectors to align financial flows with
            sustainable development goals, mobilizing finance at scale for
            impactful development.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.undp.org/" isExternal>
            <Button variant="solid" colorScheme="blue">
              Visit undp
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default DevCard;
