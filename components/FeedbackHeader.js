import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/breadcrumb';
import { Flex, Heading } from '@chakra-ui/layout';

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Feedback
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={4}>My Feedback</Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
