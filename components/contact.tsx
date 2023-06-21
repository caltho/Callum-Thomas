import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";

export default function Contact() {
  const { onCopy, value, setValue, hasCopied } = useClipboard(
    "callumdavidthomas@gmail.com"
  );
  const toast = useToast();
  return (
    <Flex direction="column" height="50vh">
      <Container>
        <Heading color="white" m={3}>
          Contact
        </Heading>
        <Text color="white" fontSize="xl" m={3}>
          For inquiries please drop me a line at:
        </Text>
        <Button
          m={3}
          size="lg"
          colorScheme="green"
          onClick={() => {
            onCopy;
            toast({
              title: "Contact copied.",
              description: "Woo hoo! You've copied my email to your clipboard.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          callumdavidthomas@gmail.com
        </Button>
      </Container>
    </Flex>
  );
}

function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
