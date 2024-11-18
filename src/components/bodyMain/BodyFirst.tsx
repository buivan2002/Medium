import { BackgroundImage, Center, Text, Box, Space, Button, Title } from '@mantine/core';

export default function BodyFirst() {
  return (
    <Box maw="100%"  h="720px"  mt="-56px">
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
        <Center  p='lg' mt ="120px">
        <Title order={1}  maw="45%" fw={700} size="60px" c="white" style={{ overflowWrap: 'break-word', textAlign: 'center'}}> PHẦN MỀM QUẢN LÝ NHÀ THUỐC CHUẨN GPP</Title>
        </Center>
        <Center  p='lg' >

        <Title order={3} c="white" fw={500} size="22px" maw="50%" style={{ overflowWrap: 'break-word', textAlign: 'center'}}>

          Tối ưu hóa quản lý nhà thuốc với phần mềm chuẩn GPP – Đảm bảo chất lượng, nâng cao hiệu suất!
          </Title>
        </Center>
        <Center p='lg'>

          <Button size="lg" radius="xl" >Learn More</Button>
        </Center>
      </BackgroundImage>
    </Box>
  );
}