"use client";
import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  IconButton,
  Spinner,
  Img,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCompass,
  FiSettings,
  FiMenu
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactNode } from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { useSaldo } from '../providers/saldocontext';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Menu', icon: FiHome },
  { name: 'Explorar', icon: FiCompass },
  { name: 'Configurações', icon: FiSettings },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { saldo, loading } = useSaldo();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.100', 'gray.700')}
      w={{ base: 'full', md: '250px' }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex alignItems="center">
        <Box marginLeft={10} marginBottom={-10}>
          <Img
            boxSize='150px'
            src='/gastei.svg'
            alt="Logo"
          />
        </Box>
        <Box display={{ base: 'flex', md: 'none' }} marginLeft={150}>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Box>
      </Flex>
      <Flex h="20" alignItems="center" mx="8">
        <Text fontSize="md" fontWeight="bold" display='flex' alignItems='center'>
          Seu saldo:
        </Text>
        {loading ? <Spinner size='xs' color='green.500' ml={2} /> :
          <Text fontSize="md" fontWeight="bold" ml={2}>{`R$ ${saldo}`}</Text>}
      </ Flex>
      {
        LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))
      }
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#3E8914',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { saldo, loading } = useSaldo();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="60px"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
        <FcMoneyTransfer style={{ marginLeft: 10,}} />{loading ? <Spinner size='xs' color='green.500' ml={2} /> :
          <Text fontSize="md" fontWeight="bold" ml={2}>{`R$ ${saldo}`}</Text>}
    </Flex>
  );
}
