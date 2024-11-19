import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, Box } from '@mantine/core';
import clsx from 'clsx';
import '../../../app/globals.css'
import classes from './FeaturesImages.module.css';

const data = [
  {
    image: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/477709Viu/anh-mo-ta.png',
    title: 'Dễ dàng sử dụng',
    description: 'Giao diện thân thiện và trực quan, phù hợp cho mọi nhân viên, không cần nhiều thời gian đào tạo hay kiến thức kỹ thuật chuyên sâu.',
  },
  {
    image: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/06/icon-dong-14.jpg',
    title: 'Hiệu quả tối đa',
    description: 'Tích hợp các chức năng quản lý bán hàng, kiểm soát tồn kho, quản lý đơn thuốc, và báo cáo kinh doanh một cách chính xác và nhanh chóng.',
  },
  {
    image: 'https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1601387630_846_Tong-hop-nhung-hinh-anh-Icon-dang-yeu-cute-nhat.jpg',
    title: 'Dịch vụ tận tình',
    description: 'Đội ngũ chăm sóc khách hàng chuyên nghiệp luôn sẵn sàng hỗ trợ và giải quyết mọi vấn đề kỹ thuật, giúp bạn yên tâm kinh doanh.',
  },
  {
    image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/02/icon-cute-facebook.jpg',
    title: 'Hỗ trợ lâu dài',
    description: 'Cam kết cập nhật và nâng cấp phần mềm thường xuyên, đáp ứng nhu cầu thay đổi của thị trường và mang lại lợi ích dài lâu cho nhà thuốc.',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
      <Image src={[item.image]} />

      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed"  mb={15}>{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container maw="80%"  size={700} className={classes.wrapper}>

<Title style={{ paddingTop: '15px' }} className={clsx(classes.title, 'custom-underline')} order={1}>
  TÍNH NĂNG
</Title>
<Box  style={{
      width: '70px',
      height: '4px',
      margin: '8px auto 0',
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      borderRadius: '4px',
    }}></Box>

     

      <SimpleGrid cols={{ base: 1, xs: 2}} spacing={20} mt={60}>
        {items}
      </SimpleGrid>
    </Container>
  );
}