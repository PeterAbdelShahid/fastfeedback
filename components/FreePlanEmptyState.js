import { Button } from '@chakra-ui/button';
import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import DashboardShell from './DashboardShell';

function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <Box
        width="100%"
        backgroundColor="white"
        borderRadius={8}
        p={8}
        opacity={1}
      >
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today , then grow with us</Text>
        <Button variant="solid" size="md" colorScheme="blackAlpha">
          Upgrade to Starter
        </Button>
      </Box>
    </DashboardShell>
  );
}

export default FreePlanEmptyState;
