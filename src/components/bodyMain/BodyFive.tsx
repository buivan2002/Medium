import {  Box } from '@mantine/core';
import { FeaturesGrid } from '../ui/Features/Features_with_monotone_icons';

export const MOCKDATA5 = [
  {
    icon: 'https://img.pikbest.com/png-images/qiantu/cartoon-female-doctor-character-free_2496400.png!f305cw',
    title: 'Phần mềm giúp chúng tôi quản lý hiệu quả hơn với giao diện dễ sử dụng và hỗ trợ tận tình. Rất hài lòng!',
    description:
    'Nguyễn Thị Lan, Chủ nhà thuốc Lan Hương:'  },
  {
    icon: 'https://png.pngtree.com/png-clipart/20210829/original/pngtree-doctor-cartoon-cute-vector-art-chibi-1-png-image_6661861.jpg' ,
    title: 'Chúng tôi rất ấn tượng với hiệu quả và tính năng của phần mềm.Báo cáo chi tiết và dịch vụ hỗ trợ đều tuyệt vời.',
    description:
      'Lê Minh Tâm, Dược sĩ tại Nhà thuốc Tâm Đức',
  },
  {
    icon: 'https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-3d-happy-cartoon-doctor-cartoon-doctor-generative-ai-png-image_10151651.png',
    title: 'Phần mềm dễ sử dụng và tính năng tra cứu thuốc rất hữu ích.Dịch vụ hỗ trợ nhanh chóng và tận tình.',
    description:
      'Trần Văn Hùng, Quản lý chuỗi nhà thuốc Hưng Thịnh',
  },
  {
    icon: 'https://nhakhoadelia.vn/wp-content/uploads/2024/04/18-1713601042.jpg',
    title: 'Phần mềm hoạt động ổn định và dễ tùy chỉnh theo nhu cầu.Dịch vụ hỗ trợ khách hàng rất chuyên nghiệp',
    description:
      'Phạm Thị Mai, Chủ nhà thuốc Mai Hương',
  },
  {
    icon: 'https://nhakhoadelia.vn/wp-content/uploads/2024/04/17-1713601042.jpg',
    title: 'Chúng tôi đánh giá cao tính năng kết nối CSDL dược quốc gia.Phần mềm giúp việc quản lý bán thuốc trở nên dễ dàng và hiệu quả hơn.',
    description:
      'Hoàng Văn Sơn, Quản lý nhà thuốc Sơn Phương',
  },
  {
    icon: 'https://img.pikbest.com/png-images/qiantu/cartoon-medical-pediatric-cute-kind-gentle-female-doctor-image_2726679.png!w700wp',
    title: 'Phần mềm rất trực quan và dễ sử dụng.Thư viện thuốc phong phú và hỗ trợ lâu dài là những điểm mạnh nổi bật',
    description:
      'Nguyễn Thị Thu, Dược sĩ tại Nhà thuốc Thu Hương',
  },
];
export default function BodyFive() {
  return (
    <Box maw="100%"  h="auto"  mt="-26px" bg="#f6f6f6">
     <FeaturesGrid source="bodyfive"></FeaturesGrid>
    </Box>
  );
}