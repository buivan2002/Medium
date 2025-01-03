import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Tổng số cửa hàng',
    description:
        'Tháng trước: 0 Cửa hàng <br /> Tháng này: 0 Cửa hàng',
    icon: IconGauge,
  },
  {
    title: 'Tình trạng thanh toán',
    description:
    'Tháng trước: 0 Cửa hàng <br /> Tháng này: 0 Cửa hàng',
    icon: IconUser,
  },
  
];

export default function LayerDashboard() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        
      </Text>
      <div dangerouslySetInnerHTML={{ __html: feature   .description }} />

    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}