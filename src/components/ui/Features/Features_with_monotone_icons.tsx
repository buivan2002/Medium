
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';
import { MOCKDATA } from '@/components/bodyMain/BodyFour';
import { MOCKDATA5 } from '@/components/bodyMain/BodyFive';

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature4({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="white" lh={1.6}  fw={200}   style={{ opacity: 0.6 }}

      >
        {description}
      </Text>
    </div>
  );
}
export function Feature5({ icon: Icon, title, description }: FeatureProps) {
    return (
      <div>
        <ThemeIcon variant="light" size={40} radius={40}>
          <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ThemeIcon>
        <Text mt="sm" mb={7} fs="italic" fw={400}         c="#777"
        >
  {title}
</Text>
<Text size="sm"  lh={1.6} fw={700} fs="normal"         c="#333"
>
  {description}
</Text>


      </div>
    );
  }

export function FeaturesGrid({ source }: { source: string }) {
    if (source === 'bodyfour') {
      const features = MOCKDATA.map((feature, index) => <Feature4 {...feature} key={index}  />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Cung Cấp Dịch Vụ
      </Title>

      <Container size={560} p={0}>
        <Text size="md" className={classes.description}>
        Với hơn 10 năm kinh nghiệm cung cấp dịch vụ quản lý cho cơ sở bán lẻ thuốc.
        Chúng tôi biết bạn cần:
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
if (source === 'bodyfive') {
    const features = MOCKDATA5.map((feature, index) => <Feature5 {...feature} key={index}  />);

    return (
        <Container className={classes.wrapper}>
          <Title className={classes.title}>What our clients say

          </Title>

    
          <SimpleGrid
            mt={60}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'xl', md: 50 }}
          >
            {features}
          </SimpleGrid>
        </Container>
      );
}
}