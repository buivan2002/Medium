'use client'

import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { Center, Grid, Stack, Text, Tooltip, UnstyledButton, AppShell, Group, Burger, Skeleton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimal.module.css';
import LayerDashboard from '../DashBoard/1dashboard';
import AdminManager from '../AdminManagement/AdminManager';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Dashboard' },
  { icon: IconGauge, label: 'Quản lý Admin' },
  { icon: IconDeviceDesktopAnalytics, label: 'Quản lý Đại lý' },
  { icon: IconUser, label: 'Danh sách cửa hàng' },
];

const components = [
  <LayerDashboard />,
  <AdminManager />,
  <Text>Agency Management Content</Text>, // Nội dung cho Quản lý Đại lý
  <Text>Store List Content</Text>, // Nội dung cho Danh sách cửa hàng
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0); // Chọn mặc định là Dashboard (index 0)
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened((prev) => !prev);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)} // Cập nhật active index khi click
    />
  ));

  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        
        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>
        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        {/* Hiển thị component dựa trên active index */}
        {components[active]}
      </AppShell.Main>
    </AppShell>
  );
}
