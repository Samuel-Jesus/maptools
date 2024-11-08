import { Box, Card, Text } from "@radix-ui/themes";
import { BicepsFlexed } from "lucide-react";

export default function page() {
  return (
    <Box
      py="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Box>
        <Card size="4">
          <BicepsFlexed />
        </Card>
        <Text align={"center"} size={"1"}>
          Ferramentas
        </Text>
      </Box>
      <Box>
        <Card size="4">
          <BicepsFlexed />
        </Card>
        <Text size={"1"}>Menu</Text>
      </Box>
    </Box>
  );
}
