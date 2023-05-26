"use client";

import { Flex, Center } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Center pt={20}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe2SjBJLZYIjyxKWEeGpV2TxIkmFl5gfSlMjt3p7PE6CorWTw/viewform?embedded=true"
        width="640"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Center>
  );
}
