import { BackgroundImage, Center, Text, Box, Space, Button, Title, Image,Collapse, Grid, Table } from '@mantine/core';
import { FeaturesImages } from '../ui/Features/Features_with_image_icons';

export default function BodyThree() {
  return (
    <Box maw="80%"  h="auto"  mx="auto" p="lg" mt="56px">
        <Grid>

            <Grid.Col span={6}> <Image src="https://era8.vn/img/about.jpg"></Image>
            </Grid.Col>
            <Grid.Col span={5}>
                <Title order={1}>VỀ CHÚNG TÔI</Title>
                <Text> Chào mừng bạn đến với Erado - giải pháp toàn diện dành cho quản lý bán thuốc tại nhà thuốc và quầy thuốc. Chúng tôi chuyên cung cấp phần mềm quản lý bán thuốc tiên tiến, giúp tối ưu hóa quy trình bán hàng, quản lý tồn kho, và chăm sóc khách hàng một cách hiệu quả, nhằm nâng cao chất lượng dịch vụ và tăng cường sự phát triển bền vững cho nhà thuốc của bạn.</Text>
                <Title order={3}>Tại sao nên chọn chúng tôi?</Title>
                <Table >
     
                <tbody>
                    <tr>
                    <td>Dễ dàng sử dụng</td>
                    <td>Dịch vụ hỗ trợ tận tình </td>
                    </tr>
                    <tr>
                    <td>Hiệu quả tối đa
                    </td>
                    <td>Tiết kiệm chi phí</td>
                    </tr>
                    <tr>
                    <td>Dịch vụ tốt nhất    </td>
                    <td> Hỗ trợ lâu dài
                    </td>
                    </tr>
                </tbody>
              </Table>
              </Grid.Col>
        </Grid>
    </Box>
  );
}