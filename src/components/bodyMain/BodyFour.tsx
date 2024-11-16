import { BackgroundImage, Center, Text, Box, Space, Button, Title } from '@mantine/core';
import { FeaturesGrid } from '../ui/Features/Features_with_monotone_icons';
import { IconGauge, IconCookie, IconUser , IconMessage2, IconLock } from '@tabler/icons-react';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Kết nối hệ thống Dược Quốc Gia',
    description:
      'Tích hợp trực tiếp với cơ sở dữ liệu dược quốc gia, đảm bảo thông tin về thuốc luôn được cập nhật chính xác và đầy đủ.',
  },
  {
    icon: IconUser ,
    title: 'Quản lý bán hàng hệ thống nhà thuốc',
    description:
      'Hỗ trợ quản lý toàn bộ quy trình bán hàng từ đơn hàng, hóa đơn, đến thanh toán và báo cáo, giúp kiểm soát doanh thu và tồn kho hiệu quả.',
  },
  {
    icon: IconCookie,
    title: 'Quản lý nhân viên bán hàng',
    description:
      'Cung cấp các công cụ để quản lý và theo dõi hiệu quả làm việc của nhân viên, giúp cải thiện năng suất và chất lượng dịch vụ.',
  },
  {
    icon: IconLock,
    title: 'Thư viện thuốc đầy đủ, dễ dàng tra cứu',
    description:
      'Cung cấp một thư viện thuốc toàn diện với thông tin chi tiết và tính năng tra cứu dễ dàng, giúp nhân viên nhanh chóng tìm kiếm thông tin cần thiết.',
  },
  {
    icon: IconMessage2,
    title: 'Tiết kiệm chi phí',
    description:
      'Giảm thiểu chi phí vận hành và quản lý bằng cách tự động hóa các quy trình và giảm thiểu sai sót, giúp tối ưu hóa ngân sách.',
  },
  {
    icon: IconMessage2,
    title: 'Dễ dàng sử dụng trên mọi thiết bị:',
    description:
      'Phần mềm được thiết kế để hoạt động trơn tru trên nhiều loại thiết bị, từ máy tính để bàn đến điện thoại di động, đảm bảo sự linh hoạt và tiện lợi.',
  },
];
export default function BodyFour() {
  return (
    <Box maw="100%"  h="auto" mt="lg">
     <FeaturesGrid source="bodyfour"></FeaturesGrid>
    </Box>
  );
}