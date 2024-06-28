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
import Enviroment from "../assets/enviromentprogram.jpg";

function EnviroCard() {
  return (
    <Card maxW="ex">
      <CardBody>
        <Image src={Enviroment} alt="The United Nations Enviroment Programme" />
        <Stack mt="6" spacing="3">
          <Heading size="md">United Nations Enviroment Program</Heading>
          <Text>
            The United Nations Environment Programme (UNEP) tackles critical
            environmental challenges by aligning its efforts with various
            Sustainable Development Goals (SDGs). It combats poverty (Goal 1) by
            promoting sustainable livelihoods and environmental health. UNEP
            supports the transition to affordable and clean energy (Goal 7) by
            advocating for renewable energy solutions. It addresses climate
            action (Goal 13) through initiatives aimed at mitigating and
            adapting to climate change impacts. UNEP fosters sustainable cities
            and communities (Goal 11) by promoting green infrastructure and
            resilience planning. It champions responsible consumption and
            production (Goal 12) by encouraging sustainable practices and
            reducing waste. UNEP protects life below water (Goal 14) and life on
            land (Goal 15) by implementing conservation programs and protecting
            biodiversity. Through these integrated efforts, UNEP works towards a
            healthier planet and more sustainable future.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.unep.org/" isExternal>
            <Button variant="solid" colorScheme="blue">
              unep
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default EnviroCard;
