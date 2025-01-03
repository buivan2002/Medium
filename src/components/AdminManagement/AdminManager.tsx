'use client'
import { Alert, Button, Grid, Text } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

export default function AdminManager() {
    const icon = <IconHeart />;

    const handleClick = () => {
        <Alert title="Alert title" icon={icon} withCloseButton>
            <Text> Danh Sách Admin - Tạo mới            </Text>
            
       </Alert>

    }
  return (
    <Grid grow gutter="xl" columns={12} p="lg">
      <Grid.Col span={4}>Danh Sách Admin      </Grid.Col>
      <Grid.Col span={4} offset={4}>
    <Button variant="filled" 
      onClick={handleClick}>
      Tạo mới
    </Button>
    </Grid.Col>
    </Grid>
  );
}