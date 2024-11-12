"use client";
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Text,
} from "@radix-ui/themes";
import { redirect } from "next/navigation";

export default function page() {
  type Elements = {
    id: number;
    name: string;
    url: string;
    description: string;
    category: string;
  };
  const elements = [
    {
      id: 1,
      name: "drawdb",
      url: "https://drawdb.vercel.app/editor",
      description:
        "DrawDB é uma ferramenta para criação de diagramas de banco de dados",
      category: "DataBases",
    },
    {
      id: 2,
      name: "drawdb",
      url: "https://drawdb.vercel.app/editor",
      description:
        "DrawDB é uma ferramenta para criação de diagramas de banco de dados",
      category: "DataBases",
    },
    {
      id: 3,
      name: "drawdb",
      url: "https://drawdb.vercel.app/editor",
      description:
        "DrawDB é uma ferramenta para criação de diagramas de banco de dados",
      category: "DataBases",
    },
  ];
  return (
    <Container>
      <Text size="7">Ferramentas</Text>
      <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
        {elements?.map((element: Elements) => {
          return (
            <Box
              key={element?.id}
              maxWidth="240px"
              onClick={() => redirect(element?.url)}
            >
              <Card>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {element?.name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      {element?.description}
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
}
