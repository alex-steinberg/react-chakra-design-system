import React, { FC } from "react";
import { Heading, Link, Text } from "@chakra-ui/react";
import CenteredBox from "../../../common/CenteredBox";

const ChallengeBlurb: FC = () => {
  return (
    <CenteredBox
      display="flex"
      flexFlow="column nowrap"
      alignItems="flex-start"
      px={{ base: "4", md: "8", lg: "14" }}
    >
      <Heading>My world today</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        doloremque ea laborum maxime molestias nihil numquam perferendis
        voluptas! A aliquid dolores ex expedita, magni modi possimus praesentium
        sunt. Et, sunt! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. A, alias assumenda dolorum, ea eius expedita harum inventore
        labore magnam nobis nulla possimus quis quos reiciendis sapiente sint
        sunt vel veniam. <Link>View all days</Link> A accusantium ad aliquid
        architecto autem cumque dolore, enim esse fuga itaque laborum magni
        maxime molestiae, obcaecati officia officiis optio praesentium,
        quibusdam quis ratione sint tempore totam voluptatem voluptatibus
        voluptatum. Illo modi molestiae quod. Dicta doloremque incidunt
        inventore, nam nisi obcaecati rerum suscipit. A ad adipisci error, iusto
        laborum maiores perferendis quaerat quasi quia quod suscipit, ullam ut
        vitae? Alias.
      </Text>
    </CenteredBox>
  );
};

export default ChallengeBlurb;
