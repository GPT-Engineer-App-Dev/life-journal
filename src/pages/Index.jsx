import { Box, VStack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { FaPenFancy } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl">Welcome to My Personal Blog</Heading>
        <Text mt={4}>Join me on my journey through coding, technology, and creativity.</Text>
      </Box>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="/images/profile.jpg"
        alt="Profile Image"
      />
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl">Latest Posts</Heading>
        <Text mt={4}>Discover the most recent insights and stories I've shared.</Text>
        <Button rightIcon={<FaPenFancy />} colorScheme="teal" variant="solid" mt={4}>
          Read More
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;