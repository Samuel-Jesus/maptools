import { Flex, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common");
  return (
    <Flex direction="column" gap="2">
      <Text>{t("welcome")}</Text>
      <Text>Text</Text>
    </Flex>
  );
}
