import { Divider, Grid, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack as="footer" layerStyle="layoutBlock" spacing={8}>
      <Divider />

      <Text fontSize={['xs', 'sm']}>
        &copy; 2023 - {new Date().getFullYear()}{' '}
        <Link href="https://github.com/Strxangxl" target="_blank">
          Ratandeep Singh
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
