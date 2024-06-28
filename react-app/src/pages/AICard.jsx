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
import Amnesty from "../assets/amnesty.jpg";

function AmnesCard() {
  return (
    <Card maxW="ex">
      <CardBody>
        <Image src={Amnesty} alt="Amnesty International" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Amnesty International</Heading>
          <Text>
            Amnesty International addresses a broad spectrum of human rights
            issues through advocacy, research, and action. It combats armed
            conflict, promotes arms control, and protects child rights. The
            organization tackles climate change and corporate accountability,
            campaigns against the death penalty, and fights against unlawful
            detention and disappearances. It stands against discrimination,
            advocates for drug policy reform, and champions economic, social,
            and cultural rights. Amnesty defends freedom of expression, supports
            indigenous peoples, and pursues international justice. It protects
            the rights of older people, opposes police brutality, and advocates
            for refugees, asylum seekers, and migrants. The organization also
            promotes sexual and reproductive rights, fights against torture, and
            upholds the principles of the Universal Declaration of Human Rights.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.amnesty.org/en/" isExternal>
            <Button variant="solid" colorScheme="blue">
              amnesty
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default AmnesCard;
