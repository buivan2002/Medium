import { BackgroundImage, Center, Box, Button, Title } from '@mantine/core';

export default function BodyFirst() {
  return (
    <Box maw="100%" h="720px" mt="-56px" style={{ position: 'relative' }}>
      <BackgroundImage
        src="https://www.slideteam.net/media/catalog/product/cache/1280x720/p/h/pharmacy_management_powerpoint_ppt_template_bundles_slide01.jpg"
        radius="sm"
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          
        }}
      >
        <Center p='lg' mt="120px">
          <Title 
            order={1}  
            maw="90%" // Tăng độ rộng tối đa cho thiết bị di động
            fw={700} 
            size="60px" 
            c="white" 
            style={{ 
              overflowWrap: 'break-word', 
              textAlign: 'center', 
              fontSize: '3rem', // Kích thước cho thiết bị di động
              '@media (max-width: 600px)': {
                fontSize: '2rem', // Kích thước cho thiết bị di động
              }
            }}
          >
            PHẦN MỀM QUẢN LÝ NHÀ THUỐC CHUẨN GPP
          </Title>
        </Center>
        <Center p='lg'>
          <Title 
            order={3} 
            c="white" 
            fw={500} 
            maw="90%" // Tăng độ rộng tối đa cho thiết bị di động
            style={{ 
              overflowWrap: 'break-word', 
              textAlign: 'center', 
              fontSize: '1.5rem', // Kích thước cho thiết bị di động
              '@media (max-width: 600px)': {
                fontSize: '1rem', // Kích thước cho thiết bị di động
              }
            }}
          >
            Tối ưu hóa quản lý nhà thuốc với phần mềm chuẩn GPP – Đảm bảo chất lượng, nâng cao hiệu suất!
          </Title>
        </Center>
        <Center p='lg'>
          <Button size="lg" radius="xl" style={{ 
            width: '100%', // Nút chiếm toàn bộ chiều rộng
            maxWidth: '300px', // Đặt chiều rộng tối đa cho nút
          }}>
            Learn More
          </Button>
        </Center>
      </BackgroundImage>
    </Box>
  );
}