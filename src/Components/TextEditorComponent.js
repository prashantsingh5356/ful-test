import { useRef } from 'react';

import { Box, HStack, IconButton, VStack } from '@chakra-ui/react';

import { FaBold, FaItalic } from 'react-icons/fa';

const TextEditorComponent = () => {
  const textBoxRef = useRef();

  // handling text (bold and italic)
  const editTextHandler = opType => {
    const selectedText = window.getSelection().toString();
    const orgText = textBoxRef.current.innerHTML;

    if (opType === 'bold') {
      const updatedText = selectedText.bold();
      const boldedText = orgText.replace(selectedText, updatedText);
      textBoxRef.current.innerHTML = boldedText;
    }

    if (opType === 'italic') {
      const updatedText = selectedText.italics();
      const italicText = orgText.replace(selectedText, updatedText);
      textBoxRef.current.innerHTML = italicText;
    }
  };

  return (
    <Box
      w={'80%'}
      h={'50vh'}
      bg={'blue.100'}
      p={'5px'}
      borderRadius={'5px'}
      overflow={'hidden'}
    >
      <VStack>
        <Box
          w={'100%'}
          h={'8vh'}
          display={'flex'}
          alignItems={'center'}
          p={'5px'}
        >
          <HStack>
            <IconButton
              variant="outline"
              colorScheme="telegram"
              aria-label="Bold"
              fontSize="20px"
              icon={<FaBold />}
              onClick={() => {
                editTextHandler('bold');
              }}
            />
            <IconButton
              variant="outline"
              colorScheme="telegram"
              aria-label="Italic"
              fontSize="20px"
              icon={<FaItalic />}
              onClick={() => {
                editTextHandler('italic');
              }}
            />
          </HStack>
        </Box>
        <Box
          ref={textBoxRef}
          w={'100%'}
          h={'40vh'}
          contentEditable={'true'}
          textAlign={'left'}
          border={'2px solid black'}
          borderRadius={'5px'}
          bg={'white'}
        >
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS. As of 2022, 98% of websites use JavaScript on the client side for
          webpage behavior, often incorporating third-party libraries.
        </Box>
      </VStack>
    </Box>
  );
};

export default TextEditorComponent;
