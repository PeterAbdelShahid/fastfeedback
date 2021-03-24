import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Code, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import EmptyState from '@/components/EmptyState';
import { useRef } from 'react';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')){
            window.location.href = "/dashboard"
          }
          `
          }}
        />
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Icon viewBox="0 0 46 32" color="black" boxSize="32px">
        <path
          fill="currentColor"
          d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
        />
      </Icon>
      <Text>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {' is being built as part of '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try out by logging in.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          size="sm"
          fontWeight="medium"
          href="/dashboard"
          colorScheme="blackAlpha"
        >
          View Dashboard
        </Button>
      ) : (
        <Button
          mt={4}
          colorScheme="blackAlpha"
          size="sm"
          fontWeight="medium"
          onClick={() => auth.signinWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
}
