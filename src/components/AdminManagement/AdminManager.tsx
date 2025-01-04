import React, { useEffect, useState } from 'react';
import { Table, TextInput, Button, Group, Pagination, Box, ScrollArea, Text } from '@mantine/core';
import { getAdminData } from '@/app/api/v1/PageAdmin';
import '../AdminManagement/AdminMan.css'
import { StatItem } from '@/app/schema/stat';
const AdminManager = () => {
  const [elements, setElements] = useState<StatItem[] | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);  // Trang hiện tại
  const rowsPerPage = 5;
  
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        const data = await getAdminData({ type: 'main' }, true);
        if (data?.Admin) {
          // Ép kiểu dữ liệu nếu bạn chắc chắn đây là StatItem[]
          setElements(data.Admin as StatItem[]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  

  // Tính toán số trang
  const totalPages = elements ? Math.ceil(elements.length / rowsPerPage) : 0;
  
  // Lấy dữ liệu hiển thị theo từng trang
  const currentData = elements ? elements.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : [];
  
  // Render các dòng cho bảng
  const rows = currentData.map((element) => (
    <Table.Tr key={element.username}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.username}</Table.Td>
      <Table.Td>{element.fullName}</Table.Td>
      <Table.Td>{element.phoneNumber}</Table.Td>
      <Table.Td>{element.address}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.gender}</Table.Td>
      <Table.Td>{element.birthDate}</Table.Td>
    </Table.Tr>
  ));
  
  return (
    <Box>
      {/* Tiêu đề */}
      <Text p="lg" fw={700} fz="xl" c="#000">
  Danh Sách Admin
</Text>
      {/* Tìm kiếm */}
      <Group mb="lg" p="lg" align="center" bg="#fff">
  {["Tài Khoản", "Họ và Tên", "Địa chỉ", "Email"].map((placeholder) => (
    <TextInput
      key={placeholder}
      placeholder={placeholder}
      styles={{
        input: {
          backgroundColor: '#fff',
          color: '#000',
        },
      }}
    />
  ))}
  <Button>Tìm kiếm</Button>
</Group>


      {/* Bảng */}
      <ScrollArea>
        <Table c="black">
          <Table.Thead>
            <Table.Tr >
              <Table.Th>ID</Table.Th>
              <Table.Th>Tài Khoản</Table.Th>
              <Table.Th>Họ và Tên</Table.Th>
              <Table.Th>Số Điện Thoại</Table.Th>
              <Table.Th>Địa chỉ</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Giới tính</Table.Th>
              <Table.Th>Ngày sinh</Table.Th>
              <Table.Th>Tùy chọn</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>

      {/* Phân trang */}
      <Group mt="lg">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={(page) => setCurrentPage(page)} 
        />
      </Group>
    </Box>
  );
};

export default AdminManager;
