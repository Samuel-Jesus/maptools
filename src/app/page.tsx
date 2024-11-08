import { Button, Flex, Text, ThemePanel } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Lets go</Button>
      <ThemePanel />
    </Flex>
  );
}
