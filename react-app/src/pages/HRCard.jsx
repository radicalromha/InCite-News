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

function RightsCard() {
  return (
    <Card maxW="ex">
      <CardBody>
        <Image src={HumanRights} alt="Human Rights" />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            High Commissioner for Human Rights (OHCHR)
          </Heading>
          <Text>
            Human rights are rights we have simply because we exist as human
            beings - they are not granted by any state. These universal rights
            are inherent to us all, regardless of nationality, sex, national or
            ethnic origin, color, religion, language, or any other status. They
            range from the most fundamental - the right to life - to those that
            make life worth living, such as the rights to food, education, work,
            health, and liberty. The Universal Declaration of Human Rights
            (UDHR), adopted by the UN General Assembly in 1948, was the first
            legal document to set out the fundamental human rights to be
            universally protected. The UDHR, which turns 75 on 10 December 2023,
            continues to be the foundation of all international human rights
            law. Its 30 articles provide the principles and building blocks of
            current and future human rights conventions, treaties and other
            legal instruments.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.ohchr.org/en/ohchr_homepage" isExternal>
            <Button variant="solid" colorScheme="blue">
              Visit ohchr
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default RightsCard;
