import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import AddSiteModal from './AddSiteModal';

function EmptyState() {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>let's get started.</Text>
      <AddSiteModal>Add your first Site</AddSiteModal>
    </Flex>
  );
}

export default EmptyState;
