import { Flex, FlexProps, Text } from "@chakra-ui/react";

interface SectionHeaderProps extends FlexProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  ...rest
}: SectionHeaderProps) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Text fontSize={["28px", "42px"]} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={["15px", "28px"]} fontWeight="bold">
        {subtitle}
      </Text>
    </Flex>
  );
};
