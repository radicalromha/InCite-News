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
import UnWoman from "../assets/unwomen.jpg";

function WoCard() {
  return (
    <Card maxW="ex" bgColor="#76ABAE" color="white">
      <CardBody>
        <Image
          src={UnWoman}
          alt="The United Nations Entity for Gender Equality and the Empowerment of Women"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">United Nations Women</Heading>
          <Text>
            UN Women tackles a wide range of issues to promote gender equality
            and empower women globally. It supports women's leadership and
            political participation by advocating for equal representation in
            all levels of governance. Economic empowerment is pursued through
            initiatives that invest in women's economic activities, aiming to
            reduce poverty and boost inclusive growth. To end violence against
            women, UN Women implements programs addressing physical, sexual, and
            mental abuses. In peace and security, it ensures women’s full
            participation in peace processes and security efforts. Humanitarian
            action focuses on gender-responsive humanitarian aid in
            crisis-affected areas. UN Women also aids in governance and national
            planning by integrating gender perspectives into policies and
            budgets. It emphasizes youth and gender equality, recognizing the
            importance of young leaders in driving progress. Additionally, it
            champions the rights of women and girls with disabilities, promoting
            disability inclusion and combating discrimination. Through these
            comprehensive efforts, UN Women strives to create a more equitable
            and just world for women and girls.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex justify="center" width="100%">
          <Link href="https://www.unwomen.org/en" isExternal>
            <Button variant="solid" colorScheme="blue">
              unwomen
            </Button>
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default WoCard;
