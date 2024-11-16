import { BackgroundImage, Center, Text, Box, Space, Button, Title } from '@mantine/core';

export default function BodyFirst() {
  return (
    <Box maw="100%"  h="720px" >
      <BackgroundImage
        src="https://www.slideteam.net/media/catalog/product/cache/1280x720/p/h/pharmacy_management_powerpoint_ppt_template_bundles_slide01.jpg"
        radius="sm" 
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',  // Đảm bảo hình ảnh chiếm toàn bộ diện tích Box
          backgroundPosition: 'center',  // Căn giữa ảnh
          position: 'absolute',  // Đặt ảnh nền ở vị trí tuyệt đối trong Box
         
        }}
      >
        <Center p='lg'>
        <Title order={1}>Phần mềm quản lý nhà thuốc chuẩn GPP</Title>
        </Center>
        <Title order={3}>

          Tối ưu hóa quản lý nhà thuốc với phần mềm chuẩn GPP – Đảm bảo chất lượng, nâng cao hiệu suất!
          </Title>
          <Button size="compact-md">Learn More</Button>
      </BackgroundImage>
    </Box>
  );
}