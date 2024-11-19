// src/components/ui/Header_with_mega_menu.tsx
import '@mantine/core/styles.css';

import {
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Image,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    
    IconCode,
    
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';
//   import '@mantine/core/styles.layer.css';

  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    // Add other items
  ];
  
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box pb={136} >
        <header style={{ height: '80px', padding: '20px 0' }} className={classes.header}>
          <Group justify="space-between" h="100%">
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <Text mr="200px">  </Text>
              <a href="#" className={classes.link}>
                <Image src="/images/img/logoMPthuoc2.png" alt="Logo" w="50px" h="30px" />
              </a>
              <Text mr="350px">  </Text>
              <a href="#" style={{ color: '#555', textDecoration: 'none' }} className={classes.link} >TRANG CHỦ</a>
              <a href="#" style={{ color: '#555', textDecoration: 'none' }} className={classes.link}>SẢN PHẨM</a>
              <a href="#" style={{ color: '#555', textDecoration: 'none' }} className={classes.link}>HƯỚNG DẪN</a>
              <a href="#" style={{ color: '#555', textDecoration: 'none' }} className={classes.link}>GIỚI THIỆU</a>
            </Group>
            
  
            <Group visibleFrom="sm" mr="100px">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title=""
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <a href="#" className={classes.link}>Home</a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>Features</Box>
                <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>Learn</a>
            <a href="#" className={classes.link}>Academy</a>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
  