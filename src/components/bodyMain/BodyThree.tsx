import { BackgroundImage, Center, Text, Box, Space, Button, Title, Image,Collapse, Grid, Table, ThemeIcon } from '@mantine/core';
import { FeaturesImages } from '../ui/Features/Features_with_image_icons';
import { IconCheck } from '@tabler/icons-react';
export default function BodyThree() {
  return (
    <Box maw="95%" h="auto"  mx="auto"  p="100px">
        <Grid>

            <Grid.Col span={5}> <Image src="https://era8.vn/img/about.jpg"></Image>
            </Grid.Col>
            <Grid.Col span={6} ml="xl" p="-8px">
                <Title order={1} className="custom-underline">VỀ CHÚNG TÔI</Title>
                <Space h="xl" />
                <Text> Chào mừng bạn đến với Erado - giải pháp toàn diện dành cho quản lý bán thuốc tại nhà thuốc và quầy thuốc. Chúng tôi chuyên cung cấp phần mềm quản lý bán thuốc tiên tiến, giúp tối ưu hóa quy trình bán hàng, quản lý tồn kho, và chăm sóc khách hàng một cách hiệu quả, nhằm nâng cao chất lượng dịch vụ và tăng cường sự phát triển bền vững cho nhà thuốc của bạn.</Text>
                <Space h="md" />
                
                <Title order={3}>Tại sao nên chọn chúng tôi?</Title>
                <Space h="sm" />

                <Table >
     
                <tbody>
                    <tr><td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text>Dễ dàng sử dụng</Text>
                  </div> </td>
                    <td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text> Dịch vụ hỗ trợ tận tình</Text>
                  </div> </td>
                    </tr>
                    <tr>
                    <td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text>Hiệu quả tối đa</Text>
                  </div> </td>
                  <td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text>Tiết kiệm chi phí</Text>
                  </div> </td>
                    </tr>
                    <tr>
                    <td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text>Dịch vụ tốt nhất</Text>
                  </div> </td>
                  <td>   <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconCheck size={16} color="blue" />
                    <Text>Hỗ trợ lâu dài</Text>
                  </div> </td>
                    </tr>
                </tbody>
              </Table>
              </Grid.Col>
        </Grid>
    </Box>
  );
}