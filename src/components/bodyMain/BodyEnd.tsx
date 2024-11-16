import { Box, Button, Container, Grid, Table, Text, Title } from '@mantine/core';
import { Input } from '@mantine/core';

export default function BodyEnd() {
  return (
    <Box maw="80%"  h="auto"  mx="auto" p="lg" mt="56px">
    
    <Grid>
      <Grid.Col span={8}>        
        <Title order={1}><Text td="underline">LIÊN HỆ
        </Text></Title>
        <Text>Để biết thêm chi tiết hoặc nhận hỗ trợ, vui lòng liên hệ với chúng tôi và đội ngũ của chúng tôi sẽ đáp ứng nhanh chóng.</Text>
        <Table >
            <tbody>
                <tr>
                <td>
                    <Input placeholder="HỌ VÀ TÊN" />
                </td>
                <td>
                    <Input placeholder="EMAIL" />
                </td>
                </tr>
            </tbody>
            </Table>
            <Button fullWidth>Full width button</Button>
        </Grid.Col>
      <Grid.Col span={4}>
        <Title order={1}><Text td="underline">Thông Tin Liên Hệ Trực Tiếp
        </Text></Title>
        <Text> Địa Chỉ</Text>
        <Text>Nhà Số 7/55, Tổ Dân Phố Bình Minh, Đường Nguyễn Đức Thuận, Thị Trấn Trâu Quỳ, Huyện Gia Lâm, Thành phố Hà Nội</Text>
        <Text> Số Điện Thoại</Text>
        <Text>0559 582056</Text>
        <Text>Email</Text>
        <Text>duocphamera@gmail.com</Text>
      </Grid.Col>
    </Grid>
    </Box>
  );
}